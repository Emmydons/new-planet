import Link from 'next/link'
import { HOTEL_CONFIG } from '@/lib/hotel-config'
import Image from 'next/image'

export function GalleryPreview() {
  const previewImages = HOTEL_CONFIG.gallery.slice(0, 6)

  return (
    <section className="py-32 bg-[#FAFAF6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex items-end justify-between mb-16 fade-in">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-[#BF9B3C]" />
              <span className="text-[#BF9B3C] text-[11px] font-bold uppercase tracking-[0.3em]">
                Gallery
              </span>
            </div>
            <h2 className="font-serif text-5xl font-light text-[#1C1816]">Our Property</h2>
          </div>
          <Link
            href="/gallery"
            className="hidden md:inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#BF9B3C] border-b border-[#BF9B3C] pb-0.5 hover:text-[#1C1816] hover:border-[#1C1816] transition-colors"
          >
            View Full Gallery
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {previewImages.map((image, idx) => (
            <div
              key={image.id}
              className={`relative overflow-hidden group fade-in ${
                idx === 0 ? 'row-span-2' : ''
              }`}
              style={{
                height: idx === 0 ? undefined : '220px',
                minHeight: idx === 0 ? '452px' : undefined,
                transitionDelay: `${idx * 80}ms`,
              }}
            >
              <Image
                src={image.image}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-400 flex items-end p-5">
                <p className="text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
