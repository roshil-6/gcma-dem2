import type { Metadata } from 'next'
import './globals.css'
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  buildPageMetadata,
  getSiteUrl,
  organizationJsonLd,
} from '@/lib/seo'

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  ...buildPageMetadata({
    title: `${SITE_NAME} | Justice, Protection & Empowerment`,
    description: SITE_DESCRIPTION,
    path: '/',
    keywords: [
      'GCMA',
      'migration awareness',
      'immigration fraud reporting',
      'humanitarian aid',
      'study abroad counseling',
      'nursing registration abroad',
      'skilled migration advice',
      'social welfare programs',
    ],
  }),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = organizationJsonLd()

  return (
    <html lang="en">
      <body className="antialiased theme-light">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
