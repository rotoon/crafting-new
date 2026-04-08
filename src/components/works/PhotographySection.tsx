"use client";
import { useState } from "react";
import Image from "next/image";
import { PHOTO_CATEGORIES, PHOTO_FAN, PHOTO_ITEMS } from "./data";

export default function PhotographySection() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const totalPhotos = PHOTO_ITEMS.length;

  const handlePrev = () => setPhotoIndex((i) => (i - 1 + totalPhotos) % totalPhotos);
  const handleNext = () => setPhotoIndex((i) => (i + 1) % totalPhotos);

  const getFanPhoto = (offset: number) =>
    PHOTO_ITEMS[(photoIndex + offset + totalPhotos) % totalPhotos];

  const activePhotoCat = PHOTO_CATEGORIES[photoIndex % PHOTO_CATEGORIES.length];

  return (
    <section className="wk-ph-section">
      <div className="wk-ph-title-wrap" aria-hidden="true">
        <span className="wk-ph-title">PHOTOGRAPHY</span>
      </div>

      <div className="wk-ph-fan">
        {PHOTO_FAN.map((fan, i) => {
          const photo = getFanPhoto(i - 2);
          return (
            <div
              key={i}
              className="wk-ph-card"
              style={{
                transform: `rotate(${fan.rotate}deg) translateY(${fan.yOffset}px)`,
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

      <div className="wk-ph-footer">
        <button className="wk-vp-arrow" onClick={handlePrev} aria-label="Previous" type="button">
          ←
        </button>
        <div className="wk-ph-cat-wrap">
          <span className="wk-ph-cat">{activePhotoCat}</span>
        </div>
        <button className="wk-vp-arrow" onClick={handleNext} aria-label="Next" type="button">
          →
        </button>
      </div>
    </section>
  );
}
