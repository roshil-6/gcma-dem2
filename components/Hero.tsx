'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const heroImageCandidates = [
  '/logo_statue.png',
  '/home/belief-statement.jpg',
  '/hero-background.jpeg',
]

const primaryLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/gcma-projects', label: 'GCMA Projects' },
  { href: '/calculators/pr-calculator', label: 'PR Calculator' },
  { href: '/calculators/canada-points', label: 'Canada Points Calculator' },
  { href: '/contact', label: 'Contact Us' },
]

const serviceLinks = [
  { href: '/charity-support', label: 'Charity Support' },
  { href: '/services#immigration-fraud', label: 'Report Immigration Fraud' },
  { href: '/study-abroad', label: 'Study Abroad Advice' },
  { href: '/migration-advice', label: 'Migration Advice' },
  { href: '/visit-visa', label: 'Visit Visa' },
  { href: '/travel', label: 'Travel' },
  { href: '/english-classes/govt-students', label: 'English Speaking Classes - Govt School Students' },
  { href: '/english-classes/private-students', label: 'English Speaking Classes - Private School Students' },
  { href: '/english-classes/adults', label: 'English Academy' },
  { href: '/tutors', label: 'Serve society with GCMA - Tutors' },
]

const nursingLinks = [
  { href: '/nurses/australia', label: 'Australia' },
  { href: '/nurses/canada', label: 'Canada' },
  { href: '/nurses/new-zealand', label: 'New Zealand' },
  { href: '/nurses/germany', label: 'Germany' },
  { href: '/nurses/malta', label: 'Malta' },
  { href: '/nurses/denmark', label: 'Denmark' },
  { href: '/nurses/united-kingdom', label: 'United Kingdom' },
  { href: '/nurses/uae', label: 'UAE' },
  { href: '/nurses/usa', label: 'USA' },
]

const navLinkClass =
  'shrink-0 whitespace-nowrap px-3 py-2 text-xs font-semibold text-gold-metallic drop-shadow-md transition-colors hover:text-gold-bright sm:px-4 sm:text-sm md:text-base'

