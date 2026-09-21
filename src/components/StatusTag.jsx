import { STATUSES } from '../data/projects.js'

export default function StatusTag({ status }) {
  const found = STATUSES.find((s) => s.id === status)
  if (!found) return null
  return (
    <span className={`status status-${found.id}`}>
      <span className="status-dot" aria-hidden="true" />
      {found.label}
    </span>
  )
}
