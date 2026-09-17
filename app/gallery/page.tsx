'use client'

import { useState } from 'react'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { HOTEL_CONFIG } from '@/lib/hotel-config'
import Image from 'next/image'
import { X } from 'lucide-react'

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<(typeof HOTEL_CONFIG.gallery)[0] | null>(null)
  const categories = ['All', ...new Set(HOTEL_CONFIG.gallery.map((img) => img.category))]
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredGallery =
    selectedCategory === 'All'
      ? HOTEL_CONFIG.gallery
      : HOTEL_CONFIG.gallery.filter((img) => img.category === selectedCategory)

  return (
    <main className="w-full overflow-hidden">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-[#1C1816]">
        <div className="relative z-10 text-center text-white px-6 pt-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#BF9B3C]" />
            <span className="text-[#BF9B3C] text-[11px] font-bold uppercase tracking-[0.3em]">Visual Story</span>
            <div className="h-px w-12 bg-[#BF9B3C]" />
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-light mb-4 fade-in">Our Gallery</h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto fade-in">
            Discover the elegance and beauty of our property
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-[#FAFAF6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Filter */}
          <div className="flex flex-wrap gap-3 mb-14 justify-center fade-in">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 text-[11px] font-bold uppercase tracking-[0.18em] border transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#1C1816] text-white border-[#1C1816]'
                    : 'border-[#E6DDD2] text-[#7A6E65] hover:border-[#BF9B3C] hover:text-[#BF9B3C]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredGallery.map((image, idx) => (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="relative h-72 overflow-hidden cursor-pointer group fade-in"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <Image
                  src={image.image}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-all duration-400 flex flex-col items-center justify-center">
                  <p className="text-white font-serif text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.title}
                  </p>
                  <p className="text-[#BF9B3C] text-[11px] font-bold uppercase tracking-[0.2em] mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
          >
            <X size={28} />
          </button>
          <div className="relative w-full max-w-5xl">
            <div className="relative h-[60vh]">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="text-center mt-5">
              <p className="text-white font-serif text-xl">{selectedImage.title}</p>
              <p className="text-[#BF9B3C] text-[11px] font-bold uppercase tracking-[0.2em] mt-1">
                {selectedImage.category}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
