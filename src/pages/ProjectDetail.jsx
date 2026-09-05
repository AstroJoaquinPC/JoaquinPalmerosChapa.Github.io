import { Link, useParams, Navigate } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { getProjectBySlug } from '../data/projects.js'
import Footer from '../components/Footer.jsx'
import Gallery from '../components/Gallery.jsx'
import useScrollToHash from '../hooks/useScrollToHash.js'

const ModelSection = lazy(() => import('../components/ModelSection.jsx'))

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

        {project.models && project.models.length > 0 && (
          <Suspense
            fallback={
              <div className="model-section">
                <h2>CAD model</h2>
                <div className="model-viewer">
                  <div className="model-overlay" style={{ position: 'static', height: '420px' }}>
                    Loading viewer…
                  </div>
                </div>
              </div>
            }
          >
            <ModelSection models={project.models} />
          </Suspense>
        )}
        <Gallery images={project.images} />
      </section>
      <Footer />
    </>
  )
}
