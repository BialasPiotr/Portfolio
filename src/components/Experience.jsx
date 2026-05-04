import { experience } from '../data'
import './Experience.css'

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>

        <div className="timeline">
          <div className="timeline-line" />

          {experience.map((exp, i) => {
            const isLeft = i % 2 === 0
            return (
              <div key={i} className={`timeline-row ${isLeft ? 'left' : 'right'}`}>
                {isLeft ? (
                  <>
                    <div className="timeline-card">
                      <h3 className="tl-title">{exp.title}</h3>
                      <p className="tl-company">{exp.company}</p>
                      <ul className="tl-list">
                        {exp.responsibilities.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="timeline-center">
                      <div className="timeline-dot" />
                      <span className="timeline-date">{exp.period}</span>
                    </div>
                    <div className="timeline-empty" />
                  </>
                ) : (
                  <>
                    <div className="timeline-empty" />
                    <div className="timeline-center">
                      <span className="timeline-date">{exp.period}</span>
                      <div className="timeline-dot" />
                    </div>
                    <div className="timeline-card">
                      <h3 className="tl-title">{exp.title}</h3>
                      <p className="tl-company">{exp.company}</p>
                      <ul className="tl-list">
                        {exp.responsibilities.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
