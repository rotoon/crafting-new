"use client";
import { useState } from "react";
import FadeIn from "./FadeIn";
import Image from "next/image";

// ===== PART 4: Photography =====
const PHOTO_CATEGORIES = ["PACKSHOT", "STYLING", "VIBE", "ADVERTISING"];

const PHOTO_FAN = [
  { rotate: 0.88, yOffset: 77 },
  { rotate: -4.98, yOffset: 0 },
  { rotate: 0, yOffset: 130 },
  { rotate: 4.98, yOffset: 0 },
  { rotate: -0.88, yOffset: 77 },
];

const PHOTO_ITEMS = [
  {
    id: "ph-1",
    image: "/assets/works/photography/ph-1.webp",
    alt: "Packshot 1",
  },
  {
    id: "ph-2",
    image: "/assets/works/photography/ph-2.webp",
    alt: "Packshot 2",
  },
  {
    id: "ph-3",
    image: "/assets/works/photography/ph-3.webp",
    alt: "Packshot 3",
  },
  {
    id: "ph-4",
    image: "/assets/works/photography/ph-4.webp",
    alt: "Packshot 4",
  },
  {
    id: "ph-5",
    image: "/assets/works/photography/ph-5.webp",
    alt: "Packshot 5",
  },
];

// ===== PART 2: Graphic Design Grid =====
const GRAPHIC_DESIGN_ITEMS = [
  {
    id: "cma",
    name: "Central Chiangmai Airport",
    image: "/assets/works/portfolio/clients/cma-dark.webp",
    hoverImage: "/assets/works/portfolio/clients/cma-color.webp",
  },
  {
    id: "ggb",
    name: "Go Green Bar",
    image: "/assets/works/portfolio/clients/ggb-dark.webp",
    hoverImage: "/assets/works/portfolio/clients/ggb-color.webp",
  },
  {
    id: "payon",
    name: "Payon",
    image: "/assets/works/portfolio/clients/payon-dark.webp",
    hoverImage: "/assets/works/portfolio/clients/payon-color.webp",
  },
  {
    id: "kong",
    name: "Kong Mart",
    image: "/assets/works/portfolio/clients/kong-dark.webp",
    hoverImage: "/assets/works/portfolio/clients/kong-color.webp",
  },
  {
    id: "gomaew",
    name: "Gomaew",
    image: "/assets/works/portfolio/clients/gomaew-dark.webp",
    hoverImage: "/assets/works/portfolio/clients/gomaew-color.webp",
  },
  {
    id: "blanc",
    name: "Blanc All Day Eatery",
    image: "/assets/works/portfolio/clients/blanc-dark.webp",
    hoverImage: "/assets/works/portfolio/clients/blanc-color.webp",
  },
  {
    id: "vinzen",
    name: "The Vinzen",
    image: "/assets/works/portfolio/clients/vinzen-dark.webp",
    hoverImage: "/assets/works/portfolio/clients/vinzen-color.webp",
  },
  {
    id: "nat",
    name: "Nat Bar",
    image: "/assets/works/portfolio/clients/nat-dark.webp",
    hoverImage: "/assets/works/portfolio/clients/nat-color.webp",
  },
  {
    id: "paincare",
    name: "Pain Care",
    image: "/assets/works/portfolio/clients/paincare-dark.webp",
    hoverImage: "/assets/works/portfolio/clients/paincare-color.webp",
  },
  {
    id: "ggc",
    name: "Go Green Consult",
    image: "/assets/works/portfolio/clients/ggc-dark.webp",
    hoverImage: "/assets/works/portfolio/clients/ggc-color.webp",
  },
  {
    id: "funky",
    name: "Funky",
    image: "/assets/works/portfolio/clients/funky-dark.webp",
    hoverImage: "/assets/works/portfolio/clients/funky-color.webp",
  },
  {
    id: "nor",
    name: "Nor",
    image: "/assets/works/portfolio/clients/nor-dark.webp",
    hoverImage: "/assets/works/portfolio/clients/nor-color.webp",
  },
  {
    id: "moreeda",
    name: "Moreeda",
    image: "/assets/works/portfolio/clients/moreeda-dark.webp",
    hoverImage: "/assets/works/portfolio/clients/moreeda-color.webp",
  },
  {
    id: "cc",
    name: "CC",
    image: "/assets/works/portfolio/clients/cc-dark.webp",
    hoverImage: "/assets/works/portfolio/clients/cc-color.webp",
  },
  {
    id: "cmh",
    name: "CMH",
    image: "/assets/works/portfolio/clients/cmh-dark.webp",
    hoverImage: "/assets/works/portfolio/clients/cmh-color.webp",
  },
  {
    id: "gsl",
    name: "GSL",
    image: "/assets/works/portfolio/clients/gsl-dark.webp",
    hoverImage: "/assets/works/portfolio/clients/gsl-color.webp",
  },
  {
    id: "baipo",
    name: "Baipo",
    image: "/assets/works/portfolio/clients/baipo-dark.webp",
    hoverImage: "/assets/works/portfolio/clients/baipo-color.webp",
  },
  {
    id: "ggc2",
    name: "GGC",
    image: "/assets/works/portfolio/clients/ggc2-dark.webp",
    hoverImage: "/assets/works/portfolio/clients/ggc2-color.webp",
  },
  {
    id: "chidlom",
    name: "Chidlom",
    image: "/assets/works/portfolio/clients/chidlom-dark.webp",
    hoverImage: "/assets/works/portfolio/clients/chidlom-color.webp",
  },
  {
    id: "somm",
    name: "Somm",
    image: "/assets/works/portfolio/clients/somm-dark.webp",
    hoverImage: "/assets/works/portfolio/clients/somm-color.webp",
  },
];

