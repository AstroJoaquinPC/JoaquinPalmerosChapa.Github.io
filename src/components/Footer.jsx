export default function Footer() {
  return (
    <footer className="wrap" id="contact">
      <div className="footer-links">
        <a href="mailto:your.email@example.com">your.email@example.com</a>
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
      <p className="footer-note">Daytona Beach, FL · Updated {new Date().getFullYear()}</p>
    </footer>
  )
}