const mobileNavLinkClass =
  'block rounded-lg border border-gold-metallic/25 px-4 py-3 text-sm font-semibold text-gold-metallic transition-colors hover:bg-gold-metallic/10'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [heroImageIndex, setHeroImageIndex] = useState(0)
  const [showServicesMenu, setShowServicesMenu] = useState(false)
  const [showNursingMenu, setShowNursingMenu] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileNursingOpen, setMobileNursingOpen] = useState(false)

  const heroImage = heroImageCandidates[heroImageIndex]
  const hasHeroImage = heroImageIndex < heroImageCandidates.length

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setMobileServicesOpen(false)
    setMobileNursingOpen(false)
  }

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

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <section
      ref={heroRef}
      className="relative z-10 min-h-[100dvh] overflow-hidden hero-background md:h-screen md:min-h-screen"
    >
      <div className="absolute left-0 right-0 top-0 z-40 border-b border-gold-metallic/25 bg-[#f9f2e7]/95 px-3 py-3 backdrop-blur md:hidden">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="text-sm font-bold text-gold-metallic" onClick={closeMobileMenu}>
            GCMA
          </Link>
          <button
            type="button"
            className="rounded-lg border border-gold-metallic/40 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-gold-metallic"
            aria-expanded={mobileMenuOpen}
            aria-controls="hero-mobile-menu"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {mobileMenuOpen ? (
        <div
          id="hero-mobile-menu"
          className="fixed inset-0 z-50 overflow-y-auto bg-[#f9f2e7] px-4 pb-8 pt-16 md:hidden"
        >
          <nav aria-label="Mobile primary navigation" className="space-y-2">
            {primaryLinks.map((link) => (
              <Link key={link.href} href={link.href} className={mobileNavLinkClass} onClick={closeMobileMenu}>
                {link.label}
              </Link>
            ))}

            <button
              type="button"
              className={`${mobileNavLinkClass} w-full text-left`}
              aria-expanded={mobileServicesOpen}
              onClick={() => setMobileServicesOpen((open) => !open)}
            >
              Services
            </button>
            {mobileServicesOpen ? (
              <div className="space-y-2 pl-3">
                {serviceLinks.map((link) => (
                  <Link key={link.href} href={link.href} className={mobileNavLinkClass} onClick={closeMobileMenu}>
                    {link.label}
                  </Link>
                ))}
              </div>
            ) : null}

            <button
              type="button"
              className={`${mobileNavLinkClass} w-full text-left`}
              aria-expanded={mobileNursingOpen}
              onClick={() => setMobileNursingOpen((open) => !open)}
            >
              Global nursing registration
            </button>
            {mobileNursingOpen ? (
              <div className="space-y-2 pl-3">
                {nursingLinks.map((link) => (
                  <Link key={link.href} href={link.href} className={mobileNavLinkClass} onClick={closeMobileMenu}>
                    {link.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </nav>
        </div>
      ) : null}

      <nav className="absolute left-0 right-0 top-6 z-30 hidden px-8 md:block">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6">
          {primaryLinks.map((link) => (
            <Link key={link.href} href={link.href} className={navLinkClass}>
              {link.label}
            </Link>
          ))}

          <div className="relative">
            <button
              type="button"
              onClick={() => setShowServicesMenu(!showServicesMenu)}
              className={`${navLinkClass} flex items-center gap-2`}
            >
              Services
              <svg
                className={`h-4 w-4 transition-transform ${showServicesMenu ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {showServicesMenu ? (
              <div className="absolute left-0 top-full z-40 mt-2 w-56 rounded-lg border border-gold-metallic/50 bg-white shadow-xl">
                <div className="py-2">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setShowServicesMenu(false)}
                      className="block px-4 py-2 text-sm font-medium text-gold-metallic transition-colors hover:bg-gold-metallic/10 hover:text-gold-bright"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={() => setShowNursingMenu(!showNursingMenu)}
              className={`${navLinkClass} flex items-center gap-2`}
            >
              Global nursing registration
              <svg
                className={`h-4 w-4 transition-transform ${showNursingMenu ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {showNursingMenu ? (
              <div className="absolute left-0 top-full z-40 mt-2 w-56 rounded-lg border border-gold-metallic/50 bg-white shadow-xl">
                <div className="py-2">
                  {nursingLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setShowNursingMenu(false)}
                      className="block px-4 py-2 text-sm font-medium text-gold-metallic transition-colors hover:bg-gold-metallic/10 hover:text-gold-bright"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </nav>

      {(showServicesMenu || showNursingMenu) && (
        <div
          className="fixed inset-0 z-20 hidden md:block"
          onClick={() => {
            setShowServicesMenu(false)
            setShowNursingMenu(false)
          }}
        />
      )}

      {hasHeroImage ? (
        <>
          <div className="absolute inset-0 hidden md:block">
            <img
              src={heroImage}
              alt="GCMA Hero"
              className="h-full w-full object-cover object-center"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              onError={() => {
                setHeroImageIndex((current) => current + 1)
              }}
            />
            <div className="absolute bottom-12 left-1/2 z-20 w-[min(100%,20rem)] -translate-x-1/2 px-4">
              <Link href="/services#immigration-fraud" className="btn-gold block w-full px-8 py-4 text-center text-lg">
                Report scam
              </Link>
            </div>
          </div>

          <div className="flex min-h-[100dvh] flex-col bg-[#f9f2e7] md:hidden">
            <div className="h-14 shrink-0" aria-hidden="true" />

            <div className="flex flex-1 flex-col px-4 pb-28 pt-4">
              <div className="mx-auto flex w-full max-w-md justify-center">
                <img
                  src={heroImageCandidates[0]}
                  alt="GCMA emblem"
                  className="max-h-[38vh] w-full object-contain"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  onError={(event) => {
                    const target = event.currentTarget
                    if (target.dataset.fallbackApplied === 'true') {
                      target.classList.add('hidden')
                      return
                    }
                    target.dataset.fallbackApplied = 'true'
                    target.src = heroImageCandidates[1] ?? heroImageCandidates[2]
                  }}
                />
              </div>

              <div className="mx-auto mt-6 w-full max-w-md space-y-4 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-metallic/85">
                  Migration awareness and social welfare
                </p>
                <h1 className="hero-main-title text-[1.75rem] font-bold leading-tight sm:text-3xl">
                  Global Council for Migration Awareness and Social Welfare
                </h1>
                <p className="hero-subtitle-color text-sm font-semibold sm:text-base">GCMA</p>
                <p className="text-sm italic leading-relaxed text-[#35063e]/90">
                  Human rights are not optional. If you can smile while another suffers, you have forgotten what
                  compassion means.
                </p>
                <p className="text-sm leading-relaxed text-[#35063e]/90">
                  Justice, protection, and ethical guidance for students, nurses, families, and skilled professionals
                  planning life abroad.
                </p>
              </div>
            </div>

            <div className="fixed bottom-0 left-0 right-0 z-30 border-t border-gold-metallic/20 bg-[#f9f2e7]/95 px-4 py-3 backdrop-blur">
              <Link
                href="/services#immigration-fraud"
                className="btn-gold block w-full px-6 py-3 text-center text-base"
                onClick={closeMobileMenu}
              >
                Report scam
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className="flex min-h-screen items-center justify-center px-4">
          <Link href="/services" className="btn-gold px-8 py-4 text-lg">
            Get Started
          </Link>
        </div>
      )}
    </section>
  )
}
