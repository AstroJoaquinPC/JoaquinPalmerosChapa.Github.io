import { useRef } from 'react'

// Accessible tab row. Arrow keys, Home, and End move between tabs.
export default function Tabs({ tabs, active, onChange, label, idPrefix }) {
  const refs = useRef({})

  function handleKeyDown(e, index) {
    let next = null
    if (e.key === 'ArrowRight') next = (index + 1) % tabs.length
    if (e.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length
    if (e.key === 'Home') next = 0
    if (e.key === 'End') next = tabs.length - 1
    if (next === null) return
    e.preventDefault()
    const id = tabs[next].id
    onChange(id)
    refs.current[id]?.focus()
  }

  return (
    <div className="tabs" role="tablist" aria-label={label}>
      {tabs.map((t, i) => (
        <button
          key={t.id}
          ref={(el) => (refs.current[t.id] = el)}
          type="button"
          role="tab"
          id={`${idPrefix}-tab-${t.id}`}
          aria-selected={t.id === active}
          aria-controls={`${idPrefix}-panel-${t.id}`}
          tabIndex={t.id === active ? 0 : -1}
          className={`tab ${t.id === active ? 'tab-active' : ''}`}
          onClick={() => onChange(t.id)}
          onKeyDown={(e) => handleKeyDown(e, i)}
        >
          {t.label}
        </button>
      ))}
    </div>
  )
}
