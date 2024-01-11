import Navbar from "@/components/Navbar";
import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "400", "500", "800"],
  subsets: ["latin"],
});
function FeedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${poppins.className} flex flex-col items-center h-screen `}
    >
      <div className="z-[999] bg-slate-100 fixed top-0 h-[100px] flex items-center justify-center w-full">
        <Navbar />
      </div>
      <div className="mt-[300px]">{children}</div>
    </div>
  );
}

export default FeedLayout;
