"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { PHOTO_CATEGORIES, PHOTO_FAN, PHOTO_SLIDES } from "./data";
import WorksArrow from "./WorksArrow";

export default function PhotographySection() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [dir, setDir] = useState<"next" | "prev">("next");
  const totalSlides = PHOTO_SLIDES.length;
  const fanRef = useRef<HTMLDivElement>(null);
  const catRef = useRef<HTMLSpanElement>(null);
  const dirRef = useRef<"next" | "prev">("next");

  useEffect(() => {
    if (!catRef.current) return;
    const y = dirRef.current === "next" ? 16 : -16;
    gsap.fromTo(catRef.current, { opacity: 0, y }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
  }, [slideIndex]);

  const navigate = (d: "next" | "prev") => {
    dirRef.current = d;
    setDir(d);
    setSlideIndex((i) =>
      d === "next"
        ? (i + 1) % totalSlides
        : (i - 1 + totalSlides) % totalSlides,
    );

    // Restart CSS slide animation via force reflow
    const el = fanRef.current;
    if (el) {
      el.classList.remove("wk-ph-fan--slide-next", "wk-ph-fan--slide-prev");
      void el.offsetWidth;
      el.classList.add(`wk-ph-fan--slide-${d}`);
    }
  };

  const activePhotoCat = PHOTO_CATEGORIES[slideIndex];

  return (
    <>
      <section className="wk-ph-section">
        <div className="wk-ph-title-wrap" aria-hidden="true">
          <span className="wk-ph-title">PHOTOGRAPHY</span>
        </div>

        <div ref={fanRef} className="wk-ph-fan">
          {PHOTO_FAN.map((fan, cardIdx) => {
            const distanceFromCenter = Math.abs(cardIdx - 2);
            const staggerDelay = cardIdx * 0.2;

            return (
              <div
                key={cardIdx}
                className="wk-ph-card"
                style={{
                  transform: `rotate(${fan.rotate}deg) translateY(${fan.yOffset}px)`,
                  zIndex: PHOTO_FAN.length - distanceFromCenter,
                }}
              >
                <div className="wk-ph-card-inner">
                  {PHOTO_SLIDES.map((slide, slideIdx) => {
                    const isActive = slideIdx === slideIndex;
                    return (
                      <div
                        key={slide[cardIdx].id}
                        style={{
                          position: "absolute",
                          inset: 0,
                          opacity: isActive ? 1 : 0,
                          transition: isActive
                            ? `opacity 0.8s ease ${staggerDelay}s`
                            : "opacity 0.8s ease 0s",
                          willChange: "opacity",
                        }}
                      >
                        <Image
                          src={slide[cardIdx].image}
                          alt={slide[cardIdx].alt}
                          fill
                          sizes="220px"
                          style={{ objectFit: "cover" }}
                          priority
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div>
          <div className="wk-ph-footer">
            <button
              className="wk-vp-arrow"
              onClick={() => navigate("prev")}
              aria-label="Previous"
              type="button"
            >
              <WorksArrow direction="left" />
            </button>
            <div className="wk-ph-cat-wrap">
              <div className="wk-ph-cat-mask">
                <div
                  key={slideIndex}
                  className={`wk-ph-cat-slider wk-ph-cat-slider--${dir}`}
                >
                  <span className="wk-ph-cat">{activePhotoCat}</span>
                </div>
              </div>
            </div>
            <button
              className="wk-vp-arrow"
              onClick={() => navigate("next")}
              aria-label="Next"
              type="button"
            >
              <WorksArrow direction="right" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
