'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function BreakTheSilenceSection() {
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
      id="break-the-silence"
      ref={sectionRef}
      className="py-12 px-4 relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-gold-metallic/40 shadow-xl flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-gold-metallic/10 border border-gold-metallic/30 text-[#8a7340] text-sm font-bold tracking-wide uppercase">
              Social Initiative
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#6e531d]">
              Break the Silence
            </h2>
            <p className="text-lg text-[#6d5a3a] leading-relaxed">
              A social initiative focused on improving English communication skills through subsided, volunteer-based teaching. We empower individuals through language and confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/break-the-silence/student-tutor" className="inline-flex items-center gap-2 bg-gold-metallic hover:bg-[#b8860b] text-black font-semibold py-3 px-6 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                <span>Join as a Student</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                </svg>
              </Link>
              <Link href="/break-the-silence/student-tutor" className="inline-flex items-center gap-2 bg-white border-2 border-gold-metallic hover:bg-gold-metallic/10 text-[#6e531d] font-semibold py-3 px-6 rounded-xl transition-all hover:-translate-y-0.5">
                <span>Volunteer to Teach</span>
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border-2 border-gold-metallic/20">
              <Image
                src="/home/break-silence-main.jpg"
                alt="Break the Silence"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="text-white font-medium text-lg">Communication & Confidence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
