import { Link, useParams, Navigate } from 'react-router-dom'
import { getProjectBySlug } from '../data/projects.js'
import StatusTag from '../components/StatusTag.jsx'
import MediaPanel from '../components/MediaPanel.jsx'
import DetailsPanel from '../components/DetailsPanel.jsx'
import useScrollToHash from '../hooks/useScrollToHash.js'

// The tab you picked stays picked as you move between projects.
const remembered = { media: null, details: null }

export default function ProjectDetail() {
  useScrollToHash()
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  return (
    <section className="page wrap" key={project.slug}>
      <Link to="/projects" className="back-link">
        ← All projects
      </Link>
      <StatusTag status={project.status} />
      <h1 className="page-title project-title">{project.title}</h1>

      <MediaPanel
        project={project}
        initial={remembered.media}
        onChange={(id) => (remembered.media = id)}
      />
      <DetailsPanel
        project={project}
        initial={remembered.details}
        onChange={(id) => (remembered.details = id)}
      />
    </section>
  )
}
