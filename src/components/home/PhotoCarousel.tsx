"use client";
import Image from "next/image";

const photos = [
  { src: "/assets/photos/photo-1.webp", alt: "Crafting Lab - Dessert & Drinks" },
  { src: "/assets/photos/photo-2.webp", alt: "Crafting Lab - Neon Bar" },
  { src: "/assets/photos/photo-3.webp", alt: "Crafting Lab - Tire Service" },
  { src: "/assets/photos/photo-4.webp", alt: "Crafting Lab - Go Green Shop" },
  { src: "/assets/photos/photo-5.webp", alt: "Crafting Lab - Food" },
  { src: "/assets/photos/photo-6.webp", alt: "Crafting Lab - Lifestyle" },
  { src: "/assets/photos/photo-7.webp", alt: "Crafting Lab - Interior" },
];

export default function PhotoCarousel() {
  return (
    <section className="photo-carousel-section">
      <div className="photo-carousel-ellipse photo-carousel-ellipse-top">
        <Image
          src="/assets/ui/ellipse-curve.svg"
          alt=""
          width={1659}
          height={194}
          className="photo-carousel-ellipse-img"
        />
      </div>
      <div className="photo-carousel-track-wrapper">
        <div className="photo-carousel-track">
          {[...photos, ...photos].map((photo, i) => (
            <div key={i} className="photo-carousel-slide">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={377}
                height={579}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="photo-carousel-ellipse photo-carousel-ellipse-bottom">
        <Image
          src="/assets/ui/ellipse-curve.svg"
          alt=""
          width={1659}
          height={194}
          className="photo-carousel-ellipse-img"
        />
      </div>
    </section>
  );
}
