"use client";

import type { Session } from "next-auth";
import { FormEvent, useState } from "react";
import useSWR from "swr";
import { v4 as uuid } from "uuid";
import { IMessage } from "../types/typings";
import fetchMessages from "../utils/fetchMessages";

type Props = {
  session: Session | null;
};

const ChatInput = ({ session }: Props) => {
  const [input, setInput] = useState("");
  const {
    data: messages,
    error,
    mutate,
  } = useSWR("/api/getMessages", fetchMessages);

  console.log({ messages });

  const addMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input) return;

    const messageToSend = input;
    setInput("");

    const id = uuid();
    const message: IMessage = {
      id,
      message: messageToSend,
      created_at: Date.now(),
      username: session?.user?.name!,
      profilePic: session?.user?.image!,
      email: session?.user?.email!,
    };

    const uploadMessageToRedis = async () => {
      const data = await fetch("/api/addMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      }).then((res) => res.json());

      return [data.message, ...messages!];
    };

    await mutate(uploadMessageToRedis, {
      optimisticData: [message, ...messages!],
      rollbackOnError: true,
    });
  };

  return (
    <form
      onSubmit={addMessage}
      className="fixed bottom-0 w-full z-50 flex px-10 py-5 space-x-2 bg-white border-t border-gray-100"
    >
      <input
        disabled={!session}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter message here..."
        className="flex-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#74E6DA] focus:border-transparent py-2 px-4 disabled:opacity-50 disabled:cursor-not-allowed"
      />
      <button
        type="submit"
        disabled={!input}
        className="bg-[#74E6DA] hover:bg-[#60beb5] text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Send
      </button>
    </form>
  );
};

export default ChatInput;
