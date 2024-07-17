import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { DiMongodb, DiReact } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { PiGithubLogo } from "react-icons/pi";
import { RiNextjsFill } from "react-icons/ri";
import { SiMongoose, SiPnpm, SiShadcnui, SiZod } from "react-icons/si";

export default function Home() {
  return (
    <div className=" flex justify-center items-center h-screen">
      <div className=" ">
        <h1 className=" text-center text-lg md:text-4xl">
          <Link
            href="https://t.me/selfmadecoder"
            className=" bg-neutral-800 p-1"
          >
            🗿 Tech Nerd's
          </Link>{" "}
          Next JS Starter Kit
        </h1>
        <p className=" md:text-xl text-sm md:text-start text-center mt-[2px] pt-2">
          Modern Full stack Starter Template 🦍
        </p>

        <div className=" my-2 flex gap-3 items-center justify-center md:justify-normal">
          <RiNextjsFill className=" text-neutral-600 md:text-4xl" />
          <SiShadcnui className=" text-neutral-500 md:text-2xl" />
          <DiReact className=" md:text-4xl" />
          <DiMongodb className=" md:text-4xl" />
          <SiMongoose className=" text-neutral-500 md:text-5xl" />
          <SiZod className=" text-neutral-500 md:text-3xl" />
          <FaNodeJs className=" text-neutral-500 md:text-4xl" />
          <SiPnpm className=" text-neutral-500 md:text-3xl" />
        </div>

        <div className=" items-center mt-2 flex justify-center py-1">
          <div className="  border border-neutral-800 items-center flex justify-center md:py-2 md:px-5 fixed bottom-20">
            <Button className=" bg-neutral-900 p-0 group rounded-none text-neutral-500 border-none shadow-none hover:bg-neutral-900">
              <h3 className=" md:text-2xl  px-5 py-1 group-hover:scale-105 transition-all">
                Get Insight 📓
              </h3>
            </Button>

            <Button className=" bg-neutral-900 border-none shadow-none hover:bg-neutral-900">
              <PiGithubLogo className=" text-neutral-500 hover:scale-105 transition-all text-xl md:text-4xl" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
