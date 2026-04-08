export const SHOWCASE_ITEMS = [
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

export const GRAPHIC_DESIGN_ITEMS = [
  { id: "cma", name: "Central Chiangmai Airport", image: "/assets/works/portfolio/clients/cma-dark.webp", hoverImage: "/assets/works/portfolio/clients/cma-color.webp" },
  { id: "ggb", name: "Go Green Bar", image: "/assets/works/portfolio/clients/ggb-dark.webp", hoverImage: "/assets/works/portfolio/clients/ggb-color.webp" },
  { id: "payon", name: "Payon", image: "/assets/works/portfolio/clients/payon-dark.webp", hoverImage: "/assets/works/portfolio/clients/payon-color.webp" },
  { id: "kong", name: "Kong Mart", image: "/assets/works/portfolio/clients/kong-dark.webp", hoverImage: "/assets/works/portfolio/clients/kong-color.webp" },
  { id: "gomaew", name: "Gomaew", image: "/assets/works/portfolio/clients/gomaew-dark.webp", hoverImage: "/assets/works/portfolio/clients/gomaew-color.webp" },
  { id: "blanc", name: "Blanc All Day Eatery", image: "/assets/works/portfolio/clients/blanc-dark.webp", hoverImage: "/assets/works/portfolio/clients/blanc-color.webp" },
  { id: "vinzen", name: "The Vinzen", image: "/assets/works/portfolio/clients/vinzen-dark.webp", hoverImage: "/assets/works/portfolio/clients/vinzen-color.webp" },
  { id: "nat", name: "Nat Bar", image: "/assets/works/portfolio/clients/nat-dark.webp", hoverImage: "/assets/works/portfolio/clients/nat-color.webp" },
  { id: "paincare", name: "Pain Care", image: "/assets/works/portfolio/clients/paincare-dark.webp", hoverImage: "/assets/works/portfolio/clients/paincare-color.webp" },
  { id: "ggc", name: "Go Green Consult", image: "/assets/works/portfolio/clients/ggc-dark.webp", hoverImage: "/assets/works/portfolio/clients/ggc-color.webp" },
  { id: "funky", name: "Funky", image: "/assets/works/portfolio/clients/funky-dark.webp", hoverImage: "/assets/works/portfolio/clients/funky-color.webp" },
  { id: "nor", name: "Nor", image: "/assets/works/portfolio/clients/nor-dark.webp", hoverImage: "/assets/works/portfolio/clients/nor-color.webp" },
  { id: "moreeda", name: "Moreeda", image: "/assets/works/portfolio/clients/moreeda-dark.webp", hoverImage: "/assets/works/portfolio/clients/moreeda-color.webp" },
  { id: "cc", name: "CC", image: "/assets/works/portfolio/clients/cc-dark.webp", hoverImage: "/assets/works/portfolio/clients/cc-color.webp" },
  { id: "cmh", name: "CMH", image: "/assets/works/portfolio/clients/cmh-dark.webp", hoverImage: "/assets/works/portfolio/clients/cmh-color.webp" },
  { id: "gsl", name: "GSL", image: "/assets/works/portfolio/clients/gsl-dark.webp", hoverImage: "/assets/works/portfolio/clients/gsl-color.webp" },
  { id: "baipo", name: "Baipo", image: "/assets/works/portfolio/clients/baipo-dark.webp", hoverImage: "/assets/works/portfolio/clients/baipo-color.webp" },
  { id: "ggc2", name: "GGC", image: "/assets/works/portfolio/clients/ggc2-dark.webp", hoverImage: "/assets/works/portfolio/clients/ggc2-color.webp" },
  { id: "chidlom", name: "Chidlom", image: "/assets/works/portfolio/clients/chidlom-dark.webp", hoverImage: "/assets/works/portfolio/clients/chidlom-color.webp" },
  { id: "somm", name: "Somm", image: "/assets/works/portfolio/clients/somm-dark.webp", hoverImage: "/assets/works/portfolio/clients/somm-color.webp" },
];

export const VIDEO_CATEGORIES = ["Real Estate", "Restaurant", "Food", "Clinic", "Bar&Cafe"];

export type VideoItem = {
  id: string;
  src: string;
  thumbnail: string;
  alt: string;
  category: string;
};

const createYouTubeShort = (
  id: string,
  category: string,
  alt: string,
): VideoItem => ({
  id,
  src: `https://www.youtube.com/embed/${id}?playsinline=1&rel=0&modestbranding=1`,
  thumbnail: `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
  alt,
  category,
});

export const PRODUCTION_VIDEOS: VideoItem[] = [
  createYouTubeShort(
    "UPqGsHt7fkA",
    "Real Estate",
    "Real Estate video production showcase",
  ),
  createYouTubeShort(
    "aaqykWnnUzE",
    "Restaurant",
    "Restaurant video production showcase",
  ),
  createYouTubeShort("Sldg55p42jU", "Food", "Food video production showcase"),
  createYouTubeShort(
    "HVRnOXuqMYI",
    "Clinic",
    "Clinic video production showcase",
  ),
  createYouTubeShort(
    "XAQn98HVJw4",
    "Bar&Cafe",
    "Bar and cafe video production showcase",
  ),
];

export const PHOTO_CATEGORIES = ["PACKSHOT", "STYLING", "VIBE", "ADVERTISING"];

export const PHOTO_FAN = [
  { rotate: 0.88, yOffset: 77 },
  { rotate: -4.98, yOffset: 0 },
  { rotate: 0, yOffset: 130 },
  { rotate: 4.98, yOffset: 0 },
  { rotate: -0.88, yOffset: 77 },
];

export const PHOTO_ITEMS = [
  { id: "ph-1", image: "/assets/works/photography/ph-1.png", alt: "Packshot 1" },
  { id: "ph-2", image: "/assets/works/photography/ph-2.png", alt: "Styling 1" },
  { id: "ph-3", image: "/assets/works/photography/ph-3.png", alt: "Vibe 1" },
  { id: "ph-4", image: "/assets/works/photography/ph-4.png", alt: "Advertising 1" },
  { id: "ph-5", image: "/assets/works/photography/ph-5.png", alt: "Packshot 2" },
];
