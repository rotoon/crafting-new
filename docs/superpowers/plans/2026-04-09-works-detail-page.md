# Works Detail Page (`/works/[slug]`) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** สร้าง dynamic route `/works/[slug]` สำหรับแสดงหน้า project detail ของแต่ละลูกค้า ตาม design ใน Figma

**Architecture:** ใช้ Next.js App Router static dynamic route (`generateStaticParams`) เพื่อ pre-render ทุก slug ณ build time — ไม่ต้องใช้ API/server. Data อยู่ใน `data.ts` เพิ่ม `WORK_DETAILS` array เพื่อ map slug → content. Component `WorkDetailPage` รับ `WorkDetail` object แล้ว render ตาม Figma pattern

**Tech Stack:** Next.js 14 App Router · TypeScript · CSS Modules (globals.css) · next/image · FadeIn component (existing)

---

## File Map

| Action | File | Purpose |
|--------|------|---------|
| Modify | `src/components/works/data.ts` | เพิ่ม `WorkDetail` type + `WORK_DETAILS` array |
| Create | `src/app/works/[slug]/page.tsx` | Dynamic route — metadata + generateStaticParams |
| Create | `src/components/works/WorkDetailPage.tsx` | Detail page UI component |
| Modify | `src/app/globals.css` | CSS classes สำหรับ detail page (`.wd-*`) |
| Modify | `src/components/works/GraphicDesignSection.tsx` | เปลี่ยน `href="#"` → `href="/works/${item.id}"` |

---

## Task 1: เพิ่ม WorkDetail type และ WORK_DETAILS data ใน data.ts

**Files:**
- Modify: `src/components/works/data.ts`

- [ ] **Step 1: เพิ่ม type และ data ท้าย data.ts**

เพิ่มต่อจาก `PHOTO_SLIDES` ที่บรรทัด 128:

