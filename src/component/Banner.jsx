const offerText = 'free personality development course by mridu bhandari'

export default function Banner() {
  return (
    <section className="fixed left-0 right-0 top-0 z-[80] overflow-hidden bg-gradient-to-r from-[#1f1a34] via-[#2b2342] to-[#1f1a34] py-3 text-white">
      <div className="whitespace-nowrap">
        <div className="marquee-track inline-flex min-w-full items-center gap-8 px-4">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div key={`line-1-${idx}`} className="inline-flex items-center gap-3 text-sm font-semibold md:text-base">
              <span>🚀 {offerText} 🎯</span>
              <span className="text-white/70">|</span>
              <span>
                course for <span className="line-through decoration-2">2999</span> free 🎉
              </span>
            </div>
          ))}
        </div>
        <div className="marquee-track inline-flex min-w-full items-center gap-8 px-4" aria-hidden="true">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div key={`line-2-${idx}`} className="inline-flex items-center gap-3 text-sm font-semibold md:text-base">
              <span>🚀 {offerText} 🎯</span>
              <span className="text-white/70">|</span>
              <span>
                course for <span className="line-through decoration-2">2999</span> free 🎉
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .marquee-track {
          animation: banner-marquee 30s linear infinite;
        }
        @keyframes banner-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </section>
  )
}
