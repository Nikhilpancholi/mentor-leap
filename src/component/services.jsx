import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const services = [
  {
    index: '01',
    title: 'Executive Coaching',
    headline: 'Coaching that builds leaders who move rooms',
    description:
      'Personalized 1:1 coaching designed to sharpen decision-making, elevate presence, and fast-track your path to the top.',
    points: [
      'Leadership presence & gravitas',
      'Strategic communication',
      'Boardroom confidence',
      'Personal brand positioning',
    ],
    cta: 'Start Coaching',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=85&fit=crop',
    badge: '3x leadership impact',
    palette: {
      bg: '#E8F0FF',
      accent: '#2D52C8',
      tag: '#C4D6FF',
      tagText: '#1A35A0',
      border: 'rgba(45,82,200,0.22)',
      num: 'rgba(45,82,200,0.08)',
    },
  },
  {
    index: '02',
    title: 'Live Events & Bootcamps',
    headline: 'Workshops that drive stronger engagement',
    description:
      'High-impact in-person and online experiences built for practical communication mastery and real-world results.',
    points: [
      'Public speaking mastery',
      'Persuasive communication',
      'Storytelling for leaders',
      'Media readiness training',
    ],
    cta: 'View Upcoming Events',
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=85&fit=crop',
    badge: 'High-impact cohort format',
    palette: {
      bg: '#E8F9F2',
      accent: '#177A55',
      tag: '#B8EDD6',
      tagText: '#0E5239',
      border: 'rgba(23,122,85,0.22)',
      num: 'rgba(23,122,85,0.08)',
    },
  },
  {
    index: '03',
    title: 'Online Courses',
    headline: 'Self-paced programs that open closed doors',
    description:
      'Premium digital programs with lifetime access. Learn executive presence and communication mastery at your pace.',
    points: [
      'Online public speaking course',
      'Executive presence training',
      'Communication skills mastery',
      'Digital workbooks & templates',
    ],
    cta: 'Browse Courses',
    img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=85&fit=crop',
    badge: 'Lifetime access',
    palette: {
      bg: '#F2EEFF',
      accent: '#6030C0',
      tag: '#E0D0FF',
      tagText: '#3E1E88',
      border: 'rgba(96,48,192,0.22)',
      num: 'rgba(96,48,192,0.08)',
    },
  },
  {
    index: '04',
    title: 'MentorLeap Studio',
    headline: 'A thought leadership hub in your pocket',
    description:
      'Discover leadership insights through video, audio, and short-form learning, built for busy professionals.',
    points: [
      'Career growth strategies',
      'Executive storytelling',
      'YouTube leadership talks',
      'Communication micro-lessons',
    ],
    cta: 'Visit Studio',
    img: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&q=85&fit=crop',
    badge: 'Learn anywhere',
    palette: {
      bg: '#FFF5E8',
      accent: '#B86818',
      tag: '#FFE0B0',
      tagText: '#8A4A08',
      border: 'rgba(184,104,24,0.22)',
      num: 'rgba(184,104,24,0.08)',
    },
  },
  {
    index: '05',
    title: 'Anchor & Moderator',
    headline: 'Bring 20+ years of media expertise to your stage',
    description:
      'World-class hosting for corporate townhalls, leadership summits, and award ceremonies that leave a lasting impression.',
    points: [
      'Corporate townhalls & forums',
      'Leadership summits',
      'Business conferences',
      'Awards ceremonies',
    ],
    cta: 'Submit Event Inquiry',
    img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=85&fit=crop',
    badge: '20+ years expertise',
    palette: {
      bg: '#FFF0F4',
      accent: '#B81840',
      tag: '#FFD0DC',
      tagText: '#880E2E',
      border: 'rgba(184,24,64,0.22)',
      num: 'rgba(184,24,64,0.08)',
    },
  },
]

function getRange(index, total) {
  const step = 1 / total
  const enter = Math.max(0, index * step - step * 0.25)
  const activeStart = index * step + step * 0.12
  const activeEnd = (index + 1) * step - step * 0.12
  const exit = Math.min(1, (index + 1) * step + step * 0.25)
  return { enter, activeStart, activeEnd, exit }
}

