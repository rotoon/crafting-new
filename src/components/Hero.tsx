"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [imgLoaded, setImgLoaded] = useState(false);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rafId.current !== null) return;
      rafId.current = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        rafId.current = null;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, []);

  // Parallax transform calculation
  const parallaxTransform = `translateY(${scrollY * 0.3}px) scale(1.05)`;

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div
          className="hero-bg-img"
          style={{ transform: scrollY < 1000 ? parallaxTransform : "none" }}
        >
          <div className={`hero-bg-img-inner ${imgLoaded ? "loaded" : ""}`}>
            <Image
              src="/assets/crew-bg.webp"
              alt="Crafting Lab crew"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center top" }}
              onLoad={() => setImgLoaded(true)}
            />
          </div>
        </div>
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
