import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

/**
 * Animates children when they come into view using Intersection Observer
 * Supports fade-in, slide-up, and other Framer Motion animations
 */
export default function AnimateOnScroll({ 
  children, 
  animation = 'fadeInUp',
  delay = 0,
  threshold = 0.1 
}) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  const variants = {
    fadeInUp: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
    fadeInLeft: {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0 },
    },
    fadeInRight: {
      hidden: { opacity: 0, x: 20 },
      visible: { opacity: 1, x: 0 },
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants[animation] || variants.fadeInUp}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}
