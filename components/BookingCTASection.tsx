'use client'

import { HOTEL_CONFIG } from '@/lib/hotel-config'
import { Phone } from 'lucide-react'

export function BookingCTASection() {
  const handleBooking = () => {
    const message = 'I would like to make a reservation at New Planet Resorts.'
    const whatsappUrl = `https://wa.me/${HOTEL_CONFIG.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section className="py-32 bg-[#FAFAF6]">
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center fade-in">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-12 bg-[#BF9B3C]" />
          <span className="text-[#BF9B3C] text-[11px] font-bold uppercase tracking-[0.3em]">
            Begin Your Journey
          </span>
          <div className="h-px w-12 bg-[#BF9B3C]" />
        </div>

        <h2 className="font-serif text-5xl md:text-6xl font-light text-[#1C1816] mb-6 leading-tight">
          Ready to Experience<br />True Luxury?
        </h2>

        <p className="text-[#7A6E65] text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          Allow our dedicated team to curate an unforgettable experience tailored to your desires.
          Your journey to exceptional hospitality begins with a single reservation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleBooking}
            className="px-12 py-4 bg-[#1C1816] text-white text-[11px] font-bold uppercase tracking-[0.22em] hover:bg-[#BF9B3C] transition-colors duration-300"
          >
            Reserve via WhatsApp
          </button>
          <a
            href={`tel:${HOTEL_CONFIG.phone}`}
            className="px-12 py-4 border border-[#1C1816] text-[#1C1816] text-[11px] font-bold uppercase tracking-[0.22em] hover:bg-[#1C1816] hover:text-white transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <Phone size={13} />
            {HOTEL_CONFIG.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
