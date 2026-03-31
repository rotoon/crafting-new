"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import FadeIn from "./FadeIn";

function SuccessDots() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dotSize = 4;
    const spacing = 16;
    const offsetEven = spacing / 2;

    const render = () => {
      canvas.width = container.offsetWidth || 1560;
      canvas.height = 32;
      canvas.style.width = "100%";
      canvas.style.height = "32px";

      const cols = Math.ceil(canvas.width / spacing) + 1;
      const rows = 2;

      ctx.fillStyle = "#00FF00";

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * spacing + (row % 2 === 1 ? offsetEven : 0);
          const y = row * spacing + spacing / 2;
          ctx.beginPath();
          ctx.arc(x, y, dotSize / 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    render();
    container.innerHTML = "";
    container.appendChild(canvas);

    window.addEventListener("resize", render);
    return () => window.removeEventListener("resize", render);
  }, []);

  return <div ref={containerRef} className="success-dots w-full h-[32px]"></div>;
}

export default function Footer() {
  return (
    <>
      <section className="success-banner" id="success-banner">
        <SuccessDots />
        <div className="success-text-row">
          <FadeIn direction="left">
            <span className="success-text">YOUR SUCCESS</span>
          </FadeIn>
          <FadeIn direction="right">
            <span className="success-text">OUR SUCCESS</span>
          </FadeIn>
        </div>
        <SuccessDots />
      </section>

      <footer className="footer" id="contact">
        <div className="footer-inner">
          <FadeIn direction="left" delayMs={0}>
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="footer-logo-text">CRAFTING</span>
                <div className="footer-logo-second-line">
                  <span className="footer-logo-text">LAB</span>
                  <div className="footer-logo-badge">
                    <span className="footer-logo-c">C</span>
                    <Image src="/assets/brand/footer-circle.svg" alt="" width={42} height={42} className="footer-logo-circle" />
                  </div>
                </div>
              </div>
              <div className="footer-address">
                <p><strong>CRAFTINGLAB Co.,Ltd.</strong></p>
                <p>210 Moo 2, Ton Pao Sub-district,</p>
                <p>San Kamphaeng District, Chiang Mai 50130 Thailand</p>
              </div>
              <div className="footer-contact-info">
                <span>Mobile: 08-4169-6906</span>
                <span>Email: craftinglab.co@gmail.com</span>
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="right" delayMs={200}>
            <div className="footer-links">
              <div className="footer-col">
                <h4 className="footer-col-title">Menus</h4>
                <a href="#hero" className="footer-link">Home</a>
                <a href="#services" className="footer-link">Services</a>
                <a href="#works" className="footer-link">Works</a>
                <a href="#contact" className="footer-link">Contact Us</a>
              </div>
              <div className="footer-col">
                <h4 className="footer-col-title">Follow Us</h4>
                <a href="https://www.facebook.com/CraftingLab.cnx" target="_blank" rel="noopener noreferrer" className="footer-link footer-link-underline">Facebook</a>
                <a href="https://www.instagram.com/craftinglab.cnx/" target="_blank" rel="noopener noreferrer" className="footer-link footer-link-underline">Instagram</a>
              </div>
            </div>
          </FadeIn>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">© CRAFTINGLAB 2026. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
