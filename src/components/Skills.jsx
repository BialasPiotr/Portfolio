import { skills } from '../data'
import {
  FaJava, FaPhp, FaDocker, FaGitAlt, FaBitbucket, FaLinux, FaDatabase, FaCode, FaGlobe
} from 'react-icons/fa'
import {
  SiSpring, SiSpringboot, SiKotlin, SiApachemaven, SiHibernate,
  SiJavascript, SiAngular, SiHtml5, SiReact, SiNodedotjs,
  SiPostgresql, SiMysql,
  SiJenkins, SiJira, SiPostman, SiConfluence,
  SiDotnet
} from 'react-icons/si'
import './Skills.css'

const ICON_MAP = {
  'Java': <FaJava />,
  'Spring': <SiSpring />,
  'Spring Boot': <SiSpringboot />,
  'Kotlin': <SiKotlin />,
  'PHP': <FaPhp />,
  'Maven': <SiApachemaven />,
  'Hibernate': <SiHibernate />,
  'JavaScript': <SiJavascript />,
  'AJAX': <FaCode />,
  'Angular': <SiAngular />,
  'React': <SiReact />,
  'Node.js': <SiNodedotjs />,
  'HTML5': <SiHtml5 />,
  'CSS3': <FaCode />,
  'PostgreSQL': <SiPostgresql />,
  'MySQL': <SiMysql />,
  'Docker': <FaDocker />,
  'Jenkins': <SiJenkins />,
  'Linux': <FaLinux />,
  'Git & GitHub': <FaGitAlt />,
  'DBeaver': <FaDatabase />,
  'Bitbucket': <FaBitbucket />,
  'JIRA': <SiJira />,
  'Postman': <SiPostman />,
  'Confluence': <SiConfluence />,
  'C#': <FaCode />,
  '.NET': <SiDotnet />,
}

const COMPETENCIES = [
  'Agile / Scrum', 'REST API Design', 'Backend Architecture',
  'Problem Solving', 'Team Collaboration', 'Technical Documentation',
  'CI/CD', 'Code Review'
]

export default function Skills() {
  const mainCategories = skills.filter(s => s.category !== 'Languages' && s.category !== 'Also familiar with')
  const languages = skills.find(s => s.category === 'Languages')

  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Technologies I Work With</h2>

        {mainCategories.map((cat, i) => (
          <div key={i} className="skill-group">
            <h3 className="skill-group-title">
              <span className="skill-line" />
              {cat.category}
            </h3>
            <div className="skill-cards">
              {cat.skills.map((skill, j) => (
                <div key={j} className="skill-card">
                  <span className="skill-icon">{ICON_MAP[skill] || <FaCode />}</span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="competencies-section">
          <p className="competencies-label">CORE COMPETENCIES</p>
          <div className="competencies-tags">
            {COMPETENCIES.map((c, i) => (
              <span key={i} className="competency-tag">{c}</span>
            ))}
          </div>
        </div>

        {languages && (
          <div className="competencies-section">
            <p className="competencies-label">LANGUAGES</p>
            <div className="competencies-tags">
              {languages.skills.map((lang, i) => (
                <span key={i} className="competency-tag">
                  <FaGlobe style={{ marginRight: '6px', verticalAlign: 'middle' }} />
                  {lang}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
