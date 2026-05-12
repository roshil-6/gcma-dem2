import Link from 'next/link'

export type PageSeoLink = {
  href: string
  label: string
}

export type PageSeoContentProps = {
  heading: string
  headingLevel?: 'h1' | 'h2'
  paragraphs: string[]
  links?: PageSeoLink[]
  className?: string
}

export default function PageSeoContent({
  heading,
  headingLevel = 'h2',
  paragraphs,
  links,
  className = '',
}: PageSeoContentProps) {
  const HeadingTag = headingLevel

  return (
    <section
      aria-labelledby="page-seo-content"
      className={`relative z-10 px-4 py-10 md:py-12 ${className}`}
    >
      <div className="max-w-4xl mx-auto glass-card dark-container rounded-2xl p-8 md:p-10 space-y-4">
        <HeadingTag id="page-seo-content" className="text-2xl md:text-3xl font-bold text-gold-metallic">
          {heading}
        </HeadingTag>
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className="page-intro text-base leading-relaxed">
            {paragraph}
          </p>
        ))}
        {links && links.length > 0 ? (
          <nav aria-label="Related pages" className="flex flex-wrap gap-3 pt-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gold-metallic hover:text-gold-bright font-semibold"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </div>
    </section>
  )
}
