import { useState } from 'react'
import ModelViewer from './ModelViewer.jsx'

export default function ModelSection({ models }) {
  const [active, setActive] = useState(0)
  if (!models || models.length === 0) return null

  const current = models[active]

  return (
    <div className="model-section">
      <h2>CAD model</h2>
      {models.length > 1 && (
        <div className="model-tabs">
          {models.map((m, i) => (
            <button
              key={m.name || i}
              type="button"
              className={`model-tab ${i === active ? 'model-tab-active' : ''}`}
              onClick={() => setActive(i)}
            >
              {m.name || `Model ${i + 1}`}
            </button>
          ))}
        </div>
      )}
      <ModelViewer key={current.obj} objSrc={current.obj} mtlSrc={current.mtl} name={current.name} />
    </div>
  )
}
