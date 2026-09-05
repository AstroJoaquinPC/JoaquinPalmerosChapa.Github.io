import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js'
import { asset } from '../utils/asset.js'

// Renders a single .obj model (with an optional .mtl material file) in an
// interactive canvas: drag to orbit, scroll to zoom, right-drag to pan.
export default function ModelViewer({ objSrc, mtlSrc, name }) {
  const containerRef = useRef(null)
  const [status, setStatus] = useState('loading') // loading | ready | error

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let renderer, scene, camera, controls, frameId
    let disposed = false

    const width = container.clientWidth
    const height = container.clientHeight

    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(45, width / height, 0.01, 5000)

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(width, height)
    container.appendChild(renderer.domElement)

    const ambient = new THREE.AmbientLight(0xffffff, 0.7)
    scene.add(ambient)
    const key = new THREE.DirectionalLight(0xffffff, 1.1)
    key.position.set(5, 8, 6)
    scene.add(key)
    const fill = new THREE.DirectionalLight(0x7fa8c9, 0.4)
    fill.position.set(-6, -3, -4)
    scene.add(fill)

    controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.08

    function frameObject(object) {
      const box = new THREE.Box3().setFromObject(object)
      const size = box.getSize(new THREE.Vector3())
      const center = box.getCenter(new THREE.Vector3())

      object.position.sub(center)

      const maxDim = Math.max(size.x, size.y, size.z) || 1
      const distance = maxDim * 2.2

      camera.position.set(distance, distance * 0.7, distance)
      camera.near = maxDim / 100
      camera.far = maxDim * 100
      camera.updateProjectionMatrix()

      controls.target.set(0, 0, 0)
      controls.update()
    }

    function defaultMaterial() {
      return new THREE.MeshStandardMaterial({
        color: 0x9aa3ad,
        metalness: 0.25,
        roughness: 0.55,
      })
    }

    function loadObj(materials) {
      const loader = new OBJLoader()
      if (materials) loader.setMaterials(materials)
      loader.load(
        asset(objSrc),
        (object) => {
          if (disposed) return
          if (!materials) {
            object.traverse((child) => {
              if (child.isMesh) child.material = defaultMaterial()
            })
          }
          scene.add(object)
          frameObject(object)
          setStatus('ready')
        },
        undefined,
        (err) => {
          console.error('OBJ load error:', err)
          if (!disposed) setStatus('error')
        }
      )
    }

    if (mtlSrc) {
      new MTLLoader().load(
        asset(mtlSrc),
        (materials) => {
          materials.preload()
          loadObj(materials)
        },
        undefined,
        () => loadObj(null)
      )
    } else {
      loadObj(null)
    }

    function animate() {
      frameId = requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    function handleResize() {
      const w = container.clientWidth
      const h = container.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    const resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(container)

    return () => {
      disposed = true
      cancelAnimationFrame(frameId)
      resizeObserver.disconnect()
      controls.dispose()
      scene.traverse((child) => {
        if (child.isMesh) {
          child.geometry?.dispose()
          if (Array.isArray(child.material)) {
            child.material.forEach((m) => m.dispose())
          } else {
            child.material?.dispose()
          }
        }
      })
      renderer.dispose()
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [objSrc, mtlSrc])

  return (
    <div className="model-viewer">
      <div className="model-canvas" ref={containerRef} />
      {status === 'loading' && <div className="model-overlay">Loading {name || 'model'}…</div>}
      {status === 'error' && (
        <div className="model-overlay model-overlay-error">
          Couldn't load {name || 'this model'}. Check the file path.
        </div>
      )}
      <p className="model-hint">Drag to rotate · scroll to zoom · right-drag to pan</p>
    </div>
  )
}
