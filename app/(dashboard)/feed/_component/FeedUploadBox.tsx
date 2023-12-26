import { Button } from "@/components/ui/button";
import React from "react";
import { BiSolidVideos } from "react-icons/bi";
import { FaImages } from "react-icons/fa";
function FeedUploadBox() {
  return (
    <div className="flex shadow-lg flex-col w-full rounded-md justify-center p-2 items-center bg-slate-50">
      <div>
        <textarea
          rows={3}
          cols={60}
          placeholder="What's on your mind?"
          className="bg-transparent w-full outline-none resize-none"
        />
      </div>
      <div className="flex ">
        <Button variant={"ghost"} className="flex gap-2">
          <FaImages />
          Add Photos
        </Button>
        <Button variant={"ghost"} className="flex gap-2">
          <BiSolidVideos />
          Add Videos
        </Button>
      </div>
    </div>
  );
}

export default FeedUploadBox;
