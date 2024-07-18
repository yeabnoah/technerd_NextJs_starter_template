import { Button } from "@/components/ui/button";
import Image from "next/image";

const Step2 = () => {
  return (
    <div className=" pb-20">
      <hr className="  border-neutral-800" />
      <h1 className=" text-lg md:text-3xl font-medium mt-4 underline underline-offset-2">
        ☝🏿Step 2
      </h1>

      <h1 className=" text-sm md:text-xl font-medium mt-5">
        ╰┈➤ Change the{" "}
        <span className=" font-bold text-neutral-300">
          .env.example to .env.local
        </span>{" "}
        as you see on the example
      </h1>

      <Image
        src="/doc/step2.png"
        alt="test"
        quality={100}
        height={500}
        width={250}
        className=" mt-5 mx-auto border-2 rounded   border-violet-500"
      />

      <h1 className=" text-sm md:text-xl font-medium mt-5 ">
        ╰┈➤<span className=" text-neutral-300">open the .env file</span> and
        uncomment the Database URL your preferred one [Atlas or Local]
      </h1>

      <Image
        src="/doc/21.png"
        alt="test"
        quality={100}
        height={500}
        width={500}
        className=" mt-5 mx-auto border-2 rounded   border-violet-500"
      />

      <h1 className=" text-sm md:text-xl font-medium mt-5 ">
        ╰┈➤ <span className=" text-neutral-300">lib folder</span> contains the
        connection logic for mongoose and Next js no need to touch it <br />•
        use the <span className=" text-neutral-300">model folder</span> to
        define your schema
      </h1>

      <Image
        src="/doc/22.png"
        alt="test"
        quality={100}
        height={500}
        width={250}
        className=" mt-5 mx-auto border-2 rounded   border-violet-500"
      />

      <h1 className=" text-sm md:text-xl font-medium mt-5 ">
        ╰┈➤ <span className=" text-neutral-300">Don't forget</span> to call the
        <span className=" text-neutral-300 mx-1">connectDB function</span> when
        creating api Routes in your app/api folder
      </h1>

      <Image
        src="/doc/23.png"
        alt="test"
        quality={100}
        height={500}
        width={500}
        className=" mt-5 mx-auto border-2 rounded   border-violet-500"
      />

      <div className=" flex justify-center">
        <h3 className=" text-lg md:text-4xl mt-10 text-center">
          Congrats 🥳 You are all set 🎉.Good Luck with your project
        </h3>
      </div>
    </div>
  );
};

export default Step2;
