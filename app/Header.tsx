import Image from "next/image";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

type Props = {};

const Header = (props: Props) => {
  const session = true;
  if (session) {
    return (
      <header className="sticky top-0 z-50 bg-white flex justify-between items-center p-10 shadow-sm">
        <div className="flex space-x-2">
          <Image
            className="rounded-full mx-2 object-contain"
            src="/circuitai-logo.svg"
            alt="Profile Picture"
            height={50}
            width={50}
          />
          <div>
            <p className="text-[#74E6DA]">Logged in as:</p>
            <p className="font-bold text-lg">Javier Gongora</p>
          </div>
        </div>
        <LogoutButton />
      </header>
    );
  }
  return (
    <header className="sticky top-0 z-50 bg-white flex justify-center items-center p-10 shadow-sm">
      <div className="flex flex-col items-center space-y-5">
        <div className="flex space-x-2 items-center">
          <Image src="/circuitai-logo.svg" alt="Logo" height={50} width={50} />
          <p className="text-[#74E6DA]">Welcome to CircuitAI</p>
        </div>
        <Link
          className="bg-[#74E6DA] hover:bg-[#60beb5] text-white font-bold py-2 px-4 rounded"
          href="/auth/signin"
        >
          Sign In
        </Link>
      </div>
    </header>
  );
};

export default Header;
