import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaChevronDown } from 'react-icons/fa'
import { about } from '../data'
import './Hero.css'

const TYPING_TEXTS = [
  'scalable backend systems.',
  'things that matter.',
  'solve real-world problems.',
  'clean, efficient code.',
  'Spring Boot applications.',
  'with Java & passion.',
]

export default function Hero() {
  const [displayed, setDisplayed] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = TYPING_TEXTS[textIndex]
    let timeout

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex(i => i + 1), 80)
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(i => i - 1), 40)
    } else if (deleting && charIndex === 0) {
      setDeleting(false)
      setTextIndex(i => (i + 1) % TYPING_TEXTS.length)
    }

    setDisplayed(current.slice(0, charIndex))
    return () => clearTimeout(timeout)
  }, [charIndex, deleting, textIndex])

  return (
    <section id="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hi, my name is</p>
        <h1 className="hero-name">Piotr Białas.</h1>
        <h2 className="hero-subtitle">
          I build <span className="hero-typed">{displayed}<span className="cursor">|</span></span>
        </h2>
        <p className="hero-desc">
          Passionate Backend Software Engineer specializing in Java and Spring Boot.
          I build scalable, efficient, and reliable backend systems with a strong foundation
          in modern software architecture and DevOps practices.
        </p>
        <div className="hero-links">
          <a href={about.gitHub} target="_blank" rel="noopener noreferrer" className="hero-icon" aria-label="GitHub">
            <FaGithub size={28} />
          </a>
          <a href={about.linkedIn} target="_blank" rel="noopener noreferrer" className="hero-icon" aria-label="LinkedIn">
            <FaLinkedin size={28} />
          </a>
        </div>
      </div>
      <a href="#about" className="scroll-down" aria-label="Scroll down">
        <FaChevronDown size={20} />
      </a>
    </section>
  )
}
