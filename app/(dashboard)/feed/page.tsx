"use client";

import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import Posts from "@/components/Posts";

import { AiFillLike } from "react-icons/ai";
import { BsMessenger } from "react-icons/bs";
import { FaBookmark, FaUserFriends } from "react-icons/fa";
import { TbHttpPost } from "react-icons/tb";

import FeedUploadBox from "./_components/FeedUploadBox";
import { AuthContext } from "@/context/AuthContext";

function Page() {
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
    <>
      <div className="fixed top-[100px] w-[300px] flex flex-col gap-4">
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
            {/* <div className="text-xs text-muted-foreground">GhostRider</div> */}
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
      </div>

      <div className="flex gap-4 flex-col w-[500px] ml-[330px]">
        <FeedUploadBox />
        <Posts />
      </div>
    </>
  );
}

export default Page;
