"use client";
import { useCallback } from "react";
import ShowcasesSection from "./ShowcasesSection";
import GraphicDesignSection from "./GraphicDesignSection";
import VideoProductionSection from "./VideoProductionSection";
import PhotographySection from "./PhotographySection";

export default function WorksPage() {
  const handleBackToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <ShowcasesSection />
      <GraphicDesignSection />
      <VideoProductionSection />
      <PhotographySection />
      <button className="back-to-top" onClick={handleBackToTop}>
        Back to top
      </button>
    </>
  );
}
