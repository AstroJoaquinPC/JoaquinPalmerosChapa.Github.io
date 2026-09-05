import { useEffect, useState } from 'react'
import { asset } from '../utils/asset.js'

export default function Gallery({ images }) {
  const [openIndex, setOpenIndex] = useState(null)

  useEffect(() => {
    if (openIndex === null) return
    function handleKey(e) {
      if (e.key === 'Escape') setOpenIndex(null)
      if (e.key === 'ArrowRight') setOpenIndex((i) => (i + 1) % images.length)
      if (e.key === 'ArrowLeft') setOpenIndex((i) => (i - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [openIndex, images])

  if (!images || images.length === 0) return null

  return (
    <div className="gallery-section">
      <h2>Photos</h2>
      <div className="gallery-grid">
        {images.map((img, i) => (
          <button
            type="button"
            className="gallery-thumb"
            key={img.src}
            onClick={() => setOpenIndex(i)}
            aria-label={`Open photo${img.caption ? ': ' + img.caption : ''}`}
          >
            <img src={asset(img.src)} alt={img.caption || ''} loading="lazy" />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setOpenIndex(null)}>
          <button className="lightbox-close" onClick={() => setOpenIndex(null)} aria-label="Close">
            ×
          </button>
          {images.length > 1 && (
            <button
              className="lightbox-nav lightbox-prev"
              aria-label="Previous photo"
              onClick={(e) => {
                e.stopPropagation()
                setOpenIndex((i) => (i - 1 + images.length) % images.length)
              }}
            >
              ‹
            </button>
          )}
          <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
            <img src={asset(images[openIndex].src)} alt={images[openIndex].caption || ''} />
            {images[openIndex].caption && <figcaption>{images[openIndex].caption}</figcaption>}
          </figure>
          {images.length > 1 && (
            <button
              className="lightbox-nav lightbox-next"
              aria-label="Next photo"
              onClick={(e) => {
                e.stopPropagation()
                setOpenIndex((i) => (i + 1) % images.length)
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
