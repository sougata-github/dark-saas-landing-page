"use client";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

import Arrow from "@/assets/icons/Arrow";
import cursor from "@/assets/images/cursor.png";
import message from "@/assets/images/message.png";

const Hero = () => {
  return (
    <section className="text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[3600px] lg:h-[1800px] rounded-[100%] left-1/2 -translate-x-1/2 border-b-black border-2 border-[#B48CDE] radial-gradient-bg top-[calc(100%-96px)] sm:top-[calc(100%-120px)]" />
      <div className="section-container text-center relative">
        <div className="flex items-center justify-center">
          <Link
            href="#"
            className="font-semibold border py-1 px-2 rounded-lg border-white/30 inline-flex gap-3"
          >
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent [-webkit-background-clip:text]">
              Version 2.0 is here
            </span>
            <span className="group inline-flex items-center gap-1">
              <span>Read More</span>
              <Arrow className="sm:group-hover:translate-x-1 transition duration-500" />
            </span>
          </Link>
        </div>

        <div className="flex justify-center mt-8">
          <div className="inline-flex relative">
            <h1 className="text-7xl font-bold tracking-tighter inline-flex">
              One Task at a Time
            </h1>
            <motion.div
              className="h-[150px] w-[150px] md:h-[200px] md:w-[200px] absolute right-[476px] top-[62px] hidden sm:inline z-10"
              drag
              dragSnapToOrigin
            >
              <Image
                priority
                unoptimized
                quality={100}
                src={cursor}
                alt="cursor"
                height={200}
                width={200}
                draggable="false"
              />
            </motion.div>
            <motion.div
              className="h-[150px] w-[150px] md:h-[200px] md:w-[200px] absolute top-[72px] left-[476px] hidden sm:inline z-10"
              drag
              dragSnapToOrigin
            >
              <Image
                priority
                unoptimized
                quality={100}
                src={message}
                alt="message"
                height={200}
                width={200}
                draggable="false"
              />
            </motion.div>
          </div>
        </div>

        <div className="flex justify-center relative">
          <p className="text-center text-lg md:text-xl max-w-md sm:max-w-[480px] mx-auto mt-8 lg:pt-2 font-medium z-10">
            Celebrate the joy of accomplishment with an app designed to track
            progress, motivate your efforts and celebrate your success.
          </p>
        </div>

        <div className="flex justify-center mt-12 sm:mt-16 lg:mt-24">
          <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">
            Get for free
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
