import DecodeText from './DecodeText'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Projects.css'

const Projects = () => {
  const sectionRef = useScrollAnimation()

  const projects = [
    {
      title: 'PlayGround App',
      year: '2025',
      description: 'Built end-to-end mobile features (OAuth logins, real-time chat/events, geo-maps) with 30% faster UI rendering and sub-200ms image uploads using React Native, Firebase, and Firestore.',
      highlights: [
        'Engineered robust push notification, chat persistence, and location-sharing',
        'Achieved smooth real-time experiences for over 2,000 weekly active users'
      ],
      tech: ['React Native', 'Firebase', 'Firestore']
    },
    {
      title: 'Code Review Agent',
      year: '2025',
      description: 'Developed automated code review tool using FastAPI, OpenAI & React to streamline PR analysis and boost team review efficiency.',
      highlights: [
        'Implemented context-aware comment generation and integration with GitHub Actions',
        'Cut average PR review turnaround time by 40%'
      ],
      tech: ['FastAPI', 'OpenAI', 'React', 'GitHub Actions']
    },
    {
      title: 'Healthcare Q&A Agent System',
      year: '2025',
      description: 'Built a multi-agent system using Gemini 2.5 Flash + Google ADK for AI triage, insurance checks, and scheduling.',
      highlights: [
        'Integrated with FastAPI, Vertex AI, and GKE',
        'Implemented JWT auth, PII redaction, audit logs, and HITL review pipeline with semantic matching via vector databases'
      ],
      tech: ['FastAPI', 'Gemini 2.5 Flash', 'Google ADK', 'Vertex AI', 'GKE']
    },
    {
      title: 'NovaMart - Event-Driven Commerce Platform',
      year: '2025',
      description: 'Designed a Walmart/Amazon-style ecommerce system on AWS using Dockerized microservices on EKS with Terraform IaC.',
      highlights: [
        'Built product and order services in Spring Boot, recommendation and inventory services in Python',
        'Used DynamoDB for inventory, AWS RDS for orders, S3 for media storage, and AWS Cognito for secure authentication',
        'Wrote unit tests to keep services reliable'
      ],
      tech: ['Spring Boot', 'Python', 'AWS EKS', 'Docker', 'Terraform', 'DynamoDB', 'RDS', 'S3']
    }
  ]

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-year">{project.year}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <ul className="project-highlights">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    <DecodeText text={tech} />
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects