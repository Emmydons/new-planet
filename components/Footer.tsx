import Link from 'next/link'
import { HOTEL_CONFIG } from '@/lib/hotel-config'
import { Phone, Mail, MapPin } from 'lucide-react'

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
)

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const TwitterXIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

export function Footer() {
  const quickLinks = [
    { name: 'Suites & Rooms', href: '/rooms' },
    { name: 'Amenities', href: '/amenities' },
    { name: 'Fine Dining', href: '/dining' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Events', href: '/events' },
    { name: 'Contact', href: '/contact' },
  ]

  const socials = [
    { icon: InstagramIcon, url: HOTEL_CONFIG.socials.instagram, label: 'Instagram' },
    { icon: FacebookIcon, url: HOTEL_CONFIG.socials.facebook, label: 'Facebook' },
    { icon: TwitterXIcon, url: HOTEL_CONFIG.socials.twitter, label: 'Twitter / X' },
    { icon: LinkedInIcon, url: HOTEL_CONFIG.socials.linkedin, label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-[#141210] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 pb-16 border-b border-white/10">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-serif text-3xl font-bold text-white hover:text-[#BF9B3C] transition-colors block mb-6"
            >
              {HOTEL_CONFIG.hotelName}
            </Link>
            <p className="text-white/45 text-sm leading-relaxed mb-8">
              {HOTEL_CONFIG.tagline}
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/45 hover:border-[#BF9B3C] hover:text-[#BF9B3C] transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#BF9B3C] mb-8">
              Navigate
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/45 text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#BF9B3C] mb-8">
              Contact
            </h4>
            <div className="space-y-5">
              <div className="flex gap-3">
                <MapPin size={14} className="text-[#BF9B3C] mt-0.5 flex-shrink-0" />
                <p className="text-white/45 text-sm leading-relaxed">{HOTEL_CONFIG.address}</p>
              </div>
              <div className="flex gap-3">
                <Phone size={14} className="text-[#BF9B3C] flex-shrink-0" />
                <a
                  href={`tel:${HOTEL_CONFIG.phone}`}
                  className="text-white/45 text-sm hover:text-white transition-colors"
                >
                  {HOTEL_CONFIG.phone}
                </a>
              </div>
              <div className="flex gap-3">
                <Mail size={14} className="text-[#BF9B3C] flex-shrink-0" />
                <a
                  href={`mailto:${HOTEL_CONFIG.email}`}
                  className="text-white/45 text-sm hover:text-white transition-colors"
                >
                  {HOTEL_CONFIG.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4">
          <p className="text-white/25 text-xs">
            &copy; {new Date().getFullYear()} {HOTEL_CONFIG.hotelName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/25 text-xs hover:text-white/60 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/25 text-xs hover:text-white/60 transition-colors">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
