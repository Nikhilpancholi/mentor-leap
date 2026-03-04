import { motion } from 'framer-motion'
import aiModel from '../assets/ai-model.png'

const trainedOn = [
  "Mridu Bhandari's coaching frameworks",
  'Years of communication research',
  'Executive training methodologies',
  'Structured learning models',
]

const helpsWith = [
  'Practice communication scenarios',
  'Refine speeches',
  'Prepare interviews',
  'Improve email tone',
  'Build structured responses',
  'Strengthen presentation clarity',
  'Get instant feedback',
]

const containerVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function MentorAi() {
  const MotionSection = motion.section
  const MotionPanel = motion.div
  const MotionItem = motion.div
  const MotionArticle = motion.article
  const MotionLi = motion.li
  const MotionImg = motion.img

  return (
    <MotionSection
      className="bg-white px-4 py-16 md:px-8 md:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="mx-auto w-full max-w-6xl">
        <MotionPanel
          className="relative overflow-hidden rounded-[28px] border border-[#203f86]/20 bg-[#04134f] p-7 shadow-[0_24px_65px_rgba(7,18,69,0.35)] md:p-10"
          variants={itemVariants}
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://www.oecd.org/adobe/dynamicmedia/deliver/dm-aid--4c8f6bdc-188d-4af7-bf8b-851f056d6838/ai-for-social-protection-background.png?quality=80&preferwebp=true)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <motion.div
            className="pointer-events-none absolute -left-12 -top-16 h-52 w-52 rounded-full bg-[#45c5ff]/20 blur-3xl"
            animate={{ y: [0, -10, 0], opacity: [0.55, 0.8, 0.55] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="pointer-events-none absolute -right-10 top-12 h-56 w-56 rounded-full bg-[#2f7bff]/25 blur-3xl"
            animate={{ y: [0, 12, 0], opacity: [0.5, 0.75, 0.5] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="pointer-events-none absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-[#71f1ff]/12 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(130deg,rgba(16,53,142,0.25),rgba(5,19,79,0)_45%,rgba(66,197,255,0.14))]" />

          <div className="relative z-10 grid gap-6 md:grid-cols-[1.25fr_0.75fr] md:items-start">
            <div>
              <MotionItem
                className="inline-flex rounded-full border border-[#77d9ff]/40 bg-[#0e2b7a]/55 px-4 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#9de9ff]"
                variants={itemVariants}
              >
                Mentor AI
              </MotionItem>
              <MotionItem
                className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl"
                variants={itemVariants}
              >
                Meet Mree AI - Your 24x7 Growth Partner
              </MotionItem>
              <MotionItem className="mt-4 text-base font-semibold text-[#b8d8ff]" variants={itemVariants}>
                Mentor AI is not a generic chatbot.
              </MotionItem>

              <div className="mt-7 grid gap-6 md:grid-cols-2">
                <MotionArticle
                  className="rounded-2xl border border-white/15 bg-white/8 p-5 backdrop-blur-md"
                  variants={itemVariants}
                >
                  <h3 className="text-sm font-extrabold uppercase tracking-[0.1em] text-[#95e5ff]">
                    It is trained on
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {trainedOn.map((item, index) => (
                      <MotionLi
                        key={item}
                        className="flex items-start gap-3 text-sm text-[#e6f2ff] md:text-base"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.35, delay: 0.08 * index, ease: 'easeOut' }}
                        viewport={{ once: true }}
                      >
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#4fc3e8]" />
                        <span>{item}</span>
                      </MotionLi>
                    ))}
                  </ul>
                </MotionArticle>

                <MotionArticle
                  className="rounded-2xl border border-white/15 bg-white/8 p-5 backdrop-blur-md"
                  variants={itemVariants}
                >
                  <h3 className="text-sm font-extrabold uppercase tracking-[0.1em] text-[#95e5ff]">
                    Mentor AI helps you
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {helpsWith.map((item, index) => (
                      <MotionLi
                        key={item}
                        className="flex items-start gap-3 text-sm text-[#e6f2ff] md:text-base"
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.35, delay: 0.06 * index, ease: 'easeOut' }}
                        viewport={{ once: true }}
                      >
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#4fc3e8]" />
                        <span>{item}</span>
                      </MotionLi>
                    ))}
                  </ul>
                </MotionArticle>
              </div>

              <MotionItem
                className="mt-7 rounded-2xl border border-[#74d6ff]/30 bg-[#0a2e7a]/45 px-5 py-4"
                variants={itemVariants}
              >
                <p className="text-sm leading-relaxed text-[#c8e4ff] md:text-base">
                  It supports your growth anytime - but it does not replace mentorship.
                </p>
                <p className="mt-2 text-base font-bold text-white md:text-lg">
                  Mentorship is human. Mentor AI is reinforcement.
                </p>
              </MotionItem>
            </div>

            <MotionImg
              src={aiModel}
              alt="Mentor AI model"
              className="mx-auto h-auto w-full max-w-none rounded-3xl border border-white/20 bg-white/10 p-2 shadow-[0_20px_40px_rgba(5,19,79,0.35)] object-contain"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true }}
            />
          </div>
        </MotionPanel>
      </div>
    </MotionSection>
  )
}
