"use client";
import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import FadeIn from "./FadeIn";

/* ─── data ─── */
interface SubCard {
  icon?: string;
  iconW?: number;
  iconH?: number;
  titleTop?: string;
  titleBottom?: string;
  lines?: string[];
  photo?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

interface ServiceData {
  id: string;
  title: string;
  description: string;
  subCards: SubCard[];
  tags: string[];
  photo?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    align: "left" | "right";
  };
}

const SERVICES: ServiceData[] = [
  {
    id: "strategy",
    title: "STRATEGY&MARKETING",
    description:
      "Explore and analyze target audiences, products, and both direct and indirect competitors to develop strategic plans and define a clear brand positioning. We provide business consultation and operational planning, while summarizing and analyzing performance results to refine strategies and guide the next stage of execution.",
    subCards: [
      {
        icon: "/assets/services/icon-research.webp",
        iconW: 151,
        iconH: 100,
        titleTop: "RESEARCH",
        titleBottom: "& STRATEGY",
        lines: [
          "สำรวจ กลุ่มลูกค้า สินค้า",
          "คู่แข่งทางตรงทางอ้อม",
          "เพื่อนำมาวางแผนกลยุทธ์",
          "หาจุดยืนที่ชัดเจน",
        ],
      },
      {
        icon: "/assets/services/icon-consulting.webp",
        iconW: 144,
        iconH: 100,
        titleTop: "CONSULTING",
        titleBottom: "& PLANNING",
        lines: [
          "ให้คำปรึกษาทางด้านธุรกิจ",
          "ความต้องการของลูกค้า",
          "วางแผนเพื่อดำเนินงาน",
          "ตามที่กำหนดไว้",
        ],
      },
      {
        icon: "/assets/services/icon-kpi.webp",
        iconW: 142,
        iconH: 100,
        titleTop: "FINAL KPI",
        titleBottom: "& REPORT",
        lines: [
          "สรุปและรายงานผล",
          "การดำเนินงานประจำเดือน",
          "เพื่อวิเคราะห์และวางแผน",
          "การทำงานในขั้นตอนต่อไป",
        ],
      },
    ],
    tags: [
      "Copy Writing",
      "Researching",
      "Marketing Analytics",
      "Media Planning",
      "Report",
      "Ads Optimise",
      "Campaign Management",
      "Social Media Management",
      "Performance&Analytics",
      "Campaign Concept&Execution",
    ],
    photo: {
      src: "/assets/services/service-strategy.jpg",
      alt: "Strategy & Marketing",
      width: 1086,
      height: 328,
      align: "left",
    },
  },
  {
    id: "branding",
    title: "BRANDING&DESIGN",
    description:
      "Develop and strengthen brand identity through thoughtful design, while establishing clear marketing communication guidelines. This ensures the brand maintains a distinct image and effectively connects with its target audience.",
    subCards: [
      {
        icon: "/assets/services/icon-marketing.webp",
        iconW: 127,
        iconH: 100,
        titleTop: "MARKETING",
        titleBottom: "& SOLUTION",
        lines: [
          "สร้างงานดีไซน์สุดครีเอทีฟ",
          "ด้วยสื่อที่เหมาะสมกับธุรกิจ",
          "ทั้ง Online และ Offline",
        ],
      },
      {
        icon: "/assets/services/icon-branding.webp",
        iconW: 206,
        iconH: 76,
        titleTop: "BRANDING",
        titleBottom: "& DESIGN",
        lines: [
          "สร้างเอกลักษณ์ของแบรนด์",
          "ให้เป็นที่จดจำ ด้วยดีไซน์",
          "ที่บ่งบอกตัวตนของธุรกิจ",
        ],
      },
      {
        photo: {
          src: "/assets/services/service-branding.png",
          alt: "Branding & Design",
          width: 442,
          height: 399,
        },
      },
    ],
    tags: [
      "Product Design",
      "Logo Design",
      "Signage",
      "Re-Branding",
      "CI Branding",
      "Mascot Design",
      "Graphic Design",
      "UI Design",
      "Web Design",
      "Packaging Design",
      "Training&Workshop",
    ],
  },
  {
    id: "production",
    title: "PRODUCTION&VIDEO",
    description:
      "Produce photography and video content for marketing communications, creating visual content that reflects the brand's identity and captures the attention of the target audience.",
    subCards: [
      {
        photo: {
          src: "/assets/services/service-production.png",
          alt: "Production & Video",
          width: 749,
          height: 500,
        },
      },
      {
        icon: "/assets/services/icon-production.webp",
        iconW: 168,
        iconH: 94,
        titleTop: "PRODUCTION",
        titleBottom: "& VIDEO",
        lines: [
          "ผลิตสื่อทั้งภาพถ่าย วิดีโอ",
          "สตอรี่บอร์ดที่เข้าถึง",
          "กลุ่มลูกค้า เข้าใจแบรนด์",
          "อย่างตรงจุด",
        ],
      },
    ],
    tags: [
      "Photography",
      "Video Production",
      "Editor",
      "Packshot",
      "Motion Graphic",
      "Animation",
      "Post Production",
    ],
  },
];

