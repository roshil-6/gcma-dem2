'use client'

import HexagonBackground from '@/components/HexagonBackground'
import NursingRegistrationForm from '@/components/NursingRegistrationForm'
import WhoCanApplyBox from '@/components/WhoCanApplyBox'
import NursingCountryBanner from '@/components/NursingCountryBanner'
import ShowcaseCard from '@/components/ShowcaseCard'
import Link from 'next/link'
import Image from 'next/image'

export default function NursesCanadaPage() {
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
          <span className="text-xs md:text-sm text-white">Canada</span>
        </div>
      </nav>

      <section className="relative z-10 py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <NursingCountryBanner
              country="Canada"
              subtitle="Career prospects and pathways to permanent residency"
              flagSrc="/nursing/flags/ca.png"
              bannerSrc="/nursing/photos/canada-banner.jpg"
            />
          </div>

          {/* Why Canada Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gold-metallic text-center mb-8">
              Why Work in Canada?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ShowcaseCard imageSrc="/nursing/photos/canada-why1.jpg" imageAlt="Permanent Residency" eyebrow="Why Canada" title="Permanent Residency" description="Pathways to PR and family settlement." ctaHref="/contact" />
              <ShowcaseCard imageSrc="/nursing/photos/canada-why2.jpg" imageAlt="Specialized Roles" eyebrow="Why Canada" title="Specialized Roles" description="ICU, ER, geriatrics opportunities." ctaHref="/contact" />
              <ShowcaseCard imageSrc="/nursing/photos/canada-why3.jpg" imageAlt="Rural Health" eyebrow="Why Canada" title="Rural Health" description="Diverse healthcare settings." ctaHref="/contact" />
              <ShowcaseCard imageSrc="/nursing/photos/canada-why4.jpg" imageAlt="Quality Healthcare" eyebrow="Why Canada" title="Quality Healthcare" description="World-class medical facilities." ctaHref="/contact" />
            </div>
          </div>

          {/* Registration Authority Section */}
          <div className="rounded-2xl border border-gold-metallic/40 bg-[#f9f2e7] shadow-xl p-8 md:p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden order-2 md:order-1">
                <Image
                  src="/nursing/photos/canada-registration.jpg"
                  alt="Provincial Registration"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-gold-metallic mb-4">Registration Authority</h2>
                <p className="text-lg text-black mb-4">
                  Provincial Nursing Regulatory Bodies (CNO, BCCNM, NSCN)
                </p>
                <p className="text-base text-black">
                  Canada welcomes internationally educated nurses through province-specific assessment pathways.
                  Safe, ethical, and person-centred care standards.
                </p>
              </div>
            </div>
          </div>

          <WhoCanApplyBox
            country="Canada"
            imageSrc="/nursing/photos/canada-who.jpg"
            items={[
              {
                title: 'Nursing Qualification',
                detail: 'Recognised nursing education (Diploma / Degree) with clinical training evidence.',
              },
              {
                title: 'License & Good Standing',
                detail: 'Active registration/license where applicable and ability to provide verification documents.',
              },
              {
                title: 'Assessment Pathway',
                detail: 'Prepared for province-specific assessment and bridging/competency requirements if needed.',
              },
              {
                title: 'Language Requirement',
                detail: 'IELTS / CELBAN (as required by the province and regulator).',
              },
              {
                title: 'Work Experience',
                detail: 'Recent experience is preferred; specialised experience improves prospects (ICU/ER/Geriatrics).',
              },
              {
                title: 'Documents Ready',
                detail: 'Passport, CV, transcripts, employment letters, and identity/registration documents.',
              },
            ]}
          />

          {/* Career Opportunities */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gold-metallic text-center mb-8">
              Career Opportunities
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <ShowcaseCard imageSrc="/nursing/photos/canada-career1.jpg" imageAlt="Public Hospitals" eyebrow="Career Opportunity" title="Public Hospitals" ctaHref="/contact" />
              <ShowcaseCard imageSrc="/nursing/photos/canada-career2.jpg" imageAlt="Community Health" eyebrow="Career Opportunity" title="Community Health" ctaHref="/contact" />
              <ShowcaseCard imageSrc="/nursing/photos/canada-career3.jpg" imageAlt="Long-term Care" eyebrow="Career Opportunity" title="Long-term Care" ctaHref="/contact" />
            </div>
          </div>

          <NursingRegistrationForm initialCountry="Canada" />
        </div>
      </section>
    </main>
  )
}
