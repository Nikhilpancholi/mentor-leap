import { useState } from 'react'
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
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const total = videoTopics.length

  const goNext = () => {
    setDirection(1)
    setActiveIndex((prev) => (prev + 1) % total)
  }

  const goPrev = () => {
    setDirection(-1)
    setActiveIndex((prev) => (prev - 1 + total) % total)
  }

  const getOffset = (index) => {
    let diff = index - activeIndex
    if (diff > total / 2) diff -= total
    if (diff < -total / 2) diff += total
    return diff
  }

  return (
    <section className="relative overflow-hidden bg-white px-4 py-14 md:px-8 md:py-18">
      
      <div
        className="pointer-events-none absolute inset-0 opacity-22"
        style={{
          backgroundImage:
            'radial-gradient(rgba(15,46,109,0.16) 1px, transparent 1px), radial-gradient(rgba(79,195,232,0.14) 1px, transparent 1px)',
          backgroundSize: '20px 20px, 38px 38px',
          backgroundPosition: '0 0, 10px 10px',
        }}
      />

      <div className="mb-8 text-center md:mb-2">
           <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E63B6]">MentorLeap Studio</p>
         <h2 className="mt-3 text-3xl font-extrabold text-[#0F2E6D] md:text-5xl">
             Mridu Bhandari on YouTube
           </h2>
         <p className="mx-auto mt-3 max-w-2xl text-sm text-[#1E63B6] md:text-base">
             Curated YouTube highlights on leadership communication, executive presence, and career growth.
           </p>
      </div>

      <div className="relative mx-auto max-w-6xl">
        

        
        <div className="relative mx-auto h-[360px] w-full max-w-[980px] overflow-hidden md:h-[420px]">
          {videoTopics.map((video, index) => {
            const offset = getOffset(index)
            const visible = Math.abs(offset) <= 1
            if (!visible) return null

            const baseX = offset * 330
            const isCenter = offset === 0

            return (
              <motion.a
                key={video.videoId}
                href={`https://www.youtube.com/watch?v=${video.videoId}`}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: baseX + direction * 36, scale: 0.9 }}
                animate={{
                  opacity: isCenter ? 1 : 0.58,
                  x: baseX,
                  scale: isCenter ? 1 : 0.82,
                }}
                transition={{ type: 'spring', stiffness: 210, damping: 24 }}
                className="absolute left-1/2 top-1/2 block aspect-[4/3] w-[300px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[22px] border border-[#1E63B6]/18 bg-[#0F2E6D] shadow-[0_16px_34px_rgba(15,46,109,0.22)] md:w-[360px]"
                style={{ zIndex: isCenter ? 3 : 2 }}
              >
                <img
                  src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                  alt={video.title}
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-black/5" />
                <span className="absolute right-3 top-3 rounded-md bg-black/70 px-2 py-1 text-[11px] font-bold text-white">
                  {video.duration}
                </span>
                <span className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/95 shadow-lg">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M3 2.2L9.2 6L3 9.8V2.2Z" fill="#0F2E6D" />
                  </svg>
                </span>
              </motion.a>
            )
          })}
        </div>

        <div className="mt-2 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={goPrev}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#1E63B6]/20 bg-white text-[#0F2E6D] transition hover:bg-[#F3F8FF]"
            aria-label="Previous video"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M8.8 3.2L5.2 7L8.8 10.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {videoTopics.map((video, index) => (
              <span
                key={video.videoId}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex ? 'w-6 bg-[#0F2E6D]' : 'w-2 bg-[#1E63B6]/25'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={goNext}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#0F2E6D] bg-white text-[#0F2E6D] transition hover:bg-[#F3F8FF]"
            aria-label="Next video"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M5.2 3.2L8.8 7L5.2 10.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

















// import { motion } from 'framer-motion'

// const videoTopics = [
//   {
//     title: 'Evolving Customer Engagement Dynamics',
//     videoId: 'i5pDykiREPw',
//     desc: 'Body language, confidence, and authority for high-stakes conversations.',
//     duration: '18:42',
//   },
//     {
//     title: 'Redefining Customer Conversations',
//     videoId: 'bZ9BtRfgg6o',
//     desc: 'Influence teams and stakeholders with strategic messaging.',
//     duration: '21:15',
//   },
//     {
//     title: 'Thought Leadership In AI at AIM 2023',
//     videoId: 'flQVpRDAf4M',
//     desc: 'Career acceleration lessons for ambitious professionals.',
//     duration: '15:30',
//   },
//   {
//     title: 'Route Mobile Amplify Insider',
//     videoId: 'xt0wdcVsvL8',
//     desc: 'Practical frameworks to speak with clarity and confidence.',
//     duration: '12:09',
//   },


// ]

// export default function YtVideos() {
//   return (
//     <section className="relative overflow-hidden bg-white px-4 py-16 md:px-8 md:py-20">
//       <div
//         className="pointer-events-none absolute inset-0 opacity-30"
//         style={{
//           backgroundImage:
//             'radial-gradient(rgba(15,46,109,0.16) 1px, transparent 1px), radial-gradient(rgba(79,195,232,0.14) 1px, transparent 1px)',
//           backgroundSize: '22px 22px, 42px 42px',
//           backgroundPosition: '0 0, 10px 10px',
//         }}
//       />

//       <div className="relative mx-auto max-w-6xl">
//         <div className="mb-8 text-center md:mb-10">
//           <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E63B6]">MentorLeap Studio</p>
//           <h2 className="mt-3 text-3xl font-extrabold text-[#0F2E6D] md:text-5xl">
//             Mridu Bhandari on YouTube
//           </h2>
//           <p className="mx-auto mt-3 max-w-2xl text-sm text-[#1E63B6] md:text-base">
//             Curated YouTube highlights on leadership communication, executive presence, and career growth.
//           </p>
//         </div>

//         <div className="grid gap-4 md:grid-cols-2 md:gap-5">
//           {videoTopics.map((video, index) => (
//             <motion.a
//               key={video.videoId}
//               href={`https://www.youtube.com/watch?v=${video.videoId}`}
//               target="_blank"
//               rel="noreferrer"
//               initial={{ opacity: 0, y: 18 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.2 }}
//               transition={{ duration: 0.35, delay: index * 0.06 }}
//               whileHover={{ y: -4 }}
//               className="group flex overflow-hidden rounded-2xl border border-[#1E63B6]/18 bg-white shadow-[0_14px_36px_rgba(15,46,109,0.12)]"
//             >
//               <div className="relative w-[44%] shrink-0 overflow-hidden bg-[#0F2E6D]">
//                 <img
//                   src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
//                   alt={video.title}
//                   className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
//                   loading="lazy"
//                 />
//                 <div className="absolute inset-0 bg-linear-to-r from-black/20 to-black/50" />
//                 <span className="absolute right-3 top-3 rounded-md bg-black/65 px-2 py-1 text-[11px] font-bold text-white">
//                   {video.duration}
//                 </span>
//                 <span className="absolute bottom-3 left-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-[#0F2E6D] shadow-lg">
//                   ▶
//                 </span>
//               </div>
//               <div className="flex w-[56%] flex-col justify-between p-4 md:p-5">
//                 <div>
//                   <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#1E63B6]">
//                     YouTube Highlight
//                   </p>
//                   <h3 className="mt-2 text-lg font-extrabold leading-tight text-[#0F2E6D]">
//                     {video.title}
//                   </h3>
//                   <p className="mt-2 text-sm leading-relaxed text-[#1E63B6]">{video.desc}</p>
//                 </div>
//                 <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#2E86DE] transition group-hover:text-[#1E63B6]">
//                   Watch on YouTube <span>-&gt;</span>
//                 </span>
//               </div>
//             </motion.a>
//           ))}
//         </div>

//         <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
//           {['public speaking', 'executive coaching', 'leadership communication'].map((tag) => (
//             <a
//               key={tag}
//               href={`https://www.youtube.com/results?search_query=${encodeURIComponent(`Mridu Bhandari ${tag}`)}`}
//               target="_blank"
//               rel="noreferrer"
//               className="rounded-full border border-[#4FC3E8]/60 bg-[#F4FBFE] px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] text-[#1E63B6] transition hover:bg-[#E9F7FD]"
//             >
//               {tag}
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
