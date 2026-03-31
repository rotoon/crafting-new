import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import PhotoCarousel from "@/components/PhotoCarousel";
import Services from "@/components/Services";
import Works from "@/components/Works";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <PhotoCarousel />
        <Services />
        <Works />
        <Clients />
      </main>
      <Footer />
    </>
  );
}
