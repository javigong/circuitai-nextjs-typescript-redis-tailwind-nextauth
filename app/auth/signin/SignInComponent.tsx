"use client";

import { getProviders, signIn } from "next-auth/react";
import { IProviderData } from "../../../types/typings";

type Props = {
  providers: IProviderData[];
};

const SignInComponent = ({ providers }: Props) => {

  return (
    <div className="flex flex-grow justify-center">
      {providers! &&
        providers?.map((provider) => (
          <div key={provider?.name}>
            <button
              className="bg-[#74E6DA] hover:bg-[#60beb5] text-white font-bold py-2 px-4 rounded"
              onClick={() =>
                signIn(provider?.id, {
                  callbackUrl:
                    process.env.VERCEL_URL || "http://localhost:3000",
                })
              }
            >
              Sign in with {provider?.name}
            </button>
          </div>
        ))}
    </div>
  );
};

export default SignInComponent;
