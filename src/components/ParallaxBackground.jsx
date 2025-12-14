import { useEffect, useRef } from 'react'
import './ParallaxBackground.css'

const ParallaxBackground = () => {
  const layersRef = useRef([])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      
      layersRef.current.forEach((layer, index) => {
        if (layer) {
          const speed = (index + 1) * 0.1
          const yPos = -(scrollY * speed)
          layer.style.transform = `translateY(${yPos}px)`
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="parallax-background">
      <div ref={el => layersRef.current[0] = el} className="parallax-layer layer-1"></div>
      <div ref={el => layersRef.current[1] = el} className="parallax-layer layer-2"></div>
      <div ref={el => layersRef.current[2] = el} className="parallax-layer layer-3"></div>
    </div>
  )
}

export default ParallaxBackground
