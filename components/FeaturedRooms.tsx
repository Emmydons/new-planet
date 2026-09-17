import Link from 'next/link'
import { HOTEL_CONFIG } from '@/lib/hotel-config'
import Image from 'next/image'

export function FeaturedRooms() {
  const featuredRooms = HOTEL_CONFIG.rooms.slice(0, 3)

  return (
    <section className="py-32 bg-[#FAFAF6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex items-end justify-between mb-16 fade-in">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-[#BF9B3C]" />
              <span className="text-[#BF9B3C] text-[11px] font-bold uppercase tracking-[0.3em]">
                Accommodations
              </span>
            </div>
            <h2 className="font-serif text-5xl font-light text-[#1C1816]">
              Exquisite Suites
            </h2>
          </div>
          <Link
            href="/rooms"
            className="hidden md:inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#BF9B3C] border-b border-[#BF9B3C] pb-0.5 hover:text-[#1C1816] hover:border-[#1C1816] transition-colors"
          >
            View All Suites
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredRooms.map((room, idx) => (
            <div
              key={room.id}
              className="group bg-white overflow-hidden fade-in"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Price badge */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-1.5">
                  <span className="text-[#BF9B3C] text-xs font-bold">
                    {room.currency}{room.price.toLocaleString()}
                  </span>
                  <span className="text-white/60 text-xs"> /night</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 border border-t-0 border-[#E6DDD2]">
                <h3 className="font-serif text-xl text-[#1C1816] mb-2">{room.name}</h3>
                <p className="text-[#7A6E65] text-sm leading-relaxed mb-5">
                  {room.description}
                </p>
                <Link
                  href="/rooms"
                  className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#BF9B3C] hover:gap-3 transition-all duration-300"
                >
                  Explore Suite <span className="text-base leading-none">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="text-center mt-10 md:hidden fade-in">
          <Link
            href="/rooms"
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#BF9B3C] border-b border-[#BF9B3C] pb-0.5"
          >
            View All Suites
          </Link>
        </div>
      </div>
    </section>
  )
}
