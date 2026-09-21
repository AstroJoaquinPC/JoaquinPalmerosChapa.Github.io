import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js'
import { asset } from '../utils/asset.js'

// Renders a single .obj model (with an optional .mtl material file) in an
// interactive canvas: drag to orbit, scroll to zoom, right-drag to pan.
export default function ModelViewer({ objSrc, mtlSrc, name, active = true }) {
  const containerRef = useRef(null)
  const activeRef = useRef(active)
  const [status, setStatus] = useState('loading') // loading | ready | error

  // While another tab is showing, keep the loaded model in memory but stop drawing.
  useEffect(() => {
    activeRef.current = active
  }, [active])

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

    const ambient = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambient)
    const sky = new THREE.HemisphereLight(0xbcd4ff, 0x1a2a44, 0.7)
    scene.add(sky)
    const key = new THREE.DirectionalLight(0xffffff, 1.1)
    key.position.set(5, 8, 6)
    scene.add(key)
    const fill = new THREE.DirectionalLight(0x86aed6, 0.35)
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
      const distance = maxDim * 1.5

      camera.position.set(distance, distance * 0.7, distance)
      camera.near = maxDim / 100
      camera.far = maxDim * 100
      camera.updateProjectionMatrix()

      controls.target.set(0, 0, 0)
      controls.update()
    }

    function defaultMaterial() {
      return new THREE.MeshStandardMaterial({
        color: 0xa3b2c9,
        metalness: 0.25,
        roughness: 0.55,
      })
    }

    const slate = new THREE.Color(0x33435f)

    // A material that points at a texture file that isn't in the repo would
    // render pure black. Drop the missing texture and use a dark slate instead.
    // (Add the texture file next to the model and this leaves it alone.)
    function fixBrokenTextures() {
      scene.traverse((child) => {
        if (!child.isMesh) return
        const list = Array.isArray(child.material) ? child.material : [child.material]
        list.forEach((m) => {
          if (m && m.map && !(m.map.image && m.map.image.width)) {
            m.map = null
            m.color.copy(slate)
            if ('specular' in m) m.specular.setScalar(0.15)
            m.needsUpdate = true
          }
        })
      })
    }

    const manager = new THREE.LoadingManager()
    manager.onError = fixBrokenTextures

    // Nearly black parts vanish against a dark page, so lift them to slate.
    function liftDarkMaterials(object) {
      object.traverse((child) => {
        if (!child.isMesh) return
        const list = Array.isArray(child.material) ? child.material : [child.material]
        list.forEach((m) => {
          if (!m || !m.color) return
          const lum = 0.2126 * m.color.r + 0.7152 * m.color.g + 0.0722 * m.color.b
          if (lum < 0.08) {
            m.color.copy(slate)
            if ('roughness' in m) m.roughness = 0.6
          }
        })
      })
    }

    function loadObj(materials) {
      const loader = new OBJLoader(manager)
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
          liftDarkMaterials(object)
          scene.add(object)
          fixBrokenTextures()
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
      new MTLLoader(manager).load(
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
      if (!activeRef.current) return
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    function handleResize() {
      const w = container.clientWidth
      const h = container.clientHeight
      if (!w || !h) return
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
      <p className="model-hint">Drag to rotate, scroll to zoom, right-drag to pan</p>
    </div>
  )
}
