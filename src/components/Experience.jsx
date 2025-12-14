import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Experience.css'

const Experience = () => {
  const sectionRef = useScrollAnimation()

  const experiences = [
    {
      title: 'Software Developer',
      company: 'UC Information Technology Solution Center, USA',
      period: 'MAY 2025 - Present',
      projects: 'MCESC & Macy\'s Projects',
      achievements: [
        'Designed and deployed scalable backend microservices (Spring Boot, Node.js) on AWS EC2 with Docker, improving deployment speed by 40% and supporting 99.99% uptime',
        'Built responsive React, TypeScript dashboards with offline capable ShadCN forms, improving UX delivery speed',
        'Automated CI/CD pipelines (GitHub Actions) with Redis caching, improving reliability throughput by 40%',
        'Secured access and vulnerabilities via OAuth2/JWT and API Gateway, strengthening RBAC and compliance',
        'Tuned PostgreSQL queries using ORM optimizations and stored procedures to reduce latency by 35%'
      ]
    },
    {
      title: 'Software Developer',
      company: 'Cognizant Technology Solutions, India',
      period: 'JUL 2020 - JUL 2024',
      projects: 'US Bank Fidelity',
      achievements: [
        'Built and deployed full-stack joint owner features (React + Spring Boot), reducing processing delays by 30% through robust API design and adherence to SDLC best practices',
        'Optimized multithreading, SQL queries, and high-volume ingestion pipelines, boosting throughput by 35%',
        'Built secure OAuth2/JWT APIs and centralized observability with Splunk, reducing incident MTTR by 45%',
        'Integrated GraphQL+React query services, cutting API over-fetching and improving response times by 40%',
        'Automated deployments (Docker, GitHub Actions) enhancing team delivery in Agile PI planning ceremonies'
      ]
    }
  ]

  return (
    <section id="experience" className="experience" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <div className="experience-title-section">
                  <h3 className="experience-title">{exp.title}</h3>
                  <p className="experience-company">{exp.company}</p>
                  <p className="experience-projects">{exp.projects}</p>
                </div>
                <span className="experience-period">{exp.period}</span>
              </div>
              <ul className="experience-achievements">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience