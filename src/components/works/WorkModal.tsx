'use client'

import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'
import WorkDetailPage from './WorkDetailPage'
import type { WorkDetail } from './data'

type Props = {
  work: WorkDetail
}

export default function WorkModal({ work }: Props) {
  const router = useRouter()
  const [closing, setClosing] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const close = useCallback((callback?: () => void) => {
    if (closing) return
    setClosing(true)
    setTimeout(() => {
      if (callback) callback()
      else router.back()
    }, 400)
  }, [closing, router])

  // Intercept all <a> link clicks inside the panel
  useEffect(() => {
    const panel = panelRef.current
    if (!panel) return

    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a[href]')
      if (!anchor) return
      const href = anchor.getAttribute('href')
      if (!href || href === '#') return

      e.preventDefault()
      e.stopPropagation()
      const destination = href
      close(() => router.push(destination))
    }

    panel.addEventListener('click', handleClick, true)
    return () => panel.removeEventListener('click', handleClick, true)
  }, [close, router])

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [close])

  // Lock body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <div
      className={`wm-backdrop ${closing ? 'wm-backdrop--closing' : ''}`}
      onClick={() => close()}
      aria-modal='true'
      role='dialog'
    >
      <div
        ref={panelRef}
        className={`wm-panel ${closing ? 'wm-panel--closing' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className='wm-scroll' ref={scrollRef}>
          <WorkDetailPage
            work={work}
            onBack={() => close()}
            onBackToTop={() => scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' })}
          />
        </div>
      </div>
    </div>
  )
}
