"use client";
import { useState } from "react";
import FadeIn from "../FadeIn";
import { VIDEO_CATEGORIES, PRODUCTION_VIDEOS } from "./data";

export default function VideoProductionSection() {
  const [videoCat, setVideoCat] = useState("");
  const [videoIndex, setVideoIndex] = useState(0);

  const filteredVideos = PRODUCTION_VIDEOS.filter(
    (v) => videoCat === "" || v.category === videoCat,
  );
  const total = filteredVideos.length;
  const isInfinite = total >= 3;
  const displayItems = isInfinite
    ? [...filteredVideos, ...filteredVideos, ...filteredVideos]
    : filteredVideos;
  const trackIndex = isInfinite ? total + videoIndex : videoIndex;

  const handlePrev = () => setVideoIndex((i) => (i - 1 + total) % total);
  const handleNext = () => setVideoIndex((i) => (i + 1) % total);

  return (
    <section className="wk-vp-section" id="production-showcase">
      <div className="wk-inner">
        <div className="wk-header-row">
          <FadeIn direction="up">
            <div className="wk-label-row">
              <div className="wk-label-accent" />
              <span className="wk-label-text">VIDEO PRODUCTION</span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delayMs={100}>
            <div className="wk-vp-tabs">
              {VIDEO_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className={`wk-vp-tab ${videoCat === cat ? "wk-vp-tab--active" : ""}`}
                  onClick={() => {
                    setVideoCat(cat);
                    setVideoIndex(0);
                  }}
                  type="button"
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="wk-vp-stage">
        <FadeIn
          className={`wk-vp-cards ${!isInfinite ? "wk-vp-cards--static" : ""}`}
          style={
            isInfinite
              ? {
                  transform: `translateX(calc(50% - (var(--wk-card-w) / 2) - (${trackIndex} * (var(--wk-card-w) + var(--wk-card-gap)))))`,
                }
              : {}
          }
        >
          {displayItems.length > 0 ? (
            displayItems.map((video, i) => {
              const currentIdx = i % total;
              const isCenter = isInfinite ? i === trackIndex : currentIdx === videoIndex;

              return (
                <div
                  key={`${video.id}-${i}`}
                  className={`wk-vp-card ${isCenter ? "wk-vp-card--center" : ""}`}
                  onClick={() => {
                    setVideoIndex(isInfinite ? currentIdx : i);
                  }}
                >
                  <video
                    key={`${video.id}-${i}`}
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
            })
          ) : (
            <div className="wk-vp-empty">No videos found for this category.</div>
          )}
        </FadeIn>

        {isInfinite && (
          <div className="wk-vp-nav">
            <button className="wk-vp-arrow" onClick={handlePrev} aria-label="Previous video" type="button">
              ←
            </button>
            <button className="wk-vp-arrow" onClick={handleNext} aria-label="Next video" type="button">
              →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
