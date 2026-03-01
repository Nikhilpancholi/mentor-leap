const quickLinks = ['About MentorLeap', 'Executive Coaching', 'Leadership Bootcamps', 'Studio']
const resources = ['Case Studies', 'Success Stories', 'FAQ', 'Contact Support']
const legalLinks = ['Privacy Policy', 'Terms of Use', 'Refund Policy']
const social = ['LinkedIn', 'YouTube', 'Instagram', 'X']

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0F2E6D] px-4 pb-8 pt-14 md:px-8 md:pt-16">
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#1E63B6]/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[#4FC3E8]/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-8 rounded-3xl border border-[#4FC3E8]/25 bg-[#0C2558]/85 p-7 shadow-[0_24px_60px_rgba(0,0,0,0.28)] md:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr] md:p-10">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              mentor<span className="text-[#4FC3E8]">leap</span>
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#8EDBF5] md:text-base">
              India&apos;s premium executive communication and leadership growth platform for
              professionals, founders, and high-performing teams.
            </p>
            <button
              type="button"
              className="mt-6 rounded-full border border-[#2E86DE] bg-[#2E86DE] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#1E63B6]"
            >
              Book A Discovery Call
            </button>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-[#8EDBF5]">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#0" className="text-sm text-white/90 transition hover:text-[#4FC3E8]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-[#8EDBF5]">Resources</h3>
            <ul className="mt-4 space-y-2.5">
              {resources.map((link) => (
                <li key={link}>
                  <a href="#0" className="text-sm text-white/90 transition hover:text-[#4FC3E8]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-[#8EDBF5]">Connect</h3>
            <p className="mt-4 text-sm text-white/90">hello@mentorleap.in</p>
            <p className="mt-1 text-sm text-white/90">+91 98765 43210</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {social.map((name) => (
                <a
                  key={name}
                  href="#0"
                  className="rounded-full border border-[#4FC3E8]/45 bg-[#1E63B6]/35 px-3 py-1.5 text-xs font-semibold text-white transition hover:border-[#4FC3E8] hover:bg-[#1E63B6]/60"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-3 border-t border-[#4FC3E8]/20 pt-5 md:flex-row md:items-center">
          <p className="text-xs text-[#8EDBF5]/90">© 2026 MentorLeap. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            {legalLinks.map((link) => (
              <a key={link} href="#0" className="text-xs text-[#8EDBF5]/90 transition hover:text-white">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
