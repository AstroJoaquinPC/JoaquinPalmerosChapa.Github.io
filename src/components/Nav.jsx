import { Link, NavLink } from 'react-router-dom'
import { projects } from '../data/projects.js'

export default function Nav() {
  return (
    <nav className="nav" aria-label="Main">
      <div className="nav-inner">
        <Link to="/" className="nav-mark">
          Joaquin Palmeros-Chapa
        </Link>
        <div className="nav-links">
          <NavLink to="/" end className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <div className="nav-item">
            <NavLink to="/projects" className="nav-link">
              Projects
            </NavLink>
            <div className="nav-dropdown">
              {projects.map((p) => (
                <Link key={p.slug} to={`/projects/${p.slug}`} className="nav-dropdown-item">
                  {p.title}
                </Link>
              ))}
              <Link to="/projects" className="nav-dropdown-item nav-dropdown-all">
                Show all
              </Link>
            </div>
          </div>
          <NavLink to="/videography" className="nav-link">
            Videography
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
