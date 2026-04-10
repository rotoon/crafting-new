import Navbar from "@/components/Navbar";
import ContactPage from "@/components/contact/ContactPage";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — CRAFTING LAB",
  description:
    "Contact CRAFTING LAB for questions about development, partnerships, and upcoming events. Reach us via phone, email, or our contact form.",
};

export default function Contact() {
  return (
    <>
      <Navbar />
      <main>
        <ContactPage />
      </main>
      <Footer />
    </>
  );
}
