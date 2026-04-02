import Navbar from "@/components/Navbar";
import ServicesPage from "@/components/ServicesPage";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services — CRAFTING LAB",
  description:
    "We provide online marketing services including strategy, branding, design, and video production by a team of experienced professionals.",
};

export default function Services() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesPage />
      </main>
      <Footer />
    </>
  );
}
