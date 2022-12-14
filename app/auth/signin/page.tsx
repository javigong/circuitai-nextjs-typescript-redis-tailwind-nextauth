"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import SignInComponent from "./SignInComponent";

type Props = {};

const SignInPage = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-[80vh] flex flex-col space-y-8 bg-white"
    >
      <div className="flex flex-grow">
        <Image
          className="rounded-lg mx-auto mt-auto object-cover"
          src="/circuitai-square.svg"
          alt="Profile Picture"
          height={300}
          width={300}
        />
      </div>
      <SignInComponent />
    </motion.div>
  );
};

export default SignInPage;
