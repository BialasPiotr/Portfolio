import { about } from '../data'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <p className="contact-eyebrow">What's Next?</p>
        <h2 className="contact-heading">Get In Touch</h2>
        <p className="contact-desc">
          I am currently looking for new opportunities and my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <a href={`mailto:${about.email}`} className="say-hello-btn">
          Say Hello
        </a>
      </div>
    </section>
  )
}
