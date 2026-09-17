'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { HOTEL_CONFIG } from '@/lib/hotel-config'

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Rooms', href: '/rooms' },
    { name: 'Amenities', href: '/amenities' },
    { name: 'Dining', href: '/dining' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Events', href: '/events' },
    { name: 'Contact', href: '/contact' },
  ]

  const isTransparent = isHome && !scrolled

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isTransparent
          ? 'bg-transparent'
          : 'bg-[#FAFAF6] border-b border-[#E6DDD2] shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <Link
          href="/"
          className={`font-serif text-2xl font-bold tracking-tight transition-colors duration-300 ${
            isTransparent ? 'text-white' : 'text-[#1C1816]'
          }`}
        >
          {HOTEL_CONFIG.hotelName}
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`text-[11px] font-bold uppercase tracking-[0.18em] transition-colors duration-300 hover:text-[#BF9B3C] ${
                  isTransparent ? 'text-white/90' : 'text-[#1C1816]'
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Reserve CTA */}
        <Link
          href="/rooms"
          className={`hidden md:inline-flex items-center px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] border transition-all duration-300 ${
            isTransparent
              ? 'border-white/70 text-white hover:bg-white hover:text-[#1C1816]'
              : 'border-[#BF9B3C] text-[#BF9B3C] hover:bg-[#BF9B3C] hover:text-white'
          }`}
        >
          Reserve
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden transition-colors ${
            isTransparent ? 'text-white' : 'text-[#1C1816]'
          }`}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAFAF6] border-t border-[#E6DDD2]">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-6 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#1C1816] hover:text-[#BF9B3C] border-b border-[#E6DDD2] transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="p-4">
              <Link
                href="/rooms"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center px-6 py-3 border border-[#BF9B3C] text-[#BF9B3C] text-[11px] font-bold uppercase tracking-[0.18em] hover:bg-[#BF9B3C] hover:text-white transition-all"
              >
                Reserve
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
