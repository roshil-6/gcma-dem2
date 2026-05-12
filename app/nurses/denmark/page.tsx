'use client'

import HexagonBackground from '@/components/HexagonBackground'
import NursingRegistrationForm from '@/components/NursingRegistrationForm'
import WhoCanApplyBox from '@/components/WhoCanApplyBox'
import NursingCountryBanner from '@/components/NursingCountryBanner'
import ShowcaseCard from '@/components/ShowcaseCard'
import Link from 'next/link'
import Image from 'next/image'

export default function NursesDenmarkPage() {
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
          <span className="text-xs md:text-sm text-white">Denmark</span>
        </div>
      </nav>

      <section className="relative z-10 py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <NursingCountryBanner
              country="Denmark"
              subtitle="High quality of life and a patient-safety focused system"
              flagSrc="/nursing/flags/dk.png"
              bannerSrc="/nursing/photos/denmark-banner.jpg"
            />
          </div>

          {/* Why Denmark Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gold-metallic text-center mb-8">
              Why Work in Denmark?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ShowcaseCard imageSrc="/nursing/photos/denmark-why1.jpg" imageAlt="Work-Life Balance" eyebrow="Why Denmark" title="Work-Life Balance" description="High quality of life focus." ctaHref="/contact" />
              <ShowcaseCard imageSrc="/nursing/photos/denmark-why2.jpg" imageAlt="Collaboration" eyebrow="Why Denmark" title="Collaboration" description="Strong teamwork culture." ctaHref="/contact" />
              <ShowcaseCard imageSrc="/nursing/photos/denmark-why3.jpg" imageAlt="Professional Development" eyebrow="Why Denmark" title="Professional Development" description="Structured training programs." ctaHref="/contact" />
              <ShowcaseCard imageSrc="/nursing/photos/denmark-why4.jpg" imageAlt="Quality Healthcare" eyebrow="Why Denmark" title="Quality Healthcare" description="World-class medical system." ctaHref="/contact" />
            </div>
          </div>

          {/* Registration Authority Section */}
          <div className="rounded-2xl border border-gold-metallic/40 bg-[#f9f2e7] shadow-xl p-8 md:p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden order-2 md:order-1">
                <Image
                  src="/nursing/photos/denmark-registration.jpg"
                  alt="Patient Safety Authority"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-gold-metallic mb-4">Registration Authority</h2>
                <p className="text-lg text-black mb-4">
                  Danish Patient Safety Authority (Styrelsen for Patientsikkerhed)
                </p>
                <p className="text-base text-black">
                  Denmark provides structured recognition routes with focus on collaboration, respect,
                  and strong communication. High quality of life and work-life balance.
                </p>
              </div>
            </div>
          </div>

          <WhoCanApplyBox
            country="Denmark"
            imageSrc="/nursing/photos/denmark-who.jpg"
            items={[
              {
                title: 'Nursing Qualification',
                detail: 'Recognised nursing education with transcripts and clinical training records.',
              },
              {
                title: 'Authorization Route',
                detail: 'Prepared to complete the Danish authorization/recognition process if required.',
              },
              {
                title: 'Language Requirement',
                detail: 'Danish language proficiency is commonly required for patient communication and work.',
              },
              {
                title: 'Experience Preferred',
                detail: 'Recent clinical experience improves eligibility and placement options.',
              },
              {
                title: 'Documents Ready',
                detail: 'Passport, CV, transcripts, employment letters, and professional registration proof.',
              },
              {
                title: 'Workplace Culture',
                detail: 'Comfortable with team-based care, documentation standards, and patient safety focus.',
              },
            ]}
          />

          {/* Career Opportunities */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gold-metallic text-center mb-8">
              Career Opportunities
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <ShowcaseCard imageSrc="/nursing/photos/denmark-career1.jpg" imageAlt="Hospitals" eyebrow="Career Opportunity" title="Hospitals" ctaHref="/contact" />
              <ShowcaseCard imageSrc="/nursing/photos/denmark-career2.jpg" imageAlt="Municipal Care" eyebrow="Career Opportunity" title="Municipal Care" ctaHref="/contact" />
              <ShowcaseCard imageSrc="/nursing/photos/denmark-career3.jpg" imageAlt="Community Services" eyebrow="Career Opportunity" title="Community Services" ctaHref="/contact" />
            </div>
          </div>

          <NursingRegistrationForm initialCountry="Denmark" />
        </div>
      </section>
    </main>
  )
}
