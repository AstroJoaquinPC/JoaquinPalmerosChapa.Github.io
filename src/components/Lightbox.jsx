import { useEffect } from 'react'
import { asset } from '../utils/asset.js'

export default function Lightbox({ images, index, onClose, onIndex }) {
  const count = images.length

  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onIndex((index + 1) % count)
      if (e.key === 'ArrowLeft') onIndex((index - 1 + count) % count)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [index, count, onClose, onIndex])

  const current = images[index]

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={onClose}>
      <button type="button" className="lightbox-close" onClick={onClose} aria-label="Close">
        ×
      </button>
      {count > 1 && (
        <button
          type="button"
          className="lightbox-nav lightbox-prev"
          aria-label="Previous photo"
          onClick={(e) => {
            e.stopPropagation()
            onIndex((index - 1 + count) % count)
          }}
        >
          ‹
        </button>
      )}
      <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
        <img src={asset(current.src)} alt={current.caption || ''} />
        {current.caption && <figcaption>{current.caption}</figcaption>}
      </figure>
      {count > 1 && (
        <button
          type="button"
          className="lightbox-nav lightbox-next"
          aria-label="Next photo"
          onClick={(e) => {
            e.stopPropagation()
            onIndex((index + 1) % count)
          }}
        >
          ›
        </button>
      )}
    </div>
  )
}
