import Navbar from "@/components/Navbar";
import WorksPage from "@/components/works/WorksPage";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Works | Crafting Lab",
  description:
    "Portfolio of Crafting Lab — Graphic Design, Video Production, and Photography showcase.",
};

export default function Works() {
  return (
    <>
      <Navbar />
      <main>
        <WorksPage />
      </main>
      <Footer />
    </>
  );
}
