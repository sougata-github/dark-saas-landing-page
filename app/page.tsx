import Banner from "@/components/Banner";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <div className="z-10 sticky top-0 backdrop-blur-md">
        <Banner />
        <Navbar />
      </div>
      <Hero />
      <LogoTicker />
      <Features />
    </div>
  );
}
