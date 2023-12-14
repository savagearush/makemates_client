"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Signup from "./Signup";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { Subscript } from "lucide-react";

const poppins = Poppins({ weight: ["400", "500"], subsets: ["latin"] });

function Login() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      <div
        className={cn(
          poppins.className,
          "cursor-pointer hover:scale-105 duration-500 absolute top-6 left-6 font-bold text-4xl text-purple-500 drop-shadow-lg shadow-purple-900"
        )}
      >
        Makemates
      </div>

      <form className="flex shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-white/40 gap-6 flex-col items-center justify-center px-8 py-6 rounded-sm ">
        <div className="text-2xl font-light ">Join us now</div>
        <div className="flex flex-col gap-1 w-[300px] md:w-[350px]">
          <label htmlFor="email" className="ml-2 text-sm">
            Email Id :
          </label>
          <input
            type="text"
            name="email"
            className="w-full rounded-lg placeholder:text-black/70 px-3 py-2 ring-1 bg-transparent text-black focus-within:ring-2"
            placeholder="Enter your email address"
          />
        </div>
        <div className="flex flex-col gap-1 w-[300px] md:w-[350px]">
          <label htmlFor="email" className="ml-2 text-sm">
            Password :
          </label>
          <input
            type="password"
            name="password"
            className="w-full rounded-lg placeholder:text-black/70 px-2 py-2  ring-1 bg-transparent text-black focus-within:ring-2"
            placeholder="Enter your password"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="rounded-lg bg-purple-100 ring-1 hover:ring-6 ring-purple-200 text-black px-12 py-1 text-md font-bold"
        >
          Login
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex gap-2 rounded-lg px-4 py-2 bg-white/90 text-black font-medium"
        >
          <Image src="/google.png" width="25" height="25" alt="google" />
          Sign in with Google
        </motion.button>
        <p className="font-light text-sm">
          {`Don't`} have any account?{" "}
          <Link
            href=""
            onClick={() => document.getElementById("signupModal").showModal()}
            className="text-blue-800 font-medium"
          >
            Create here
          </Link>
        </p>
      </form>
      <Signup />
    </div>
  );
}

export default Login;
