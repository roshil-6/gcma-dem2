import PageSeoContent from '@/components/PageSeoContent'
import { seoContent } from '@/lib/seo-content'
import { seoPages } from '@/lib/seo-pages'

export const metadata = seoPages.englishAdults

export default function EnglishClassesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <PageSeoContent {...seoContent.englishClasses} />
    </>
  )
}
