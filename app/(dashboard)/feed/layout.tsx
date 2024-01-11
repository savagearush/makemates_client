// import Navbar from "@/components/Navbar";
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false })
import dynamic from "next/dynamic";

function FeedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`flex flex-col items-center h-screen `}
    >
      <div className="z-[999] bg-slate-100 fixed top-0 h-[100px] flex items-center justify-center w-full">
        <Navbar />
      </div>
      <div className="mt-[100px] flex w-[1200px] justify-between items-center relative pl-4">{children}</div>
    </div>
  );
}

export default FeedLayout;
