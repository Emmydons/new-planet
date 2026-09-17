'use client'

import { useState } from 'react'
import { HOTEL_CONFIG } from '@/lib/hotel-config'

export function ContactSection() {
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
    <section id="contact" className="py-32 bg-[#FAFAF6]">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <div className="mb-12 fade-in">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#BF9B3C]" />
            <span className="text-[#BF9B3C] text-[11px] font-bold uppercase tracking-[0.3em]">
              Contact
            </span>
          </div>
          <h2 className="font-serif text-4xl font-light text-[#1C1816]">Get in Touch</h2>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-10 border border-[#E6DDD2] fade-in">
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
                placeholder="How can we help?"
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
              Thank you! Your message has been sent successfully.
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
