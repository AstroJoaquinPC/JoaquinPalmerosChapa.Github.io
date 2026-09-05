import { Link, useParams, Navigate } from 'react-router-dom'
import { getProjectBySlug } from '../data/projects.js'
import Footer from '../components/Footer.jsx'
import useScrollToHash from '../hooks/useScrollToHash.js'

export default function ProjectDetail() {
  useScrollToHash()
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  return (
    <>
      <section className="section wrap" style={{ borderTop: 'none', paddingTop: '64px' }}>
        <Link to="/projects" className="back-link">
          ← All projects
        </Link>
        <span className="entry-code" style={{ marginTop: '24px' }}>
          {project.code}
        </span>
        <h1 className="project-title">{project.title}</h1>
        <p className="project-description">{project.description}</p>

        <ul className="tags" style={{ marginBottom: '40px' }}>
          {project.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className="spec-table">
          {project.specs.map((s) => (
            <div className="spec-row" key={s.label}>
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  )
}
