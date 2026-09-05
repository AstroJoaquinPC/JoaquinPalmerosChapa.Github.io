import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'
import Footer from '../components/Footer.jsx'
import useScrollToHash from '../hooks/useScrollToHash.js'

function ThrustCurve() {
  return (
    <svg className="hero-curve" viewBox="0 0 340 180" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M10,160 L40,158 C60,120 75,40 95,32 C120,22 140,90 165,100 C190,110 205,60 230,55 C260,48 280,90 330,95" />
    </svg>
  )
}

const skillGroups = [
  {
    heading: 'Design & analysis',
    items: ['CAD — Onshape, AutoCAD', 'NASA CEA propulsion analysis', 'MATLAB', 'Engineering documentation'],
  },
  {
    heading: 'Software',
    items: ['Python', 'C/C++ (embedded)', 'Flight software architecture', 'Test tooling & automation'],
  },
  {
    heading: 'Hardware & test',
    items: ['Experimental test systems', 'High-pressure system assembly', 'Manufacturing', 'Avionics integration'],
  },
]

const otherWork = [
  {
    label: 'Software tools',
    detail:
      'Built a Python/Flask watermarking tool using FFmpeg for images and video, packaged as a standalone Windows executable with PyInstaller. Also built a Canvas-to-Todoist sync tool handling API rate limits and course-specific labeling.',
  },
  {
    label: 'Photo & video',
    detail:
      'Shoot and edit launch and test footage on a Canon R5 Mark II and R7, with a DaVinci Resolve workflow tuned for high dynamic range footage of engine tests and flights.',
  },
  {
    label: 'PC hardware',
    detail:
      'Refurbish and sell PCs, with hands-on experience diagnosing, sourcing, and reselling hardware — the starting point for a lot of the electronics troubleshooting instinct used in flight hardware work.',
  },
]

export default function Home() {
  useScrollToHash()

  return (
    <>
      <header className="hero wrap">
        <ThrustCurve />
        <p className="hero-eyebrow">Aerospace engineering / propulsion & flight control</p>
        <h1>Building the systems that get things off the ground.</h1>
        <p>
          B.S. Aerospace Engineering candidate at Embry-Riddle Aeronautical University and
          active member of the Experimental Rocket Propulsion Lab. I work across flight
          control software, propulsion hardware, and the test infrastructure that connects them.
        </p>
        <div className="hero-status">
          <span className="dot" aria-hidden="true" />
          Currently building TVC-04 and contributing to ERPL's Draco engine program
        </div>
      </header>

      <section className="section wrap" id="work">
        <h2>Selected work</h2>
        <p className="section-intro">
          A log of propulsion, flight control, and RF work — mostly through ERPL and
          personal rocketry projects.
        </p>
        <div className="log">
          {projects.map((p) => (
            <Link to={`/projects/${p.slug}`} className="entry entry-link" key={p.slug}>
              <span className="entry-code">{p.code}</span>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <ul className="tags">
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </section>

      <section className="section wrap" id="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skillGroups.map((g) => (
            <div className="skills-group" key={g.heading}>
              <h3>{g.heading}</h3>
              <ul>
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section wrap">
        <h2>Other work</h2>
        <p className="section-intro">Things that run alongside the aerospace work.</p>
        <dl className="other-list">
          {otherWork.map((o) => (
            <div className="other-item" key={o.label}>
              <dt>{o.label}</dt>
              <dd>{o.detail}</dd>
            </div>
          ))}
        </dl>
      </section>

      <Footer />
    </>
  )
}
