import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <p className="contact-description">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a conversation about technology and software development.
          </p>
          <div className="contact-methods">
            <a href="mailto:nadipaca@mail.uc.edu" className="contact-method">
              <div className="contact-icon">✉️</div>
              <div className="contact-info">
                <h3>Email</h3>
                <p>nadipaca@mail.uc.edu</p>
              </div>
            </a>
            <a href="tel:+15132121754" className="contact-method">
              <div className="contact-icon">📞</div>
              <div className="contact-info">
                <h3>Phone</h3>
                <p>+1 513-212-1754</p>
              </div>
            </a>
            <a href="https://linkedin.com/in/charishma-nadipalli" target="_blank" rel="noopener noreferrer" className="contact-method">
              <div className="contact-icon">💼</div>
              <div className="contact-info">
                <h3>LinkedIn</h3>
                <p>linkedin.com/in/charishma-nadipalli</p>
              </div>
            </a>
            <a href="https://github.com/nadipaca" target="_blank" rel="noopener noreferrer" className="contact-method">
              <div className="contact-icon">🔗</div>
              <div className="contact-info">
                <h3>GitHub</h3>
                <p>github.com/nadipaca</p>
              </div>
            </a>
          </div>
        </div>
        <div className="footer">
          <p>&copy; {new Date().getFullYear()} Charishma Nadipalli. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
