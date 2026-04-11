"use client";

type Props = {
  onScrollToTop?: () => void;
};

export default function BackToTop({ onScrollToTop }: Props) {
  const handleClick = onScrollToTop ?? (() => window.scrollTo({ top: 0, behavior: "smooth" }));
  return (
    <button className="back-to-top" onClick={handleClick}>
      Back to top
    </button>
  );
}
