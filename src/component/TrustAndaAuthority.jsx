const audience = [
  'CXOs',
  'Startup founders',
  'Senior managers',
  'Entrepreneurs',
  'Corporate teams',
  'High-potential professionals',
]

export default function TrustAndaAuthority() {
  return (
    <section className="bg-white px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-[1.15fr_0.85fr]">
        <article className="rounded-2xl border border-[#1E63B6]/20 bg-[#F8FBFF] p-7 shadow-[0_14px_34px_rgba(15,46,109,0.08)] md:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E63B6]">
            Section 2 - Trust & Authority
          </p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#0F2E6D] md:text-4xl">
            India&apos;s Trusted Executive Communication & Leadership Coaching Platform
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-[#1E63B6] md:text-base">
            MentorLeap is a premium executive coaching and leadership development platform
            founded by award-winning journalist and communication expert Mridu Bhandari.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[#1E63B6] md:text-base">
            Our programs combine real-world media expertise with structured leadership
            frameworks to deliver measurable transformation.
          </p>
        </article>

        <aside className="rounded-2xl border border-[#1E63B6]/20 bg-white p-7 shadow-[0_14px_34px_rgba(15,46,109,0.08)] md:p-8">
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
        </aside>
      </div>
    </section>
  )
}
