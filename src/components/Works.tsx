"use client";
import { useState } from "react";
import FadeIn from "./FadeIn";
import Image from "next/image";

const projects = [
  {
    id: "gogreen",
    title: "Go Green by Kanya",
    desc: "Crafting Lab เริ่มตั้งแต่วาง Concept Branding ไปจนถึงการช่วย ออกแบบร้านกว่า 13 สาขา ต่อยอดทั้ง Online + Offline ให้ร้านเป็นที่รู้จัก ปรับเปลี่ยนการสื่อสารให้ถูกต้องตามข้อกฏหมายให้เป็น GoGreen Consult Center",
    image: "/assets/works/carousel-1.png",
  },
  {
    id: "wisetniyom",
    title: "Wisetniyom",
    desc: "เราร่วมคิดตั้งแต่ CONCEPT IDEA ร้าน และนำมาออกแบบ CI BRANDING ที่เป็นเอกลักษณ์ ออกแบบ FONT สำหรับใช้ในงานดีไซน์ของร้าน รวมถึงดูแลช่องทางสื่อสารออนไลน์ของแบรนด์และสื่อออฟไลน์ต่าง ๆ ณ จุดขาย",
    image: "/assets/works/carousel-2.png",
  },
  {
    id: "craftheart",
    title: "Craft Heart",
    desc: "เพจรีวิวร้าน อีเวนต์ กิจกรรมในเชียงใหม่ เราทำโปรดักชันตั้งแต่ถ่ายภาพ ถ่ายวิดีโอ ตัดต่อ วางคอนเซ็ปและคอนเทนต์ พร้อมวางแผนโพสต์ประจำแต่ละเดือน",
    image: "/assets/works/carousel-3.png",
  },
];

export default function Works() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = projects.length;

  const handleSlideClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  const getRole = (i: number): "main" | "secondary" | "peek" => {
    if (i === activeIndex) return "main";
    if (activeIndex === 0) return i === 1 ? "secondary" : "peek";
    if (activeIndex === 1) return i === 0 ? "peek" : "secondary";
    return i === 0 ? "peek" : "secondary";
  };

  const active = projects[activeIndex];

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
          <a href="#" className="see-all-link production-link">
            See All
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </FadeIn>

        <FadeIn className="production-center">
          <div className="production-video-card">
            <Image
              src="/assets/works/video-1.png"
              alt="Production video showcase"
              width={381}
              height={676}
            />
            <div className="video-overlay">
              <span className="video-text-top green">PRODU</span>
              <span className="video-thai-text">ทีมโปรดักชั่น</span>
              <span className="video-text-bottom green">UCTION</span>
              <div className="video-controls">
                <button className="video-control" aria-label="Pause">
                  ❚❚
                </button>
                <button className="video-control" aria-label="Previous">
                  ⏮
                </button>
                <button className="video-control" aria-label="Next">
                  ⏭
                </button>
                <button className="video-control" aria-label="Mute">
                  🔊
                </button>
                <div className="video-progress">
                  <div className="video-progress-bar"></div>
                </div>
                <button className="video-control" aria-label="Fullscreen">
                  ⛶
                </button>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="right" className="production-right">
          <div className="video-thumb-grid">
            <div className="video-thumb">
              <Image
                src="/assets/works/video-2.png"
                alt="Video thumbnail"
                width={187}
                height={120}
              />
            </div>
            <div className="video-thumb">
              <Image
                src="/assets/works/video-3.png"
                alt="Video thumbnail"
                width={125}
                height={80}
              />
            </div>
            <div className="video-thumb">
              <Image
                src="/assets/works/video-4.png"
                alt="Video thumbnail"
                width={187}
                height={120}
              />
            </div>
            <div className="video-thumb">
              <Image
                src="/assets/works/video-5.png"
                alt="Video thumbnail"
                width={125}
                height={80}
              />
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="cta-section" id="cta-section">
        <div className="cta-bg">
          <div className="cta-gradient-left"></div>
          <div className="cta-gradient-right"></div>
          <div className="cta-gradient-bottom"></div>
        </div>
      </section>
    </>
  );
}
