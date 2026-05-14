import Link from 'next/link'

export default function ContactFloatButton() {
  return (
    <Link
      href="/contact#get-in-touch-form"
      className="flex max-w-[11rem] flex-col rounded-2xl border border-gold-metallic/45 bg-[#f9f2e7]/95 px-4 py-3 shadow-lg backdrop-blur-md transition-transform hover:scale-[1.02] hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-metallic"
      aria-label="Contact us — open the get in touch form"
    >
      <span className="text-sm font-bold leading-tight text-gold-metallic md:text-base">Contact us</span>
      <span className="mt-0.5 text-xs font-semibold leading-snug text-[#35063e] md:text-sm">
        Get in touch
      </span>
    </Link>
  )
}
