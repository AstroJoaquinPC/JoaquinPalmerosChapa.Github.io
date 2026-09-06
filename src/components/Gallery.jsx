import { useEffect, useState } from 'react'
import { asset } from '../utils/asset.js'

export default function Gallery({ images }) {
  const [active, setActive] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  useEffect(() => {
    if (!lightboxOpen) return
    function handleKey(e) {
      if (e.key === 'Escape') setLightboxOpen(false)
      if (e.key === 'ArrowRight') setActive((i) => (i + 1) % images.length)
      if (e.key === 'ArrowLeft') setActive((i) => (i - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightboxOpen, images])

  if (!images || images.length === 0) return null

  const current = images[active]

  return (
    <div className="gallery-section">
      <h2>Photos</h2>

      <div className="photo-viewer">
        <button
          type="button"
          className="photo-frame"
          onClick={() => setLightboxOpen(true)}
          aria-label={`Enlarge photo${current.caption ? ': ' + current.caption : ''}`}
        >
          <img src={asset(current.src)} alt={current.caption || ''} />
        </button>

        {images.length > 1 && (
          <>
            <button
              type="button"
              className="photo-frame-nav photo-frame-prev"
              aria-label="Previous photo"
              onClick={() => setActive((i) => (i - 1 + images.length) % images.length)}
            >
              ‹
            </button>
            <button
              type="button"
              className="photo-frame-nav photo-frame-next"
              aria-label="Next photo"
              onClick={() => setActive((i) => (i + 1) % images.length)}
            >
              ›
            </button>
          </>
        )}

        {current.caption && <p className="photo-caption">{current.caption}</p>}

        {images.length > 1 && (
          <div className="photo-thumbs">
            {images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                className={`photo-thumb ${i === active ? 'photo-thumb-active' : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Show photo${img.caption ? ': ' + img.caption : ''}`}
              >
                <img src={asset(img.src)} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        )}
      </div>

      {lightboxOpen && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setLightboxOpen(false)}>
          <button className="lightbox-close" onClick={() => setLightboxOpen(false)} aria-label="Close">
            ×
          </button>
          {images.length > 1 && (
            <button
              className="lightbox-nav lightbox-prev"
              aria-label="Previous photo"
              onClick={(e) => {
                e.stopPropagation()
                setActive((i) => (i - 1 + images.length) % images.length)
              }}
            >
              ‹
            </button>
          )}
          <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
            <img src={asset(current.src)} alt={current.caption || ''} />
            {current.caption && <figcaption>{current.caption}</figcaption>}
          </figure>
          {images.length > 1 && (
            <button
              className="lightbox-nav lightbox-next"
              aria-label="Next photo"
              onClick={(e) => {
                e.stopPropagation()
                setActive((i) => (i + 1) % images.length)
              }}
            >
              ›
            </button>
          )}
        </div>
      )}
    </div>
  )
}
