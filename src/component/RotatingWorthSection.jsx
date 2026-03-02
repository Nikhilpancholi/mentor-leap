import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const rotateWords = ['course', 'community', 'workshop', 'program']
const publicationLogos = [
  {
    name: 'Entrepreneur',
    src: 'https://www.clipartmax.com/png/middle/154-1547881_entrepreneur-logo-entrepreneur-gray-logo.png',
  },
  {
    name: 'Forbes',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Forbes_logo.svg/320px-Forbes_logo.svg.png',
  },
  {
    name: 'VCCircle',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfVefoUHuR-gu4ZT87dDArGF0BE_aX136hEQ&s',
  },
  {
    name: 'The Economic Times',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/The_Economic_Times_logo.svg/1280px-The_Economic_Times_logo.svg.png',
  },
  {
    name: 'Tv 18',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWPZXGrsuhtuX8BddaaURpoewtGLcoqfC1Bw&s',
  },
]

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
        <div className="relative overflow-hidden rounded-[26px] bg-[#1E63B6] px-6 pb-8 pt-10 text-center shadow-[0_16px_42px_rgba(15,46,109,0.2)] md:px-10 md:pb-10 md:pt-12">
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                'radial-gradient(rgba(255,255,255,0.48) 1.5px, transparent 1px)',
              backgroundSize: '18px 18px',
              maskImage:
                'linear-gradient(to bottom, rgba(0,0,0,0.18), rgba(0,0,0,0.85) 35%, rgba(0,0,0,0.18))',
              WebkitMaskImage:
                'linear-gradient(to bottom, rgba(0,0,0,0.18), rgba(0,0,0,0.85) 35%, rgba(0,0,0,0.18))',
            }}
          />

          <div className="relative z-10">
          <h2 className="mx-auto max-w-4xl text-4xl font-extrabold leading-[1.12] text-white md:text-6xl">
            Your{' '}
            <span className="inline-block min-w-[210px] text-[#021233] md:min-w-[300px]">
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
            className="mt-8 rounded-full border-3 border-[#021233] bg-white px-8 py-3 text-md font-extrabold text-[#021233 transition hover:scale-105"
          >
            Book A Discovery Call
          </button>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white">
            <li className="flex  gap-2">
              <span className="text-4xl leading-none text-[#021233]">*</span> 24/7 Support
            </li>
            <li className="flex  gap-2">
              <span className="text-4xl leading-none text-[#021233]">*</span> Full access to all features
            </li>
            <li className="flex gap-2">
              <span className="text-4xl leading-none text-[#021233]">*</span> Trusted by top leaders
            </li>
          </ul>
          </div>
        </div>

        <div className="relative mt-10 overflow-hidden px-2 pb-2">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent md:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent md:w-24" />

          <div className="marquee-track flex w-max items-center gap-20">
            {[...publicationLogos, ...publicationLogos].map((logo, index) => (
              <img
                key={`${logo.name}-${index}`}
                src={logo.src}
                alt={logo.name}
                loading="lazy"
                className="h-8 w-auto object-contain opacity-55 grayscale md:h-10"
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .marquee-track {
          animation: logos-marquee 25s linear infinite;
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
