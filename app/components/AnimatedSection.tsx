'use client'

import { motion } from 'framer-motion'

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

interface AnimatedSectionProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function AnimatedSection({ children, delay = 0, className = '' }: AnimatedSectionProps) {
  return (
    <motion.div
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
} 