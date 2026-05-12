'use client'

import HexagonBackground from '@/components/HexagonBackground'
import NursingRegistrationForm from '@/components/NursingRegistrationForm'
import WhoCanApplyBox from '@/components/WhoCanApplyBox'
import NursingCountryBanner from '@/components/NursingCountryBanner'
import ShowcaseCard from '@/components/ShowcaseCard'
import Link from 'next/link'
import Image from 'next/image'

export default function NursesNewZealandPage() {
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
          <span className="text-xs md:text-sm text-white">New Zealand</span>
        </div>
      </nav>

      <section className="relative z-10 py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <NursingCountryBanner
              country="New Zealand"
              subtitle="Expert coaching and personalised support for your nursing career"
              flagSrc="/nursing/flags/nz.png"
              bannerSrc="/nursing/photos/newzealand-banner.jpg"
            />
          </div>

          {/* Why New Zealand Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gold-metallic text-center mb-8">
              Why Work in New Zealand?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ShowcaseCard imageSrc="/nursing/photos/newzealand-why1.jpg" imageAlt="Work-Life Balance" eyebrow="Why New Zealand" title="Work-Life Balance" description="Respectful workplaces and quality of life." ctaHref="/contact" />
              <ShowcaseCard imageSrc="/nursing/photos/newzealand-why2.jpg" imageAlt="Cultural Safety" eyebrow="Why New Zealand" title="Cultural Safety" description="Person-centred care approach." ctaHref="/contact" />
              <ShowcaseCard imageSrc="/nursing/photos/newzealand-why3.jpg" imageAlt="Professional Growth" eyebrow="Why New Zealand" title="Professional Growth" description="Structured progression pathways." ctaHref="/contact" />
              <ShowcaseCard imageSrc="/nursing/photos/newzealand-why4.jpg" imageAlt="Team Environment" eyebrow="Why New Zealand" title="Team Environment" description="Strong emphasis on teamwork." ctaHref="/contact" />
            </div>
          </div>

          {/* Registration Authority Section */}
          <div className="rounded-2xl border border-gold-metallic/40 bg-[#f9f2e7] shadow-xl p-8 md:p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gold-metallic mb-4">Registration Authority</h2>
                <p className="text-lg text-black mb-4">
                  Nursing Council of New Zealand (NCNZ)
                </p>
                <p className="text-base text-black">
                  New Zealand provides transparent registration through NCNZ with focus on person-centred care,
                  cultural safety, and professional accountability. Competence Assessment Programme (CAP) available.
                </p>
              </div>
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                <Image
                  src="/nursing/photos/newzealand-registration.jpg"
                  alt="NCNZ Registration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <WhoCanApplyBox
            country="New Zealand"
            imageSrc="/nursing/photos/newzealand-who.jpg"
            items={[
              {
                title: 'Nursing Qualification',
                detail: 'Diploma / Degree in Nursing with clinical placement proof and transcripts.',
              },
              {
                title: 'Registration Status',
                detail: 'Valid registration/license (where applicable) and ability to provide verification.',
              },
              {
                title: 'English Requirement',
                detail: 'IELTS / OET (as required by NCNZ for internationally qualified nurses).',
              },
              {
                title: 'CAP Readiness',
                detail: 'Prepared to complete a Competence Assessment Programme (CAP) if required.',
              },
              {
                title: 'Clinical Experience',
                detail: 'Recent nursing experience preferred; strong references and employment letters help.',
              },
              {
                title: 'Documents Ready',
                detail: 'Passport, CV, transcripts, experience letters, ID documents, and professional records.',
              },
            ]}
          />

          {/* Career Opportunities */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gold-metallic text-center mb-8">
              Career Opportunities
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <ShowcaseCard imageSrc="/nursing/photos/newzealand-career1.jpg" imageAlt="Public Hospitals" eyebrow="Career Opportunity" title="Public Hospitals" ctaHref="/contact" />
              <ShowcaseCard imageSrc="/nursing/photos/newzealand-career2.jpg" imageAlt="Primary Care" eyebrow="Career Opportunity" title="Primary Care" ctaHref="/contact" />
              <ShowcaseCard imageSrc="/nursing/photos/newzealand-career3.jpg" imageAlt="Community Health" eyebrow="Career Opportunity" title="Community Health" ctaHref="/contact" />
            </div>
          </div>

          <NursingRegistrationForm initialCountry="New Zealand" />
        </div>
      </section>
    </main>
  )
}
