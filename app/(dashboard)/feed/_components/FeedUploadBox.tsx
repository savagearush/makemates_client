"use client";

import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import Image from "next/image";
import React, { LegacyRef, useRef, useState } from "react";
import { BiSolidVideos } from "react-icons/bi";
import { FaImages } from "react-icons/fa";
import { useMutation } from "@tanstack/react-query";
import { app } from "@/firebase.js";
import { getDownloadURL, getStorage, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";
import Compressor from "compressorjs";
import toast from "react-hot-toast";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { NewPost } from "@/typings";
import { Progress } from "@/components/ui/progress";

function FeedUploadBox() {

  const [desc, setDesc] = useState<string>("");
  const [file, setFile] = useState<any>();
  const [previewUrl, setPreviewUrl] = useState<string | StaticImport>("");
  const [uploadState, setUploadState] = useState<boolean>(false)
  const [uploadProgress, setUploadProgress] = useState<number | null>(null)

  const formRef = useRef<HTMLFormElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  const mutation = useMutation<NewPost
    , Error, NewPost>({
      mutationFn: (newPost: NewPost) => {
        return axios.post("http://localhost:5000/posts", newPost, { withCredentials: true });
      },
    });



  const handleUploadPost = async (e: React.FormEvent) => {
    e.preventDefault();
    // const response = await axios.post("http://localhost:5000/posts", { desc, imgUrl: "something" }, { withCredentials: true });

    // console.log(response)
    new Compressor(file, {
      quality: 0.5,
      success(result: any) {
        const storage = getStorage(app);
        const fileName = result.name + Date.now() + "." + result.type.split("/")[1];
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, result);

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on('state_changed',
          (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            setUploadState(true);
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setUploadProgress(progress);

            // handle Uploading state
            // switch (snapshot.state) {
            //   case 'paused':
            //     setUploadStatus("Paused")
            //     setUploadState(false);
            //     break;
            //   case 'running':
            //     setUploadStatus("Uploading")
            //     break;
            // }
          },
          (error) => {
            console.log(error)
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setUploadState(false)
              setUploadProgress(null);
              clearFileInput();
              mutation.mutate({ desc, imgUrl: downloadURL })
              closeButton.current?.click();
            });
          }
        );

      },
      error(err) {
        toast.error(err.message);
      },
    });

  };

  const clearFileInput = () => {
    setDesc("");
    setFile(undefined); // Clear the file state
    setPreviewUrl(""); // Clear the preview URL if you're using it
    // Assuming you have a ref to your file input, you can reset its value like this:
    if (formRef.current) {
      const fileInput: any = formRef.current.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = "";
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFile = e.target.files ? e.target.files[0] : undefined;
    setFile(newFile);
    if (newFile) {
      const newPreviewUrl = URL.createObjectURL(newFile);
      setPreviewUrl(newPreviewUrl);
    }
  };


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
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">
              <FaImages /> Add photos
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <form
              ref={formRef}
              onSubmit={(e) => handleUploadPost(e)}
              encType="multipart/form-data"
            >
              <h3 className="font-medium text-2xl">Share new Post</h3>
              <textarea
                rows={3}
                cols={60}
                value={desc}
                placeholder="What's on your mind?"
                className="bg-transparent w-full outline-none resize-none"
                onChange={(e) => setDesc(e.target.value)}
              />

              <div className="border-1 border-slate-100">
                <div className="max-h-[200px] overflow-y-auto">
                  {file && (
                    <Image
                      alt="preview-image"
                      src={previewUrl}
                      width="50"
                      height="50"
                      quality="50"
                      className="w-full rounded-md"
                    />
                  )}
                </div>
                <input
                  type="file"
                  name="postImage"
                  onChange={handleFileChange}
                  accept="image/png, image/jpeg, image/jpg"
                />

              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button ref={closeButton} variant={"destructive"} size={"sm"}>Cancel</Button>
                </DialogClose>
                <Button type="submit" variant={"default"} size={"sm"}>
                  Share
                </Button>
              </DialogFooter>
            </form>
            <div className="w-full flex flex-col justify-center">
              {uploadState && <span className="text-center font-medium">Post is Uploading...</span>}
              {uploadState && <div className="flex items-center gap-1"><Progress value={uploadProgress} /><span className="font-semibold text-sm">{uploadProgress}%</span></div>}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default FeedUploadBox;