"use client";

import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getUserById } from "@/axios.config";
import { AuthContext } from "@/context/AuthContext";
import { AuthContextType } from "@/typings";
import FeedUploadBox from "../feed/_components/FeedUploadBox";
import { FaUserFriends } from "react-icons/fa";
import { BsMessenger } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import { TbHttpPost } from "react-icons/tb";
import { FaBookmark } from "react-icons/fa6";
import Post from "../../../components/Post";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function page() {
  const [user, setUser] = useState({});
  const { currentUser }: any = useContext<AuthContextType | null>(AuthContext);

  // useEffect(() => {
  //   getUserById(currentUser).then((userData) => {
  //     setUser(userData);
  //   });
  // }, []);

  const leftSidebarNavigations = [
    {
      name: "Mate",
      href: "/mates",
      icon: <FaUserFriends className="text-[#003789]" />,
    },
    {
      name: "Messengers",
      href: "/messenger",
      icon: <BsMessenger className="text-[#003789]" />,
    },
    {
      name: "Liked",
      href: "/liked",
      icon: <AiFillLike className="text-[#003789]" />,
    },
    {
      name: "Posts",
      href: "/posts",
      icon: <TbHttpPost className="text-[#003789]" />,
    },
    {
      name: "Saved",
      href: "/saved",
      icon: <FaBookmark className="text-[#003789]" />,
    },
  ];

  return (
    <QueryClientProvider client={queryClient}>
      <div
        className=""
      >
        {/* <div className="fixed top-[100px] w-[300px] flex flex-col gap-4">
          <div className="flex p-2 rounded-md shadow-lg bg-slate-50 items-center justify-start gap-5">
            <Image
              src="/avatar.png"
              className="rounded-full"
              width="50"
              height="50"
              alt="Profile pic"
            />
            <div className="flex flex-col">
              <div className="font-medium text-sm">Arush Sharma</div>
              <div className="text-xs text-muted-foreground">GhostRider</div>
            </div>
          </div>

          <div className="flex p-2 bg-slate-50 rounded-md shadow-lg tems-center justify-start gap-5">
            <ul className="flex flex-col gap-3 w-full">
              {leftSidebarNavigations.map(({ name, icon, href }) => {
                return (
                  <li
                    key={name}
                    className="w-full p-1 hover:bg-purple-100 rounded-md"
                  >
                    <Link
                      href={href}
                      className="flex gap-3 items-center justify-start font-medium"
                    >
                      {icon} {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div> */}

        {/* All Post */}
        {/* <div className="flex gap-4 flex-col w-[500px] ml-[330px]">
          <FeedUploadBox />
          <Post />
          <Post />
        </div> */}

        <div className="fixed top-[100px] space-y-4 w-[300px] ml-[860px]">
          <div className="w-full">
            <h3 className="font-medium text-blue-800">Favorite Chats</h3>
            <ul className="flex flex-col gap-2 bg-white shadow-lg rounded-md p-2">
              <li className="flex p-2 rounded-md bg-slate-50 items-center justify-start gap-5">
                <Image
                  src="/avatar.png"
                  className="rounded-full"
                  width="30"
                  height="30"
                  alt="Profile pic"
                />
                <div className="flex flex-col">
                  <div className="font-medium text-sm">Harry Potter</div>
                </div>
              </li>
              <li className="flex p-2 rounded-md bg-slate-50 items-center justify-start gap-5">
                <Image
                  src="/avatar.png"
                  className="rounded-full"
                  width="30"
                  height="30"
                  alt="Profile pic"
                />
                <div className="flex flex-col">
                  <div className="font-medium text-sm">Harry Potter</div>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <h3 className="font-medium text-blue-800">Chats</h3>
            <ul className="flex flex-col gap-2 bg-white shadow-lg rounded-md p-2">
              <li className="flex p-2 rounded-md bg-slate-50 items-center justify-start gap-5">
                <Image
                  src="/avatar.png"
                  className="rounded-full"
                  width="30"
                  height="30"
                  alt="Profile pic"
                />
                <div className="flex flex-col">
                  <div className="font-medium text-sm">Harry Potter</div>
                </div>
              </li>
              <li className="flex p-2 rounded-md bg-slate-50 items-center justify-start gap-5">
                <Image
                  src="/avatar.png"
                  className="rounded-full"
                  width="30"
                  height="30"
                  alt="Profile pic"
                />
                <div className="flex flex-col">
                  <div className="font-medium text-sm">Harry Potter</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default page;
