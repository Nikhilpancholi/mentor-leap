import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const faqs = [
  {
    q: 'Who is MentorLeap designed for?',
    a: 'MentorLeap is built for ambitious professionals, founders, senior managers, and high-potential teams who want stronger leadership communication and measurable career growth.',
  },
  {
    q: 'How are 1:1 coaching sessions structured?',
    a: 'Sessions are personalized around your goals, communication gaps, and leadership context. You get structured action plans, feedback loops, and practical execution support.',
  },
  {
    q: 'Do you offer corporate leadership programs?',
    a: 'Yes. MentorLeap runs customized workshops and leadership communication programs for organizations that want confident, high-impact managers and executive teams.',
  },
  {
    q: 'Are courses and resources available after purchase?',
    a: 'Yes. Most digital programs include secure login access, and selected tracks come with long-term or lifetime access based on the plan you choose.',
  },
  {
    q: 'Can I attend programs remotely?',
    a: 'Absolutely. MentorLeap offers online coaching, virtual bootcamps, and remote learning resources, along with selected in-person experiences.',
  },
]

function FaqItem({ item, isOpen, onClick }) {
  return (
    <article className="rounded-2xl border border-[#1E63B6]/18 bg-white/95 shadow-[0_12px_34px_rgba(15,46,109,0.08)]">
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
      >
        <h3 className="text-base font-bold text-[#0F2E6D] md:text-lg">{item.q}</h3>
        <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#4FC3E8]/70 bg-[#F4FBFE]">
          <span className="absolute h-[2px] w-3 bg-[#1E63B6]" />
          <motion.span
            animate={{ rotate: isOpen ? 0 : 90 }}
            transition={{ duration: 0.2 }}
            className="absolute h-[2px] w-3 bg-[#1E63B6]"
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-sm leading-relaxed text-[#1E63B6] md:px-6 md:text-base">
              {item.a}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </article>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-white px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-[0.9fr_1.1fr]">
        <aside className="rounded-3xl border border-[#1E63B6]/20 bg-[#0F2E6D] p-6 shadow-[0_20px_50px_rgba(15,46,109,0.2)] md:sticky md:top-24 md:h-fit md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8EDBF5]">FAQ</p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white md:text-4xl">
            Answers to your most common questions.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#8EDBF5] md:text-base">
            Still need clarity? Book a discovery call and we will help you choose the right
            learning path.
          </p>
          <button
            type="button"
            className="mt-6 rounded-full border border-[#2E86DE] bg-[#2E86DE] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#1E63B6]"
          >
            Talk to MentorLeap
          </button>
        </aside>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <FaqItem
              key={item.q}
              item={item}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
