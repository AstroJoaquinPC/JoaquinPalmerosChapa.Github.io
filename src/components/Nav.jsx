import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link to="/" className="nav-mark">
          Joaquin Palmeros-Chapa
        </Link>
        <div className="nav-links">
          <div className="nav-item">
            <Link to="/projects" className="nav-trigger">
              Projects
            </Link>
            <div className="nav-dropdown">
              {projects.map((p) => (
                <Link key={p.slug} to={`/projects/${p.slug}`} className="nav-dropdown-item">
                  <span className="nav-dropdown-code">{p.code}</span>
                  <span>{p.title}</span>
                </Link>
              ))}
              <Link to="/projects" className="nav-dropdown-item nav-dropdown-all">
                Show all
              </Link>
            </div>
          </div>
          <Link to="/#skills">Skills</Link>
          <Link to="/#contact">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
