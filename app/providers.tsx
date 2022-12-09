"use client";

import { SessionProvider } from "next-auth/react";

const Providers = ({ children }: any) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Providers;
