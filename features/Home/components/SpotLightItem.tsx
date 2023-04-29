import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

import { useMousePosition } from '@/hooks'
import { tx } from '@twind/core'

export const SpotLightItem = ({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) => {
  const mousePosition = useMousePosition()
  return (
    <div
      className={tx(
        'h-max relative overflow-hidden border border-zinc-800 backdrop-blur bg-gray-800',
        className
      )}>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          layoutId="spotlight"
          className="absolute inset-0 z-0 overflow-hidden bg-fixed"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, hsla(220,50%,80%,0.07) 0%,transparent 18%,transparent) fixed`
          }}></motion.div>
      </AnimatePresence>
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden bg-fixed"
        style={{
          clipPath: `polygon(0% 0%, 0% 100%, calc(0% + 1px) 100%, calc(0% + 1px) calc(0% + 1px), calc(100% - 1px) calc(0% + 1px), calc(100% - 1px) calc(100% - 1px), calc(0% + 1px) calc(100% - 1px), calc(0% + 1px) 100%, 100% 100%, 100% 0%)`,
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, hsla(180,90%,70%,0.35) 0%,transparent 10%,transparent) fixed`
        }}></motion.div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export default SpotLightItem
