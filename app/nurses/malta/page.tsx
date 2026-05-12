'use client'

import HexagonBackground from '@/components/HexagonBackground'
import NursingRegistrationForm from '@/components/NursingRegistrationForm'
import WhoCanApplyBox from '@/components/WhoCanApplyBox'
import NursingCountryBanner from '@/components/NursingCountryBanner'
import ShowcaseCard from '@/components/ShowcaseCard'
import Link from 'next/link'
import Image from 'next/image'

export default function NursesMaltaPage() {
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
          <span className="text-xs md:text-sm text-white">Malta</span>
        </div>
      </nav>

      <section className="relative z-10 py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <NursingCountryBanner
              country="Malta"
              subtitle="A gateway to European practice with strong demand"
              flagSrc="/nursing/flags/mt.png"
              bannerSrc="/nursing/photos/malta-banner.jpg"
            />
          </div>

          {/* Why Malta Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gold-metallic text-center mb-8">
              Why Work in Malta?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ShowcaseCard imageSrc="/nursing/photos/malta-why1.jpg" imageAlt="European Gateway" eyebrow="Why Malta" title="European Gateway" description="Access to European healthcare." ctaHref="/contact" />
              <ShowcaseCard imageSrc="/nursing/photos/malta-why2.jpg" imageAlt="English Language" eyebrow="Why Malta" title="English Language" description="Widely used in clinical settings." ctaHref="/contact" />
              <ShowcaseCard imageSrc="/nursing/photos/malta-why3.jpg" imageAlt="International Teams" eyebrow="Why Malta" title="International Teams" description="Multicultural work environment." ctaHref="/contact" />
              <ShowcaseCard imageSrc="/nursing/photos/malta-why4.jpg" imageAlt="Growing Sector" eyebrow="Why Malta" title="Growing Sector" description="Rapidly expanding opportunities." ctaHref="/contact" />
            </div>
          </div>

          {/* Registration Authority Section */}
          <div className="rounded-2xl border border-gold-metallic/40 bg-[#f9f2e7] shadow-xl p-8 md:p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gold-metallic mb-4">Registration Authority</h2>
                <p className="text-lg text-black mb-4">
                  Council for Nurses and Midwives (Malta)
                </p>
                <p className="text-base text-black">
                  Malta offers a gateway to European nursing practice with English widely used in clinical settings.
                  Supportive environment for international teams. Clear registration framework.
                </p>
              </div>
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                <Image
                  src="/nursing/photos/malta-registration.jpg"
                  alt="Maltese Registration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <WhoCanApplyBox
            country="Malta"
            imageSrc="/nursing/photos/malta-who.jpg"
            items={[
              {
                title: 'Nursing Qualification',
                detail: 'Diploma / Degree in Nursing with verified transcripts and clinical practice proof.',
              },
              {
                title: 'Registration & Good Standing',
                detail: 'Ability to provide license verification and good standing where applicable.',
              },
              {
                title: 'English Communication',
                detail: 'Good English communication is important for clinical practice and documentation.',
              },
              {
                title: 'Experience Preferred',
                detail: 'Recent experience in hospitals/clinics is preferred; references strengthen your profile.',
              },
              {
                title: 'Documents Ready',
                detail: 'Passport, CV, transcripts, employment letters, identity and professional documents.',
              },
              {
                title: 'Regulatory Compliance',
                detail: 'Willing to meet Council requirements for registration and professional standards.',
              },
            ]}
          />

          {/* Career Opportunities */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gold-metallic text-center mb-8">
              Career Opportunities
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <ShowcaseCard imageSrc="/nursing/photos/malta-career1.jpg" imageAlt="State Hospitals" eyebrow="Career Opportunity" title="State Hospitals" ctaHref="/contact" />
              <ShowcaseCard imageSrc="/nursing/photos/malta-career2.jpg" imageAlt="Health Centres" eyebrow="Career Opportunity" title="Health Centres" ctaHref="/contact" />
              <ShowcaseCard imageSrc="/nursing/photos/malta-career3.jpg" imageAlt="Private Clinics" eyebrow="Career Opportunity" title="Private Clinics" ctaHref="/contact" />
            </div>
          </div>

          <NursingRegistrationForm initialCountry="Malta" />
        </div>
      </section>
    </main>
  )
}
