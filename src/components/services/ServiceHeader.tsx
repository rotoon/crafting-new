"use client";
import FadeIn from "../FadeIn";
import { SUBTITLE_LINES } from "./data";

export default function ServiceHeader() {
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
