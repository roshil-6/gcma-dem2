'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function GetInTouchSection() {
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
      id="contact"
      ref={sectionRef}
      className="py-12 md:py-16 px-4 relative z-10"
    >
      <div className="max-w-4xl mx-auto">
        {/* Image Section */}
        <div className="mb-8 glass-card rounded-2xl overflow-hidden">
          <div className="relative h-64 md:h-96">
            <img
              src="/about/get-in-touch.jpg"
              alt="Get In Touch - Community and Connection"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <Link
              href="/contact"
              className="absolute inset-0 bg-[#333333]/50 flex items-center justify-center hover:bg-[#333333]/40 transition-colors"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gold-metallic text-center px-4 drop-shadow-lg">
                Get In Touch
              </h2>
            </Link>
          </div>
        </div>
        
        <div className="glass-card rounded-2xl p-8 md:p-12 text-center">
          <p className="text-lg md:text-xl text-white leading-relaxed max-w-2xl mx-auto">
            Together, we can create lasting change in the lives of migrants and their families. 
            Join us in building a world that embraces diversity and compassion.
          </p>
        </div>
      </div>
    </section>
  )
}