// ===== PART 1: Showcases =====
const SHOWCASE_ITEMS = [
  {
    id: "craftheart",
    title: "Craft Heart",
    image: "/assets/works/showcase-craftheart.webp",
  },
  {
    id: "gogreen",
    title: "GoGreen By Kanya",
    image: "/assets/works/showcase-gogreen.webp",
  },
  {
    id: "wisetniyom",
    title: "Wiset Niyom",
    image: "/assets/works/showcase-wisetniyom.webp",
  },
];

// ===== PART 3: Video Production =====
const VIDEO_CATEGORIES = [
  "Showcase",
  "Commercial",
  "Documentary",
  "Event",
  "Corporate",
];

type VideoItem = { id: string; src: string; thumbnail: string; alt: string };

const PRODUCTION_VIDEOS: VideoItem[] = [
  {
    id: "video-1",
    src: "/assets/works/videos/snapsave-app_24561518606812703_hd.mp4",
    thumbnail: "/assets/works/thumbnails/snapsave-app_main.jpg",
    alt: "Video production showcase 1",
  },
  {
    id: "video-2",
    src: "/assets/works/videos/snapsave-app_24561518606812703_hd.mp4",
    thumbnail: "/assets/works/thumbnails/snapsave-app_thumb_001.jpg",
    alt: "Video production showcase 2",
  },
  {
    id: "video-3",
    src: "/assets/works/videos/snapsave-app_24561518606812703_hd.mp4",
    thumbnail: "/assets/works/thumbnails/snapsave-app_thumb_002.jpg",
    alt: "Video production showcase 3",
  },
  {
    id: "video-4",
    src: "/assets/works/videos/snapsave-app_24561518606812703_hd.mp4",
    thumbnail: "/assets/works/thumbnails/snapsave-app_thumb_003.jpg",
    alt: "Video production showcase 4",
  },
  {
    id: "video-5",
    src: "/assets/works/videos/snapsave-app_24561518606812703_hd.mp4",
    thumbnail: "/assets/works/thumbnails/snapsave-app_thumb_004.jpg",
    alt: "Video production showcase 5",
  },
];

