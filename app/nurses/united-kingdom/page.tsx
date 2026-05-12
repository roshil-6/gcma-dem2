'use client'

import HexagonBackground from '@/components/HexagonBackground'
import NursingRegistrationForm from '@/components/NursingRegistrationForm'
import WhoCanApplyBox from '@/components/WhoCanApplyBox'
import NursingCountryBanner from '@/components/NursingCountryBanner'
import ShowcaseCard from '@/components/ShowcaseCard'
import Link from 'next/link'
import Image from 'next/image'

export default function NursesUnitedKingdomPage() {
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
          <span className="text-xs md:text-sm text-white">United Kingdom</span>
        </div>
      </nav>

      <section className="relative z-10 py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <NursingCountryBanner
              country="United Kingdom"
              subtitle="NMC pathway with NHS and private sector opportunities"
              flagSrc="/nursing/flags/gb.png"
              bannerSrc="/nursing/photos/uk-banner.jpg"
            />
          </div>

          {/* Why UK Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gold-metallic text-center mb-8">
              Why Work in United Kingdom?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ShowcaseCard imageSrc="/nursing/photos/uk-why1.jpg" imageAlt="NHS System" eyebrow="Why United Kingdom" title="NHS System" description="World-renowned healthcare system." ctaHref="/contact" />
              <ShowcaseCard imageSrc="/nursing/photos/uk-why2.jpg" imageAlt="Career Progression" eyebrow="Why United Kingdom" title="Career Progression" description="Structured progression pathways." ctaHref="/contact" />
              <ShowcaseCard imageSrc="/nursing/photos/uk-why3.jpg" imageAlt="Specialist Services" eyebrow="Why United Kingdom" title="Specialist Services" description="Diverse clinical areas." ctaHref="/contact" />
              <ShowcaseCard imageSrc="/nursing/photos/uk-why4.jpg" imageAlt="Professional Recognition" eyebrow="Why United Kingdom" title="Professional Recognition" description="NMC registration benefits." ctaHref="/contact" />
            </div>
          </div>

          {/* Registration Authority Section */}
          <div className="rounded-2xl border border-gold-metallic/40 bg-[#f9f2e7] shadow-xl p-8 md:p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gold-metallic mb-4">Registration Authority</h2>
                <p className="text-lg text-black mb-4">
                  Nursing and Midwifery Council (NMC)
                </p>
                <p className="text-base text-black">
                  The UK offers well-defined pathways through NMC with credential verification,
                  English language requirements, and competence assessments. NHS and independent sector opportunities.
                </p>
              </div>
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                <Image
                  src="/nursing/photos/uk-registration.jpg"
                  alt="NMC Registration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <WhoCanApplyBox
            country="United Kingdom"
            imageSrc="/nursing/photos/uk-who.jpg"
            items={[
              {
                title: 'Nursing Qualification',
                detail: 'Diploma / Degree in Nursing with transcripts and clinical training evidence.',
              },
              {
                title: 'English Requirement',
                detail: 'IELTS / OET as required by NMC for overseas nurses.',
              },
              {
                title: 'CBT & OSCE',
                detail: 'Prepared to complete NMC competency steps such as CBT and OSCE (pathway dependent).',
              },
              {
                title: 'Registration Proof',
                detail: 'License verification and good standing where applicable.',
              },
              {
                title: 'Experience & References',
                detail: 'Recent clinical experience preferred; employment letters and references strengthen your profile.',
              },
              {
                title: 'Documents Ready',
                detail: 'Passport, CV, transcripts, experience letters, and identity/registration documents.',
              },
            ]}
          />

          {/* Career Opportunities */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gold-metallic text-center mb-8">
              Career Opportunities
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <ShowcaseCard imageSrc="/nursing/photos/uk-career1.jpg" imageAlt="NHS Hospitals" eyebrow="Career Opportunity" title="NHS Hospitals" ctaHref="/contact" />
              <ShowcaseCard imageSrc="/nursing/photos/uk-career2.jpg" imageAlt="Community Health" eyebrow="Career Opportunity" title="Community Health" ctaHref="/contact" />
              <ShowcaseCard imageSrc="/nursing/photos/uk-career3.jpg" imageAlt="Mental Health" eyebrow="Career Opportunity" title="Mental Health" ctaHref="/contact" />
            </div>
          </div>

          <NursingRegistrationForm initialCountry="United Kingdom" />
        </div>
      </section>
    </main>
  )
}
