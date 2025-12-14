import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Java (8+)', 'Spring Boot', 'Node.js', 'JavaScript (ES6+)', 'React (v18)', 'FastAPI', 'JPA/Hibernate', 'REST']
    },
    {
      title: 'Cloud/Infrastructure',
      skills: ['AWS (EC2, EKS, S3, Elastic Beanstalk, API Gateway)', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD Pipelines (GitHub Actions, Jenkins)']
    },
    {
      title: 'API/Backend',
      skills: ['Microservices Architecture', 'RESTful APIs', 'GraphQL', 'JPA/Hibernate', 'Multithreading', 'OAuth2', 'JWT', 'RBAC', 'SQL/NoSQL (MySQL, PostgreSQL, MongoDB, Redis)', 'Kafka']
    },
    {
      title: 'Testing/Monitoring',
      skills: ['JUnit', 'Mockito', 'Postman', 'SonarQube', 'OpenAPI/Swagger', 'Splunk', 'Git', 'Agile (Scrum/Kanban)']
    }
  ]

  const certifications = [
    'Oracle AI Foundations',
    'Oracle Generative AI Professional',
    'Oracle Developer Professional',
    'Microsoft AZ-900'
  ]

  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="certifications">
          <h3 className="certifications-title">Certifications</h3>
          <div className="certifications-list">
            {certifications.map((cert, idx) => (
              <div key={idx} className="certification-item">
                <span className="cert-icon">🏆</span>
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
