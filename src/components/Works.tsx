"use client";
import { useState } from "react";
import FadeIn from "./FadeIn";
import Image from "next/image";

// Production showcase: 3 slot positions
const PROD_SLOTS = [
  { right: 0, top: 44, width: 216, height: 138, z: 3 }, // slot 0: medium, upper
  { right: 28, top: 228, width: 296, height: 190, z: 5 }, // slot 1: large, center
  { right: 0, top: 466, width: 216, height: 138, z: 3 }, // slot 2: medium, lower
];

const PRODUCTION_ITEMS = [
  {
    id: "video-1",
    src: "/assets/works/videos/17138219-uhd_2160_3840_25fps.mp4",
    thumbnail: "/assets/works/thumbnails/17138219-uhd_2160_3840_25fps.jpg",
    alt: "Go Green by Kanya production thumbnail 1",
  },
  {
    id: "video-2",
    src: "/assets/works/videos/19956132-hd_1080_1920_30fps.mp4",
    thumbnail: "/assets/works/thumbnails/19956132-hd_1080_1920_30fps.jpg",
    alt: "Go Green by Kanya production thumbnail 2",
  },
  {
    id: "video-3",
    src: "/assets/works/videos/4796949-uhd_2160_4096_25fps.mp4",
    thumbnail: "/assets/works/thumbnails/4796949-uhd_2160_4096_25fps.jpg",
    alt: "Go Green by Kanya production thumbnail 3",
  },
  {
    id: "video-4",
    src: "/assets/works/videos/6602217-hd_1080_1920_30fps.mp4",
    thumbnail: "/assets/works/thumbnails/6602217-hd_1080_1920_30fps.jpg",
    alt: "Go Green by Kanya production thumbnail 4",
  },
  {
    id: "video-5",
    src: "/assets/works/videos/8360260-uhd_2160_4096_25fps.mp4",
    thumbnail: "/assets/works/thumbnails/8360260-uhd_2160_4096_25fps.jpg",
    alt: "Go Green by Kanya production thumbnail 5",
  },
];

const projects = [
  {
    id: "gogreen",
    title: "Go Green by Kanya",
    desc: "Crafting Lab เริ่มตั้งแต่วาง Concept Branding ไปจนถึงการช่วย ออกแบบร้านกว่า 13 สาขา ต่อยอดทั้ง Online + Offline ให้ร้านเป็นที่รู้จัก ปรับเปลี่ยนการสื่อสารให้ถูกต้องตามข้อกฏหมายให้เป็น GoGreen Consult Center",
    image: "/assets/works/carousel-1.webp",
  },
  {
    id: "wisetniyom",
    title: "Wisetniyom",
    desc: "เราร่วมคิดตั้งแต่ CONCEPT IDEA ร้าน และนำมาออกแบบ CI BRANDING ที่เป็นเอกลักษณ์ ออกแบบ FONT สำหรับใช้ในงานดีไซน์ของร้าน รวมถึงดูแลช่องทางสื่อสารออนไลน์ของแบรนด์และสื่อออฟไลน์ต่าง ๆ ณ จุดขาย",
    image: "/assets/works/carousel-2.webp",
  },
  {
    id: "craftheart",
    title: "Craft Heart",
    desc: "เพจรีวิวร้าน อีเวนต์ กิจกรรมในเชียงใหม่ เราทำโปรดักชันตั้งแต่ถ่ายภาพ ถ่ายวิดีโอ ตัดต่อ วางคอนเซ็ปและคอนเทนต์ พร้อมวางแผนโพสต์ประจำแต่ละเดือน",
    image: "/assets/works/carousel-3.webp",
  },
];

