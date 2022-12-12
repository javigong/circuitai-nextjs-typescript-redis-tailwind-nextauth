import { getProviders } from "next-auth/react";
import Image from "next/image";
import { IProviderData } from "../../../types/typings";
import SignInComponent from "./SignInComponent";

type Props = {};

const SignInPage = (props: Props) => {
  // const resProviders = await getProviders();
  // console.log(resProviders);
  // const providers: IProviderData[] = Object.values(resProviders!);

  return (
    <div className="h-[80vh] flex flex-col space-y-8 bg-white">
      <div className="flex flex-grow">
        <Image
          className="rounded-lg mx-auto mt-auto object-cover"
          src="/circuitai-square.svg"
          alt="Profile Picture"
          height={300}
          width={300}
        />
      </div>
      {/* <SignInComponent providers={providers!} /> */}
      {/* @ts-expect-error: Server Component */}
      <SignInComponent />
    </div>
  );
};

export default SignInPage;
