import Image from "next/image";
import { IProviderData } from "../../../types/typings";
import fetchProviders from "../../../utils/fetchProviders";
import SignInComponent from "./SignInComponent";

type Props = {};

const SignInPage = async (props: Props) => {
  // const resProviders = await getProviders();
  const resProviders = await fetchProviders();

  const providers: IProviderData[] = Object.values(resProviders!);

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
      <SignInComponent providers={providers!} />
    </div>
  );
};

export default SignInPage;
