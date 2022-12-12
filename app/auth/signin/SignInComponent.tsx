"use client";

import { BuiltInProviderType } from "next-auth/providers";
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
  signIn,
} from "next-auth/react";
import { useEffect, useState } from "react";

type Props = {};

const SignInComponent = (props: Props) => {
  const [providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <div className="flex flex-grow justify-center">
      {providers &&
        Object.values(providers!).map((provider) => (
          <div key={provider?.name!}>
            <button
              className="bg-[#74E6DA] hover:bg-[#60beb5] text-white font-bold py-2 px-4 rounded"
              onClick={() =>
                signIn(provider?.id!, {
                  callbackUrl:
                    process.env.NEXTAUTH_URL,
                })
              }
            >
              Sign in with {provider?.name!}
            </button>
          </div>
        ))}
    </div>
  );
};

export default SignInComponent;
