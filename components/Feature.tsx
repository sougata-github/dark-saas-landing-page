"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const Feature = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);

  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current?.getBoundingClientRect();
      offsetX.set(e.x - rect?.x);
      offsetY.set(e.y - rect?.y);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1 relative max-md:max-w-[320px] max-md:mx-auto">
      <motion.div
        className="absolute -inset-[0.8px] border-2 border-purple-400 rounded-xl"
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
        }}
        ref={ref}
      />

      <div className="inline-flex size-12 bg-white text-black items-center justify-center rounded-full">
        {icon}
      </div>
      <h3 className="text-white mt-6 font-bold">{title}</h3>
      <p className="mt-2 text-white/70 max-w-md mx-auto">{description}</p>
    </div>
  );
};

export default Feature;
