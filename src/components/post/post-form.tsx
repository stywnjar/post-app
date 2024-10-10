"use client";

import { Camera } from "lucide-react";
import { useRef, useState, useTransition } from "react";
import { toast } from "sonner";

export function PostForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [imagePick, setImagePick] = useState<File | null>(null);
  const [isLoading, setTransition] = useTransition();

  function imagePickHandler(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) {
      return;
    }

    setImagePick(e.target.files[0]);
  }

  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const content = String(formData.get("content"));
    toast.success(content);
  }

  return (
    <form onSubmit={submitHandler}>
      <fieldset className="flex flex-col gap-2 items-end">
        <textarea
          required
          name="content"
          className="w-full h-40 resize-none outline-none bg-transparent border border-white/10 p-4 rounded-md"
        />
        {imagePick && (
          <div className="w-full">
            <div className="w-6/12 relative">
              <img
                src={URL.createObjectURL(imagePick)}
                alt="image-pick"
                className="w-full h-full object-cover rounded-md"
              />
              <button
                type="button"
                onClick={() => {
                  setImagePick(null);
                }}
                className="btn btn-square absolute top-2 right-2 btn-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
        <div className="w-full flex items-center justify-between">
          <input
            onChange={imagePickHandler}
            type="file"
            hidden
            accept="image/*"
            ref={fileRef}
          />
          <button
            type="button"
            onClick={() => {
              fileRef.current?.click();
            }}
          >
            <Camera />
          </button>

          <button className="btn btn-outline btn-sm"> Post</button>
        </div>
      </fieldset>
    </form>
  );
}
