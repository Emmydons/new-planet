import Link from 'next/link'
import { HOTEL_CONFIG } from '@/lib/hotel-config'
import * as Icons from 'lucide-react'

export function AmenitiesSection() {
  return (
    <section className="py-32 bg-[#1C1816]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16 fade-in">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#BF9B3C]" />
            <span className="text-[#BF9B3C] text-[11px] font-bold uppercase tracking-[0.3em]">
              Facilities
            </span>
          </div>
          <h2 className="font-serif text-5xl font-light text-white">World-Class Amenities</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 border border-[#2A2520]">
          {HOTEL_CONFIG.amenities.map((amenity, idx) => {
            const IconComponent = Icons[amenity.icon as keyof typeof Icons] as any
            return (
              <div
                key={amenity.id}
                className="group p-8 border border-[#2A2520] hover:bg-[#BF9B3C]/10 transition-colors duration-300 fade-in"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div className="mb-5">
                  {IconComponent ? (
                    <IconComponent className="w-6 h-6 text-[#BF9B3C]" />
                  ) : (
                    <div className="w-6 h-6 bg-[#BF9B3C]" />
                  )}
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">{amenity.name}</h3>
                <p className="text-white/45 text-xs leading-relaxed">{amenity.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-12 fade-in">
          <Link
            href="/amenities"
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#BF9B3C] border-b border-[#BF9B3C] pb-0.5 hover:text-white hover:border-white transition-colors"
          >
            Discover All Amenities
          </Link>
        </div>
      </div>
    </section>
  )
}
