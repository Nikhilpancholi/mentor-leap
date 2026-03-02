import courseImage from '../assets/courses.webp'
import workshop from '../assets/workshop.webp'
import membership from '../assets/membership.webp'
import gami from '../assets/gami.webp'
import onetoone from '../assets/onetoone.webp'

const cards = [
  {
    title: 'Courses',
    copy: 'Offer interactive and engaging courses on varied topics to a wide audience through our platform.',
    span: 'md:col-span-2',
    img: courseImage,
  },
  {
    title: 'Workshops',
    copy: 'Host Zoom webinars and meetings seamlessly integrated in the platform with smooth learner experience.',
    span: 'md:col-span-2',
    img: workshop,
  },
  {
    title: 'Memberships',
    copy: 'Create exclusive recurring revenue streams by offering members early access to your content.',
    span: 'md:col-span-2',
    img: membership,
  },
  {
    title: 'Gamified Communities',
    copy: 'Build communities through points, badges, and leaderboards to increase long-term engagement.',
    span: 'md:col-span-3',
    img: gami,
  },
  {
    title: '1:1 Consultations',
    copy: 'Schedule private consultations by easily creating, managing, and sharing dedicated slots.',
    span: 'md:col-span-3',
    img: onetoone,
  },
]

export default function WhatCreatorsDo() {
  return (
    <section className="bg-[#2e86de3b] px-4 py-14 md:px-8 md:py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-7 text-center text-3xl font-extrabold text-[#0F2E6D] md:text-5xl">
          What we do on MentorLeap.
        </h2>

        <div className="grid gap-4 md:grid-cols-6">
          {cards.map((card) => (
            <article
              key={card.title}
              className={`rounded-xl border border-[#D9DEE8] bg-[#F9FAFC] p-4 shadow-[0_8px_20px_rgba(15,46,109,0.08)] ${card.span} ${
                card.span === 'md:col-span-3' ? 'md:flex md:items-start md:gap-4' : ''
              }`}
            >
              <div
                className={`rounded-lg bg-[#ECEFF4] p-2 ${
                  card.span === 'md:col-span-3' ? 'md:w-[48%] md:shrink-0' : ''
                }`}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className={`h-[120px] w-full rounded-md object-cover ${
                    card.span === 'md:col-span-3' ? 'md:h-[170px]' : 'md:h-[100%]'
                  }`}
                  loading="lazy"
                />
              </div>
              <div className={card.span === 'md:col-span-3' ? 'md:w-[52%]' : ''}>
                <h3 className="mt-3 text-2xl font-extrabold leading-tight text-[#181818] md:mt-0 md:text-3xl">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#181818]">{card.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
