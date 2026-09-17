'use client'

import { HOTEL_CONFIG } from '@/lib/hotel-config'
import { Phone, MessageCircle, Calendar } from 'lucide-react'
import Link from 'next/link'

export function MobileBottomBar() {
  const handleCall = () => {
    window.location.href = `tel:${HOTEL_CONFIG.phone}`
  }

  const handleWhatsApp = () => {
    const message = 'Hi, I am interested in booking a room at New Planet Resorts.'
    const whatsappUrl = `https://wa.me/${HOTEL_CONFIG.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#141210] border-t border-white/10 flex">
      <button
        onClick={handleCall}
        className="flex-1 flex flex-col items-center justify-center gap-1 py-3 text-white/50 hover:text-[#BF9B3C] transition-colors"
      >
        <Phone size={18} />
        <span className="text-[10px] uppercase tracking-widest">Call</span>
      </button>
      <button
        onClick={handleWhatsApp}
        className="flex-1 flex flex-col items-center justify-center gap-1 py-3 text-white/50 hover:text-[#BF9B3C] transition-colors border-x border-white/10"
      >
        <MessageCircle size={18} />
        <span className="text-[10px] uppercase tracking-widest">WhatsApp</span>
      </button>
      <Link
        href="/rooms"
        className="flex-1 flex flex-col items-center justify-center gap-1 py-3 bg-[#BF9B3C] text-white"
      >
        <Calendar size={18} />
        <span className="text-[10px] uppercase tracking-widest">Reserve</span>
      </Link>
    </div>
  )
}
