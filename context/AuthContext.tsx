"use client";
import { CreateNewUser, SignInUser } from "@/axios.config";
import { AuthContextType, LoginInputType, SignUpInputType } from "@/typings";
import { useRouter } from "next/navigation"; // Correct module name
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext<AuthContextType | null>(null);

export default function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(window.localStorage.getItem("user") || "{}")
  );

  const router = useRouter();

  const userSignUp = async (inputs: SignUpInputType) => {
    try {
      const response = await CreateNewUser(inputs);
      if (response.status === 200) {
        setCurrentUser(response.data); // Set current user state
        router.push("/feed");
      }
    } catch (error) {
      // Handle error
    }
  };

  const userLogin = async (inputs: LoginInputType) => {
    // Correct type
    try {
      const response = await SignInUser(inputs);
      setCurrentUser(response._id); // Set current user state
      router.push("/feed");
    }
    catch (error) {
      // Handle error
      console.error(error);
    }
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
    console.log("Current user : ", currentUser);
  }, [currentUser]);

  return (
    <AuthContext.Provider
      value={{ currentUser, setCurrentUser, userLogin, userSignUp }}
    >
      {children}
    </AuthContext.Provider>
  );
}
