import { useState, useEffect, useRef } from 'react'

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*'

const DecodeText = ({ text, className = '' }) => {
  const [displayText, setDisplayText] = useState(text)
  const [isHovering, setIsHovering] = useState(false)
  const intervalRef = useRef(null)

  const animate = () => {
    let iteration = 0
    clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      setDisplayText(prev => 
        text
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return text[index]
            }
            return characters[Math.floor(Math.random() * characters.length)]
          })
          .join('')
      )

      if (iteration >= text.length) {
        clearInterval(intervalRef.current)
      }

      iteration += 1 / 3
    }, 30)
  }

  useEffect(() => {
    // Optional: Animate on mount
    // animate()
    return () => clearInterval(intervalRef.current)
  }, [])

  const handleMouseEnter = () => {
    setIsHovering(true)
    animate()
  }

  return (
    <span 
      className={className} 
      onMouseEnter={handleMouseEnter}
      style={{ display: 'inline-block', minWidth: `${text.length}ch` }} // Prevent jitter
    >
      {displayText}
    </span>
  )
}

export default DecodeText
