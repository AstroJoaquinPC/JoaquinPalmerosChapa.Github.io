// Every outside link on the site lives here so the Contact page, the home
// page, and the Videography page always agree with each other.
export const links = {
  email: 'joaquinchapa77@gmail.com',
  github: { label: 'GitHub', handle: 'AstroJoaquinPC', href: 'https://github.com/AstroJoaquinPC' },
  linkedin: {
    label: 'LinkedIn',
    handle: 'joaquinpalmeros-chapa',
    href: 'https://www.linkedin.com/in/joaquinpalmeros-chapa/',
  },
  youtube: { label: 'YouTube', handle: '@AstroJoaquin', href: 'https://www.youtube.com/@AstroJoaquin' },
  smugmug: { label: 'SmugMug', handle: 'astrojoaquin.smugmug.com', href: 'https://astrojoaquin.smugmug.com/' },
  launchHeaven: { label: 'Launch Heaven', handle: 'launchheaven.com', href: 'https://www.launchheaven.com/' },
}

// The links shown on the Contact page and the home page.
export const contactLinks = [
  { label: 'Email', handle: links.email, href: `mailto:${links.email}`, copy: links.email },
  links.github,
  links.linkedin,
  links.youtube,
]
