import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-container">
        <div className="about-content">
          <div className="about-text">
            <h1 className="name">Charishma Nadipalli</h1>
            <h2 className="title">Full-Stack Developer</h2>
            <p className="description">
              Software developer with <strong>4+ years</strong> building Java/Spring, Node.js, React & AWS systems 
              and shipping AI/LLM projects. Passionate about creating scalable, efficient solutions 
              and delivering exceptional user experiences.
            </p>
            <div className="contact-links">
              <a href="tel:+15132121754" className="contact-link">
                <span>📞</span> +1 513-212-1754
              </a>
              <a href="mailto:nadipaca@mail.uc.edu" className="contact-link">
                <span>✉️</span> Email
              </a>
              <a href="https://linkedin.com/in/charishma-nadipalli" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span>💼</span> LinkedIn
              </a>
              <a href="https://github.com/nadipaca" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span>🔗</span> GitHub
              </a>
            </div>
          </div>
          <div className="education-card">
            <h3>Education</h3>
            <div className="education-item">
              <h4>Master's in Information Technology</h4>
              <p className="institution">University of Cincinnati, Cincinnati, OH</p>
              <p className="details">Expected Graduation: DEC 2025 | GPA: 4.0/4.0</p>
              <p className="coursework">
                <strong>Coursework:</strong> Machine Learning, Data Mining, Azure Data Engineering, 
                Mobile App Tech, HCI, Cybersecurity
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
