"use client";

import { getUserById } from "@/axios.config";
import { AuthContext } from "@/context/AuthContext";
import { AuthContextType } from "@/typings";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

function page() {
  const [user, setUser] = useState({});
  const { currentUser }: any = useContext<AuthContextType | null>(AuthContext);
  console.log(currentUser);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await getUserById(currentUser)
      return data;
    };
    setUser(getUser());
    console.log(user)
  }, []);

  return <div>page</div>;
}

export default page;
