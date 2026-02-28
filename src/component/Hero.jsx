const stats = [
  { value: '250+', label: 'Mentors' },
  { value: '18,000+', label: 'Learners' },
  { value: '35+', label: 'Countries' },
  { value: '20+', label: 'Industries' },
]

const mentors = [
  'AS',
  'RK',
  'NJ',
  'PM',
  'DV',
  'SK',
  'AR',
  'KP',
  'VS',
  'MT',
  'RS',
  'AG',
]

const palette = [
  '#1E63B6',
  '#2E86DE',
  '#4FC3E8',
  '#8EDBF5',
  '#1E63B6',
  '#2E86DE',
]

export default function Hero() {
  return (
    <section className="bg-[#ffffff] px-4 pb-10 pt-8 md:px-8 md:pb-14 md:pt-10">
      <div className="mx-auto max-w-6xl">
        <div
          className="overflow-hidden rounded-2xl border border-[#1E63B6]/60"
          style={{
            background:
              'radial-gradient(circle at 50% 22%, rgba(79,195,232,0.77), rgba(15,46,109,1) 54%)',
          }}
        >
          <div className="px-6 pb-12 pt-12 text-center md:px-14 md:pb-14 md:pt-16">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#8EDBF5]">
              Mentorleap
            </p>
            <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight text-white md:text-6xl md:leading-[1.06]">
              Accelerate Your Career with Global Industry Leaders
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[#8EDBF5] md:text-base">
              Mentorleap offers 1:1 mentoring, cohort-based learning, and curated career
              content for ambitious professionals, students, and founders.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                className="rounded-full border border-[#2E86DE] bg-[#2E86DE] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1E63B6]"
              >
                Book A Discovery Call
              </button>
              <button
                type="button"
                className="rounded-full border border-[#4FC3E8] bg-transparent px-6 py-3 text-sm font-bold text-[#4FC3E8] transition hover:bg-[#4FC3E8]/10"
              >
                Explore Programs
              </button>
            </div>
          </div>

          <div className="border-y border-[#1E63B6] bg-[#1E63B6]/30 px-6 py-5 md:px-12">
            <ul className="grid grid-cols-2 gap-y-4 md:grid-cols-4">
              {stats.map((item) => (
                <li key={item.label} className="text-center">
                  <p className="text-2xl font-extrabold text-white md:text-3xl">{item.value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#8EDBF5]">
                    {item.label}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden bg-[#1E63B6] px-6 pb-10 pt-8 md:px-10 md:pb-12 md:pt-10">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(142,219,245,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(142,219,245,0.12)_1px,transparent_1px)] bg-[size:32px_32px]" />
            <div className="relative z-10 mx-auto grid max-w-5xl grid-cols-4 gap-3 sm:grid-cols-6 md:grid-cols-12">
              {mentors.map((mentor, index) => (
                <div
                  key={mentor + index}
                  className="flex aspect-square items-center justify-center rounded-full border border-white/35 text-sm font-bold text-white shadow-[0_8px_20px_rgba(15,46,109,0.25)]"
                  style={{ backgroundColor: palette[index % palette.length] }}
                >
                  {mentor}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
