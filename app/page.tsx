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
    <div className=" flex justify-center items-center min-h-screen grid-background">
      <div className=" ">
        <div className=" mb-2">
          <p className=" md:text-base text-sm text-start  mt-[2px] pt-2">
            👋🏿 HI I am TechNerd
          </p>
        </div>
        <h1 className="text-center text-lg md:text-4xl">
          <Link
            href="https://t.me/selfmadecoder"
            className="bg-neutral-800 p-1"
          >
            🧔🏿 Tech Nerd&apos;s
          </Link>{" "}
          Next JS Starter Kit ⋆.˚
        </h1>

        <p className=" md:text-xl text-sm md:text-start text-center mt-[2px] pt-2">
          Modern Full stack Starter Template for you 🫵🏿
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
        <div className=" items-center mt-2 flex justify-center py-1">
          <div className="  border border-neutral-800 items-center flex justify-center md:py-2 fixed bottom-20 rounded">
            <Button className="  p-0 group rounded-none text-neutral-500 border-none hover:bg-transparent shadow-none bg-transparent">
              <Link
                href="https://tech-nerd-next-js-starter.vercel.app/"
                className=" md:text-xl   px-5 py-1 group-hover:scale-105 transition-all"
              >
                ✊🏿 Get Insight
              </Link>
            </Button>

            <Button className="  border-none shadow-none bg-transparent hover:bg-transparent ">
              <Link href="https://github.com/yeabnoah/technerd_NextJs_starter_template">
                <PiGithubLogo className=" text-neutral-500 hover:scale-105 transition-all text-xl md:text-3xl" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
