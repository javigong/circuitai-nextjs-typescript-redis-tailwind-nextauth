"use client";
import { getProviders, signIn } from "next-auth/react";

type Props = {
  providers: Awaited<ReturnType<typeof getProviders>> | null;
};

const SignInComponent = ({ providers }: Props) => {
  const providerArray = Object.values(providers!);

  return (
    <div className="flex flex-grow justify-center">
      {providerArray?.map((provider) => (
        <div key={provider.name}>
          <button
            className="bg-[#74E6DA] hover:bg-[#60beb5] text-white font-bold py-2 px-4 rounded"
            onClick={() =>
              signIn(provider.id, {
                callbackUrl: process.env.VERCEL_URL || "http://localhost:3000",
              })
            }
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default SignInComponent;
