import { useState } from 'react'
import { links } from '../data/site.js'
import { uploadsPlaylistId, photos } from '../data/videography.js'
import Lightbox from '../components/Lightbox.jsx'
import { asset } from '../utils/asset.js'
import useScrollToHash from '../hooks/useScrollToHash.js'

export default function Videography() {
  useScrollToHash()
  const [open, setOpen] = useState(null)

  return (
    <section className="page wrap">
      <h1 className="page-title">Videography</h1>
      <p className="prose lead">
        I am a part of a group named Launch Heaven Media that produces photos, videos, and livestreams of launches
        all over the country. I am the main livestream engineer and camera operator for the group, and manage the
        hardware and software that makes the livestreams possible. I also produce photos and videos for the group.
      </p>
      <a href={links.launchHeaven.href} target="_blank" rel="noreferrer" className="button">
        Visit Launch Heaven
      </a>

      <h2 className="section-label section-label-spaced">
        <span className="slashes" aria-hidden="true">
          //
        </span>
        Videos
      </h2>
      <div className="video-embed">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/videoseries?list=${uploadsPlaylistId}`}
          title="Latest videos on the AstroJoaquin YouTube channel"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
      <a href={links.youtube.href} target="_blank" rel="noreferrer" className="text-link">
        Watch more on YouTube
      </a>

      <h2 className="section-label section-label-spaced">
        <span className="slashes" aria-hidden="true">
          //
        </span>
        Photos
      </h2>
      {photos.length > 0 ? (
        <div className="photo-grid">
          {photos.map((p, i) => (
            <button
              key={p.src}
              type="button"
              className="photo-tile"
              onClick={() => setOpen(i)}
              aria-label={`Enlarge photo${p.caption ? ': ' + p.caption : ''}`}
            >
              <img src={asset(p.src)} alt={p.caption || ''} loading="lazy" />
            </button>
          ))}
        </div>
      ) : (
        <p className="prose prose-dim">My launch photos live on SmugMug.</p>
      )}
      <a
        href={links.smugmug.href}
        target="_blank"
        rel="noreferrer"
        className={photos.length > 0 ? 'text-link' : 'button'}
      >
        {photos.length > 0 ? 'See the full gallery on SmugMug' : 'View photos on SmugMug'}
      </a>

      {open !== null && <Lightbox images={photos} index={open} onClose={() => setOpen(null)} onIndex={setOpen} />}
    </section>
  )
}
