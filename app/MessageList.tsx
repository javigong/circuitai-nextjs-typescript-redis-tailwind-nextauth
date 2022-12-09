"use client";
import { useEffect } from "react";
import useSWR from "swr";
import { clientPusher } from "../pusher";
import { IMessage } from "../types/typings";
import fetchMessages from "../utils/fetchMessages";
import MessageComponent from "./MessageComponent";

type Props = {};

const MessageList = (props: Props) => {
  const {
    data: messages,
    error,
    mutate,
  } = useSWR<IMessage[]>("/api/getMessages", fetchMessages);

  useEffect(() => {
    // Subscribe to the messages channel
    const channel = clientPusher.subscribe("messages");
    // When a new message is received, add it to the list
    channel.bind("new-message", async (data: IMessage) => {
      // If the message is already in the list, don't add it again
      if (messages?.find((message) => message.id === data.id)) return;
      // If the message list is empty, fetch it
      if (!messages) {
        mutate(fetchMessages);
      } else {
        // Add the new message to the list
        // If the mutation fails, the message will be removed from the list
        mutate(fetchMessages, {
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
    <div className="space-y-5 px-5 pt-8 pb-32 max-w-2xl xl:max-w-4xl mx-auto">
      {messages?.map((message) => (
        <MessageComponent key={message.id} message={message} />
      ))}
    </div>
  );
};

export default MessageList;
