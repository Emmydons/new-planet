import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { HOTEL_CONFIG } from '@/lib/hotel-config'
import Image from 'next/image'

export default function DiningPage() {
  const { restaurant } = HOTEL_CONFIG

  const highlights = [
    { title: 'Michelin-Inspired Cuisine', desc: 'World-renowned chefs crafting extraordinary culinary masterpieces' },
    { title: 'Sophisticated Ambiance', desc: 'Elegant setting perfect for distinguished occasions' },
    { title: 'Private Dining Experience', desc: 'Exclusive spaces for memorable celebrations' },
  ]

  return (
    <main className="w-full overflow-hidden">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-[#1C1816]">
        <div className="relative z-10 text-center text-white px-6 pt-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#BF9B3C]" />
            <span className="text-[#BF9B3C] text-[11px] font-bold uppercase tracking-[0.3em]">Fine Dining</span>
            <div className="h-px w-12 bg-[#BF9B3C]" />
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-light mb-4 fade-in">
            {restaurant.name}
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto fade-in">
            Where culinary artistry meets exquisite flavors
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative fade-in">
              <div className="relative h-[520px] overflow-hidden">
                <Image
                  src={restaurant.image}
                  alt={restaurant.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 w-20 h-20 border-b-2 border-r-2 border-[#BF9B3C]" />
            </div>

            <div className="fade-in">
              <div className="flex gap-8 mb-8 text-[11px] font-bold uppercase tracking-[0.15em]">
                <div>
                  <span className="text-[#BF9B3C]">{restaurant.cuisine}</span>
                </div>
                <div className="text-[#7A6E65]">
                  Hours: <span className="text-[#1C1816]">{restaurant.hours}</span>
                </div>
              </div>

              <p className="text-[#7A6E65] text-lg leading-relaxed mb-10">
                {restaurant.description}
              </p>

              <div className="space-y-6 mb-10">
                {highlights.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-px bg-[#BF9B3C] flex-shrink-0 mt-1" style={{ minHeight: '1.2rem' }} />
                    <div>
                      <h4 className="font-semibold text-[#1C1816] text-sm mb-1">{item.title}</h4>
                      <p className="text-[#7A6E65] text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={`https://wa.me/${HOTEL_CONFIG.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('I would like to reserve a table at The Emerald Grill. Please let me know available times.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-12 py-4 bg-[#1C1816] text-white text-[11px] font-bold uppercase tracking-[0.22em] hover:bg-[#BF9B3C] transition-colors duration-300"
              >
                Reserve Your Table
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
