"use client";

import { FormEvent, useState } from "react";

type Props = {};

const ChatInput = (props: Props) => {
  const [input, setInput] = useState("");

  const addMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input) return;
    const messageToSend = input;
    setInput("");
  };

  return (
    <form
      onSubmit={addMessage}
      className="fixed bottom-0 w-full z-50 flex px-10 py-5 space-x-2 border-t border-gray-100"
    >
      <input
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
