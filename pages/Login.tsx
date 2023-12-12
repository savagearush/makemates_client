"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

function Login() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <form className="flex shadow-[10px_10px_100px_rgba(49,96,162,0.8)] gap-6 text-white flex-col items-center justify-center w-[350px] md:w-[500px] h-[500px] rounded-md bg-[#001C43]">
        <Image src="/logo.png" width="160" height="50" alt="logo" />
        <div className="flex flex-col gap-1 w-[300px] md:w-[350px]">
          <label htmlFor="email" className="ml-2">
            Email Id :
          </label>
          <input
            type="text"
            name="email"
            className="w-full rounded-2xl px-3   py-2 bg-[#DDECFF] text-black outline-none focus-within:ring-2"
            placeholder="Enter your email address"
          />
        </div>
        <div className="flex flex-col gap-1 w-[300px] md:w-[350px]">
          <label htmlFor="email" className="ml-2">
            Password :
          </label>
          <input
            type="password"
            name="password"
            className="w-full rounded-2xl px-2 py-2 bg-[#DDECFF] text-black outline-none focus-within:ring-2"
            placeholder="Enter your password"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="rounded-lg bg-[#A5D7E8] text-blue-950 px-12 py-1 text-md font-bold"
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
          <Link href="" className="text-blue-300 font-medium">
            Create here
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
