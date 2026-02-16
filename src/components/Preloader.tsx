'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const bootSequence = [
  { text: '> Initializing PixelStack Platform...', delay: 0 },
  { text: '> Loading microservices [45 services]', delay: 400 },
  { text: '> PostgreSQL Cluster ........... ✓', delay: 800 },
  { text: '> Redis Sentinel HA ............ ✓', delay: 1200 },
  { text: '> Traefik Edge Router .......... ✓', delay: 1600 },
  { text: '> Next.js Cluster (4x) ......... ✓', delay: 2000 },
  { text: '> Observability Stack .......... ✓', delay: 2400 },
  { text: '> Systems operational. Welcome!', delay: 2800 },
]

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [visibleLines, setVisibleLines] = useState<number>(0)
  const [isExiting, setIsExiting] = useState(false)
  const [currentPhase, setCurrentPhase] = useState('')

  useEffect(() => {
    // Realistic progress simulation
    const phases = [
      { end: 15, duration: 400, label: 'Initializing...' },
      { end: 35, duration: 800, label: 'Loading services...' },
      { end: 55, duration: 400, label: 'Connecting databases...' },
      { end: 70, duration: 600, label: 'Starting router...' },
      { end: 85, duration: 500, label: 'Deploying frontend...' },
      { end: 95, duration: 400, label: 'Final checks...' },
      { end: 100, duration: 300, label: 'Ready!' },
    ]

    let phaseIndex = 0
    let currentProgress = 0

    const runPhase = () => {
      if (phaseIndex >= phases.length) return

      const phase = phases[phaseIndex]
      setCurrentPhase(phase.label)
      
      const increment = (phase.end - currentProgress) / (phase.duration / 50)
      const phaseInterval = setInterval(() => {
        currentProgress += increment
        setProgress(Math.min(currentProgress, phase.end))
        
        if (currentProgress >= phase.end) {
          clearInterval(phaseInterval)
          phaseIndex++
          setTimeout(runPhase, 100)
        }
      }, 50)
    }

    runPhase()

    // Boot sequence lines
    bootSequence.forEach((_, index) => {
      setTimeout(() => {
        setVisibleLines(index + 1)
      }, bootSequence[index].delay)
    })

    // Complete and exit
    const exitTimer = setTimeout(() => {
      setIsExiting(true)
      setTimeout(onComplete, 800)
    }, 3500)

    return () => {
      clearTimeout(exitTimer)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] bg-dark-950 flex items-center justify-center"
        >
          {/* Background grid */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          
          {/* Scanning line effect */}
          <motion.div
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent"
            animate={{ top: ['0%', '100%'] }}
            transition={{ duration: 2.5, ease: 'linear', repeat: Infinity }}
            style={{ opacity: 0.3 }}
          />

            <div className="relative w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-8 sm:mb-12"
            >
              <div className="inline-flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <motion.div
                  animate={{ 
                    boxShadow: [
                      '0 0 20px rgba(56, 189, 248, 0.3)',
                      '0 0 60px rgba(56, 189, 248, 0.6)',
                      '0 0 20px rgba(56, 189, 248, 0.3)',
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center"
                >
                  <span className="text-white font-bold text-lg sm:text-xl lg:text-2xl tracking-tight">PS</span>
                </motion.div>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                  PixelStack
                </span>
                <span className="text-dark-400 font-light ml-2">Enterprise</span>
              </h1>
            </motion.div>

            {/* Terminal Boot Sequence */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-effect rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 mb-4 sm:mb-6 lg:mb-8 font-mono text-[10px] sm:text-xs lg:text-sm"
            >
              <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-dark-700">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                <span className="text-dark-500 text-[9px] sm:text-xs ml-1 sm:ml-2">system-init — bash</span>
              </div>
              
              <div className="space-y-1 sm:space-y-1.5 min-h-[160px] sm:min-h-[180px] lg:min-h-[200px]">
                {bootSequence.slice(0, visibleLines).map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`${
                      line.text.includes('✓') 
                        ? 'text-green-400' 
                        : line.text.includes('Welcome')
                          ? 'text-primary-400 font-bold'
                          : 'text-dark-300'
                    } leading-relaxed`}
                  >
                    {line.text}
                    {index === visibleLines - 1 && !line.text.includes('Welcome') && (
                      <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                        className="inline-block w-1.5 h-3 sm:w-2 sm:h-4 bg-primary-400 ml-1 align-middle"
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Progress Bar */}
            <div className="relative">
              <div className="flex justify-between text-[10px] sm:text-xs text-dark-500 mb-2 font-mono">
                <span className="truncate">{currentPhase || 'INITIALIZING'}</span>
                <span className="ml-2 flex-shrink-0">{Math.min(Math.round(progress), 100)}%</span>
              </div>
              <div className="h-1 sm:h-1.5 bg-dark-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary-500 via-primary-400 to-primary-500 rounded-full"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ ease: 'easeOut', duration: 0.3 }}
                />
              </div>
              <div className="h-0.5 sm:h-1 bg-dark-800 rounded-full overflow-hidden mt-px opacity-50">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary-600 to-primary-400 rounded-full blur-sm"
                  style={{ width: `${Math.min(progress * 0.85, 100)}%` }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
