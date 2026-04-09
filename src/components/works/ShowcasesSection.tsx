"use client";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "../FadeIn";
import { SHOWCASE_ITEMS, WORK_DETAILS } from "./data";

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
        {SHOWCASE_ITEMS.map((item) => {
          const hasDetail = WORK_DETAILS.some((w) => w.id === item.id);
          const CardWrapper = hasDetail ? Link : "a";
          const cardProps = hasDetail
            ? { href: `/works/${item.id}` }
            : { href: "#" };
          return (
            <CardWrapper key={item.id} {...cardProps} className="wk-showcase-card">
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
            </CardWrapper>
          );
        })}
      </FadeIn>
    </section>
  );
}
