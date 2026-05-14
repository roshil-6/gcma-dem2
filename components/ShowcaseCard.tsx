'use client'

import Image from 'next/image'
import Link from 'next/link'

export type ShowcaseCardProps = {
  imageSrc: string
  imageAlt: string
  eyebrow?: string
  title: string
  tagline?: string
  description?: string
  highlights?: string[]
  footnote?: string
  ctaLabel?: string
  ctaHref?: string
  ctaOnClick?: () => void
  className?: string
  href?: string
  imageFit?: 'cover' | 'contain'
}

function CardBody({
  tagline,
  description,
  highlights,
  footnote,
  ctaLabel,
  ctaHref,
  ctaOnClick,
}: Pick<
  ShowcaseCardProps,
  'tagline' | 'description' | 'highlights' | 'footnote' | 'ctaLabel' | 'ctaHref' | 'ctaOnClick'
>) {
  return (
    <div className="p-6 bg-[#333333]">
      {tagline ? (
        <p className="text-gold-metallic text-sm mb-3 font-semibold leading-relaxed">{tagline}</p>
      ) : null}
      {description ? (
        <p className="text-white text-base mb-4 leading-relaxed font-normal">{description}</p>
      ) : null}
      {highlights && highlights.length > 0 ? (
        <div className="mb-4">
          <p className="text-white text-sm mb-3 font-medium text-gold-metallic/80">Key Highlights:</p>
          <ul className="space-y-2.5">
            {highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-gold-metallic mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-white font-medium leading-relaxed">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {footnote ? (
        <div className="mb-5 pt-4 border-t border-gold-metallic/20">
          <p className="text-xs text-white/70 leading-relaxed">{footnote}</p>
        </div>
      ) : null}
      {ctaHref ? (
        <Link
          href={ctaHref}
          className="block w-full py-3 px-4 bg-gold-metallic hover:bg-gold-bright text-black font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] text-center"
        >
          {ctaLabel ?? 'Learn More'}
        </Link>
      ) : ctaOnClick ? (
        <button
          type="button"
          onClick={ctaOnClick}
          className="w-full rounded-lg border border-gold-metallic/50 bg-gold-metallic/15 px-4 py-3 font-semibold text-gold-metallic transition-all duration-200 hover:border-gold-metallic hover:bg-gold-metallic/25"
        >
          {ctaLabel ?? 'Learn More'}
        </button>
      ) : null}
    </div>
  )
}

export default function ShowcaseCard({
  imageSrc,
  imageAlt,
  eyebrow,
  title,
  tagline,
  description,
  highlights,
  footnote,
  ctaLabel,
  ctaHref,
  ctaOnClick,
  className = '',
  href,
  imageFit = 'cover',
}: ShowcaseCardProps) {
  const isFlagImage = imageFit === 'contain'

  const card = (
    <div
      className={`rounded-2xl overflow-hidden border border-gold-metallic/40 bg-[#333333] shadow-xl ${href ? 'hover:border-gold-metallic transition-all' : ''} ${className}`}
    >
      <div
        className={`relative isolate overflow-hidden w-full ${isFlagImage ? 'h-56 bg-[#0b121f]' : 'h-48'}`}
        style={{ position: 'relative' }}
      >
        {isFlagImage ? (
          <div className="flex h-full items-center justify-center px-6 pt-5 pb-20">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="max-h-28 w-auto max-w-full object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
        ) : (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            loading="lazy"
            className="object-cover"
          />
        )}
        {isFlagImage ? (
          <div className="absolute inset-x-0 bottom-0 z-10 border-t border-gold-metallic/25 bg-[#333333]/95 px-4 py-3">
            {eyebrow ? (
              <p className="text-sm font-bold text-white mb-1">{eyebrow}</p>
            ) : null}
            <h3 className="text-2xl font-extrabold text-white">{title}</h3>
          </div>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/95 via-[#333333]/70 to-[#333333]/35" />
            <div className="absolute bottom-4 left-4 right-4 z-10">
              {eyebrow ? (
                <p className="text-sm font-bold text-white mb-1 drop-shadow-2xl">{eyebrow}</p>
              ) : null}
              <h3 className="text-2xl font-extrabold text-white drop-shadow-2xl">{title}</h3>
            </div>
          </>
        )}
      </div>
      <CardBody
        tagline={tagline}
        description={description}
        highlights={highlights}
        footnote={footnote}
        ctaLabel={ctaLabel}
        ctaHref={href ? undefined : ctaHref}
        ctaOnClick={href ? undefined : ctaOnClick}
      />
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="group block">
        {card}
      </Link>
    )
  }

  return card
}
