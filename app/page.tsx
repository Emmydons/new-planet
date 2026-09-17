import { Navigation } from '@/components/Navigation'
import { HeroSection } from '@/components/HeroSection'
import { WelcomeSection } from '@/components/WelcomeSection'
import { FeaturedRooms } from '@/components/FeaturedRooms'
import { AmenitiesSection } from '@/components/AmenitiesSection'
import { DiningSection } from '@/components/DiningSection'
import { GalleryPreview } from '@/components/GalleryPreview'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { BookingCTASection } from '@/components/BookingCTASection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Navigation />
      <HeroSection />
      <WelcomeSection />
      <FeaturedRooms />
      <AmenitiesSection />
      <DiningSection />
      <GalleryPreview />
      <TestimonialsSection />
      <BookingCTASection />
      <Footer />
    </main>
  )
}
