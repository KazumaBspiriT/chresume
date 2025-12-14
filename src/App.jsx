import { useState, useEffect, useRef } from 'react'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import RotatingWheel from './components/RotatingWheel'
import FloatingParticles from './components/FloatingParticles'
import ParallaxBackground from './components/ParallaxBackground'
import ScrollProgress from './components/ScrollProgress'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [scrollHeight, setScrollHeight] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'skills', 'contact']
      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight
      const fullHeight = document.documentElement.scrollHeight
      
      // Update connector line height
      const scrolledPercentage = (scrollY / (fullHeight - viewportHeight)) * 100
      setScrollHeight(scrolledPercentage)

      // Update active section
      const scrollPosition = scrollY + 200
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      <ParallaxBackground />
      <RotatingWheel />
      <FloatingParticles />
      <ScrollProgress />
      
      {/* Connector Line */}
      <div className="connector-line-container">
        <div 
          className="connector-line" 
          style={{ height: `${scrollHeight}%` }}
        ></div>
      </div>

      <Header activeSection={activeSection} />
      <main>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App