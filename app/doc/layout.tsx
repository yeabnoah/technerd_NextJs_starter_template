import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { DiMongodb, DiReact } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { PiGithubLogo } from "react-icons/pi";
import { RiNextjsFill } from "react-icons/ri";
import { SiMongoose, SiPnpm, SiShadcnui, SiZod } from "react-icons/si";
import { IoArrowBackCircle, IoBackspaceSharp } from "react-icons/io5";
import Back from "./components/back";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" grid-background h-full top-0 ">
      <div className=" max-w-screen-sm mx-4 md:max-w-4xl md:mx-auto pt-10 ">
        <div className=" justify-center md:justify-normal flex items-center mt-3 cursor-pointer gap-5">
          <Back />
          <h1 className=" md:text-3xl text-xl  font-medium text-neutral-400">
            Documentation ( Kinda 🗿 )
          </h1>
        </div>

        <p className=" text-neutral-500 text-center md:text-start md:text-inherit text-sm md:text-lg mt-5">
          Hey 👋🏿! I’m Yeabsra, a web and mobile developer from Ethiopia. I’ve
          put together my preferred tech stack and starter template for a
          Next.js full stack project. It includes Next.js, Mongoose, Zod,
          Shadcn, Tailwind, and NextAuth, using pnpm. Feel free to use it if you
          want. Let’s connect and create something awesome together!
        </p>
        <div className=" my-2 flex gap-3 items-center justify-center md:justify-normal">
          <RiNextjsFill className=" text-neutral-500 text-2xl md:text-4xl hover:scale-110 transition-all" />
          <SiShadcnui className=" text-neutral-500 text-xl md:text-2xl hover:scale-110 transition-all" />
          <DiReact className=" text-neutral-500 text-2xl md:text-4xl hover:scale-110 transition-all" />
          <DiMongodb className=" md:text-4xl text-2xl hover:scale-110 transition-all" />
          <SiMongoose className=" text-neutral-500 text-3xl md:text-5xl hover:scale-110 transition-all" />
          <SiZod className=" text-neutral-500 text-2xl md:text-3xl hover:scale-110 transition-all" />
          <Image
            src="/authIcon.webp"
            alt="authIcon"
            height={19}
            width={19}
            className=" grayscale hover:scale-110 transition-all"
          />
          <FaNodeJs className=" text-neutral-500 text-xl md:text-3xl hover:scale-110 transition-all" />
          <SiPnpm className=" text-neutral-500 text-xl md:text-2xl hover:scale-110 transition-all" />
        </div>
        {children}
      </div>
    </div>
  );
}
