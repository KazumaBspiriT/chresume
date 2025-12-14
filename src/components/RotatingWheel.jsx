import { useEffect, useRef } from 'react'
import './RotatingWheel.css'

const RotatingWheel = () => {
  const wheelRef = useRef(null)
  const rotationRef = useRef(0)

  useEffect(() => {
    const wheel = wheelRef.current
    if (!wheel) return

    const handleScroll = () => {
      const scrollY = window.scrollY
      const scrollSpeed = 0.3 // Adjust rotation speed
      rotationRef.current = scrollY * scrollSpeed
      wheel.style.transform = `rotate(${rotationRef.current}deg)`
    }

    // Initial rotation
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="rotating-wheel-container">
      <div ref={wheelRef} className="rotating-wheel">
        <div className="wheel-spoke"></div>
        <div className="wheel-spoke"></div>
        <div className="wheel-spoke"></div>
        <div className="wheel-spoke"></div>
        <div className="wheel-spoke"></div>
        <div className="wheel-spoke"></div>
        <div className="wheel-spoke"></div>
        <div className="wheel-spoke"></div>
        <div className="wheel-spoke"></div>
        <div className="wheel-spoke"></div>
        <div className="wheel-spoke"></div>
        <div className="wheel-spoke"></div>
        <div className="wheel-center"></div>
        <div className="wheel-ring wheel-ring-1"></div>
        <div className="wheel-ring wheel-ring-2"></div>
        <div className="wheel-ring wheel-ring-3"></div>
      </div>
    </div>
  )
}

export default RotatingWheel
