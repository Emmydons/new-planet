import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { HOTEL_CONFIG } from '@/lib/hotel-config'
import * as Icons from 'lucide-react'

export default function AmenitiesPage() {
  return (
    <main className="w-full overflow-hidden">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-[#1C1816]">
        <div className="relative z-10 text-center text-white px-6 pt-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#BF9B3C]" />
            <span className="text-[#BF9B3C] text-[11px] font-bold uppercase tracking-[0.3em]">Facilities</span>
            <div className="h-px w-12 bg-[#BF9B3C]" />
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-light mb-4 fade-in">World-Class Amenities</h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto fade-in">
            Indulge in facilities designed for the most discerning guests
          </p>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-24 bg-[#FAFAF6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#E6DDD2]">
            {HOTEL_CONFIG.amenities.map((amenity, idx) => {
              const IconComponent = Icons[amenity.icon as keyof typeof Icons] as any
              return (
                <div
                  key={amenity.id}
                  className="group p-8 border border-[#E6DDD2] hover:bg-[#1C1816] transition-all duration-300 fade-in"
                  style={{ transitionDelay: `${idx * 80}ms` }}
                >
                  <div className="mb-5">
                    {IconComponent ? (
                      <IconComponent className="w-7 h-7 text-[#BF9B3C]" />
                    ) : (
                      <div className="w-7 h-7 bg-[#BF9B3C]" />
                    )}
                  </div>
                  <h3 className="text-[#1C1816] group-hover:text-white font-semibold mb-2 transition-colors">
                    {amenity.name}
                  </h3>
                  <p className="text-[#7A6E65] group-hover:text-white/50 text-sm leading-relaxed transition-colors">
                    {amenity.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
