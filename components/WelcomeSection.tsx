import Image from 'next/image'
import { HOTEL_CONFIG } from '@/lib/hotel-config'

export function WelcomeSection() {
  const stats = [
    { value: '5★', label: 'Luxury Rating' },
    { value: '48', label: 'Premium Suites' },
    { value: '24/7', label: 'Concierge Service' },
    { value: '100%', label: 'Guest Satisfaction' },
  ]

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Label */}
        <div className="flex items-center gap-4 mb-16 fade-in">
          <div className="h-px w-12 bg-[#BF9B3C]" />
          <span className="text-[#BF9B3C] text-[11px] font-bold uppercase tracking-[0.3em]">
            About The Hotel
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Text */}
          <div className="fade-in">
            <h2 className="font-serif text-5xl md:text-6xl font-light text-[#1C1816] leading-tight mb-8">
              {HOTEL_CONFIG.about.title}
            </h2>
            <p className="text-[#7A6E65] text-lg leading-relaxed mb-10">
              {HOTEL_CONFIG.about.description}
            </p>
            <div className="border-l-2 border-[#BF9B3C] pl-6 py-1">
              <p className="font-serif text-xl text-[#1C1816] italic leading-relaxed">
                &ldquo;{HOTEL_CONFIG.about.mission}&rdquo;
              </p>
            </div>
          </div>

          {/* Image with gold corner accents */}
          <div className="relative fade-in">
            <div className="relative w-full aspect-[4/5] overflow-hidden">
              <Image
                src={HOTEL_CONFIG.about.image}
                alt={HOTEL_CONFIG.about.title}
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 w-20 h-20 border-b-2 border-l-2 border-[#BF9B3C]" />
            <div className="absolute -top-5 -right-5 w-20 h-20 border-t-2 border-r-2 border-[#BF9B3C]" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-[#E6DDD2] fade-in">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-4xl text-[#BF9B3C] mb-2">{stat.value}</div>
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#7A6E65]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
