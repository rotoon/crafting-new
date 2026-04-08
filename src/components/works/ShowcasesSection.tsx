"use client";
import Image from "next/image";
import FadeIn from "../FadeIn";
import { SHOWCASE_ITEMS } from "./data";

export default function ShowcasesSection() {
  return (
    <section className="wk-section" id="works">
      <div className="wk-bg-glow" aria-hidden="true" />
      <div className="wk-inner">
        <FadeIn direction="up">
          <h2 className="wk-title">OUR WORKS</h2>
        </FadeIn>
        <FadeIn direction="up" delayMs={100}>
          <div className="wk-label-row">
            <div className="wk-label-accent" />
            <span className="wk-label-text">SHOWCASES</span>
          </div>
        </FadeIn>
      </div>

      <FadeIn className="wk-showcases" delayMs={200}>
        {SHOWCASE_ITEMS.map((item) => (
          <a key={item.id} href="#" className="wk-showcase-card">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: "cover" }}
              priority
            />
            <div className="wk-showcase-label">
              <span className="wk-showcase-name">{item.title}</span>
            </div>
          </a>
        ))}
      </FadeIn>
    </section>
  );
}
