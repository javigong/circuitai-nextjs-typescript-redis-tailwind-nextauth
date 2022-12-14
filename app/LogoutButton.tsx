"use client";

import { signOut } from "next-auth/react";

type Props = {};

const LogoutButton = (props: Props) => {
  return (
    <button
      onClick={() => signOut()}
      className="bg-[#74E6DA] transition-all hover:bg-[#60beb5] text-white font-bold text-sm py-2 px-4 rounded"
    >
      Sign Out
    </button>
  );
};

export default LogoutButton;
