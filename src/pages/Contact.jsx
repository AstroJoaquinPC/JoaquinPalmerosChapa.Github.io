import ContactList from '../components/ContactList.jsx'
import useScrollToHash from '../hooks/useScrollToHash.js'

export default function Contact() {
  useScrollToHash()

  return (
    <section className="page wrap">
      <h1 className="page-title">Contact</h1>
      <p className="prose lead">Feel free to reach out.</p>
      <ContactList />
    </section>
  )
}
