import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const services = [
  {
    title: '1:1 Executive Coaching for Professionals',
    subtitle: 'Executive Coaching',
    description:
      'Personalized executive coaching designed to elevate decision-making clarity and influence.',
    points: [
      'Leadership presence',
      'Strategic communication',
      'Boardroom confidence',
      'Career advancement',
      'Personal brand positioning',
      'Group leadership coaching for emerging leaders, mid-level managers, and high-performing teams',
      'Corporate leadership training programs for confident organizational communication',
    ],
    cta: 'Explore Executive Coaching',
  },
  {
    title: 'Live Events & Leadership Bootcamps',
    subtitle: 'Events',
    description:
      'Join high-impact online and in-person experiences built for practical communication mastery.',
    points: [
      'Public speaking mastery',
      'Executive presence',
      'Persuasive communication',
      'Storytelling for leaders',
      'Media readiness training',
      'Online and in-person leadership workshops',
    ],
    cta: 'View Upcoming Events',
  },
  {
    title: 'Resource Library - Online Leadership Courses',
    subtitle: 'Courses',
    description:
      'Access premium digital programs through a secure login, including lifetime access options.',
    points: [
      'Online Public Speaking Course',
      'Executive Presence Training',
      'Communication Skills Mastery',
      'Leadership Communication Course',
      'Professional Growth Toolkits',
      'Digital Workbooks & Templates',
    ],
    cta: 'Explore Courses',
  },
  {
    title: 'MentorLeap Studio - Thought Leadership Hub',
    subtitle: 'Studio',
    description:
      'Discover practical leadership insights through written, video, audio, and short-form learning.',
    points: [
      'Career growth strategies',
      'Leadership communication',
      'Workplace confidence',
      'Executive storytelling',
      'Personal branding',
      'YouTube leadership talks and short-form reels',
      'Communication micro-lessons and podcast snippets',
    ],
    cta: 'Visit MentorLeap Studio',
  },
  {
    title: 'Hire Mridu as Anchor & Moderator',
    subtitle: 'Host & Moderator',
    description:
      'Bring 20+ years of media expertise to leadership-driven business events and executive forums.',
    points: [
      'Corporate townhalls',
      'Leadership summits',
      'Business conferences',
      'Awards ceremonies',
      'Panel discussions',
    ],
    cta: 'Submit Event Inquiry',
  },
]

// Soft, muted pastel tones — each card feels distinct but calm
const cardTones = [
  {
    bg: 'linear-gradient(145deg, #EEF3FB 0%, #F8FAFF 100%)',
    accent: '#3B6CC7',
    dot: '#7BAAF7',
    border: 'rgba(59,108,199,0.18)',
    tag: '#D6E4FF',
    tagText: '#2A4F9E',
  },
  {
    bg: 'linear-gradient(145deg, #F0F7F4 0%, #FAFFFE 100%)',
    accent: '#2A8A6E',
    dot: '#5EC4A1',
    border: 'rgba(42,138,110,0.18)',
    tag: '#CCEEE4',
    tagText: '#1A6B52',
  },
  {
    bg: 'linear-gradient(145deg, #F5F0FB 0%, #FDFAFF 100%)',
    accent: '#7048C1',
    dot: '#A87EE8',
    border: 'rgba(112,72,193,0.18)',
    tag: '#E4D8FA',
    tagText: '#5433A0',
  },
  {
    bg: 'linear-gradient(145deg, #FEF6EC 0%, #FFFDFB 100%)',
    accent: '#C07828',
    dot: '#F0AA55',
    border: 'rgba(192,120,40,0.18)',
    tag: '#FDEBD0',
    tagText: '#9A5E18',
  },
  {
    bg: 'linear-gradient(145deg, #FDF0F3 0%, #FFFAFE 100%)',
    accent: '#C03060',
    dot: '#E87899',
    border: 'rgba(192,48,96,0.18)',
    tag: '#FAD6E2',
    tagText: '#9A1845',
  },
]

function ServiceCard({ item, index, total, progress }) {
  // Each card occupies an equal slice of scroll progress
  const sliceSize = 1 / total

  // Card enters: starts half a slice before its turn
  // Card is "active": in the center of its slice
  // Card exits: half a slice after its turn (slides up/out)
  const enterStart = Math.max(0, index * sliceSize - sliceSize * 0.3)
  const enterEnd = index * sliceSize + sliceSize * 0.2
  const exitStart = (index + 1) * sliceSize - sliceSize * 0.2
  const exitEnd = Math.min(1, (index + 1) * sliceSize + sliceSize * 0.3)

  // Slide in from below, hold, then slide up and fade
  const y = useTransform(
    progress,
    [enterStart, enterEnd, exitStart, exitEnd],
    [72, 0, 0, -52],
    { clamp: true }
  )
  const opacity = useTransform(
    progress,
    [enterStart, enterEnd, exitStart, exitEnd],
    [0, 1, 1, 0],
    { clamp: true }
  )
  const scale = useTransform(
    progress,
    [enterStart, enterEnd, exitStart, exitEnd],
    [0.96, 1, 1, 0.98],
    { clamp: true }
  )

  const tone = cardTones[index % cardTones.length]

  return (
    <motion.article
      style={{
        opacity,
        y,
        scale,
        zIndex: index + 1,
        background: tone.bg,
        borderColor: tone.border,
      }}
      className="absolute inset-0 rounded-2xl border p-6 shadow-[0_16px_48px_rgba(0,0,0,0.10)] md:p-8"
    >
      {/* Tag */}
      <span
        className="inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest"
        style={{ background: tone.tag, color: tone.tagText }}
      >
        {item.subtitle}
      </span>

      <h3
        className="mt-3 text-xl font-extrabold leading-tight md:text-2xl lg:text-3xl"
        style={{ color: tone.accent }}
      >
        {item.title}
      </h3>

      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
        {item.description}
      </p>

      <ul className="mt-5 grid gap-2 md:grid-cols-2">
        {item.points.map((point) => (
          <li key={point} className="flex items-start gap-2 text-sm text-slate-700">
            <span
              className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ background: tone.dot }}
            />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="mt-7 rounded-lg px-5 py-2.5 text-sm font-bold text-white transition-all hover:opacity-90 hover:shadow-md"
        style={{ background: tone.accent }}
      >
        {item.cta}
      </button>
    </motion.article>
  )
}

export default function Services() {
  const sectionRef = useRef(null)

  // Scroll tracks the entire tall section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.3,
  })

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0F2E6D] px-4 py-14 md:px-8"
      // Each card gets ~100vh of scroll real estate
      style={{ height: `${services.length * 100 + 20}vh` }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 mx-auto grid h-screen w-full max-w-6xl items-center gap-8 py-12 md:grid-cols-[0.9fr_1.1fr]">
        {/* Left panel — static intro */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-300">
            Core Services
          </p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Leadership services designed for measurable career growth.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-sky-200 md:text-base">
            Scroll to explore each offering. Each card reveals as you move through the section.
          </p>

          {/* Progress dots */}
          <div className="mt-8 flex gap-2">
            {services.map((s, i) => (
              <span
                key={s.subtitle}
                className="h-1.5 w-1.5 rounded-full bg-white/30"
              />
            ))}
          </div>
        </div>

        {/* Right panel — scrolling cards stack */}
        <div className="relative h-[520px] md:h-[580px]">
          {services.map((item, index) => (
            <ServiceCard
              key={item.title}
              item={item}
              index={index}
              total={services.length}
              progress={smoothProgress}
            />
          ))}
        </div>
      </div>
    </section>
  )
}