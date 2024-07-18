import React from "react";
import { DiMongodb, DiReact } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { PiBackspace, PiGithubLogo } from "react-icons/pi";
import { RiNextjsFill } from "react-icons/ri";
import Image from "next/image";
import { SiMongoose, SiPnpm, SiShadcnui, SiZod } from "react-icons/si";
import { IoArrowBackCircle } from "react-icons/io5";
import GetStarted from "./components/step1";

const Documentation = () => {
  return (
    <div className=" mt-5">
      <div>
        <GetStarted />
      </div>
    </div>
  );
};

export default Documentation;
