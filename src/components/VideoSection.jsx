import { useState } from 'react'
import { asset } from '../utils/asset.js'

export default function VideoSection({ videos }) {
  const [active, setActive] = useState(0)
  if (!videos || videos.length === 0) return null

  const current = videos[active]

  return (
    <div className="video-section">
      <h2>Video</h2>

      <div className="video-viewer">
        <div className="video-frame">
          {current.type === 'youtube' ? (
            <iframe
              key={current.id}
              src={`https://www.youtube-nocookie.com/embed/${current.id}`}
              title={current.caption || 'Project video'}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video key={current.src} controls preload="metadata" poster={current.poster ? asset(current.poster) : undefined}>
              <source src={asset(current.src)} />
              Your browser doesn't support embedded video.
            </video>
          )}
        </div>

        {current.caption && <p className="photo-caption">{current.caption}</p>}

        {videos.length > 1 && (
          <div className="photo-thumbs">
            {videos.map((v, i) => (
              <button
                key={v.id || v.src}
                type="button"
                className={`video-thumb ${i === active ? 'photo-thumb-active' : ''}`}
                onClick={() => setActive(i)}
              >
                {v.type === 'youtube' ? (
                  <img src={`https://img.youtube.com/vi/${v.id}/default.jpg`} alt="" loading="lazy" />
                ) : (
                  <span className="video-thumb-fallback">{i + 1}</span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
