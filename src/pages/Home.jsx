import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'
import ProjectEntry from '../components/ProjectEntry.jsx'
import ContactList from '../components/ContactList.jsx'
import useScrollToHash from '../hooks/useScrollToHash.js'

export default function Home() {
  useScrollToHash()

  return (
    <>
      <header className="hero wrap">
        <h1>Building things that get off the ground.</h1>
        <p>
          I'm working towards a B.S. in Aerospace Engineering at Embry-Riddle Aeronautical University and I'm an
          active member of the Experimental Rocket Propulsion Lab. I work across flight control software,
          propulsion hardware, and the test infrastructure that connects them.
        </p>
      </header>

      <section className="section wrap" id="projects">
        <h2 className="section-label">
          <span className="slashes" aria-hidden="true">
            //
          </span>
          Projects
        </h2>
        <div className="entries">
          {projects.map((p) => (
            <ProjectEntry project={p} key={p.slug} />
          ))}
        </div>
        <Link to="/projects" className="text-link">
          See all projects
        </Link>
      </section>

      <section className="section wrap" id="contact">
        <h2 className="section-label">
          <span className="slashes" aria-hidden="true">
            //
          </span>
          Contact
        </h2>
        <ContactList />
      </section>
    </>
  )
}
