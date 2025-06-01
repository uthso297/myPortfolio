import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  
  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }
    
    const handleMouseDown = () => setIsActive(true)
    const handleMouseUp = () => setIsActive(false)
    
    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)
    
    // Track hover states on interactive elements
    const handleMouseHover = () => {
      const hoveredElement = document.querySelectorAll('a, button, .hover-effect')
      
      hoveredElement.forEach(element => {
        element.addEventListener('mouseenter', () => setIsHovering(true))
        element.addEventListener('mouseleave', () => setIsHovering(false))
      })
    }
    
    handleMouseHover()
    window.addEventListener('mousemove', updatePosition)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('mouseenter', handleMouseEnter)
    window.addEventListener('mouseleave', handleMouseLeave)
    
    return () => {
      window.removeEventListener('mousemove', updatePosition)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('mouseenter', handleMouseEnter)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])
  
  const variants = {
    default: {
      x: position.x - 10,
      y: position.y - 10,
      height: 20,
      width: 20,
      backgroundColor: "#0ea5e9"
    },
    active: {
      height: 16,
      width: 16,
      x: position.x - 8,
      y: position.y - 8,
      backgroundColor: "#f97316"
    },
    hover: {
      height: 40,
      width: 40,
      x: position.x - 20,
      y: position.y - 20,
      backgroundColor: "rgba(14, 165, 233, 0.4)",
      mixBlendMode: "normal"
    }
  }
  
  return (
    <motion.div
      className="custom-cursor"
      variants={variants}
      animate={isHovering ? "hover" : isActive ? "active" : "default"}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{
        opacity: isVisible ? 1 : 0
      }}
    />
  )
}

export default CustomCursor