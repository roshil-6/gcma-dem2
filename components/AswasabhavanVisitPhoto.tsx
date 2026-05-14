const IMG = '/gcma-projects/aswasabhavan-visit.png'

/** Photo supplied with faces already blurred for privacy. */
export default function AswasabhavanVisitPhoto() {
  return (
    <figure className="relative w-full max-w-md overflow-hidden bg-[#333333]/30 md:max-w-lg">
      <div className="relative aspect-[3/4] w-full">
        <img
          src={IMG}
          alt="Outdoor visit with children near a playground; faces are blurred for privacy."
          className="h-full w-full object-cover object-center"
          width={900}
          height={1200}
          decoding="async"
        />
      </div>
    </figure>
  )
}
