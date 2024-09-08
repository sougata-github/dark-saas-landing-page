import Image from "next/image";

import appScreen from "@/assets/images/app-screen.png";

const Products = () => {
  return (
    <section className="text-center text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] sm:py-24">
      <div className="section-container">
        <h2 className="section-heading">Intuitive Interface</h2>
        <p className="text-xl text-white/70 max-w-xl mx-auto mt-5">
          Celebrate the joy of accomplishment with an app designed to track your
          progress, motivate your efforts, and celebrate your successes, one
          task at a time.
        </p>
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
      </div>
    </section>
  );
};

export default Products;
