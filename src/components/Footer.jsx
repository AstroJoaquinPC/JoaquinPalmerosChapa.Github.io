export default function Footer() {
  return (
    <footer className="wrap" id="contact">
      <div className="footer-links">
        <a href="mailto:joaquinchapa77@gmail.com">joaquinchapa77@gmail.com</a>
        <a href="https://github.com/AstroJoaquinPC" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/joaquinpalmeros-chapa/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
      <p className="footer-note">Daytona Beach, FL · Updated {new Date().getFullYear()}</p>
    </footer>
  )
}
