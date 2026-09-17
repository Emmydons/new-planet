'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { HOTEL_CONFIG } from '@/lib/hotel-config'
import { QuickBookingPanel } from './QuickBookingPanel'
import Link from 'next/link'

export function HeroSection() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HOTEL_CONFIG.hero.image}
          alt={HOTEL_CONFIG.hotelName}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/75" />
      </div>

      {/* Content — flex-1 so it fills the space above the booking bar */}
      <div className="relative z-10 flex-1 flex items-center justify-center pt-24 pb-6 px-6">
        <div className="text-center text-white max-w-4xl mx-auto w-full">
          {/* Gold eyebrow */}
          <div
            className={`flex items-center justify-center gap-4 mb-6 transition-all duration-1000 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="h-px w-10 bg-[#BF9B3C]" />
            <span className="text-[#BF9B3C] text-[10px] font-bold uppercase tracking-[0.3em]">
              Lagos, Nigeria
            </span>
            <div className="h-px w-10 bg-[#BF9B3C]" />
          </div>

          {/* Headline */}
          <h1
            className={`font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6 transition-all duration-1000 delay-200 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {HOTEL_CONFIG.hero.headline}
          </h1>

          {/* Gold ornament */}
          <div
            className={`flex items-center justify-center gap-3 mb-6 transition-all duration-1000 delay-300 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="h-px w-8 bg-[#BF9B3C]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#BF9B3C]" />
            <div className="h-px w-8 bg-[#BF9B3C]" />
          </div>

          {/* Subheadline */}
          <p
            className={`text-base md:text-lg text-white/75 max-w-xl mx-auto leading-relaxed mb-8 transition-all duration-1000 delay-400 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {HOTEL_CONFIG.hero.subheadline}
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-row gap-3 justify-center flex-wrap transition-all duration-1000 delay-500 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Link
              href="/rooms"
              className="px-7 py-3.5 bg-[#BF9B3C] text-white text-[10px] font-bold uppercase tracking-[0.18em] hover:bg-[#D4AC50] transition-colors duration-300 whitespace-nowrap"
            >
              Explore Suites
            </Link>
            <Link
              href="/contact"
              className="px-7 py-3.5 border border-white/60 text-white text-[10px] font-bold uppercase tracking-[0.18em] hover:bg-white/10 transition-colors duration-300 whitespace-nowrap"
            >
              Concierge
            </Link>
          </div>
        </div>
      </div>

      {/* Booking Bar — in document flow, not absolute, so content never overlaps */}
      <div
        className={`relative z-10 transition-all duration-1000 delay-700 ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <QuickBookingPanel />
      </div>
    </section>
  )
}
