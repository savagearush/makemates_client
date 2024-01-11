import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import moment from "moment";

function Post({ caption, mediaUrl, postDate }: { caption: string; mediaUrl: string; postDate: string }) {
  return (
    <div className="flex flex-col w-full rounded-md shadow-lg bg-slate-50">
      <div className="w-full p-2 ">
        <div className="flex gap-2 w-full">
          <Image
            src="/avatar.png"
            width="30"
            className="rounded-full"
            height="30"
            alt="post"
          />
          <div className="flex flex-col">
            <h6 className="text-[14px]">Arush Sharma</h6>
            <span className="text-[10px] text-muted-foreground">
              {moment(postDate).fromNow()}
            </span>
          </div>
        </div>
        <div className="text-sm p-2">
          {caption}
        </div>
      </div>
      <div className="relative">
        <Image src={mediaUrl} width={500} height={400} alt="user post" />
      </div>
      <div className="flex p-2 gap-2">
        <Button variant={"ghost"}>12 Likes</Button>
        <Button variant={"ghost"}>5 Comments</Button>
        <Button variant={"ghost"}>3 Shares</Button>
      </div>
    </div>
  );
}

export default Post;
