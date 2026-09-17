'use client'

import { useState } from 'react'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { HOTEL_CONFIG } from '@/lib/hotel-config'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `New Enquiry from ${formData.name}\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
    const whatsappUrl = `https://wa.me/${HOTEL_CONFIG.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const inputClass =
    'w-full px-4 py-3 bg-[#FAFAF6] border border-[#E6DDD2] text-[#1C1816] text-sm focus:outline-none focus:border-[#BF9B3C] transition-colors placeholder:text-[#B0A59A]'

  return (
    <main className="w-full overflow-hidden">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-[#1C1816]">
        <div className="relative z-10 text-center text-white px-6 pt-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#BF9B3C]" />
            <span className="text-[#BF9B3C] text-[11px] font-bold uppercase tracking-[0.3em]">Reach Us</span>
            <div className="h-px w-12 bg-[#BF9B3C]" />
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-light mb-4 fade-in">Contact Our Team</h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto fade-in">
            We look forward to assisting you
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-[#FAFAF6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <div className="fade-in">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-[#BF9B3C]" />
                <span className="text-[#BF9B3C] text-[11px] font-bold uppercase tracking-[0.3em]">
                  Get In Touch
                </span>
              </div>
              <h2 className="font-serif text-4xl font-light text-[#1C1816] mb-6">
                We&apos;re Here For You
              </h2>
              <div className="h-px bg-[#E6DDD2] mb-8" />
              <p className="text-[#7A6E65] text-lg leading-relaxed mb-10">
                Our dedicated concierge team is available around the clock to assist with your
                inquiries and ensure your experience exceeds all expectations.
              </p>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 border border-[#BF9B3C] flex items-center justify-center flex-shrink-0">
                    <Phone size={16} className="text-[#BF9B3C]" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#BF9B3C] mb-1">Phone</p>
                    <a
                      href={`tel:${HOTEL_CONFIG.phone}`}
                      className="text-[#1C1816] hover:text-[#BF9B3C] transition-colors"
                    >
                      {HOTEL_CONFIG.phone}
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 border border-[#BF9B3C] flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-[#BF9B3C]" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#BF9B3C] mb-1">Email</p>
                    <a
                      href={`mailto:${HOTEL_CONFIG.email}`}
                      className="text-[#1C1816] hover:text-[#BF9B3C] transition-colors"
                    >
                      {HOTEL_CONFIG.email}
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 border border-[#BF9B3C] flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-[#BF9B3C]" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#BF9B3C] mb-1">Address</p>
                    <p className="text-[#1C1816] leading-relaxed">{HOTEL_CONFIG.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="fade-in">
              <form onSubmit={handleSubmit} className="bg-white p-10 border border-[#E6DDD2]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#BF9B3C] mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#BF9B3C] mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#BF9B3C] mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="+234 XXX XXX XXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#BF9B3C] mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      placeholder="How can we assist you?"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#BF9B3C] mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`${inputClass} resize-none`}
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#1C1816] text-white text-[11px] font-bold uppercase tracking-[0.22em] hover:bg-[#BF9B3C] transition-colors duration-300"
                >
                  Send Message
                </button>

                {submitted && (
                  <div className="mt-4 p-4 bg-[#BF9B3C]/10 border border-[#BF9B3C] text-[#BF9B3C] text-sm text-center">
                    Thank you! Your message has been sent.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