```typescript
export type WorkDetail = {
  id: string;           // slug (ตรงกับ id ใน GRAPHIC_DESIGN_ITEMS)
  client: string;       // ชื่อ client (bold label)
  businessType: string; // ประเภทธุรกิจ
  details: string;      // รายละเอียดงาน (multi-line ใช้ \n)
  logo: string;         // path ไปยัง client logo image
  images: string[];     // array ของ project images (1-5 รูป)
};

export const WORK_DETAILS: WorkDetail[] = [
  {
    id: "cma",
    client: "Central",
    businessType: "Department Store",
    details: "Hoarding Design / Counter Design /\nVisual Design",
    logo: "/assets/works/portfolio/clients/cma-color.webp",
    images: [
      "/assets/works/portfolio/details/cma-1.webp",
      "/assets/works/portfolio/details/cma-2.webp",
      "/assets/works/portfolio/details/cma-3.webp",
      "/assets/works/portfolio/details/cma-4.webp",
      "/assets/works/portfolio/details/cma-5.webp",
    ],
  },
  {
    id: "ggb",
    client: "Go Green Bar",
    businessType: "Bar & Cafe",
    details: "Branding / Visual Design /\nPackaging Design",
    logo: "/assets/works/portfolio/clients/ggb-color.webp",
    images: [
      "/assets/works/portfolio/details/ggb-1.webp",
      "/assets/works/portfolio/details/ggb-2.webp",
      "/assets/works/portfolio/details/ggb-3.webp",
    ],
  },
  {
    id: "somm",
    client: "SOMM",
    businessType: "Restaurant",
    details: "Branding / Menu Design /\nVisual Design",
    logo: "/assets/works/portfolio/clients/somm-color.webp",
    images: [
      "/assets/works/portfolio/details/somm-1.webp",
      "/assets/works/portfolio/details/somm-2.webp",
      "/assets/works/portfolio/details/somm-3.webp",
    ],
  },
  {
    id: "gomaew",
    client: "Gomaew",
    businessType: "Retail",
    details: "Branding / Packaging Design /\nVisual Design",
    logo: "/assets/works/portfolio/clients/gomaew-color.webp",
    images: [
      "/assets/works/portfolio/details/gomaew-1.webp",
      "/assets/works/portfolio/details/gomaew-2.webp",
      "/assets/works/portfolio/details/gomaew-3.webp",
    ],
  },
  {
    id: "baipo",
    client: "Baipo",
    businessType: "Restaurant",
    details: "Branding / Menu Design /\nVisual Design",
    logo: "/assets/works/portfolio/clients/baipo-color.webp",
    images: [
      "/assets/works/portfolio/details/baipo-1.webp",
      "/assets/works/portfolio/details/baipo-2.webp",
      "/assets/works/portfolio/details/baipo-3.webp",
    ],
  },
  {
    id: "nat",
    client: "Nat Motor",
    businessType: "Automotive",
    details: "Branding / Visual Design /\nSocial Media Design",
    logo: "/assets/works/portfolio/clients/nat-color.webp",
    images: [
      "/assets/works/portfolio/details/nat-1.webp",
      "/assets/works/portfolio/details/nat-2.webp",
      "/assets/works/portfolio/details/nat-3.webp",
    ],
  },
  {
    id: "kong",
    client: "Kong Mart",
    businessType: "Retail",
    details: "Branding / Signage Design /\nVisual Design",
    logo: "/assets/works/portfolio/clients/kong-color.webp",
    images: [
      "/assets/works/portfolio/details/kong-1.webp",
      "/assets/works/portfolio/details/kong-2.webp",
      "/assets/works/portfolio/details/kong-3.webp",
    ],
  },
  {
    id: "paincare",
    client: "Pain Care",
    businessType: "Medical Clinic",
    details: "Branding / Visual Design /\nSocial Media Design",
    logo: "/assets/works/portfolio/clients/paincare-color.webp",
    images: [
      "/assets/works/portfolio/details/paincare-1.webp",
      "/assets/works/portfolio/details/paincare-2.webp",
      "/assets/works/portfolio/details/paincare-3.webp",
    ],
  },
  {
    id: "gsl",
    client: "GSL",
    businessType: "Business",
    details: "Branding / Visual Design /\nMarketing Material",
    logo: "/assets/works/portfolio/clients/gsl-color.webp",
    images: [
      "/assets/works/portfolio/details/gsl-1.webp",
      "/assets/works/portfolio/details/gsl-2.webp",
      "/assets/works/portfolio/details/gsl-3.webp",
    ],
  },
  {
    id: "nor",
    client: "Nor",
    businessType: "Restaurant",
    details: "Branding / Menu Design /\nVisual Design",
    logo: "/assets/works/portfolio/clients/nor-color.webp",
    images: [
      "/assets/works/portfolio/details/nor-1.webp",
      "/assets/works/portfolio/details/nor-2.webp",
      "/assets/works/portfolio/details/nor-3.webp",
    ],
  },
  {
    id: "moreeda",
    client: "Moreeda",
    businessType: "Fashion",
    details: "Branding / Packaging Design /\nVisual Design",
    logo: "/assets/works/portfolio/clients/moreeda-color.webp",
    images: [
      "/assets/works/portfolio/details/moreeda-1.webp",
      "/assets/works/portfolio/details/moreeda-2.webp",
      "/assets/works/portfolio/details/moreeda-3.webp",
    ],
  },
  {
    id: "vinzen",
    client: "The Vinzen",
    businessType: "Real Estate",
    details: "Branding / Visual Design /\nMarketing Material",
    logo: "/assets/works/portfolio/clients/vinzen-color.webp",
    images: [
      "/assets/works/portfolio/details/vinzen-1.webp",
      "/assets/works/portfolio/details/vinzen-2.webp",
      "/assets/works/portfolio/details/vinzen-3.webp",
    ],
  },
  {
    id: "cmh",
    client: "Cake Me Home",
    businessType: "Bakery",
    details: "Branding / Packaging Design /\nVisual Design",
    logo: "/assets/works/portfolio/clients/cmh-color.webp",
    images: [
      "/assets/works/portfolio/details/cmh-1.webp",
      "/assets/works/portfolio/details/cmh-2.webp",
      "/assets/works/portfolio/details/cmh-3.webp",
    ],
  },
  {
    id: "funky",
    client: "Funky",
    businessType: "Bar & Cafe",
    details: "Branding / Visual Design /\nSocial Media Design",
    logo: "/assets/works/portfolio/clients/funky-color.webp",
    images: [
      "/assets/works/portfolio/details/funky-1.webp",
      "/assets/works/portfolio/details/funky-2.webp",
      "/assets/works/portfolio/details/funky-3.webp",
    ],
  },
];
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
pnpm build 2>&1 | head -30
```

Expected: ไม่มี type error ใน data.ts

- [ ] **Step 3: Commit**

```bash
git add src/components/works/data.ts
git commit -m "feat: add WorkDetail type and WORK_DETAILS data"
```

---

## Task 2: สร้าง dynamic route page

**Files:**
- Create: `src/app/works/[slug]/page.tsx`

- [ ] **Step 1: สร้าง directory และ file**

```bash
mkdir -p src/app/works/\[slug\]
```

- [ ] **Step 2: เขียน page.tsx**

