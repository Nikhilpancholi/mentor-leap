import clientImage from '../assets/client-img.png'

const stats = [
  { value: '250+', label: 'Mentors' },
  { value: '18,000+', label: 'Learners' },
  { value: '35+', label: 'Countries' },
  { value: '20+', label: 'Industries' },
]

export default function Hero() {
  return (
    <section className="bg-[#ffffff] px-4 pb-10 pt-8 md:px-8 md:pb-14 md:pt-10">
      <div className="mx-auto max-w-6xl">
        <div
          className="relative overflow-hidden rounded-2xl border border-[#1E63B6]/60"
          style={{
            background:
              'radial-gradient(circle at 50% 22%, rgba(79,195,232,0.77), rgba(15,46,109,1) 54%)',
          }}
        >
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(142,219,245,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(142,219,245,0.2) 1px, transparent 1px)',
              backgroundSize: '30px 30px',
              maskImage: 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))',
              WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))',
            }}
          />

          <div className="grid items-center gap-8 px-6 pb-12 pt-12 md:grid-cols-[1.05fr_0.95fr] md:px-14 md:pb-14 md:pt-16">
            <div className="text-center md:text-left">
              <p className="mb-4 text-2xl  font-['Allura']  tracking-[0.2em] text-[#8EDBF5]">
                Mentorleap
              </p>
              <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight text-white md:mx-0 md:text-5xl md:leading-[1.06]">
                Executive Coaching & Leadership Communication for Ambitious Professionals
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[#8EDBF5] md:mx-0 md:text-base">
                Advance your career with 1:1 executive coaching, group leadership programs, corporate training workshops, and premium online communication courses.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
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

            <div className="relative mx-auto flex w-full max-w-[460px] items-end justify-center md:mx-0 md:justify-end">
              <div className="pointer-events-none absolute -left-5 top-8 hidden h-24 w-24 rounded-full border border-[#8EDBF5]/60 md:block" />
              <div className="pointer-events-none absolute -left-10 bottom-20 hidden h-12 w-12 rotate-12 rounded-lg border border-[#4FC3E8]/60 bg-[#4FC3E8]/15 md:block" />
              <div className="pointer-events-none absolute right-6 top-10 hidden h-14 w-14 rounded-2xl bg-[#1E63B6]/45 md:block" />
              <div className="pointer-events-none absolute -right-2 top-1/2 hidden h-20 w-20 -translate-y-1/2 rounded-full border border-[#8EDBF5]/45 bg-[#0F2E6D]/45 md:block" />
              <div className="absolute bottom-8 right-10 hidden h-48 w-36 rounded-[28px] bg-white/20 blur-[1px] md:block" />
              <div className="pointer-events-none absolute bottom-2 left-7 hidden rounded-full border border-[#8EDBF5]/45 bg-[#0F2E6D]/65 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#8EDBF5] md:block">
                Premium Mentorship
              </div>
              <img
                src={clientImage}
                alt="Mentorleap client"
                className="relative z-10 max-h-[460px] w-full object-contain drop-shadow-[0_70px_20px_rgba(0,0,0,1)]"
              />
            </div>
          </div>

          <div className="border-y border-[#1E63B6] bg-[#1E63B6]/30 px-6 py-5 md:px-12 backdrop-blur-md">
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

          
        </div>
      </div>
    </section>
  )
}