const SUBTITLE_LINES = [
  "We provide online marketing services by a team of experienced people.",
  "Build a strong brand in the online business world. through creativity Content",
  "and data analytics by using marketing strategies that are specific to your business",
];

/* ─── animated counter for sub-cards appearing on scroll ─── */
function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => {
      if (el) obs.unobserve(el);
    };
  }, [threshold]);

  return { ref, visible };
}

/* ─── sub-components ─── */

function ServiceHeader() {
  return (
    <div className="sp-header">
      <FadeIn direction="left" delayMs={0} className="sp-bg-text sp-bg-we">
        WE
      </FadeIn>
      <div className="sp-header-center">
        <FadeIn direction="down" delayMs={100}>
          <h1 className="sp-title">OUR SERVICES</h1>
        </FadeIn>
        <FadeIn direction="up" delayMs={200}>
          <p className="sp-subtitle">
            {SUBTITLE_LINES.map((line) => (
              <span key={line} className="sp-subtitle-line">
                {line}
              </span>
            ))}
          </p>
        </FadeIn>
      </div>
      <FadeIn direction="right" delayMs={0} className="sp-bg-text sp-bg-do">
        DO
      </FadeIn>
    </div>
  );
}

function ServiceBlock({ svc, index }: { svc: ServiceData; index: number }) {
  const { ref, visible } = useScrollReveal(0.1);
  const baseDelay = index * 100;

  return (
    <div className="sp-service-block" ref={ref}>
      {/* Hero image */}
      {svc?.photo && (
        <FadeIn direction="down" delayMs={baseDelay}>
          <div className="sp-block-hero">
            <Image
              src={svc.photo.src}
              alt={svc.photo.alt}
              width={svc.photo.width}
              height={svc.photo.height}
              priority={index === 0}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </FadeIn>
      )}

      {/* Title & description */}
      <FadeIn direction="left" delayMs={baseDelay + 100}>
        <h2 className="sp-service-title">{svc.title}</h2>
      </FadeIn>
      <FadeIn direction="left" delayMs={baseDelay + 150}>
        <p className="sp-service-desc">{svc.description}</p>
      </FadeIn>

      {/* Sub-cards (horizontal layout) */}
      <div className="sp-subcards-wrapper">
        {" "}
        <div className="sp-subcards-container">
          {svc.subCards.map((card, ci) => (
            <div
              key={card.titleTop || card.photo?.src || ci}
              className={`sp-subcard ${visible ? "sp-subcard-visible" : ""}`}
              style={{
                transitionDelay: `${ci * 150}ms`,
                ...(card.photo ? { flex: 2, padding: 0 } : {}),
              }}
            >
              {card.photo ? (
                <Image
                  src={card.photo.src}
                  alt={card.photo.alt}
                  width={card.photo.width}
                  height={card.photo.height}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              ) : (
                <>
                  <div className="sp-subcard-icon">
                    <Image
                      src={card.icon!}
                      alt={card.titleTop!}
                      width={card.iconW!}
                      height={card.iconH!}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div className="sp-subcard-titles">
                    <span className="sp-subcard-title-top">
                      {card.titleTop}
                    </span>
                    <span className="sp-subcard-title-bottom">
                      {card.titleBottom}
                    </span>
                  </div>
                  <div className="sp-subcard-lines">
                    {card.lines?.map((l) => (
                      <span key={l}>{l}</span>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="sp-tags-section">
        <FadeIn direction="left" delayMs={baseDelay + 100}>
          <div className="sp-divider-line"></div>
        </FadeIn>
        <div className="sp-tags-wrap">
          <FadeIn
            direction="up"
            delayMs={baseDelay + 150}
            className="flex items-center justify-center"
          >
            <span className="sp-tags-label">Services include:</span>
          </FadeIn>
          {svc.tags.map((tag, ti) => (
            <FadeIn
              key={tag}
              direction="up"
              delayMs={baseDelay + 200 + ti * 40}
            >
              <span className="sp-tag">{tag}</span>
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="right" delayMs={baseDelay + 150}>
          <div className="sp-divider-line"></div>
        </FadeIn>
      </div>
    </div>
  );
}

/* ─── main ─── */
export default function ServicesPage() {
  const handleBackToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="sp-page">
      {/* Green gradient glow backgrounds */}
      <div className="sp-glow sp-glow-1"></div>
      <div className="sp-glow sp-glow-2"></div>
      <div className="sp-glow sp-glow-3"></div>

      <section className="sp-section" id="services">
        <ServiceHeader />

        <div className="sp-content">
          {SERVICES.map((svc, idx) => (
            <ServiceBlock key={svc.id} svc={svc} index={idx} />
          ))}
        </div>
      </section>
      <button className="back-to-top" onClick={handleBackToTop}>
        Back to top
      </button>
    </div>
  );
}
