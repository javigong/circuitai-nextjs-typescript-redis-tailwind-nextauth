"use client";

import { motion } from "framer-motion";
import { Session } from "next-auth";
import { useEffect } from "react";
import useSWR from "swr";
import { clientPusher } from "../pusher";
import { IMessage } from "../types/typings";
import fetchMessages from "../utils/fetchMessages";
import MessageComponent from "./MessageComponent";

type Props = {
  session: Session | null;
};

const MessageList = ({ session }: Props) => {
  const userSession = session?.user?.email?.replace("@", "").replace(".", "");
  const {
    data: messages,
    error,
    mutate,
  } = useSWR(`/api/getMessages/${userSession!}`, fetchMessages);

  useEffect(() => {
    // Subscribe to the messages channel
    const channel = clientPusher.subscribe(userSession!);
    // When a new message is received, add it to the list
    channel.bind("new-message", async (data: IMessage) => {
      // If the message is already in the list, don't add it again
      if (messages?.find((message) => message.id === data.id)) return;
      // If the message list is empty, fetch it
      if (!messages) {
        mutate(fetchMessages(userSession!));
      } else {
        // Add the new message to the list
        // If the mutation fails, the message will be removed from the list
        mutate(fetchMessages(userSession!), {
          optimisticData: [data, ...messages!],
          rollbackOnError: true,
        });
      }
    });

    return () => {
      // Unsubscribe from the channel
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages, mutate, clientPusher]);

  return (
    <motion.div
      initial={{ opacity: 0,
      y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-5 px-5 pt-8 pb-32 max-w-2xl xl:max-w-4xl mx-auto"
    >
      {messages?.map((message) => (
        <MessageComponent
          key={message.id}
          message={message}
          session={session}
        />
      ))}
    </motion.div>
  );
};

export default MessageList;
