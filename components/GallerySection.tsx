'use client'

import { useState } from 'react'
import Image from 'next/image'
import { HOTEL_CONFIG } from '@/lib/hotel-config'
import { SectionHeading } from './SectionHeading'
import { X } from 'lucide-react'

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<(typeof HOTEL_CONFIG.gallery)[0] | null>(null)
  const categories = ['All', ...new Set(HOTEL_CONFIG.gallery.map((img) => img.category))]
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredGallery =
    selectedCategory === 'All'
      ? HOTEL_CONFIG.gallery
      : HOTEL_CONFIG.gallery.filter((img) => img.category === selectedCategory)

  return (
    <section id="gallery" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Gallery"
          subtitle="Discover the beauty and elegance of our luxury property"
          className="mb-12"
        />

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-secondary text-foreground hover:bg-muted'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="relative h-64 rounded-lg overflow-hidden shadow-lg cursor-pointer group"
            >
              <Image
                src={image.image}
                alt={image.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <p className="text-white text-center font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300"
              >
                <X size={32} />
              </button>
              <div className="relative h-96 md:h-[600px]">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-white text-center mt-4 font-semibold">{selectedImage.title}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
