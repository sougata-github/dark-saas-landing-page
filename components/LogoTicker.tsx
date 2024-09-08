import Image from "next/image";

import acme from "@/assets/images/acme.png";
import quantum from "@/assets/images/quantum.png";
import echo from "@/assets/images/echo.png";
import celestial from "@/assets/images/celestial.png";
import pulse from "@/assets/images/pulse.png";
import apex from "@/assets/images/apex.png";

const images = [acme, quantum, echo, celestial, pulse, apex];

const LogoTicker = () => {
  return (
    <div className="bg-black py-[72px] text-center">
      <div className="section-container">
        <h2 className="text-xl text-white/70">
          Trusted by the world&apos;s most innovative teams.
        </h2>
        <div className="overflow-hidden mt-9 before:content-[''] after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-20 after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgba(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgba(0,0,0,0))] relative">
          <div className="flex gap-16">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
