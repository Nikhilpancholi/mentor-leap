import { useEffect } from 'react'
import './App.css'
import { BouncyCardsFeatures } from './component/BouncyCardsFeatures'
import Hero from './component/Hero'
import Nav from './component/nav'
import Services from './component/services'
import TrustAndaAuthority from './component/TrustAndaAuthority'
import RotatingWorthSection from './component/RotatingWorthSection'

function App() {
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
      <RotatingWorthSection />
      <TrustAndaAuthority />

      <Services />
      <BouncyCardsFeatures />

      <section className="social-proof section-light reveal">
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
      </section>

      <section className="offerings section-light">
        <div className="container reveal">
          <h2>Three Ways to Grow with Mentorleap</h2>
          <div className="offer-grid">
            <article className="offer-card">
              <span className="offer-icon">01</span>
              <h3>Conversations</h3>
              <p>
                Book focused 1:1 sessions with operators and leaders for direct career
                decisions.
              </p>
              <a href="#0">Learn More</a>
            </article>
            <article className="offer-card">
              <span className="offer-icon">02</span>
              <h3>Cohorts</h3>
              <p>
                Join guided peer groups with weekly goals, expert reviews, and practical
                accountability.
              </p>
              <a href="#0">Learn More</a>
            </article>
            <article className="offer-card">
              <span className="offer-icon">03</span>
              <h3>Studio</h3>
              <p>
                Access curated career templates, strategy playbooks, and proven growth
                frameworks.
              </p>
              <a href="#0">Learn More</a>
            </article>
          </div>
        </div>
      </section>

      <section className="how-it-works section-tinted">
        <div className="container reveal">
          <h2>How It Works</h2>
          <div className="steps-row">
            <div className="step">
              <div className="step-num">1</div>
              <h3>Sign Up</h3>
            </div>
            <div className="step-line" />
            <div className="step">
              <div className="step-num">2</div>
              <h3>Get Matched</h3>
            </div>
            <div className="step-line" />
            <div className="step">
              <div className="step-num">3</div>
              <h3>Book Sessions</h3>
            </div>
            <div className="step-line" />
            <div className="step">
              <div className="step-num">4</div>
              <h3>Build Growth Plan</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="mentors section-light">
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
      </section>

      <section className="cohort section-dark">
        <div className="container cohort-grid reveal">
          <div className="cohort-copy">
            <h2>Structured 4-6 Week Micro Cohorts for Serious Career Outcomes</h2>
            <p>
              Work with a tight peer batch, live mentor reviews, and milestone-based
              execution to convert learning into measurable career momentum.
            </p>
          </div>
          <article className="cohort-card">
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
          </article>
        </div>
      </section>

      <section className="testimonials section-light reveal">
        <div className="container">
          <h2>What Learners Say</h2>
          <div className="testimonial-slider">
            <article className="testimonial-card active">
              <p>
                Mentorleap helped me move from confusion to clarity in just a few sessions. I
                switched into a product role with confidence.
              </p>
              <h3>Priya Sharma</h3>
              <span>Product Manager</span>
            </article>
            <article className="testimonial-card">
              <p>
                The cohort format is disciplined and practical. Every week felt like real
                progress, not passive content consumption.
              </p>
              <h3>Rahul Verma</h3>
              <span>Growth Associate</span>
            </article>
          </div>
        </div>
      </section>

      <section className="final-cta section-dark reveal">
        <div className="container cta-center">
          <h2>Ready to Take Your Career to the Next Level?</h2>
          <button type="button" className="btn btn-primary btn-large">
            Join Mentorleap Today
          </button>
        </div>
      </section>
    </div>
  )
}

export default App
