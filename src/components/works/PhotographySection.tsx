"use client";
import { useState } from "react";
import Image from "next/image";
import { PHOTO_CATEGORIES, PHOTO_FAN, PHOTO_SLIDES } from "./data";
import WorksArrow from "./WorksArrow";

export default function PhotographySection() {
  const [slideIndex, setSlideIndex] = useState(0);
  const totalSlides = PHOTO_SLIDES.length;

  const handlePrev = () =>
    setSlideIndex((i) => (i - 1 + totalSlides) % totalSlides);
  const handleNext = () =>
    setSlideIndex((i) => (i + 1) % totalSlides);

  const currentSlide = PHOTO_SLIDES[slideIndex];
  const activePhotoCat = PHOTO_CATEGORIES[slideIndex];

  return (
    <>
      <section className="wk-ph-section">
        <div className="wk-ph-title-wrap" aria-hidden="true">
          <span className="wk-ph-title">PHOTOGRAPHY</span>
        </div>

        <div className="wk-ph-fan">
          {PHOTO_FAN.map((fan, i) => {
            const photo = currentSlide[i];
            const distanceFromCenter = Math.abs(i - 2);
            return (
              <div
                key={i}
                className="wk-ph-card"
                style={{
                  transform: `rotate(${fan.rotate}deg) translateY(${fan.yOffset}px)`,
                  zIndex: PHOTO_FAN.length - distanceFromCenter,
                }}
              >
                <div className="wk-ph-card-inner">
                  <Image
                    src={photo.image}
                    alt={photo.alt}
                    fill
                    style={{ objectFit: "cover" }}
                    unoptimized
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div>
          <div className="wk-ph-footer">
            <button
              className="wk-vp-arrow"
              onClick={handlePrev}
              aria-label="Previous"
              type="button"
            >
              <WorksArrow direction="left" />
            </button>
            <div className="wk-ph-cat-wrap">
              <span className="wk-ph-cat">{activePhotoCat}</span>
            </div>
            <button
              className="wk-vp-arrow"
              onClick={handleNext}
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
