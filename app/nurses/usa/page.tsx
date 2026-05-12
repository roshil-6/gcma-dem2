'use client'

import HexagonBackground from '@/components/HexagonBackground'
import NursingRegistrationForm from '@/components/NursingRegistrationForm'
import WhoCanApplyBox from '@/components/WhoCanApplyBox'
import NursingCountryBanner from '@/components/NursingCountryBanner'
import ShowcaseCard from '@/components/ShowcaseCard'
import Link from 'next/link'
import Image from 'next/image'

export default function NursesUSAPage() {
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
          <span className="text-xs md:text-sm text-white">USA</span>
        </div>
      </nav>

      <section className="relative z-10 py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <NursingCountryBanner
              country="USA"
              subtitle="Major hospitals, research pathways, and leadership roles"
              flagSrc="/nursing/flags/us.png"
              bannerSrc="/nursing/photos/usa-banner.jpg"
            />
          </div>

          {/* Why USA Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gold-metallic text-center mb-8">
              Why Work in USA?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ShowcaseCard imageSrc="/nursing/photos/usa-why1.jpg" imageAlt="Major Hospitals" eyebrow="Why USA" title="Major Hospitals" description="Top-tier medical facilities." ctaHref="/contact" />
              <ShowcaseCard imageSrc="/nursing/photos/usa-why2.jpg" imageAlt="Research Opportunities" eyebrow="Why USA" title="Research Opportunities" description="Cutting-edge medical research." ctaHref="/contact" />
              <ShowcaseCard imageSrc="/nursing/photos/usa-why3.jpg" imageAlt="Leadership Roles" eyebrow="Why USA" title="Leadership Roles" description="Advanced practice opportunities." ctaHref="/contact" />
              <ShowcaseCard imageSrc="/nursing/photos/usa-why4.jpg" imageAlt="Immigration Pathways" eyebrow="Why USA" title="Immigration Pathways" description="Long-term career options." ctaHref="/contact" />
            </div>
          </div>

          {/* Registration Authority Section */}
          <div className="rounded-2xl border border-gold-metallic/40 bg-[#f9f2e7] shadow-xl p-8 md:p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gold-metallic mb-4">Registration Authority</h2>
                <p className="text-lg text-black mb-4">
                  State Boards of Nursing and CGFNS International
                </p>
                <p className="text-base text-black">
                  The USA offers diverse pathways through State Boards of Nursing and CGFNS.
                  Wide-ranging opportunities in major hospitals, research, and leadership roles.
                </p>
              </div>
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                <Image
                  src="/nursing/photos/usa-registration.jpg"
                  alt="US State Boards"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <WhoCanApplyBox
            country="USA"
            imageSrc="/nursing/photos/usa-who.jpg"
            items={[
              {
                title: 'Nursing Qualification',
                detail: 'Recognised nursing education (Diploma / Degree) with transcripts and clinical records.',
              },
              {
                title: 'Credential Evaluation',
                detail: 'Prepared for credential evaluation through CGFNS/accepted agencies (state dependent).',
              },
              {
                title: 'Licensing Exam',
                detail: 'Prepared to write NCLEX-RN (and meet state board licensing requirements).',
              },
              {
                title: 'English Requirement',
                detail: 'English test may be required depending on pathway and state board rules.',
              },
              {
                title: 'Experience Preferred',
                detail: 'Clinical experience strengthens eligibility; specialty roles may require proven exposure.',
              },
              {
                title: 'Documents Ready',
                detail: 'Passport, CV, transcripts, registration verification, and employment letters.',
              },
            ]}
          />

          {/* Career Opportunities */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gold-metallic text-center mb-8">
              Career Opportunities
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <ShowcaseCard imageSrc="/nursing/photos/usa-career1.jpg" imageAlt="Major Hospitals" eyebrow="Career Opportunity" title="Major Hospitals" ctaHref="/contact" />
              <ShowcaseCard imageSrc="/nursing/photos/usa-career2.jpg" imageAlt="Research Institutions" eyebrow="Career Opportunity" title="Research Institutions" ctaHref="/contact" />
              <ShowcaseCard imageSrc="/nursing/photos/usa-career3.jpg" imageAlt="Community Health" eyebrow="Career Opportunity" title="Community Health" ctaHref="/contact" />
            </div>
          </div>

          <NursingRegistrationForm initialCountry="USA" />
        </div>
      </section>
    </main>
  )
}
