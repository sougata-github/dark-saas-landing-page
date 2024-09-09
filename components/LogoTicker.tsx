"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import apex from "@/assets/images/apex.png";
import acme from "@/assets/images/acme.png";
import echo from "@/assets/images/echo.png";
import pulse from "@/assets/images/pulse.png";
import quantum from "@/assets/images/quantum.png";
import celestial from "@/assets/images/celestial.png";

const images = [acme, quantum, echo, celestial, pulse, apex];

const LogoTicker = () => {
  return (
    <div className="bg-black py-[72px] sm:py-24 text-center">
      <div className="section-container">
        <h2 className="text-xl text-white/70">
          Trusted by the world&apos;s most innovative teams.
        </h2>
        <div className="flex overflow-hidden mt-9 before:content-[''] after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-20 after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgba(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgba(0,0,0,0))] before:z-10 relative">
          <motion.div
            initial={{
              translateX: 0,
            }}
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-none gap-16 pr-16"
          >
            {[...new Array(2)].fill(0).map((_, idx) => (
              <>
                {images.map((image) => (
                  <Image
                    priority
                    unoptimized
                    quality={100}
                    src={image.src}
                    alt={`${image}-logo`}
                    key={image.src}
                    height={50}
                    width={50}
                    className="flex-none h-8 w-auto"
                  />
                ))}
              </>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
