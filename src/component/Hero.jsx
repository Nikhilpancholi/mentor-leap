import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView } from 'framer-motion'
import logo from '../assets/Mentorleap-logo.png'
import heroImage from '../assets/new-hero2.png'
// import crowdBackground from '../assets/hero-background.png'
const crowdBackground = 'https://www.shutterstock.com/image-photo/abstract-gradient-particle-waves-seamlessly-600nw-2544182121.jpg'

const navLinks = ['About', 'Speaking', 'Resources', 'Podcast', 'Blog', 'Contact']
const rotatingWords = ['Job-Ready.', 'Leadership-Ready.']

const stats = [
  { value: 18000, suffix: '+', label: 'Learners' },
  { value: 35, suffix: '+', label: 'Countries' },
  { value: 20, suffix: '+', label: 'Industries' },
]

function CountUp({ target, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-20% 0px -20% 0px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, target, {
      duration: 1.4,
      ease: 'easeOut',
      onUpdate: (latest) => setCount(Math.round(latest)),
    })
    return () => controls.stop()
  }, [inView, target])

  return (
    <span ref={ref}>
      {count.toLocaleString('en-IN')}
      {suffix}
    </span>
  )
}

export default function Hero() {
  const MotionImage = motion.img
  const [wordIndex, setWordIndex] = useState(0)
  const [displayedWord, setDisplayedWord] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [showNav, setShowNav] = useState(false)
  const currentWord = rotatingWords[wordIndex]

  useEffect(() => {
    const speed = isDeleting ? 55 : 95
    const atWordEnd = displayedWord === currentWord
    const atWordStart = displayedWord === ''

    const timeout = setTimeout(
      () => {
        if (!isDeleting && !atWordEnd) {
          setDisplayedWord(currentWord.slice(0, displayedWord.length + 1))
          return
        }

        if (!isDeleting && atWordEnd) {
          setIsDeleting(true)
          return
        }

        if (isDeleting && !atWordStart) {
          setDisplayedWord(currentWord.slice(0, displayedWord.length - 1))
          return
        }

        if (isDeleting && atWordStart) {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % rotatingWords.length)
        }
      },
      atWordEnd && !isDeleting ? 900 : speed
    )

    return () => clearTimeout(timeout)
  }, [currentWord, displayedWord, isDeleting])

  useEffect(() => {
    let lastY = window.scrollY

    const onScroll = () => {
      const currentY = window.scrollY
      const scrollingUp = currentY < lastY
      const nearTop = currentY < 40

      setShowNav(scrollingUp || nearTop)
      lastY = currentY
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <section className="w-full bg-[#f4f2f2] px-0 pb-16 pt-3 md:pb-20 md:pt-5">
        <div className="mx-auto w-full max-w-[1360px] px-3 md:px-5">
        <div className="relative overflow-hidden rounded-[48px] bg-[#010f67]">
          <img
            src={crowdBackground}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-1000"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,rgba(1,10,87,0.98)_26%,rgba(2,21,118,0.9)_70%,rgba(8,45,151,0.7)_100%)]" />
          <div className="pointer-events-none absolute -top-16 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#86b6ff]/20 blur-3xl" />
          <div className="pointer-events-none absolute right-24 top-16 h-44 w-44 rounded-full bg-[#2d6cf8]/22 blur-3xl" />
          <div className="pointer-events-none absolute left-24 top-20 h-40 w-40 rounded-full bg-[#345af7]/15 blur-3xl" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(ellipse_at_top,rgba(170,206,255,0.32),rgba(170,206,255,0)_70%)]" />

          <div
            className={`fixed left-0 right-0 top-[42px] z-[60] bg-white/95 shadow-[0_8px_24px_rgba(15,46,109,0.12)] backdrop-blur-md transition-transform duration-300 ease-out md:top-[46px] ${
              showNav ? 'translate-y-0' : '-translate-y-full'
            }`}
          >
            <div className="mx-auto flex w-full max-w-[1360px] items-center justify-between gap-6 px-6 pb-3 pt-5 md:px-12 md:pt-7">
              <a href="#home" className="shrink-0">
                <img src={logo} alt="Mentorleap logo" className="h-10 w-auto rounded-full md:h-11" />
              </a>

              <nav
                className="hidden items-center gap-9 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#0f2e6d] lg:flex"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                {navLinks.map((link) => (
                  <a key={link} href="#0" className="transition hover:text-[#2E86DE]">
                    {link}
                  </a>
                ))}
                <a href="#0" className="text-sm leading-none">
                  Q
                </a>
              </nav>

              <button
                type="button"
                className="rounded-md border border-[#1E63B6]/45 px-3 py-2 text-xs font-semibold text-[#1E63B6] lg:hidden"
              >
                Menu
              </button>
            </div>
          </div>

          <div className="relative z-10 grid items-center gap-10 px-6 pb-14 pt-20 md:px-12 md:pb-16 md:pt-24 lg:grid-cols-[1.04fr_0.96fr]">
            <div className="max-w-[640px] text-center lg:text-left">
              <h1
                className="text-[45px] font-semibold leading-[1.06] text-white md:text-[62px]"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                <span>Become </span>
                <br />
                <span className="inline-block border-r-2 border-[#7ec3ff] pr-1 text-[#7ec3ff]">
                  {displayedWord}
                </span>
                <br />
                <span>Powered by Mentor AI.</span>
              </h1>
              <p
                className="mx-auto mt-5 max-w-[560px] text-[14px] leading-relaxed text-[#a7bdf4] md:text-[15px] lg:mx-0"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                MentorLeap is an AI-powered professional growth platform built to make
                ambitious professionals confident communicators, strategic thinkers, and
                industry-ready leaders.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <button
                  type="button"
                  className="rounded-full bg-[#1f7dff] px-9 py-3 text-xs font-bold uppercase tracking-[0.09em] text-white transition hover:bg-[#126de8]"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  Start Your Growth Journey
                </button>
                <button
                  type="button"
                  className="rounded-full border border-white/45 px-7 py-3 text-xs font-bold uppercase tracking-[0.09em] text-white transition hover:bg-white/10"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  Explore Executive Coaching
                </button>
                                <button
                  type="button"
                  className="rounded-full border border-white/45 px-7 py-3 text-xs font-bold uppercase tracking-[0.09em] text-white transition hover:bg-white/10"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  Hire as Anchor
                </button>
              </div>

              <ul className="mt-8 grid grid-cols-3 gap-4 border-t border-white/15 pt-5">
                {stats.map((item) => (
                  <li key={item.label} className="text-center lg:text-left">
                    <p className="text-xl font-extrabold text-white md:text-2xl">
                      <CountUp target={item.value} suffix={item.suffix} />
                    </p>
                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#a7bdf4]">
                      {item.label}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mx-auto w-full max-w-[620px]">
              <MotionImage
                src={heroImage}
                alt="Mentorleap speaker"
                className="relative z-10 ml-auto w-full max-w-[600px] object-contain"
                initial={{ opacity: 0, x: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.85, ease: 'easeOut', delay: 0.1 }}
                viewport={{ once: true, amount: 0.4 }}
              />
            </div>
          </div>
        </div>

        {/* <div className="mx-auto -mt-6 w-[94%] rounded-2xl border border-[#dbe6ff] bg-white px-4 py-5 shadow-[0_18px_40px_rgba(6,20,88,0.14)] md:w-[88%] md:px-8 md:py-7">
          <ul className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {stats.map((item) => (
              <li key={item.label} className="text-center">
                <p className="text-2xl font-extrabold text-[#0f2e6d] md:text-3xl">
                  <CountUp target={item.value} suffix={item.suffix} />
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.09em] text-[#5471a4]">
                  {item.label}
                </p>
              </li>
            ))}
          </ul>
        </div> */}
        </div>
      </section>

      {/* <button
        type="button"
        className="fixed bottom-5 right-5 z-[70] flex flex-col items-end bg-transparent md:bottom-7 md:right-7"
        style={{ fontFamily: "'Sora', sans-serif" }}
        aria-label="Open Mentor AI assistant"
      >
        <span className="relative rounded-xl bg-white px-4 py-3 text-left text-sm font-semibold leading-snug text-[#2b3a55] shadow-[0_12px_30px_rgba(16,35,78,0.22)]">
          <span className="block">Need help?</span>
          <span className="block">Click here to</span>
          <span className="block">chat with us!</span>
          <span className="absolute -bottom-2 right-6 h-4 w-4 rotate-45 bg-white" />
        </span>
        <span className="mt-2 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_30%,#9ce8ff,#3e8fff)] text-2xl shadow-[0_10px_24px_rgba(33,122,255,0.45)] transition-transform duration-300 hover:-translate-y-1">
          🤖
        </span>
      </button> */}
    </>
  )
}
