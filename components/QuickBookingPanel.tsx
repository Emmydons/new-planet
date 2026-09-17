'use client'

import { useState } from 'react'
import { HOTEL_CONFIG } from '@/lib/hotel-config'

export function QuickBookingPanel() {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState('2 Adults')

  const handleBooking = () => {
    const message = `I would like to reserve a suite at New Planet Resorts from ${checkIn} to ${checkOut} for ${guests}.`
    const whatsappUrl = `https://wa.me/${HOTEL_CONFIG.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const labelClass = 'block text-[10px] font-bold uppercase tracking-[0.2em] text-[#BF9B3C] mb-1'
  const fieldClass = 'w-full bg-transparent text-[#1C1816] text-sm font-medium outline-none'

  return (
    <div className="bg-white/96 backdrop-blur-sm border-t-2 border-[#BF9B3C] w-full">
      <div className="flex flex-col md:flex-row">
        {/* Check-in */}
        <div className="flex-1 px-5 py-4 border-b md:border-b-0 md:border-r border-[#E6DDD2]">
          <label className={labelClass}>Arrival</label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className={fieldClass}
          />
        </div>

        {/* Check-out */}
        <div className="flex-1 px-5 py-4 border-b md:border-b-0 md:border-r border-[#E6DDD2]">
          <label className={labelClass}>Departure</label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className={fieldClass}
          />
        </div>

        {/* Guests */}
        <div className="flex-1 px-5 py-4 border-b md:border-b-0 md:border-r border-[#E6DDD2]">
          <label className={labelClass}>Guests</label>
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className={fieldClass}
          >
            <option>1 Adult</option>
            <option>2 Adults</option>
            <option>2 Adults, 1 Child</option>
            <option>3 Adults</option>
            <option>4 Adults</option>
          </select>
        </div>

        {/* CTA */}
        <button
          onClick={handleBooking}
          disabled={!checkIn || !checkOut}
          className="px-10 py-4 bg-[#1C1816] text-white text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#BF9B3C] transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
        >
          Check Availability
        </button>
      </div>
    </div>
  )
}
