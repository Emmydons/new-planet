'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function ScrollAnimationsProvider() {
  const pathname = usePathname()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    const observe = () => {
      document.querySelectorAll('.fade-in:not(.visible)').forEach((el) => observer.observe(el))
    }

    observe()
    const id = setTimeout(observe, 120)

    return () => {
      clearTimeout(id)
      observer.disconnect()
    }
  }, [pathname]) // re-run on every page navigation

  return null
}
