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
      <Navbar />
      <div>{children}</div>
    </div>
  );
}

export default FeedLayout;
