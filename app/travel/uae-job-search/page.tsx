'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import HexagonBackground from '@/components/HexagonBackground'
import ShowcaseCard from '@/components/ShowcaseCard'

export default function UAEJobSearchPage() {
  const [showForm, setShowForm] = useState(false)

  return (
    <main className="relative min-h-screen">
      <HexagonBackground />
      
      {/* Navigation back to home */}
      <nav className="relative z-20 pt-6 px-4">
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/travel" 
            className="inline-flex items-center text-gold-metallic hover:text-gold-bright transition-colors"
          >
            ← Back to Travel
          </Link>
        </div>
      </nav>

      {/* Banner Section */}
      <section className="relative z-10 py-8 px-4 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl mb-8">
            <Image
              src="/travel/uae-banner.jpg"
              alt="Dubai Job Seekers Package"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="w-full px-8 md:px-12 max-w-7xl mx-auto">
                <div className="inline-flex items-center gap-4 rounded-2xl px-6 py-5">
                  <div className="space-y-2">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gold-metallic drop-shadow-2xl">
                      Dubai Job Seekers Package
                    </h1>
                    <p className="text-lg md:text-xl text-gold-metallic font-semibold drop-shadow-lg">
                      Land in Dubai with Confidence, Not Confusion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="rounded-2xl border border-gold-metallic/40 bg-[#f9f2e7] shadow-xl p-8 md:p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold text-black mb-6">Relocate with Ease</h2>
                <p className="text-lg text-black mb-4 leading-relaxed font-medium">
                  Relocate with ease through our Job Seekers Package — a game-changer for international professionals looking to tap into the booming UAE market.
                </p>
                <p className="text-base text-black leading-relaxed font-medium">
                  From visa to victory — we'll walk with you every step of the way.
                </p>
              </div>
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                <Image
                  src="/travel/uae-overview.jpg"
                  alt="Dubai Job Seekers"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <ShowcaseCard
                imageSrc="/travel/uae-feature1.jpg"
                imageAlt="Visa & Flight Assistance"
                eyebrow="Job Seekers Package"
                title="Visa & Flight Assistance"
                description="Complete support for visa processing and flight bookings to get you to Dubai smoothly."
              />
              <ShowcaseCard
                imageSrc="/travel/uae-feature2.jpg"
                imageAlt="CV Enhancement"
                eyebrow="Job Seekers Package"
                title="CV Enhancement + Job Application Guidance"
                description="Professional CV optimization and strategic job application support tailored for the UAE market."
              />
              <ShowcaseCard
                imageSrc="/travel/uae-feature3.jpg"
                imageAlt="Interview Class"
                eyebrow="Job Seekers Package"
                title="90-Minute Interview & Confidence Class"
                description="Comprehensive interview preparation and confidence-building sessions to ace your job interviews."
              />
              <ShowcaseCard
                imageSrc="/travel/uae-feature4.jpg"
                imageAlt="Food & Accommodation"
                eyebrow="Job Seekers Package"
                title="Food & Accommodation Support (Short-term)"
                description="Temporary accommodation and food assistance to help you settle in during your initial days in Dubai."
              />
              <ShowcaseCard
                imageSrc="/travel/uae-feature5.jpg"
                imageAlt="Metro Card & Orientation"
                eyebrow="Job Seekers Package"
                title="Metro Card + City Orientation"
                description="Get your metro card and comprehensive city orientation to navigate Dubai like a local."
              />
              <ShowcaseCard
                imageSrc="/travel/uae-feature6.jpg"
                imageAlt="On-Ground Support"
                eyebrow="Job Seekers Package"
                title="On-Ground Support Team"
                description="Dedicated support team available in Dubai to assist you with any challenges during your job search."
              />
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gold-metallic/10 border border-gold-metallic/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gold-metallic mb-4">Ready to Start Your Dubai Journey?</h3>
              <p className="text-black mb-6 max-w-2xl mx-auto font-medium">
                Apply now and let us help you land in Dubai with confidence. Our comprehensive package ensures you have everything you need for a successful job search.
              </p>
              <button
                onClick={() => setShowForm(!showForm)}
                className="inline-flex items-center bg-gold-metallic hover:bg-gold-bright text-black font-semibold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl"
              >
                {showForm ? 'Close Application Form' : 'Apply Now'}
              </button>
            </div>

            {/* Application Form */}
            {showForm && (
              <div className="mt-8 pt-8 border-t border-gold-metallic/30">
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-black mb-6 text-center">Application Form</h3>
                  <form className="space-y-6" onSubmit={(e) => {
                    e.preventDefault()
                    // Handle form submission
                    alert('Application submitted! We will contact you soon.')
                    setShowForm(false)
                  }}>
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-black mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gold-metallic/40 bg-white text-black focus:outline-none focus:ring-2 focus:ring-gold-metallic"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gold-metallic/40 bg-white text-black focus:outline-none focus:ring-2 focus:ring-gold-metallic"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-black mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gold-metallic/40 bg-white text-black focus:outline-none focus:ring-2 focus:ring-gold-metallic"
                      />
                    </div>
                    <div>
                      <label htmlFor="profession" className="block text-sm font-semibold text-black mb-2">
                        Profession/Field *
                      </label>
                      <input
                        type="text"
                        id="profession"
                        name="profession"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gold-metallic/40 bg-white text-black focus:outline-none focus:ring-2 focus:ring-gold-metallic"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-black mb-2">
                        Additional Information
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-gold-metallic/40 bg-white text-black focus:outline-none focus:ring-2 focus:ring-gold-metallic"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gold-metallic hover:bg-gold-bright text-black font-semibold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl"
                    >
                      Submit Application
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
