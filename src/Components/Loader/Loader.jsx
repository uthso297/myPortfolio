import { useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

const Loader = () => {
  useEffect(() => {
    const tl = gsap.timeline()
    tl.to('.counter', {
      duration: 1.5,
      opacity: 1
    })
    tl.to('.bar', {
      duration: 1.5, 
      width: '100%',
      ease: 'power3.inOut'
    }, 0)
    tl.to('.counter', {
      duration: 1.5,
      textContent: '100%',
      ease: 'power3.inOut',
      modifiers: {
        textContent: value => {
          return Math.ceil(parseFloat(value)) + '%'
        }
      }
    }, 0)
  }, [])

  const containerVariants = {
    hidden: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <motion.div 
      className="fixed inset-0 flex flex-col items-center justify-center bg-dark z-50"
      variants={containerVariants}
      initial="hidden"
      exit="exit"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        {/* <h1 className="text-4xl md:text-5xl font-bold gradient-text">Welcome</h1> */}
        <h1 className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-t from-[#f4278d] to-[#8260b4]">Welcome</h1>
      </motion.div>
      
      <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
        <div className="bar h-full w-0 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
      </div>
      
      <div className="counter text-lg mt-4 opacity-0 text-transparent bg-clip-text bg-gradient-to-t from-[#f4278d] to-[#8260b4]">0%</div>
    </motion.div>
  )
}

export default Loader