export default function WorksPage() {
  // Part 3: Video state
  const [videoIndex, setVideoIndex] = useState(0);
  const total = PRODUCTION_VIDEOS.length;
  const getCard = (offset: number): VideoItem =>
    PRODUCTION_VIDEOS[(videoIndex + offset + total) % total];
  const handlePrev = () => setVideoIndex((i) => (i - 1 + total) % total);
  const handleNext = () => setVideoIndex((i) => (i + 1) % total);

  // Part 4: Photography state
  const [photoCatIndex, setPhotoCatIndex] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);
  const totalPhotos = PHOTO_ITEMS.length;
  const handlePhotoPrev = () =>
    setPhotoIndex((i) => (i - 1 + totalPhotos) % totalPhotos);
  const handlePhotoNext = () => setPhotoIndex((i) => (i + 1) % totalPhotos);
  const getFanPhoto = (offset: number) =>
    PHOTO_ITEMS[(photoIndex + offset + totalPhotos) % totalPhotos];

  return (
    <>
      {/* ==============================================
          PART 1: SHOWCASES
          ============================================== */}
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

      {/* ==============================================
          PART 2: GRAPHIC DESIGN GRID
          ============================================== */}
      <section className="wk-gd-section">
        <div className="wk-inner">
          <FadeIn direction="up">
            <div className="wk-label-row">
              <div className="wk-label-accent" />
              <span className="wk-label-text wk-label-text--white">
                GRAPHIC DESIGN
              </span>
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

      {/* ==============================================
          PART 3: VIDEO PRODUCTION
          ============================================== */}
      <section className="wk-vp-section" id="production-showcase">
        <div className="wk-inner">
          <FadeIn direction="up">
            <div className="wk-label-row">
              <div className="wk-label-accent" />
              <span className="wk-label-text">VIDEO PRODUCTION</span>
            </div>
          </FadeIn>
        </div>

        <div className="wk-vp-stage">
          <FadeIn className="wk-vp-cards">
            {PRODUCTION_VIDEOS.map((video, i) => {
              const isCenter = i === 0;
              return (
                <div
                  key={i}
                  className={`wk-vp-card ${isCenter ? "wk-vp-card--center" : ""}`}
                >
                  <video
                    key={video.id}
                    className="wk-vp-video"
                    src={video.src}
                    poster={video.thumbnail}
                    controls={isCenter}
                    playsInline
                    preload="metadata"
                    muted
                    autoPlay={isCenter}
                    loop
                  />
                </div>
              );
            })}
          </FadeIn>

          <div className="wk-vp-nav">
            <button
              className="wk-vp-arrow"
              onClick={handlePrev}
              aria-label="Previous video"
              type="button"
            >
              ←
            </button>
            <button
              className="wk-vp-arrow"
              onClick={handleNext}
              aria-label="Next video"
              type="button"
            >
              →
            </button>
          </div>
        </div>
      </section>

      {/* ==============================================
          PART 4: PHOTOGRAPHY
          ============================================== */}
      <section className="wk-ph-section">
        {/* Large PHOTOGRAPHY outline text */}
        <div className="wk-ph-title-wrap" aria-hidden="true">
          <span className="wk-ph-title">PHOTOGRAPHY</span>
        </div>

        {/* Fan-layout photo cards */}
        <div className="wk-ph-fan">
          {PHOTO_FAN.map((fan, i) => {
            const photo = getFanPhoto(i - 2); // -2 so center (i=2) = photoIndex
            return (
              <div
                key={i}
                className="wk-ph-card"
                style={{
                  transform: `rotate(${fan.rotate}deg) translateY(${fan.yOffset}px)`,
                }}
              >
                <div className="wk-ph-card-inner">
                  {/*
                    TODO: Replace with real photography images.
                    <Image src={photo.image} alt={photo.alt} fill style={{ objectFit:"cover" }} />
                  */}
                  <div className="wk-ph-placeholder" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Category label + arrows */}
        <div className="wk-ph-footer">
          <button
            className="wk-vp-arrow"
            onClick={handlePhotoPrev}
            aria-label="Previous"
            type="button"
          >
            ←
          </button>
          <div className="wk-ph-cat-wrap">
            <span className="wk-ph-cat">{PHOTO_CATEGORIES[photoCatIndex]}</span>
          </div>
          <button
            className="wk-vp-arrow"
            onClick={handlePhotoNext}
            aria-label="Next"
            type="button"
          >
            →
          </button>
        </div>
      </section>
    </>
  );
}
