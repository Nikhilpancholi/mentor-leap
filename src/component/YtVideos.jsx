import { motion } from 'framer-motion'

const videoTopics = [
  {
    title: 'Evolving Customer Engagement Dynamics',
    videoId: 'i5pDykiREPw',
    desc: 'Body language, confidence, and authority for high-stakes conversations.',
    duration: '18:42',
  },
    {
    title: 'Redefining Customer Conversations',
    videoId: 'bZ9BtRfgg6o',
    desc: 'Influence teams and stakeholders with strategic messaging.',
    duration: '21:15',
  },
    {
    title: 'Thought Leadership In AI at AIM 2023',
    videoId: 'flQVpRDAf4M',
    desc: 'Career acceleration lessons for ambitious professionals.',
    duration: '15:30',
  },
  {
    title: 'Route Mobile Amplify Insider',
    videoId: 'xt0wdcVsvL8',
    desc: 'Practical frameworks to speak with clarity and confidence.',
    duration: '12:09',
  },


]

export default function YtVideos() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 md:px-8 md:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(rgba(15,46,109,0.16) 1px, transparent 1px), radial-gradient(rgba(79,195,232,0.14) 1px, transparent 1px)',
          backgroundSize: '22px 22px, 42px 42px',
          backgroundPosition: '0 0, 10px 10px',
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-8 text-center md:mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E63B6]">MentorLeap Studio</p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#0F2E6D] md:text-5xl">
            Mridu Bhandari on YouTube
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-[#1E63B6] md:text-base">
            Curated YouTube highlights on leadership communication, executive presence, and career growth.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:gap-5">
          {videoTopics.map((video, index) => (
            <motion.a
              key={video.videoId}
              href={`https://www.youtube.com/watch?v=${video.videoId}`}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              whileHover={{ y: -4 }}
              className="group flex overflow-hidden rounded-2xl border border-[#1E63B6]/18 bg-white shadow-[0_14px_36px_rgba(15,46,109,0.12)]"
            >
              <div className="relative w-[44%] shrink-0 overflow-hidden bg-[#0F2E6D]">
                <img
                  src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                  alt={video.title}
                  className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-r from-black/20 to-black/50" />
                <span className="absolute right-3 top-3 rounded-md bg-black/65 px-2 py-1 text-[11px] font-bold text-white">
                  {video.duration}
                </span>
                <span className="absolute bottom-3 left-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-[#0F2E6D] shadow-lg">
                  ▶
                </span>
              </div>
              <div className="flex w-[56%] flex-col justify-between p-4 md:p-5">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#1E63B6]">
                    YouTube Highlight
                  </p>
                  <h3 className="mt-2 text-lg font-extrabold leading-tight text-[#0F2E6D]">
                    {video.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#1E63B6]">{video.desc}</p>
                </div>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#2E86DE] transition group-hover:text-[#1E63B6]">
                  Watch on YouTube <span>-&gt;</span>
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {['public speaking', 'executive coaching', 'leadership communication'].map((tag) => (
            <a
              key={tag}
              href={`https://www.youtube.com/results?search_query=${encodeURIComponent(`Mridu Bhandari ${tag}`)}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#4FC3E8]/60 bg-[#F4FBFE] px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] text-[#1E63B6] transition hover:bg-[#E9F7FD]"
            >
              {tag}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