function StickyCard({ service, index, total, progress }) {
  const { enter, activeStart, activeEnd, exit } = getRange(index, total)
  const stackedY = -26 - index * 3

  const y = useTransform(progress, [enter, activeStart, activeEnd, exit, 1], [72, 0, 0, stackedY, stackedY], {
    clamp: true,
  })
  const opacity = useTransform(progress, [enter, activeStart, activeEnd, exit, 1], [0, 1, 1, 0.34, 0.34], {
    clamp: true,
  })
  const scale = useTransform(progress, [enter, activeStart, activeEnd, exit, 1], [0.97, 1, 1, 0.97, 0.97], {
    clamp: true,
  })
  const rotate = useTransform(progress, [enter, activeStart, activeEnd, exit, 1], [0.8, 0, 0, -0.6, -0.6], {
    clamp: true,
  })
  const blur = useTransform(progress, [activeEnd, exit], ['blur(0px)', 'blur(1.2px)'], {
    clamp: true,
  })

  const p = service.palette

  return (
    <motion.article
      className="absolute inset-0 flex items-center justify-center"
      style={{
        zIndex: index + 1,
        y,
        opacity,
        scale,
        rotate,
        filter: blur,
      }}
    >
      <div
        className="relative h-[680px] w-full overflow-hidden rounded-[30px] border md:h-[520px]"
        style={{
          background: p.bg,
          borderColor: p.border,
          boxShadow: '0 20px 44px rgba(15,46,109,0.12)',
          maxWidth: '920px',
        }}
      >
        <span
          className="pointer-events-none absolute -right-3 -top-6 select-none font-black leading-none"
          style={{
            fontSize: 'clamp(7rem, 16vw, 13rem)',
            color: p.num,
            fontFamily: "'Georgia', serif",
          }}
        >
          {service.index}
        </span>

        <div className="relative flex h-full flex-col md:flex-row">
          <div className="flex h-full flex-col justify-between p-7 md:w-[52%] md:p-10">
            <div className="min-h-0 overflow-y-auto pr-1">
              <div className="flex items-center gap-3">
                <span
                  className="rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em]"
                  style={{ background: p.tag, color: p.tagText }}
                >
                  {service.title}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  {service.index} / {String(total).padStart(2, '0')}
                </span>
              </div>

              <h3
                className="mt-4 font-black leading-[1.15]"
                style={{
                  color: p.accent,
                  fontSize: 'clamp(1.6rem, 3vw, 2.35rem)',
                }}
              >
                {service.headline}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-[0.94rem]">
                {service.description}
              </p>

              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {service.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-[0.82rem] text-slate-700">
                    <span
                      className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                      style={{ background: p.tag }}
                    >
                      <span className="h-1.5 w-1.5 rounded-full" style={{ background: p.accent }} />
                    </span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7 flex items-center gap-4">
              <button
                type="button"
                className="rounded-xl px-5 py-2.5 text-sm font-bold text-white transition hover:brightness-110"
                style={{ background: p.accent }}
              >
                {service.cta}
              </button>
              <span className="text-xs font-bold" style={{ color: p.accent, opacity: 0.75 }}>
                {service.badge}
              </span>
            </div>
          </div>

          <div className="relative h-[320px] overflow-hidden md:h-full md:w-[48%]">
            <img src={service.img} alt={service.title} className="h-full w-full object-cover" />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background: `linear-gradient(90deg, ${p.bg} 0%, ${p.bg}CC 20%, transparent 50%)`,
              }}
            />
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default function Services() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    mass: 0.38,
  })

  return (
    <section ref={sectionRef} className="relative px-4 py-14 md:px-8" style={{ height: `${services.length * 110}vh` }}>
      <div className="sticky top-0 z-10 flex h-screen flex-col">
        <div className="flex  justify-center px-2 pt-8 md:px-4">
          <div className='flex flex-col items-center gap-3 text-center'>
            <p className="text-[15px] font-black uppercase tracking-[0.28em] text-[#1E63B6]/60">
              Core Services
            </p>
            <h1
              className="mt-1 font-black text-[#0F2E6D]"
              style={{
                fontSize: 'clamp(3.05rem, 2vw, 1.45rem)',
                fontFamily: "'Georgia', serif",
              }}
            >
              Leadership services for <em className="italic text-[#1E63B6]">measurable growth</em>
            </h1>
          </div>
        </div>

        <div className="relative flex-1 px-0 pb-6 pt-4 md:px-4 md:pb-10">
          {services.map((service, index) => (
            <StickyCard
              key={service.index}
              service={service}
              index={index}
              total={services.length}
              progress={smoothProgress}
            />
          ))}
        </div>

        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
          style={{ opacity: useTransform(smoothProgress, [0, 0.12], [1, 0]) }}
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#0F2E6D]/50">
            Scroll to explore
          </span>
        </motion.div>
      </div>
    </section>
  )
}
