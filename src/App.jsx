function ThrustCurve() {
  return (
    <svg
      className="hero-curve"
      viewBox="0 0 340 180"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M10,160 L40,158 C60,120 75,40 95,32 C120,22 140,90 165,100 C190,110 205,60 230,55 C260,48 280,90 330,95" />
    </svg>
  )
}

const projects = [
  {
    code: 'TVC-04',
    title: 'ESP32 Thrust Vector Control Flight Controller',
    description:
      'Four-servo thrust vector control system built around an ESP32, with a dual-core FreeRTOS architecture running PID control at 200 Hz on one core and telemetry and status LEDs on the other. Attitude sensing via a BNO08x IMU over I2C, with ESP-NOW auto-pairing telemetry to a browser-based ground dashboard and dual SD card / LittleFS data logging.',
    tags: ['ESP32', 'FreeRTOS', 'C/C++', 'PlatformIO', 'BNO08x IMU', 'PID control'],
  },
  {
    code: 'EDF-02',
    title: 'Fin-Deflection Control Vehicle',
    description:
      'Ducted-fan vehicle stabilized and steered through fin deflection rather than gimbaled thrust. Designed a cascaded PID architecture to cover both hover and waypoint/divert flight modes, and modeled fin aerodynamic forces from EDF exhaust velocity to size control authority ahead of a planned ANSYS Fluent CFD pass.',
    tags: ['Control theory', 'Cascaded PID', 'Aero modeling', 'ANSYS Fluent'],
  },
  {
    code: 'RF-01',
    title: '433 MHz Telemetry Downlink Antenna',
    description:
      'Antenna selection for a high-power rocket telemetry downlink, targeting roughly 50,000 ft apogee with a ground station 500 m from the pad. The rocket flies vertical through boost and coast and returns to vertical under parachute, with a possible brief tumble near apogee before deployment. A turnstile / cloverleaf circularly polarized design was chosen to hold link margin through that near-overhead geometry and any tumble.',
    tags: ['RF/antenna design', 'Circular polarization', 'Link budget'],
  },
  {
    code: 'GSE-01',
    title: 'Draco Engine Feed System & Ground Support Equipment',
    description:
      'ERPL propulsion team contribution to the Draco liquid engine program: assembly and integration of high-pressure GN\u2082 plumbing and LOX upstream bus hardware, relief valve integration, and hose assemblies rated to roughly 6,000 psi for the feed system and ground support equipment.',
    tags: ['High-pressure systems', 'GN\u2082 / LOX plumbing', 'Assembly & integration', 'ERPL'],
  },
]

const skillGroups = [
  {
    heading: 'Design & analysis',
    items: ['CAD — Onshape, AutoCAD', 'NASA CEA propulsion analysis', 'MATLAB', 'Engineering documentation'],
  },
  {
    heading: 'Software',
    items: ['Python', 'C/C++ (embedded)', 'Flight software architecture', 'Test tooling & automation'],
  },
  {
    heading: 'Hardware & test',
    items: ['Experimental test systems', 'High-pressure system assembly', 'Manufacturing', 'Avionics integration'],
  },
]

const otherWork = [
  {
    label: 'Software tools',
    detail:
      'Built a Python/Flask watermarking tool using FFmpeg for images and video, packaged as a standalone Windows executable with PyInstaller. Also built a Canvas-to-Todoist sync tool handling API rate limits and course-specific labeling.',
  },
  {
    label: 'Photo & video',
    detail:
      'Shoot and edit launch and test footage on a Canon R5 Mark II and R7, with a DaVinci Resolve workflow tuned for high dynamic range footage of engine tests and flights.',
  },
  {
    label: 'PC hardware',
    detail:
      'Refurbish and sell PCs, with hands-on experience diagnosing, sourcing, and reselling hardware — the starting point for a lot of the electronics troubleshooting instinct used in flight hardware work.',
  },
]

export default function App() {
  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <span className="nav-mark">Joaquin Palmeros-Chapa</span>
          <div className="nav-links">
            <a href="#work">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <header className="hero wrap">
        <ThrustCurve />
        <p className="hero-eyebrow">Aerospace engineering / propulsion & flight control</p>
        <h1>Building the systems that get things off the ground.</h1>
        <p>
          B.S. Aerospace Engineering candidate at Embry-Riddle Aeronautical University and
          active member of the Experimental Rocket Propulsion Lab. I work across flight
          control software, propulsion hardware, and the test infrastructure that connects them.
        </p>
        <div className="hero-status">
          <span className="dot" aria-hidden="true" />
          Currently building TVC-04 and contributing to ERPL's MOE Flight Vehicle
        </div>
      </header>

      <section className="section wrap" id="work">
        <h2>Selected work</h2>
        <p className="section-intro">
          A log of propulsion, flight control, and RF work — mostly through ERPL and
          personal rocketry projects.
        </p>
        <div className="log">
          {projects.map((p) => (
            <article className="entry" key={p.code}>
              <span className="entry-code">{p.code}</span>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <ul className="tags">
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section wrap" id="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skillGroups.map((g) => (
            <div className="skills-group" key={g.heading}>
              <h3>{g.heading}</h3>
              <ul>
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section wrap">
        <h2>Other work</h2>
        <p className="section-intro">Things that run alongside the aerospace work.</p>
        <dl className="other-list">
          {otherWork.map((o) => (
            <div className="other-item" key={o.label}>
              <dt>{o.label}</dt>
              <dd>{o.detail}</dd>
            </div>
          ))}
        </dl>
      </section>

      <footer className="wrap" id="contact">
        <div className="footer-links">
          <a href="mailto:your.email@example.com">joaquinchapa77@gmail.com</a>
          <a href="JoaquinPalmerosChapa.Github.io.git" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/joaquinpalmeros-chapa/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
        <p className="footer-note">Daytona Beach, FL · Updated {new Date().getFullYear()}</p>
      </footer>
    </>
  )
}
