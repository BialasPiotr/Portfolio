import { about, education } from '../data'
import './About.css'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-intro">
          <p><span className="hello">Hello!</span> {about.summary}</p>
        </div>

        <h3 className="section-subtitle" id="education">Education History</h3>

        {education.map((edu, i) => (
          <div className="card" key={i}>
            <div className="card-left">
              <span className="edu-icon">🎓</span>
              <h3>{edu.school}</h3>
              <p>{edu.degree}</p>
              {edu.description && <p className="edu-desc">{edu.description}</p>}
            </div>
            <div className="card-right">
              <span className="badge">{edu.period}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
