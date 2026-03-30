"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax transform calculation
  const parallaxTransform = `translateY(${scrollY * 0.3}px) scale(1.05)`;

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div
          className="hero-bg-img"
          style={{ transform: scrollY < 1000 ? parallaxTransform : "none" }}
        />
        <div className="hero-bg-overlay"></div>
      </div>
      <div className="hero-content">
        <h1 className="hero-heading">
          <span className="hero-line hero-line-1" style={{ animation: "fadeInUp 0.8s ease 0.3s forwards" }}>
            RACE YOUR LIFE
          </span>
          <span className="hero-line hero-line-2" style={{ animation: "fadeInUp 0.8s ease 0.5s forwards" }}>
            <span className="hero-lead">LEAD</span> <span className="hero-your-brand">YOUR BRAND</span>
          </span>
          <span className="hero-line hero-line-3" style={{ animation: "fadeInUp 0.8s ease 0.7s forwards" }}>
            FORWARD
          </span>
        </h1>
      </div>
    </section>
  );
}
