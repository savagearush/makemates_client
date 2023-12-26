import React, { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";

import { TiHome } from "react-icons/ti";
import { BsMessenger } from "react-icons/bs";
import { BiSolidBell } from "react-icons/bi";
import { FaUserAlt, FaSearch } from "react-icons/fa";

interface navLinks {
  name: string;
  Icon: ReactElement;
}

function Navbar() {
  const navigation = [
    {
      name: "feed",
      Icon: <TiHome className="text-[#001C43] w-4 h-4 " />,
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
    },
  ];

  return (
    <div className="z-[99999] w-[1200px] shadow-[0px_2px_15px_0px_#001C43] h-[50px] px-2 rounded-full  text-white bg-[#003789] flex items-center justify-center gap-32">
      <div className="flex-1 flex items-center justify-center">
        <Image src="/logo-dark.png" width="120" height="30" alt="logo" />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <ul className="flex gap-10">
          {navigation.map(({ name, Icon }) => {
            return (
              <Link
                href={`/${name}`}
                className="cursor-pointer bg-white rounded-full w-8 h-8 flex items-center justify-center"
                key={name}
              >
                {Icon}
              </Link>
            );
          })}
        </ul>
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
