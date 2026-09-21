import { Suspense, lazy, useState } from 'react'
import Tabs from './Tabs.jsx'
import Lightbox from './Lightbox.jsx'
import { asset } from '../utils/asset.js'

const ModelViewer = lazy(() => import('./ModelViewer.jsx'))

function PhotoCarousel({ images }) {
  const [index, setIndex] = useState(0)
  const [open, setOpen] = useState(false)
  const current = images[index]
  const count = images.length

  return (
    <div className="photos">
      <div className="photos-main">
        <button
          type="button"
          className="photos-image"
          onClick={() => setOpen(true)}
          aria-label={`Enlarge photo${current.caption ? ': ' + current.caption : ''}`}
        >
          <img src={asset(current.src)} alt={current.caption || ''} />
        </button>
        {count > 1 && (
          <>
            <button
              type="button"
              className="frame-nav frame-prev"
              aria-label="Previous photo"
              onClick={() => setIndex((i) => (i - 1 + count) % count)}
            >
              ‹
            </button>
            <button
              type="button"
              className="frame-nav frame-next"
              aria-label="Next photo"
              onClick={() => setIndex((i) => (i + 1) % count)}
            >
              ›
            </button>
          </>
        )}
        {current.caption && <p className="frame-caption">{current.caption}</p>}
      </div>
      {count > 1 && (
        <div className="photos-thumbs">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              className={`thumb ${i === index ? 'thumb-active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Show photo${img.caption ? ': ' + img.caption : ''}`}
            >
              <img src={asset(img.src)} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}
      {open && <Lightbox images={images} index={index} onClose={() => setOpen(false)} onIndex={setIndex} />}
    </div>
  )
}

function VideoPlayer({ videos }) {
  const [index, setIndex] = useState(0)
  const current = videos[index]

  return (
    <div className="videos">
      <div className="videos-main">
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
      {(current.caption || videos.length > 1) && (
        <div className="videos-bar">
          {current.caption && <p className="videos-caption">{current.caption}</p>}
          {videos.length > 1 && (
            <div className="videos-switch">
              {videos.map((v, i) => (
                <button
                  key={v.id || v.src}
                  type="button"
                  className={`chip ${i === index ? 'chip-active' : ''}`}
                  onClick={() => setIndex(i)}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// One fixed-size frame. The tabs above it swap what is inside.
export default function MediaPanel({ project, initial, onChange }) {
  const tabs = []
  if (project.models?.length) tabs.push({ id: 'cad', label: 'CAD' })
  if (project.images?.length) tabs.push({ id: 'photos', label: 'Photos' })
  if (project.videos?.length) tabs.push({ id: 'videos', label: 'Videos' })

  const start = tabs.some((t) => t.id === initial) ? initial : tabs[0]?.id
  const [active, setActive] = useState(start)
  const [cadMounted, setCadMounted] = useState(start === 'cad')
  const [modelIndex, setModelIndex] = useState(0)

  if (tabs.length === 0) return null

  function select(id) {
    setActive(id)
    if (id === 'cad') setCadMounted(true)
    onChange?.(id)
  }

  const model = project.models?.[modelIndex]

  return (
    <div className="media">
      <Tabs tabs={tabs} active={active} onChange={select} label="Project media" idPrefix="media" />
      <div className="frame">
        {project.models?.length > 0 && cadMounted && (
          <div
            className="frame-pane"
            role="tabpanel"
            id="media-panel-cad"
            aria-labelledby="media-tab-cad"
            hidden={active !== 'cad'}
          >
            <Suspense fallback={<div className="frame-message">Loading viewer…</div>}>
              <ModelViewer
                key={model.obj}
                objSrc={model.obj}
                mtlSrc={model.mtl}
                name={model.name}
                active={active === 'cad'}
              />
            </Suspense>
            {project.models.length > 1 && (
              <div className="model-switch">
                {project.models.map((m, i) => (
                  <button
                    key={m.obj}
                    type="button"
                    className={`chip ${i === modelIndex ? 'chip-active' : ''}`}
                    onClick={() => setModelIndex(i)}
                  >
                    {m.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
        {active === 'photos' && (
          <div className="frame-pane pane-enter" role="tabpanel" id="media-panel-photos" aria-labelledby="media-tab-photos">
            <PhotoCarousel images={project.images} />
          </div>
        )}
        {active === 'videos' && (
          <div className="frame-pane pane-enter" role="tabpanel" id="media-panel-videos" aria-labelledby="media-tab-videos">
            <VideoPlayer videos={project.videos} />
          </div>
        )}
      </div>
    </div>
  )
}
