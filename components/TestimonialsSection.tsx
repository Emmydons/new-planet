'use client'

import { useState } from 'react'
import Image from 'next/image'
import { HOTEL_CONFIG } from '@/lib/hotel-config'
import { Star } from 'lucide-react'

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const testimonials = HOTEL_CONFIG.testimonials
  const current = testimonials[currentIndex]

  return (
    <section className="py-32 bg-[#1C1816]">
      <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
        {/* Label */}
        <div className="flex items-center justify-center gap-4 mb-16 fade-in">
          <div className="h-px w-12 bg-[#BF9B3C]" />
          <span className="text-[#BF9B3C] text-[11px] font-bold uppercase tracking-[0.3em]">
            Guest Voices
          </span>
          <div className="h-px w-12 bg-[#BF9B3C]" />
        </div>

        <div className="fade-in">
          {/* Giant quote */}
          <div
            className="font-serif leading-none text-[#BF9B3C]/15 select-none -mb-6"
            style={{ fontSize: '10rem' }}
          >
            &ldquo;
          </div>

          {/* Stars */}
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} size={15} className="fill-[#BF9B3C] text-[#BF9B3C]" />
            ))}
          </div>

          {/* Quote */}
          <p className="font-serif text-2xl md:text-3xl text-white/90 leading-relaxed mb-12 italic">
            {current.message}
          </p>

          {/* Author */}
          <div className="flex items-center justify-center gap-4">
            <div className="relative w-14 h-14 overflow-hidden border-2 border-[#BF9B3C]">
              <Image
                src={current.image}
                alt={current.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-left">
              <p className="text-white font-semibold">{current.name}</p>
              <p className="text-[#BF9B3C] text-[11px] uppercase tracking-[0.15em]">{current.role}</p>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-px transition-all duration-300 ${
                  idx === currentIndex
                    ? 'w-10 bg-[#BF9B3C]'
                    : 'w-4 bg-white/25 hover:bg-white/50'
                }`}
                aria-label={`Testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
