'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function HumanitarianAidSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-reveal')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="social-support"
      ref={sectionRef}
      className="py-12 px-4 relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-gold-metallic/40 shadow-xl flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="flex-1 space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-gold-metallic/10 border border-gold-metallic/30 text-[#8a7340] text-sm font-bold tracking-wide uppercase">
              Social Welfare
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#6e531d]">
              Humanitarian Aid & Support
            </h2>
            <p className="text-lg text-[#6d5a3a] leading-relaxed">
              Supporting communities through verified medical assistance and educational empowerment programs. We connect those in need with appropriate medical care and provide educational support for girl students.
            </p>
            <Link href="/charity-support" className="inline-flex items-center gap-2 bg-gold-metallic hover:bg-gold-bright text-black font-semibold py-3 px-8 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
              <span>View Charity Programs & Apply</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
          <div className="flex-1 w-full">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md border border-gold-metallic/20">
                <Image
                  src="/home/healthcare-support.jpg"
                  alt="Medical assistance"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md border border-gold-metallic/20 mt-8">
                <Image
                  src="/home/education-support.jpg"
                  alt="Educational support"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
