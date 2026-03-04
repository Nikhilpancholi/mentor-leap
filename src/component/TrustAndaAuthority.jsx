import { motion } from 'framer-motion'

const audience = [
  'CXOs',
  'Startup founders',
  'Senior managers',
  'Entrepreneurs',
  'Corporate teams',
  'High-potential professionals',
]

export default function TrustAndaAuthority() {
  const MotionArticle = motion.article
  const MotionAside = motion.aside

  return (
    <section className=" px-4 py-16 md:px-8 md:py-20"
      style={{ 
        backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://png.pngtree.com/thumb_back/fh260/background/20240914/pngtree-ai-technology-abstract-background-generative-art-creative-banner-concept-in-the-image_16208106.jpg)", 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
      >
        
      <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-[1.55fr_0.85fr]">
        <MotionArticle
          className="relative overflow-hidden rounded-2xl border border-[#1E63B6]/20 p-7 shadow-[0_14px_34px_rgba(15,46,109,0.08)] md:p-8"
          initial={{ opacity: 0, x: -30, y: 12 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="pointer-events-none absolute inset-0">
            <iframe
              className="h-full w-full scale-[1.3]"
              src="https://www.youtube.com/embed/fwCsQoaID4k?start=18&autoplay=1&mute=1&controls=0&loop=1&playlist=fwCsQoaID4k&modestbranding=1&rel=0&playsinline=1"
              title="Trust and authority background video"
              allow="autoplay; encrypted-media; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
            />
            <div className="absolute inset-0 bg-[linear-gradient(190deg,rgba(255,255,255,0.08),rgba(255,255,255,0.9))]" />
          </div>
          <p className="relative text-xs font-extrabold uppercase tracking-[0.2em] text-[#205eaa]">
            Section 2 - Trust & Authority
          </p>
          <h2 className="relative mt-4 text-3xl font-extrabold leading-tight text-[#0F2E6D] md:text-4xl">
            India&apos;s Trusted Executive Communication<br/> & Leadership<br/> Coaching Platform
          </h2>
          <p className="relative mt-5 text-sm leading-relaxed text-[#1E63B6] md:text-base">
            MentorLeap is a premium executive coaching and leadership development platform
            founded by award-winning journalist and communication expert Mridu Bhandari.
          </p>
          <p className="relative mt-4 text-sm leading-relaxed text-[#1E63B6] md:text-base">
            Our programs combine real-world media expertise with structured leadership
            frameworks to deliver measurable transformation.
          </p>
        </MotionArticle>

        <MotionAside
          className="rounded-2xl border border-[#1E63B6]/20 bg-white p-7 shadow-[0_14px_34px_rgba(15,46,109,0.08)] md:p-8"
          initial={{ opacity: 0, x: 30, y: 12 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.08 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <h3 className="text-xl font-extrabold text-[#0F2E6D]">We work with</h3>
          <ul className="mt-5 grid gap-3">
            {audience.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-[#0F2E6D] md:text-base">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#4FC3E8]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 rounded-xl border border-[#8EDBF5] bg-[#F4FBFE] px-4 py-4">
            <p className="text-sm font-semibold text-[#0F2E6D]">
              Built on media-grade communication frameworks for leadership impact.
            </p>
          </div>
        </MotionAside>
      </div>
    </section>
  )
}
