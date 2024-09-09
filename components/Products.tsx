"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BorderBeam } from "./magicui/border-beam";

import appScreen from "@/assets/images/app-screen.png";

const Products = () => {
  return (
    <section className="text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] sm:py-24 overflow-hidden">
      <div className="section-container">
        <h2 className="section-heading">Intuitive Interface</h2>
        <p className="text-center text-lg sm:text-xl text-white/70 max-w-sm sm:max-w-xl mx-auto mt-5">
          Celebrate the joy of accomplishment with an app designed to track your
          progress, motivate your efforts, and celebrate your successes, one
          task at a time.
        </p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 100,
          }}
          transition={{
            ease: "easeIn",
            duration: 0.4,
          }}
          viewport={{ once: true }}
          className="relative rounded-lg [mask-image:linear-gradient(to_bottom,black_10%,transparent)]"
        >
          <Image
            priority
            unoptimized
            quality={100}
            src={appScreen}
            alt="Product screenshot"
            width={100}
            height={100}
            className="mt-14 max-w-full w-full h-auto"
          />
          <BorderBeam size={258} duration={12} delay={9} />
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
