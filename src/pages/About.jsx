import { asset } from '../utils/asset.js'
import useScrollToHash from '../hooks/useScrollToHash.js'

const skillGroups = [
  {
    heading: 'Software',
    items: ['Autodesk Inventor', 'Onshape', 'CATIA', 'KiCad', 'Ansys'],
  },
  {
    heading: 'Programming',
    items: ['Python', 'C/C++', 'MATLAB'],
  },
  {
    heading: 'Manufacturing & assembly',
    items: ['Soldering', 'Composites', 'FDM and Resin 3D printing', 'PCB Layout, Routing, and Assembly'],
  },
]

export default function About() {
  useScrollToHash()

  return (
    <section className="page wrap">
      <figure className="portrait">
        <img
          src={asset('photos/about/me.jpg')}
          alt="Joaquin holding his dog Sox in front of a Starship launch tower"
        />
      </figure>

      <h1 className="page-title">About me</h1>
      <div className="about-text">
        <p>
          I'm Joaquin, an aerospace engineering student at Embry-Riddle (class of 2028) who splits his time between
          Texas and Daytona Beach, Florida. I've been into rockets for about as long as I can remember, and I've
          had a soft spot for anything with a circuit board in it for nearly as long.
        </p>
        <p>
          When I'm not working on something that flies, I'm usually behind a camera. Launches are my favorite
          thing to shoot, but I'll point a lens at almost anything.
        </p>
        <p>
          I also have a small dog named Sox, who is my travel buddy and supervises me. He comes along on the trips
          between Texas and Florida, and he keeps a close eye on whatever project I'm working on, whether or not I
          asked for his input. Every build, late night, and long drive.
        </p>
      </div>

      <h2 className="section-label section-label-spaced">
        <span className="slashes" aria-hidden="true">
          //
        </span>
        Skills
      </h2>
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
  )
}
