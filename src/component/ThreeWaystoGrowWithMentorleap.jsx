import mentor1 from '../assets/mentor1.jpeg'
import mentor2 from '../assets/mentor2.jpeg'
import mentor3 from '../assets/mentor3.jpeg'

const cards = [
  { src: mentor1, alt: 'Mentorleap growth card 1' },
  { src: mentor2, alt: 'Mentorleap growth card 2' },
  { src: mentor3, alt: 'Mentorleap growth card 3' },
]

export default function ThreeWaystoGrowWithMentorleap() {
  return (
    <section className="bg-white px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="text-center text-3xl font-extrabold text-[#0f2e6d] md:text-4xl">
          Three Ways to Grow with Mentorleap
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.alt}
              className="aspect-[4/3] overflow-hidden rounded-2xl border border-[#dfe9f6] bg-[#f5f9ff] shadow-[0_12px_28px_rgba(15,46,109,0.12)]"
            >
              <img
                src={card.src}
                alt={card.alt}
                loading="lazy"
                className="h-full w-full object-cover object-center"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
