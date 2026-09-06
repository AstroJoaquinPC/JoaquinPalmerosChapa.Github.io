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
    heading: 'Software',
    items: ['Autodesk Inventor', 'Onshape', 'CATIA', 'KiCAD', 'Ansys'],
  },
  {
    heading: 'Programming',
    items: ['Python', 'C/C++', 'MATLAB', ''],
  },
  {
    heading: 'Manufacturing & assembly',
    items: ['Soldering', 'Componsites', 'FDM and Resin 3D printing', 'PCB Layout, Routing, and Assembly'],
  },
]

const otherWork = [
  {
    label: 'Launch Media',
    detail:
      'I am apart of a group named Launch Heaven Media that produces photos, videos, and livestreams of launchs all over the country. I am the main Livestream engineer and camera operator for the group, and manage the hardware and software that makes the livestreams possible. I also produce photos and videos for the group.',
  },
  
]

export default function Home() {
  useScrollToHash()

  return (
    <>
      <header className="hero wrap">
        <ThrustCurve />
        <p className="hero-eyebrow">Aerospace Engineering</p>
        <h1>Building things that *hopefully* get off the ground.</h1>
        <p>
          Working towards an B.S. Aerospace Engineering degree at Embry-Riddle Aeronautical University and an
          active member of the Experimental Rocket Propulsion Lab. I work across flight
          control software, propulsion hardware, and the test infrastructure that connects them.
        </p>
        <div className="hero-status">
          <span className="dot" aria-hidden="true" />
          Currently building V.I.A, Current, and contributing to ERPL's MOE flight Vehicle.
        </div>
      </header>

      <section className="section wrap" id="work">
        <h2>Active and past work</h2>
        <p className="section-intro">
          A log of my current projects and past projects in aerospace engineering, software, and other areas. Click on a project to see more details.
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
