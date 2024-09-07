import { links } from "@/lib/data";

import Link from "next/link";
import Image from "next/image";

import Menu from "@/assets/icons/Menu";
import logoImage from "@/assets/images/logosaas.png";

const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="section-container">
        <div className="py-4 flex items-center justify-between">
          <div className="relative">
            {/* Image Glow */}
            <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD98,#C2F0B1,#2FD8FE)] blur-md" />
            <Image
              priority
              unoptimized
              quality={100}
              src={logoImage}
              height={48}
              width={48}
              alt="Saas logo"
              className="h-12 w-12 relative"
            />
          </div>

          <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
            <Menu className="text-white" />
          </div>
          <nav className="gap-6 hidden sm:flex items-center">
            {links.map((link) => (
              <Link
                href={link.href}
                key={link.label}
                className="text-opacity-60 text-white hover:text-opacity-100 transition duration-300"
              >
                {link.label}
              </Link>
            ))}
            <button className="bg-white py-2 px-4 rounded-lg">
              Get for free
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
