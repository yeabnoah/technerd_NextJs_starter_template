"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { IoArrowBackCircle } from "react-icons/io5";

const Back = () => {
  const router = useRouter();

  return (
    <div>
      <Button
        className=" mt-1 w-fit p-0 bg-transparent text-3xl group: items-center justify-center"
        onClick={() => {
          router.back();
        }}
      >
        <IoArrowBackCircle className=" text-neutral-400 group-active:text-neutral-600" />
      </Button>
    </div>
  );
};

export default Back;
