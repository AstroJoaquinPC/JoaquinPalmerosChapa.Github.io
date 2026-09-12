import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'
import Footer from '../components/Footer.jsx'
import useScrollToHash from '../hooks/useScrollToHash.js'

export default function AllProjects() {
  useScrollToHash()

  return (
    <>
      <section className="section wrap" style={{ borderTop: 'none', paddingTop: '64px' }}>
        <p className="hero-eyebrow"></p>
        <h2 style={{ fontSize: '1.8rem' }}>All Projects</h2>
        <p className="section-intro"></p>
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
      <Footer />
    </>
  )
}
