"use client";

import Image from "next/image";

import helix from "@/assets/images/helix2.png";
import emojiStar from "@/assets/images/emojistar.png";

const CTA = () => {
  return (
    <section className="text-white py-[76px] sm:py-24">
      <div className="max-w-xl mx-auto relative">
        <Image
          priority
          unoptimized
          quality={100}
          height={200}
          width={200}
          src={helix}
          alt="CTA image-1"
          className="absolute top-6 left-[calc(100%+36px)] max-lg:hidden"
        />

        <Image
          priority
          unoptimized
          quality={100}
          height={200}
          width={200}
          src={emojiStar}
          alt="CTA image-2"
          className="absolute -top-[120px] right-[calc(100%+24px)] max-lg:hidden"
        />
        <h2 className="section-heading">Get instant access</h2>
        <p className="text-center mt-5 text-xl text-white/70 max-w-md sm:max-w-xl mx-auto">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <form className="mt-10 flex flex-col gap-2.5 justify-center max-w-sm mx-auto sm:flex-row">
          <input
            type="email"
            placeholder="your@email.com"
            className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1"
          />
          <button
            className="bg-white text-black h-12 rounded-lg w-full font-medium px-5"
            onClick={(e) => e.preventDefault()}
          >
            Get access
          </button>
        </form>
      </div>
    </section>
  );
};

export default CTA;
