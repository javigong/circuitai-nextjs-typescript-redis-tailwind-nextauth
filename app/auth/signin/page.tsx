import { getProviders } from "next-auth/react";
import Image from "next/image";
import SignInComponent from "./SignInComponent";

type Props = {};

const SignInPage = async (props: Props) => {
  const providers = await getProviders();

  return (
    <div>
      <div>
        <Image
          className="rounded-full object-contain mx-auto"
          src="/circuitai-logo.svg"
          alt="Profile Picture"
          height={208}
          width={200}
        />
      </div>

      <SignInComponent providers={providers} />
    </div>
  );
};

export default SignInPage;
