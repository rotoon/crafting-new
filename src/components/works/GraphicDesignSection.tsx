"use client";
import Image from "next/image";
import FadeIn from "../FadeIn";
import { GRAPHIC_DESIGN_ITEMS } from "./data";

export default function GraphicDesignSection() {
  return (
    <section className="wk-gd-section">
      <div className="wk-inner">
        <FadeIn direction="up">
          <div className="wk-label-row">
            <div className="wk-label-accent" />
            <span className="wk-label-text wk-label-text--white">GRAPHIC DESIGN</span>
          </div>
        </FadeIn>
      </div>

      <FadeIn className="wk-gd-grid" delayMs={150}>
        {GRAPHIC_DESIGN_ITEMS.map((item) => (
          <a key={item.id} href="#" className="wk-gd-card">
            <div className="wk-gd-card-inner">
              <Image
                src={item.image}
                alt={item.name}
                fill
                style={{ objectFit: "cover" }}
                className="wk-gd-card-img wk-gd-img-dark"
                unoptimized
              />
              <Image
                src={item.hoverImage}
                alt={item.name}
                fill
                style={{ objectFit: "cover" }}
                className="wk-gd-card-img wk-gd-img-color"
                unoptimized
              />
            </div>
          </a>
        ))}
      </FadeIn>
    </section>
  );
}
