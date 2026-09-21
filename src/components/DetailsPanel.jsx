import { useState } from 'react'
import Tabs from './Tabs.jsx'

function Summary({ project }) {
  return (
    <>
      <p className="prose">{project.description}</p>
      <ul className="tags">
        {project.tags.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </>
  )
}

function Materials({ project }) {
  return (
    <dl className="spec-list">
      {project.materials.map((m) => (
        <div className="spec-row" key={m.label}>
          <dt>{m.label}</dt>
          <dd>{m.value}</dd>
        </div>
      ))}
    </dl>
  )
}

function Requirements({ project }) {
  return (
    <ul className="req-list">
      {project.requirements.map((r) => (
        <li key={r}>{r}</li>
      ))}
    </ul>
  )
}

function Analysis({ project }) {
  const a = project.analysis
  return (
    <>
      <p className="prose">{a.text}</p>
      {a.note && <p className="prose prose-dim">{a.note}</p>}
      {a.href && (
        <a href={a.href} target="_blank" rel="noreferrer" className="button">
          {a.linkLabel || 'Open link'}
        </a>
      )}
    </>
  )
}

function Why({ project }) {
  return (
    <>
      {project.why.split('\n\n').map((para) => (
        <p className="prose" key={para}>
          {para}
        </p>
      ))}
    </>
  )
}

export default function DetailsPanel({ project, initial, onChange }) {
  const tabs = [{ id: 'summary', label: 'Summary', render: Summary }]
  if (project.materials?.length) tabs.push({ id: 'materials', label: 'Materials', render: Materials })
  if (project.requirements?.length) tabs.push({ id: 'requirements', label: 'Requirements', render: Requirements })
  if (project.analysis) tabs.push({ id: 'analysis', label: 'Analysis', render: Analysis })
  if (project.why) tabs.push({ id: 'why', label: 'Why?', render: Why })

  const start = tabs.some((t) => t.id === initial) ? initial : 'summary'
  const [active, setActive] = useState(start)
  const current = tabs.find((t) => t.id === active) || tabs[0]
  const Body = current.render

  function select(id) {
    setActive(id)
    onChange?.(id)
  }

  return (
    <div className="details">
      <h2 className="section-label">
        <span className="slashes" aria-hidden="true">
          //
        </span>
        Details
      </h2>
      <Tabs tabs={tabs} active={current.id} onChange={select} label="Project details" idPrefix="details" />
      <div
        key={current.id}
        className="details-panel pane-enter"
        role="tabpanel"
        id={`details-panel-${current.id}`}
        aria-labelledby={`details-tab-${current.id}`}
      >
        <Body project={project} />
      </div>
    </div>
  )
}
