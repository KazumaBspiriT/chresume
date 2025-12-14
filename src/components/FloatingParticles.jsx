import { useEffect, useRef } from 'react'
import './FloatingParticles.css'

const FloatingParticles = () => {
  const containerRef = useRef(null)
  const animationRef = useRef(null)
  const particlesRef = useRef([])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const particleCount = 35

    // Clear any existing particles
    container.innerHTML = ''
    particlesRef.current = []

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 8 + 4,
        speedX: (Math.random() - 0.5) * 1,
        speedY: (Math.random() - 0.5) * 1,
        opacity: Math.random() * 0.5 + 0.4,
        element: document.createElement('div')
      }
      
      particle.element.className = 'floating-particle'
      particle.element.style.width = `${particle.size}px`
      particle.element.style.height = `${particle.size}px`
      particle.element.style.opacity = particle.opacity
      particle.element.style.transform = `translate(${particle.x}px, ${particle.y}px)`
      container.appendChild(particle.element)
      particlesRef.current.push(particle)
    }

    let mouseX = null
    let mouseY = null

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      particlesRef.current.forEach(particle => {
        // Move particle
        particle.x += particle.speedX
        particle.y += particle.speedY

        // React to mouse
        if (mouseX !== null && mouseY !== null) {
          const dx = mouseX - particle.x
          const dy = mouseY - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = 150

          if (distance < maxDistance && distance > 0) {
            const force = (maxDistance - distance) / maxDistance
            particle.x -= (dx / distance) * force * 3
            particle.y -= (dy / distance) * force * 3
          }
        }

        // Wrap around edges
        if (particle.x > window.innerWidth + 50) particle.x = -50
        if (particle.x < -50) particle.x = window.innerWidth + 50
        if (particle.y > window.innerHeight + 50) particle.y = -50
        if (particle.y < -50) particle.y = window.innerHeight + 50

        particle.element.style.transform = `translate(${particle.x}px, ${particle.y}px)`
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    animate()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      particlesRef.current.forEach(particle => {
        if (particle.element && particle.element.parentNode) {
          particle.element.parentNode.removeChild(particle.element)
        }
      })
    }
  }, [])

  return <div ref={containerRef} className="floating-particles-container"></div>
}

export default FloatingParticles