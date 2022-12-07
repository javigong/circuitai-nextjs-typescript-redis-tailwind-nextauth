"use client";

type Props = {};

const LogoutButton = (props: Props) => {
  return (
    <button
      onClick={() => console.log("logout")}
      className="bg-[#74E6DA] hover:bg-[#60beb5] text-white font-bold py-2 px-4 rounded"
    >
      Sign Out
    </button>
  );
};

export default LogoutButton;