```typescript
// src/app/works/[slug]/page.tsx
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkDetailPage from "@/components/works/WorkDetailPage";
import { WORK_DETAILS } from "@/components/works/data";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return WORK_DETAILS.map((work) => ({ slug: work.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = WORK_DETAILS.find((w) => w.id === slug);
  if (!work) return {};
  return {
    title: `${work.client} — Works | CRAFTING LAB`,
    description: `${work.client} — ${work.details.replace(/\n/g, " ")}`,
  };
}

export default async function WorkDetailRoute({ params }: Props) {
  const { slug } = await params;
  const work = WORK_DETAILS.find((w) => w.id === slug);
  if (!work) notFound();

  return (
    <>
      <Navbar />
      <main>
        <WorkDetailPage work={work} />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 3: Verify build ผ่าน**

```bash
pnpm build 2>&1 | grep -E "error|Error|✓|✗" | head -20
```

Expected: ไม่มี error, route `/works/[slug]` ปรากฏใน output

- [ ] **Step 4: Commit**

```bash
git add src/app/works/\[slug\]/page.tsx
git commit -m "feat: add works/[slug] dynamic route"
```

---

## Task 3: สร้าง WorkDetailPage component

**Files:**
- Create: `src/components/works/WorkDetailPage.tsx`

- [ ] **Step 1: เขียน component**

```typescript
// src/components/works/WorkDetailPage.tsx
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
      {/* Back to Menu button — right side */}
      <button
        className="wd-back-btn"
        onClick={() => router.push("/works")}
        aria-label="Back to Works"
      >
        <span className="wd-back-icon">☰</span>
        <span className="wd-back-label">Back to<br />Menu</span>
      </button>

      {/* Header: logo + meta */}
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
            {work.details.split("\n").map((line, i) => (
              <p key={i}>{i === 0 ? work.client : i === 1 ? work.businessType : line}</p>
            ))}
            <p>{work.client}</p>
            <p>{work.businessType}</p>
            {work.details.split("\n").map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Project images */}
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
```

**หมายเหตุ:** meta section มี bug ใน step นี้ (ซ้ำกัน) — จะแก้ใน Task 4 พร้อม CSS

- [ ] **Step 2: แก้ไข meta section ให้ถูกต้อง**

แก้ส่วน `wd-meta` ให้เป็น:

```typescript
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
```

Full corrected component (ทั้งไฟล์):

```typescript
// src/components/works/WorkDetailPage.tsx
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
        <span className="wd-back-label">Back to<br />Menu</span>
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
```

- [ ] **Step 3: Commit**

```bash
git add src/components/works/WorkDetailPage.tsx
git commit -m "feat: add WorkDetailPage component"
```

---

## Task 4: เพิ่ม CSS สำหรับ detail page ใน globals.css

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: เพิ่ม CSS block ท้ายไฟล์ globals.css**

```css
/* ----- WORK DETAIL PAGE (.wd-*) ----- */
.wd-section {
  position: relative;
  background: var(--dark);
  min-height: 100vh;
  padding-top: 65px; /* navbar height */
}

/* Back to Menu button — fixed right edge */
.wd-back-btn {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: none;
  color: var(--white);
  cursor: pointer;
  padding: 16px 12px;
  z-index: 10;
  width: 89px;
}

.wd-back-icon {
  font-size: 28px;
  line-height: 1;
  opacity: 0.7;
}

.wd-back-label {
  font-family: var(--font-heading);
  font-size: 14px;
  letter-spacing: 0.5px;
  line-height: 1.4;
  text-align: center;
  opacity: 0.7;
}

.wd-back-btn:hover .wd-back-icon,
.wd-back-btn:hover .wd-back-label {
  opacity: 1;
}

/* Header row: logo + meta */
.wd-header {
  display: flex;
  align-items: flex-start;
  gap: 0;
  padding: 40px 177px 40px 177px;
  max-width: var(--max-width);
  margin: 0 auto;
}

.wd-logo-wrap {
  width: 350px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  padding-top: 8px;
}

.wd-logo {
  object-fit: contain;
  max-height: 99px;
  width: auto;
}

.wd-meta {
  display: flex;
  gap: 24px;
  flex: 1;
}

