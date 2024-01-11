"use client"

import React, { ReactElement } from "react";
import { TiHome } from "react-icons/ti";
import { BsMessenger } from "react-icons/bs";
import { BiSolidBell } from "react-icons/bi";
import { FaUserAlt, FaSearch } from "react-icons/fa";
import { MdEmojiEmotions } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { FaComments } from "react-icons/fa";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import Image from "next/image";
import Link from "next/link";

interface navLinks {
  name: string;
  Icon: ReactElement;
  Data?: ReactElement;
}

function Navbar() {
  const navigation = [
    {
      name: "feed",
      Icon: <TiHome className="text-[#001C43] w-4 h-4 " />,
      Data: (
        <div className="text-black p-3">
          <h3>Working</h3>
        </div>
      ),
    },
    {
      name: "messenger",
      Icon: <BsMessenger className="text-[#001C43] w-4 h-4" />,
    },
    {
      name: "notifications",
      Icon: <BiSolidBell className="text-[#001C43] w-4 h-4" />,
    },
    {
      name: "setting",
      Icon: <FaUserAlt className="text-[#001C43] w-4 h-4" />,
      Data: (
        <div className="text-black p-3">
          <div className="flex p-2 rounded-md shadow-lg bg-slate-50 items-center justify-start gap-5">
            <Image
              src="/avatar.png"
              className="rounded-full"
              width="50"
              height="50"
              alt="Profile pic"
              quality={"10"}
            />
            <div className="flex flex-col">
              <div className="font-medium text-sm">Arush Sharma</div>
              <div className="text-xs text-muted-foreground">GhostRider</div>
            </div>
          </div>
          <ul className="space-y-2">
            <li className="cursor-pointer flex items-center justify-between p-2 hover:bg-purple-100 rounded-md">
              <Link href="/" className="font-medium text-md">
                Reactions
              </Link>
              <MdEmojiEmotions className="text-xl text-blue-600" />
            </li>
            <li className="cursor-pointer flex items-center justify-between p-2 hover:bg-purple-100 rounded-md">
              <Link href="/" className="font-medium text-md">
                Comments
              </Link>
              <FaComments className="text-xl text-blue-600" />
            </li>
            <li className="cursor-pointer flex items-center justify-between p-2 hover:bg-purple-100 rounded-md">
              <Link href="/" className="font-medium text-md">
                Settings
              </Link>
              <IoSettingsSharp className="text-xl text-blue-600" />
            </li>
            <li className="cursor-pointer flex items-center justify-between p-2 hover:bg-purple-100 rounded-md">
              <Link href="/" className="font-medium text-md text-red-600">
                Logout
              </Link>
              <IoLogOut className="text-xl text-red-600" />
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="z-[99999] w-[1200px] shadow-[0px_2px_15px_0px_#001C43] h-[50px] px-2 rounded-full  text-white bg-[#003789] flex items-center justify-center gap-32">
      <div className="flex-1 flex items-center justify-center">
        <h1 className={`text-xl font-extrabold`}>
          Makemates
        </h1>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-8">
            {navigation.map(({ name, Icon, Data }) => {
              return (
                <NavigationMenuItem key={name}>
                  <NavigationMenuTrigger className="cursor-pointer shadow-lg bg-white rounded-full w-8 h-8 flex items-center justify-center">
                    {Icon}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute bg-white mt-4 rounded-md w-full">
                    {Data}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="flex gap-4 rounded-full bg-white/80 p-1 items-center justify-center">
          <FaSearch className="text-black pl-1" />
          <input
            placeholder="search here"
            className="bg-transparent outline-none text-black font-normal "
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
