import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { HOTEL_CONFIG } from '@/lib/hotel-config'
import Image from 'next/image'
import { Check } from 'lucide-react'

export default function RoomsPage() {
  return (
    <main className="w-full overflow-hidden">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[480px] flex items-center justify-center bg-[#1C1816]">
        <div className="relative z-10 text-center text-white px-6 pt-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#BF9B3C]" />
            <span className="text-[#BF9B3C] text-[11px] font-bold uppercase tracking-[0.3em]">Accommodations</span>
            <div className="h-px w-12 bg-[#BF9B3C]" />
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-light mb-6 fade-in">
            Our Exquisite Suites
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto fade-in">
            Where unparalleled luxury meets exceptional comfort
          </p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-24 bg-[#FAFAF6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {HOTEL_CONFIG.rooms.map((room, idx) => (
              <div
                key={room.id}
                className={`group bg-white overflow-hidden fade-in ${
                  idx % 2 !== 0 ? 'md:mt-10' : ''
                }`}
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-5 left-6 right-6">
                    <h3 className="font-serif text-2xl text-white font-light">{room.name}</h3>
                  </div>
                  <div className="absolute top-5 right-5 bg-black/70 backdrop-blur-sm px-3 py-1.5">
                    <span className="text-[#BF9B3C] font-bold text-sm">{room.currency}{room.price.toLocaleString()}</span>
                    <span className="text-white/60 text-xs"> /night</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 border border-t-0 border-[#E6DDD2]">
                  <p className="text-[#7A6E65] leading-relaxed mb-6">{room.description}</p>

                  <div className="grid grid-cols-2 gap-2 mb-8">
                    {room.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-[#1C1816]">
                        <Check className="w-3 h-3 text-[#BF9B3C] flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={`https://wa.me/${HOTEL_CONFIG.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(`I would like to reserve the ${room.name} at New Planet Resorts. Please provide availability and details.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-4 bg-[#1C1816] text-white text-[11px] font-bold uppercase tracking-[0.22em] hover:bg-[#BF9B3C] transition-colors duration-300 text-center"
                  >
                    Reserve This Suite
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