.wd-meta-labels {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.wd-meta-labels p {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 26px;
  letter-spacing: 1px;
  color: var(--white);
  line-height: 1.5;
}

.wd-meta-values {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.wd-meta-values p {
  font-family: var(--font-heading);
  font-size: 26px;
  letter-spacing: 1px;
  color: var(--white);
  line-height: 1.5;
}

/* Images stack */
.wd-images {
  display: flex;
  flex-direction: column;
  gap: 0;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 177px;
}

.wd-image-wrap {
  width: 100%;
  aspect-ratio: 1086 / 611;
  position: relative;
  overflow: hidden;
  margin-bottom: 8px;
}

.wd-image {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover;
}

/* Back to top — reuse existing .back-to-top class */

/* Responsive */
@media (max-width: 900px) {
  .wd-header {
    flex-direction: column;
    padding: 32px 24px;
    gap: 24px;
  }

  .wd-logo-wrap {
    width: 100%;
  }

  .wd-images {
    padding: 0 24px;
  }

  .wd-meta {
    flex-direction: column;
    gap: 16px;
  }

  .wd-meta-labels p,
  .wd-meta-values p {
    font-size: 18px;
  }

  .wd-back-btn {
    display: none;
  }
}
```

- [ ] **Step 2: ตรวจสอบ globals.css ว่า `.back-to-top` มีอยู่แล้ว**

```bash
grep -n "back-to-top" src/app/globals.css | head -10
```

Expected: มี `.back-to-top` class อยู่แล้ว — ถ้าไม่มีให้เพิ่ม:

```css
.back-to-top {
  display: block;
  margin: 48px auto;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  font-family: var(--font-heading);
  font-size: 27px;
  letter-spacing: 1px;
  cursor: pointer;
  text-align: center;
}
```

- [ ] **Step 3: Commit**

```bash
git add src/app/globals.css
git commit -m "feat: add work detail page CSS styles"
```

---

## Task 5: เชื่อม GraphicDesignSection cards → detail pages

**Files:**
- Modify: `src/components/works/GraphicDesignSection.tsx`

- [ ] **Step 1: Import WORK_DETAILS และเปลี่ยน href**

แก้ไขไฟล์ `src/components/works/GraphicDesignSection.tsx`:

```typescript
"use client";
import Image from "next/image";
import FadeIn from "../FadeIn";
import { GRAPHIC_DESIGN_ITEMS, WORK_DETAILS } from "./data";

export default function GraphicDesignSection() {
  // สร้าง Set ของ slug ที่มี detail page
  const detailIds = new Set(WORK_DETAILS.map((w) => w.id));

  return (
    <section className="wk-gd-section">
      <div className="wk-inner">
        <FadeIn direction="up">
          <div className="wk-label-row">
            <div className="wk-label-accent" />
            <span className="wk-label-text wk-label-text--white">GRAPHIC DESIGN</span>
          </div>
        </FadeIn>
      </div>

      <FadeIn className="wk-gd-grid" delayMs={150}>
        {GRAPHIC_DESIGN_ITEMS.map((item) => (
          <a
            key={item.id}
            href={detailIds.has(item.id) ? `/works/${item.id}` : "#"}
            className="wk-gd-card"
          >
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
  );
}
```

- [ ] **Step 2: Build และ verify ไม่มี error**

```bash
pnpm build 2>&1 | grep -E "error|Error|✓" | head -20
```

Expected: build ผ่าน, มี `/works/[slug]` ใน static pages output

- [ ] **Step 3: Commit**

```bash
git add src/components/works/GraphicDesignSection.tsx
git commit -m "feat: link graphic design cards to detail pages"
```

---

## Task 6: สร้าง placeholder images directory

**Files:**
- สร้าง `public/assets/works/portfolio/details/` directory

เนื่องจาก detail images ยังไม่มี จึงต้องเตรียม directory และ fallback handling

- [ ] **Step 1: สร้าง directory**

```bash
mkdir -p public/assets/works/portfolio/details
```

- [ ] **Step 2: เพิ่ม fallback ใน WorkDetailPage สำหรับ image ที่หายไป**

แก้ `wd-image-wrap` ใน `WorkDetailPage.tsx` เพิ่ม error handling:

```typescript
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
```

- [ ] **Step 3: Commit**

```bash
git add public/assets/works/portfolio/details/.gitkeep
git commit -m "chore: add detail images directory placeholder"
```

---

## ขั้นตอนถัดไป (ทำภายหลัง)

เมื่อมีไฟล์รูปจาก Figma/client แล้ว:
1. วางรูปในรูปแบบ `public/assets/works/portfolio/details/{id}-{1-5}.webp`
2. อัปเดต `WORK_DETAILS[n].images` ให้ตรงกับ path จริง

---

## Summary ของ slugs ที่ implement แล้ว

| Slug | Client | Route |
|------|--------|-------|
| `cma` | Central Chiangmai Airport | `/works/cma` |
| `ggb` | Go Green Bar | `/works/ggb` |
| `somm` | SOMM | `/works/somm` |
| `gomaew` | Gomaew | `/works/gomaew` |
| `baipo` | Baipo | `/works/baipo` |
| `nat` | Nat Motor | `/works/nat` |
| `kong` | Kong Mart | `/works/kong` |
| `paincare` | Pain Care | `/works/paincare` |
| `gsl` | GSL | `/works/gsl` |
| `nor` | Nor | `/works/nor` |
| `moreeda` | Moreeda | `/works/moreeda` |
| `vinzen` | The Vinzen | `/works/vinzen` |
| `cmh` | Cake Me Home | `/works/cmh` |
| `funky` | Funky | `/works/funky` |
