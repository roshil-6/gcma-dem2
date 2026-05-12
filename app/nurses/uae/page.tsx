'use client'

import HexagonBackground from '@/components/HexagonBackground'
import NursingRegistrationForm from '@/components/NursingRegistrationForm'
import WhoCanApplyBox from '@/components/WhoCanApplyBox'
import NursingCountryBanner from '@/components/NursingCountryBanner'
import ShowcaseCard from '@/components/ShowcaseCard'
import Link from 'next/link'
import Image from 'next/image'

export default function NursesUAEPage() {
  return (
    <main className="relative min-h-screen">
      <HexagonBackground />

      <nav className="relative z-20 pt-6 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center text-gold-metallic hover:text-gold-bright transition-colors text-sm md:text-base"
          >
            Back to Home
          </Link>
          <span className="text-xs md:text-sm text-white">UAE</span>
        </div>
      </nav>

      <section className="relative z-10 py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <NursingCountryBanner
              country="UAE"
              subtitle="Modern facilities, multicultural teams, and clear licensing routes"
              flagSrc="/nursing/flags/ae.png"
              bannerSrc="/nursing/photos/uae-banner.jpg"
            />
          </div>

          {/* Why UAE Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gold-metallic text-center mb-8">
              Why Work in UAE?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ShowcaseCard imageSrc="/nursing/photos/uae-why1.jpg" imageAlt="Tax-Free Salaries" eyebrow="Why UAE" title="Tax-Free Salaries" description="Excellent financial benefits." ctaHref="/contact" />
              <ShowcaseCard imageSrc="/nursing/photos/uae-why2.jpg" imageAlt="Modern Facilities" eyebrow="Why UAE" title="Modern Facilities" description="State-of-the-art healthcare." ctaHref="/contact" />
              <ShowcaseCard imageSrc="/nursing/photos/uae-why3.jpg" imageAlt="Multicultural Teams" eyebrow="Why UAE" title="Multicultural Teams" description="Diverse international environment." ctaHref="/contact" />
              <ShowcaseCard imageSrc="/nursing/photos/uae-why4.jpg" imageAlt="Specialist Centres" eyebrow="Why UAE" title="Specialist Centres" description="Advanced medical facilities." ctaHref="/contact" />
            </div>
          </div>

          {/* Registration Authority Section */}
          <div className="rounded-2xl border border-gold-metallic/40 bg-[#f9f2e7] shadow-xl p-8 md:p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden order-2 md:order-1">
                <Image
                  src="/nursing/photos/uae-registration.jpg"
                  alt="UAE Health Authorities"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-gold-metallic mb-4">Registration Authority</h2>
                <p className="text-lg text-black mb-4">
                  DHA, DOH, MOHAP (depending on Emirate)
                </p>
                <p className="text-base text-black">
                  The UAE attracts international nurses through modern healthcare facilities,
                  clear licensing exams, and tax-free salaries. Multicultural clinical practice.
                </p>
              </div>
            </div>
          </div>

          <WhoCanApplyBox
            country="UAE"
            imageSrc="/nursing/photos/uae-who.jpg"
            items={[
              {
                title: 'Nursing Qualification',
                detail: 'Recognised nursing qualification with transcripts and clinical training proof.',
              },
              {
                title: 'Experience Requirement',
                detail: 'Recent clinical experience is commonly expected (often 2+ years depending on authority/employer).',
              },
              {
                title: 'Licensing Exam',
                detail: 'Prepared for DHA / DOH / MOHAP exam and licensing steps as per Emirate.',
              },
              {
                title: 'Good Standing',
                detail: 'Ability to provide license verification, good standing and experience certificates.',
              },
              {
                title: 'Documents Ready',
                detail: 'Passport, CV, transcripts, employment letters and professional documents.',
              },
              {
                title: 'Professional Conduct',
                detail: 'Compliance with UAE healthcare regulations and documentation standards.',
              },
            ]}
          />

          {/* Career Opportunities */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gold-metallic text-center mb-8">
              Career Opportunities
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <ShowcaseCard imageSrc="/nursing/photos/uae-career1.jpg" imageAlt="Tertiary Hospitals" eyebrow="Career Opportunity" title="Tertiary Hospitals" ctaHref="/contact" />
              <ShowcaseCard imageSrc="/nursing/photos/uae-career2.jpg" imageAlt="Specialist Centres" eyebrow="Career Opportunity" title="Specialist Centres" ctaHref="/contact" />
              <ShowcaseCard imageSrc="/nursing/photos/uae-career3.jpg" imageAlt="Private Networks" eyebrow="Career Opportunity" title="Private Networks" ctaHref="/contact" />
            </div>
          </div>

          <NursingRegistrationForm initialCountry="UAE" />
        </div>
      </section>
    </main>
  )
}
