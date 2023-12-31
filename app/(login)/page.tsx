"use client";

import React, { use, useState } from "react";
import Image from "next/image";
import Signup from "./_component/signup";
import { Poppins } from "next/font/google";
import InputWithLabel from "./_component/InputWithLabel";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";

interface LoginInputType {
  email: string;
  password: string;
}

function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const doSubmit = async (inputs: LoginInputType) => {
    const response = await axios.post(
      "http://localhost:5000/user/login",
      inputs
    );

    if (response.status === 200) {
      document.cookie = `accessToken=${response.headers["x-auth-token"]}`;
      router.push("/profile");
      return response;
    }

    return response;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Working");

    // showing alert to user
    // toast.promise(
    //   doSubmit(inputs),
    //   {
    //     loading: "Loading",
    //     success: (response) => `${response.data}`,
    //     error: ({ response }) => `${response.data}`,
    //   },
    //   {
    //     success: {
    //       duration: 5000,
    //     },
    //     style: {
    //       minWidth: "250px",
    //       font: "bold 12px verdana",
    //     },
    //   }
    // );
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <Image
        src="/logo-light.png"
        width="240"
        height="30"
        className="absolute top-5 left-5"
        alt="logo"
      />
      <div className="flex flex-col items-center justify-center bg-white/80 gap-4 px-20 py-12 shadow-lg rounded-lg">
        <h3 className="text-xl">Join us now</h3>
        <form
          onSubmit={handleSubmit}
          name="loginForm"
          className="flex flex-col gap-4 w-[300px]"
        >
          <InputWithLabel
            name="email"
            label="Email"
            placeholder="Enter your email address"
            type="text"
            onChange={onInputChange}
          />
          <InputWithLabel
            name="password"
            label="Password"
            placeholder="Enter your password"
            type="password"
            onChange={onInputChange}
          />
          <Button type="submit" className="bg-green-500">
            Login
          </Button>
        </form>
        <p>
          Don't have account ? <Signup />
        </p>
      </div>
    </>
  );
}

export default Login;
