import Image from 'next/image'
import { HOTEL_CONFIG } from '@/lib/hotel-config'

export function EventsSection() {
  const { events } = HOTEL_CONFIG

  return (
    <section id="events" className="py-32 bg-[#FAFAF6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Image */}
          <div className="relative fade-in">
            <div className="relative h-[520px] overflow-hidden">
              <Image src={events.image} alt={events.title} fill className="object-cover" />
            </div>
            <div className="absolute -bottom-5 -left-5 w-20 h-20 border-b-2 border-l-2 border-[#BF9B3C]" />
          </div>

          {/* Content */}
          <div className="fade-in">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-[#BF9B3C]" />
              <span className="text-[#BF9B3C] text-[11px] font-bold uppercase tracking-[0.3em]">
                Events
              </span>
            </div>
            <h2 className="font-serif text-4xl font-light text-[#1C1816] mb-4">{events.title}</h2>
            <div className="h-px bg-[#E6DDD2] mb-6" />
            <p className="text-[#7A6E65] text-lg leading-relaxed mb-10">{events.description}</p>

            <div className="space-y-4">
              {events.spaces.map((space, idx) => (
                <div
                  key={idx}
                  className="p-6 border border-[#E6DDD2] hover:border-[#BF9B3C] transition-colors"
                >
                  <h3 className="font-serif text-xl text-[#1C1816] mb-1">{space.name}</h3>
                  <p className="text-[#BF9B3C] text-[11px] font-bold uppercase tracking-[0.15em] mb-3">
                    {space.capacity}
                  </p>
                  <p className="text-[#7A6E65] text-sm">{space.description}</p>
                </div>
              ))}
            </div>

            <a
              href={`https://wa.me/${HOTEL_CONFIG.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('I would like to inquire about hosting an event at New Planet Resorts. Please provide details on available venues and packages.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full mt-8 py-4 bg-[#1C1816] text-white text-[11px] font-bold uppercase tracking-[0.22em] hover:bg-[#BF9B3C] transition-colors duration-300 text-center"
            >
              Inquire About Events
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
