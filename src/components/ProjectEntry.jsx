import { Link } from 'react-router-dom'
import StatusTag from './StatusTag.jsx'

export default function ProjectEntry({ project }) {
  return (
    <Link to={`/projects/${project.slug}`} className="entry">
      <StatusTag status={project.status} />
      <h3 className="entry-title">{project.title}</h3>
      <p className="entry-summary">{project.summary}</p>
      <ul className="tags">
        {project.tags.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <span className="entry-chevron" aria-hidden="true">
        ›
      </span>
    </Link>
  )
}
