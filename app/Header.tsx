import { unstable_getServerSession } from "next-auth/next";
import Image from "next/image";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

type Props = {};

const Header = async (props: Props) => {
  const session = await unstable_getServerSession();

  if (session)
    return (
      <>
        <header className="sticky top-0 z-50 bg-white flex justify-between items-center px-10 py-5 shadow-sm">
          <div className="flex space-x-2">
            <Image
              className="rounded-full mx-2 object-cover"
              src={session?.user?.image!}
              alt="Profile Picture"
              height={54}
              width={50}
            />
            <div>
              <p className="text-[#74E6DA]">Logged in as:</p>
              <p className="font-bold text-lg">{session?.user?.name!}</p>
            </div>
          </div>

          <LogoutButton />
        </header>
      </>
    );

  return (
    <>
      <header className="sticky top-0 z-50 bg-white flex justify-between items-center px-10 py-2 shadow-sm">
        <div className="flex flex-col items-center space-y-5">
          <div className="flex space-x-2 items-center">
            <Image
              src="/circuitai-logo.svg"
              alt="Logo"
              height={52}
              width={50}
            />
            <p className="text-[#74E6DA]">Welcome to CircuitAI</p>
          </div>
        </div>
        <Link
          className="bg-[#74E6DA] transition-all hover:bg-[#60beb5] text-white font-bold text-sm py-2 px-4 rounded"
          href="/auth/signin"
        >
          Sign In
        </Link>
      </header>
    </>
  );
};

export default Header;
