import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const GetStarted = () => {
  return (
    <div className=" pb-20">
      <hr className="  border-neutral-800 border-2" />
      <h1 className=" text-lg md:text-3xl font-medium mt-4 underline underline-offset-2">
        ☝🏿Step 1
      </h1>

      <h1 className=" text-sm md:text-xl font-medium mt-5">
        ╰┈➤ Clone My Next Js template
      </h1>

      <Image
        src="/doc/1.png"
        alt="test"
        layout="responsive"
        quality={100}
        height={500}
        width={1250}
        className=" mt-5"
      />

      <h1 className=" text-sm md:text-xl font-medium mt-5 ">
        ╰┈➤ Go to the project Directory
      </h1>

      <Image
        src="/doc/2.png"
        alt="test"
        layout="responsive"
        quality={100}
        height={500}
        width={1250}
        className=" mt-5"
      />

      <h1 className=" text-sm md:text-xl font-medium mt-5 ">
        ╰┈➤ Install the Dependencies{" "}
        <span className=" font-semibold">[ pnpm install * preferred ]</span>
      </h1>

      <Image
        src="/doc/3.png"
        alt="test"
        layout="responsive"
        quality={100}
        height={500}
        width={1250}
        className=" mt-5"
      />

      <div className=" flex justify-end">
        <Button className=" bg-neutral-800 mt-5 md:py-5 right-0 rounded-none text-sm md:text-lg text-neutral-500">
          <Link href="/doc/step2">Next : Step 2 ➤</Link>
        </Button>
      </div>
    </div>
  );
};

export default GetStarted;
