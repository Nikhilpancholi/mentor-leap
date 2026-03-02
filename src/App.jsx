import { useEffect } from 'react'
import './App.css'
import { BouncyCardsFeatures } from './component/BouncyCardsFeatures'
import Hero from './component/Hero'
import Nav from './component/nav'
import Services from './component/services'
import TrustAndaAuthority from './component/TrustAndaAuthority'
import RotatingWorthSection from './component/RotatingWorthSection'
import FAQ from './component/faq'
import Footer from './component/footer'
import YtVideos from './component/YtVideos'
import clientImage2 from './assets/client-img2.png'
import ExploreMore from './component/ExploreMore'
import WhatCreatorsDo from './component/WhatCreatorsDo'
import mentor1 from './assets/mentor1.jpeg'
import mentor2 from './assets/mentor2.jpeg'
import mentor3 from './assets/mentor3.jpeg'

function App() {
  const testimonials = [
    {
      quote:
        'Mentorleap helped me move from confusion to clarity in just a few sessions. I switched into a product role with confidence.',
      name: 'Priya Sharma',
      role: 'Product Manager',
    },
    {
      quote:
        'The cohort format is disciplined and practical. Every week felt like real progress, not passive content consumption.',
      name: 'Rahul Verma',
      role: 'Growth Associate',
    },
    {
      quote:
        'The leadership communication coaching improved how I speak in stakeholder meetings and interviews.',
      name: 'Ananya Gupta',
      role: 'Senior Consultant',
    },
    {
      quote:
        'I started applying the frameworks immediately. The structure and accountability were exactly what I needed.',
      name: 'Karan Mehta',
      role: 'Founder',
    },
  ]

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="landing-page">
      <Nav />
      <Hero />
      
      <TrustAndaAuthority />
      <WhatCreatorsDo />

      <Services />
      {/* <BouncyCardsFeatures /> */}

      {/* <section className="social-proof section-light reveal">
        <div className="container">
          <ul className="proof-list">
            <li>
              <span className="proof-icon" />
              <strong>250+</strong> Mentors
            </li>
            <li>
              <span className="proof-icon" />
              <strong>18,000+</strong> Learners
            </li>
            <li>
              <span className="proof-icon" />
              <strong>35+</strong> Countries
            </li>
            <li>
              <span className="proof-icon" />
              <strong>20+</strong> Industries
            </li>
          </ul>
        </div>
      </section> */}

      <section className="offerings section-light">
        <div className="container reveal">
          <h2>Three Ways to Grow with Mentorleap</h2>
          <div className="offer-grid">
            <article className="offer-card" 
            style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.01), rgba(255,255,255,1)), url(${mentor1})`, backgroundPosition: 'center', backgroundSize: 'contain' }}>
              {/* <span className="offer-icon">01</span> */}
              <h2 className='text-[#181818] pt-38 pl-6 '>Conversations</h2>
              {/* <p>
                Book focused 1:1 sessions with operators and leaders for direct career
                decisions.
              </p> */}
              {/* <a href="#0">Learn More</a> */}
            </article>
            <article className="offer-card"
                        style={{backgroundImage: `url(${mentor2})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
              <span className="offer-icon">02</span>
              <h3>Cohorts</h3>
              {/* <p>
                Join guided peer groups with weekly goals, expert reviews, and practical
                accountability.
              </p> */}
              {/* <a href="#0">Learn More</a> */}
            </article>
            <article className="offer-card" 
            style={{backgroundImage: `url(${mentor3})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
              <span className="offer-icon">03</span>
              <h3>Studio</h3>
              {/* <p>
                Access curated career templates, strategy playbooks, and proven growth
                frameworks.
              </p> */}
              {/* <a href="#0">Learn More</a> */}
            </article>
          </div>
        </div>
      </section>

      <section className="how-it-works section-tinted">
        <div className="container reveal">
          <div className="hiw-head">
            <h2>How It Works</h2>
            <p>Simple, structured, and outcome-focused from day one.</p>
          </div>
          <div className="hiw-stage">
            <article className="hiw-card" style={{ '--hiw-delay': '80ms' }}>
              <span className="hiw-index">01</span>
              <h3>Sign Up</h3>
              <p>Create your profile and share your goals, role, and growth focus.</p>
            </article>
            <span className="hiw-connector" style={{ '--hiw-delay': '220ms' }} />
            <article className="hiw-card" style={{ '--hiw-delay': '320ms' }}>
              <span className="hiw-index">02</span>
              <h3>Get Matched</h3>
              <p>Get paired with the right mentor based on your career direction.</p>
            </article>
            <span className="hiw-connector" style={{ '--hiw-delay': '460ms' }} />
            <article className="hiw-card" style={{ '--hiw-delay': '560ms' }}>
              <span className="hiw-index">03</span>
              <h3>Book Sessions</h3>
              <p>Schedule focused sessions with practical actions you can execute.</p>
            </article>
            <span className="hiw-connector" style={{ '--hiw-delay': '700ms' }} />
            <article className="hiw-card" style={{ '--hiw-delay': '800ms' }}>
              <span className="hiw-index">04</span>
              <h3>Build Growth Plan</h3>
              <p>Convert learnings into a clear roadmap with measurable milestones.</p>
            </article>
          </div>
        </div>
      </section>

      {/* <section className="mentors section-light">
        <div className="container reveal">
          <h2>Featured Mentors</h2>
          <div className="mentor-grid">
            {[
              [
                'Aarav Mehta',
                'VP Product, Orbit AI',
                'SaaS',
                'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
              ],
              [
                'Riya Sen',
                'Growth Lead, Pixelworks',
                'Growth',
                'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
              ],
              [
                'Nikhil Rao',
                'Founder, DataSprint',
                'Analytics',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
              ],
              [
                'Anika Dsouza',
                'Director, Nova Cloud',
                'Engineering',
                'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
              ],
              [
                'Kabir Jain',
                'Principal, VentureEast',
                'Startups',
                'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=200&q=80',
              ],
              [
                'Simran Kaur',
                'Head of Marketing, Looply',
                'Brand',
                'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=80',
              ],
            ].map(([name, title, industry, photo]) => (
              <article key={name} className="mentor-card">
                <img className="mentor-headshot" src={photo} alt={name} loading="lazy" />
                <h3>{name}</h3>
                <p>{title}</p>
                <span>{industry}</span>
                <button type="button" className="btn btn-book">
                  Book Session
                </button>
              </article>
            ))}
          </div>
        </div>
      </section> */}
           <YtVideos />

      {/* <section className="cohort section-dark">
        <div className="container cohort-grid reveal">
          <div className="cohort-copy">
            <h2>Structured 4-6 Week Micro Cohorts for Serious Career Outcomes</h2>
            <p>
              Work with a tight peer batch, live mentor reviews, and milestone-based
              execution to convert learning into measurable career momentum.
            </p>
          </div>
          <article className="cohort-card">
            <div className="cohort-card-layout">
              <div>
                <span className="badge">Duration: 6 Weeks</span>
                <h3>Career Acceleration Cohort</h3>
                <ul>
                  <li>Batch Size: 24 learners</li>
                  <li>Skill Focus: Product, Growth, Leadership</li>
                  <li>Weekly live mentor office hours</li>
                </ul>
                <button type="button" className="btn btn-primary">
                  Enroll Now
                </button>
              </div>
              <div className="cohort-image-wrap" aria-hidden="true">
                <div className="cohort-image-glow" />
                <img className="cohort-image" src={clientImage2} alt="" loading="lazy" />
              </div>
            </div>
          </article>
        </div>
      </section> */}
      <ExploreMore />

      <section className="testimonials section-light reveal">
        <div className="container">
          <h2>What Learners Say</h2>
          <div className="testimonial-marquee-wrap">
            <div className="testimonial-marquee-track">
              {[...testimonials, ...testimonials].map((item, idx) => (
                <article key={`${item.name}-${idx}`} className="testimonial-card">
                  <p>{item.quote}</p>
                  <h3>{item.name}</h3>
                  <span>{item.role}</span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
 

      {/* <section className="final-cta section-dark reveal">
        <div className="container cta-center">
          <h2>Ready to Take Your Career to the Next Level?</h2>
          <button type="button" className="btn btn-primary btn-large">
            Join Mentorleap Today
          </button>
        </div>
      </section> */}


      <FAQ />

      <RotatingWorthSection />
      <Footer />
    </div>
  )
}

export default App
