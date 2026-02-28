import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const rotateWords = ['course', 'community', 'workshop', 'program']
const publicationLogos = ['Entrepreneur', 'Forbes', 'VCCIRCLE', 'The Economic Times']

export default function RotatingWorthSection() {
  const [activeWord, setActiveWord] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % rotateWords.length)
    }, 2200)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="bg-white px-4 pb-10 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[26px] bg-[#1E63B6] px-6 pb-8 pt-10 text-center shadow-[0_16px_42px_rgba(15,46,109,0.2)] md:px-10 md:pb-10 md:pt-12">
          <h2 className="mx-auto max-w-4xl text-4xl font-extrabold leading-[1.12] text-white md:text-6xl">
            Your{' '}
            <span className="inline-block min-w-[210px] text-[#0F2E6D] md:min-w-[300px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotateWords[activeWord]}
                  initial={{ y: 34, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -34, opacity: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="inline-block"
                >
                  {rotateWords[activeWord]}
                </motion.span>
              </AnimatePresence>
            </span>{' '}
            is worth more on MentorLeap
          </h2>

          <button
            type="button"
            className="mt-8 rounded-full border border-[#0F2E6D] bg-white px-8 py-3 text-sm font-bold text-[#0F2E6D] transition hover:bg-[#8EDBF5]"
          >
            Book A Discovery Call
          </button>

          <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white">
            <li className="flex items-center gap-2">
              <span className="text-lg leading-none">*</span> 24/7 Support
            </li>
            <li className="flex items-center gap-2">
              <span className="text-lg leading-none">*</span> Full access to all features
            </li>
            <li className="flex items-center gap-2">
              <span className="text-lg leading-none">*</span> Trusted by top leaders
            </li>
          </ul>
        </div>

        <div className="relative mt-6 overflow-hidden px-2 pb-2">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent md:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent md:w-24" />

          <div className="marquee-track flex w-max items-center gap-10 text-lg font-semibold text-[#0F2E6D]/45 md:text-[2rem]">
            {[...publicationLogos, ...publicationLogos].map((logo, index) => (
              <span key={`${logo}-${index}`} className="whitespace-nowrap">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .marquee-track {
          animation: logos-marquee 18s linear infinite;
        }

        @keyframes logos-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}
