import { useState } from 'react'
import { contactLinks } from '../data/site.js'

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard access can be blocked; the mailto link still works.
    }
  }

  return (
    <button type="button" className="copy-button" onClick={copy}>
      {copied ? 'Copied' : 'Copy'}
    </button>
  )
}

export default function ContactList() {
  return (
    <ul className="contact-list">
      {contactLinks.map((l) => (
        <li className="contact-row" key={l.label}>
          <span className="contact-label">{l.label}</span>
          <a
            className="contact-link"
            href={l.href}
            {...(l.copy ? {} : { target: '_blank', rel: 'noreferrer' })}
          >
            {l.handle}
          </a>
          {l.copy && <CopyButton text={l.copy} />}
        </li>
      ))}
    </ul>
  )
}