export default function Works() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeProductionIndex, setActiveProductionIndex] = useState(0);
  const total = projects.length;

  const handleSlideClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  const handleProductionChange = (index: number) => {
    setActiveProductionIndex(index);
  };

  const getRole = (i: number): "main" | "secondary" | "peek" => {
    if (i === activeIndex) return "main";
    if (activeIndex === 0) return i === 1 ? "secondary" : "peek";
    if (activeIndex === 1) return i === 0 ? "peek" : "secondary";
    return i === 0 ? "peek" : "secondary";
  };

  const active = projects[activeIndex];
  const activeProduction = PRODUCTION_ITEMS[activeProductionIndex];
  const visibleProductionItems = [
    {
      item: PRODUCTION_ITEMS[
        (activeProductionIndex - 1 + PRODUCTION_ITEMS.length) %
          PRODUCTION_ITEMS.length
      ],
      slot: 0,
      index:
        (activeProductionIndex - 1 + PRODUCTION_ITEMS.length) %
        PRODUCTION_ITEMS.length,
    },
    {
      item: PRODUCTION_ITEMS[activeProductionIndex],
      slot: 1,
      index: activeProductionIndex,
    },
    {
      item: PRODUCTION_ITEMS[
        (activeProductionIndex + 1) % PRODUCTION_ITEMS.length
      ],
      slot: 2,
      index: (activeProductionIndex + 1) % PRODUCTION_ITEMS.length,
    },
  ];

  return (
    <>
      <section className="works-section" id="works">
        <div className="works-header">
          <h2 className="section-title">OUR WORKS</h2>
          <FadeIn direction="up" delayMs={300} className="services-view-more">
            <a href="#" className="btn-view-more">
              View More
            </a>
          </FadeIn>
        </div>

        <div className="works-category">
          <div className="category-indicator">
            <div className="category-bar"></div>
            <span className="category-name">Showcases</span>
          </div>
        </div>

        <FadeIn className="works-carousel">
          <div className="carousel-track">
            {projects.map((project, i) => {
              const role = getRole(i);
              return (
                <div
                  key={project.id}
                  className={`carousel-slide carousel-slide-${role}`}
                  onClick={() => handleSlideClick(i)}
                  role={role !== "main" ? "button" : undefined}
                  tabIndex={role !== "main" ? 0 : undefined}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={540}
                    priority
                  />
                </div>
              );
            })}
          </div>
          <div className="carousel-info" key={active.id}>
            <div className="carousel-info-left">
              <h3 className="carousel-title">{active.title}</h3>
              <p className="carousel-description">{active.desc}</p>
            </div>
            <div className="carousel-counter">
              <span className="current-count">
                {String(activeIndex + 1).padStart(2, "0")} /
              </span>
              <span className="total-count">
                {" "}
                {String(total).padStart(2, "0")}
              </span>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="production-showcase" id="production-showcase">
        {/* Background: dark green glow (Figma node 202:7604) */}
        <div className="production-bg" aria-hidden="true" />

        <FadeIn direction="left" className="production-left">
          <div className="production-category">
            <div className="category-indicator">
              <div className="category-bar"></div>
              <span className="category-name">Production</span>
            </div>
          </div>
          <div className="production-info">
            <h3 className="production-title">Go Green by Kanya</h3>
            <p className="production-type">Short Video Viral</p>
          </div>
          <FadeIn direction="left" delayMs={300} className="services-view-more">
            <a href="#" className="btn-view-more">
              View More
            </a>
          </FadeIn>
        </FadeIn>

        <FadeIn className="production-center">
          <div className="production-video-card">
            <video
              key={activeProduction.id}
              className="production-video"
              src={activeProduction.src}
              poster={activeProduction.thumbnail}
              controls
              playsInline
              preload="metadata"
              autoPlay
            />
          </div>
        </FadeIn>

        <FadeIn direction="right" className="production-right">
          <div className="video-slot-container">
            {visibleProductionItems.map(({ item, slot, index }) => {
              const pos = PROD_SLOTS[slot];
              const isActiveThumbnail = index === activeProductionIndex;

              return (
                <button
                  key={item.id}
                  className={`video-slot-item ${isActiveThumbnail ? "is-active" : ""}`}
                  type="button"
                  aria-label={`Show production video ${index + 1}`}
                  aria-pressed={isActiveThumbnail}
                  onClick={() => handleProductionChange(index)}
                  style={{
                    right: pos.right,
                    top: pos.top,
                    width: pos.width,
                    height: pos.height,
                    zIndex: pos.z,
                    transition:
                      "top 1s cubic-bezier(0.22,1,0.36,1), width 0.45s cubic-bezier(0.22,1,0.36,1), height 0.45s cubic-bezier(0.22,1,0.36,1)",
                  }}
                >
                  <Image
                    src={item.thumbnail}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 40vw, 250px"
                    style={{ objectFit: "cover" }}
                  />
                </button>
              );
            })}
          </div>
        </FadeIn>
      </section>
    </>
  );
}
