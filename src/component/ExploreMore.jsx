import clientImage from '../assets/explore1.jpeg'
import clientImage2 from '../assets/explore2.jpeg'

const cards = [
  {
    titleTop: 'Newsletter',
    titleMain: 'COMING SOON',
    footer: 'MentorLeap Presents',
    image: clientImage,
    align: 'left',
  },
  {
    titleTop: 'COMMUNICATION',
    titleMain: 'MASTERCLASS',
    footer: 'New Episodes -',
    image: clientImage2,
    align: 'right',
  },
]

export default function ExploreMore() {
  return (
    <section className="bg-white px-4 py-14 md:px-8 md:py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-5 text-3xl font-extrabold text-white md:mb-6 md:text-4xl">
          Explore More.
        </h2>

        <div className="grid gap-5 md:grid-cols-2">
          {cards.map((card) => (
            <article
              key={card.titleMain}
              className="group relative min-h-[330px] overflow-hidden rounded-2xl border border-white/10 bg-[#0F2E6D] shadow-[0_20px_45px_rgba(0,0,0,0.35)]"
            >
              <img
                src={card.image}
                alt={card.titleMain}
                className={`absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105 ${
                  card.align === 'left' ? 'object-left' : 'object-right'
                }`}
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/45 to-black/65" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_65%,rgba(30,99,182,0.34),transparent_60%)]" />

              <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-8">
                <div>
                  <p className="text-2xl font-medium tracking-wide text-white/90 md:text-4xl">
                    {card.titleTop}
                  </p>
                  <h3 className="mt-2 text-4xl font-extrabold tracking-wide text-white md:text-5xl">
                    {card.titleMain}
                  </h3>
                  <span className="mt-3 block h-2 w-16 bg-white" />
                </div>

                <p className="text-sm font-medium text-white/90">{card.footer}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
