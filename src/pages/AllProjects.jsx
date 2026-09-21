import { useState } from 'react'
import { projects, STATUSES } from '../data/projects.js'
import ProjectEntry from '../components/ProjectEntry.jsx'
import useScrollToHash from '../hooks/useScrollToHash.js'

export default function AllProjects() {
  useScrollToHash()
  const [filter, setFilter] = useState('all')

  // Active projects first, then the rest in their listed order.
  const order = STATUSES.map((s) => s.id)
  const sorted = [...projects].sort((a, b) => order.indexOf(a.status) - order.indexOf(b.status))
  const visible = filter === 'all' ? sorted : sorted.filter((p) => p.status === filter)
  const count = (id) => projects.filter((p) => p.status === id).length

  return (
    <section className="page wrap">
      <h1 className="page-title">All projects</h1>

      <div className="filters" role="group" aria-label="Filter by status">
        <button
          type="button"
          className={`chip ${filter === 'all' ? 'chip-active' : ''}`}
          aria-pressed={filter === 'all'}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        {STATUSES.map((s) => (
          <button
            key={s.id}
            type="button"
            className={`chip ${filter === s.id ? 'chip-active' : ''}`}
            aria-pressed={filter === s.id}
            disabled={count(s.id) === 0}
            onClick={() => setFilter(s.id)}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="entries">
        {visible.map((p) => (
          <ProjectEntry project={p} key={p.slug} />
        ))}
      </div>
    </section>
  )
}
