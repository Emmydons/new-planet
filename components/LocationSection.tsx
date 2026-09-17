import { HOTEL_CONFIG } from '@/lib/hotel-config'
import { MapPin, Phone, Mail } from 'lucide-react'

export function LocationSection() {
  return (
    <section id="location" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16 fade-in">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#BF9B3C]" />
            <span className="text-[#BF9B3C] text-[11px] font-bold uppercase tracking-[0.3em]">
              Location
            </span>
          </div>
          <h2 className="font-serif text-5xl font-light text-[#1C1816]">Visit Us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Map Placeholder */}
          <div className="relative h-96 md:h-[480px] bg-[#F3EDE4] flex items-center justify-center fade-in border border-[#E6DDD2]">
            <div className="text-center">
              <MapPin size={48} className="mx-auto text-[#BF9B3C] mb-4" />
              <p className="text-[#1C1816] font-semibold mb-1">Interactive Map Coming Soon</p>
              <p className="text-[#7A6E65] text-sm mt-2 max-w-xs mx-auto">
                {HOTEL_CONFIG.address}
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 fade-in">
            <div className="flex gap-5">
              <div className="w-10 h-10 border border-[#BF9B3C] flex items-center justify-center flex-shrink-0">
                <MapPin size={16} className="text-[#BF9B3C]" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#BF9B3C] mb-1">
                  Address
                </p>
                <p className="text-[#1C1816] leading-relaxed">{HOTEL_CONFIG.address}</p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="w-10 h-10 border border-[#BF9B3C] flex items-center justify-center flex-shrink-0">
                <Phone size={16} className="text-[#BF9B3C]" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#BF9B3C] mb-1">
                  Phone
                </p>
                <a
                  href={`tel:${HOTEL_CONFIG.phone}`}
                  className="text-[#1C1816] hover:text-[#BF9B3C] transition-colors"
                >
                  {HOTEL_CONFIG.phone}
                </a>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="w-10 h-10 border border-[#BF9B3C] flex items-center justify-center flex-shrink-0">
                <Mail size={16} className="text-[#BF9B3C]" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#BF9B3C] mb-1">
                  Email
                </p>
                <a
                  href={`mailto:${HOTEL_CONFIG.email}`}
                  className="text-[#1C1816] hover:text-[#BF9B3C] transition-colors"
                >
                  {HOTEL_CONFIG.email}
                </a>
              </div>
            </div>

            <div className="border border-[#BF9B3C] p-6 mt-6">
              <p className="text-[#7A6E65] mb-4 text-sm leading-relaxed">
                Have questions? Our dedicated concierge team is ready to assist you.
              </p>
              <a
                href={`https://wa.me/${HOTEL_CONFIG.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Hello, I have a question about New Planet Resorts. I would like to get in touch with your team.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 bg-[#1C1816] text-white text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#BF9B3C] transition-colors duration-300 text-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
