'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import FadeIn from '../FadeIn'
import BackToTop from '../BackToTop'
import type { WorkDetail } from './data'

type Props = {
  work: WorkDetail
  onBack?: () => void
  onBackToTop?: () => void
}

export default function WorkDetailPage({ work, onBack, onBackToTop }: Props) {
  const router = useRouter()

  const handleBack = onBack ?? (() => router.push('/works'))

  return (
    <section className='wd-section'>
      {/* Back to Menu button — fixed right side */}
      <button
        className='wd-back-btn'
        onClick={handleBack}
        aria-label='Back to Works'
      >
        <span className='wd-back-icon'>☰</span>
        <span className='wd-back-label'>
          Back to
          <br />
          Menu
        </span>
      </button>

      {/* Header: logo + project meta */}
      <FadeIn className='wd-header'>
        <div className='wd-logo-wrap'>
          <Image
            src={work.logo}
            alt={work.client}
            width={200}
            height={80}
            className='wd-logo'
            style={{ width: 'auto', height: 'auto' }}
          />
        </div>
        <div className='wd-meta'>
          <div className='wd-meta-labels'>
            <p>Client</p>
            <p>Business Type</p>
            <p>Details</p>
          </div>
          <div className='wd-meta-values'>
            <p>{work.client}</p>
            <p>{work.businessType}</p>
            {work.details.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Optional description paragraph */}
      {work.description && (
        <FadeIn className='wd-description'>
          {work.description.split('\n').map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </FadeIn>
      )}

      {/* Project images stack */}
      <div className='wd-images'>
        {work.images.map((src, i) => (
          <FadeIn key={src} delayMs={i * 80} className='wd-image-wrap'>
            <Image
              src={src}
              alt={`${work.client} project image ${i + 1}`}
              width={1086}
              height={611}
              className='wd-image'
              sizes='(max-width: 900px) calc(100vw - 48px), 1086px'
              priority={i === 0}
              quality={75}
              onError={(e) => {
                ;(e.target as HTMLImageElement).style.display = 'none'
              }}
            />
          </FadeIn>
        ))}
      </div>

      <BackToTop onScrollToTop={onBackToTop} />
    </section>
  )
}
