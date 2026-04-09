"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import FadeIn from "../FadeIn";
import type { WorkDetail } from "./data";

type Props = {
  work: WorkDetail;
};

export default function WorkDetailPage({ work }: Props) {
  const router = useRouter();

  const handleBackToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="wd-section">
      {/* Back to Menu button — fixed right side */}
      <button
        className="wd-back-btn"
        onClick={() => router.push("/works")}
        aria-label="Back to Works"
      >
        <span className="wd-back-icon">☰</span>
        <span className="wd-back-label">
          Back to
          <br />
          Menu
        </span>
      </button>

      {/* Header: logo + project meta */}
      <FadeIn className="wd-header">
        <div className="wd-logo-wrap">
          <Image
            src={work.logo}
            alt={work.client}
            width={287}
            height={99}
            className="wd-logo"
            unoptimized
          />
        </div>
        <div className="wd-meta">
          <div className="wd-meta-labels">
            <p>Client</p>
            <p>Business Type</p>
            <p>Details</p>
          </div>
          <div className="wd-meta-values">
            <p>{work.client}</p>
            <p>{work.businessType}</p>
            {work.details.split("\n").map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Project images stack */}
      <div className="wd-images">
        {work.images.map((src, i) => (
          <FadeIn key={src} delayMs={i * 80} className="wd-image-wrap">
            <Image
              src={src}
              alt={`${work.client} project image ${i + 1}`}
              width={1086}
              height={611}
              className="wd-image"
              unoptimized
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </FadeIn>
        ))}
      </div>

      {/* Back to top */}
      <button className="back-to-top" onClick={handleBackToTop}>
        Back to top
      </button>
    </section>
  );
}
