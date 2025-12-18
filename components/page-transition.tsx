'use client'

import { motion } from 'motion/react'

interface PageTransitionProps {
  children: React.ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1], // Custom easing for smooth feel
      }}
    >
      {children}
    </motion.div>
  )
}
