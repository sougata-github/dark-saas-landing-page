import Banner from "@/components/Banner";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";

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
      <Products />
      <FAQ />
    </div>
  );
}
