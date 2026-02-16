'use client'

import { motion } from 'framer-motion'
import { 
  Github, 
  ExternalLink, 
  Zap, 
  Shield, 
  Activity,
  Box,
  Layers,
  Terminal
} from 'lucide-react'
import NetworkBackground from './NetworkBackground'
import LiveTerminal from './LiveTerminal'
import LiveMetrics from './LiveMetrics'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Network Background */}
      <NetworkBackground />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950/40 via-transparent to-dark-950 pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark-950/60 via-transparent to-dark-950/60 pointer-events-none z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left: Text Content */}
          <div>
            {/* Status Badges */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 glass-effect rounded-full text-xs font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-400">PRODUCTION READY</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 glass-effect rounded-full text-xs font-mono text-primary-400">
                <Shield className="w-3 h-3" />
                ENTERPRISE GRADE
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 glass-effect rounded-full text-xs font-mono text-purple-400">
                <Layers className="w-3 h-3" />
                MICROSERVICES
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-6">
                <span className="block bg-gradient-to-r from-white via-dark-100 to-dark-300 bg-clip-text text-transparent">
                  Digital Experience
                </span>
                <span className="block bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent">
                  Platform
                </span>
                <span className="block text-xl sm:text-3xl lg:text-4xl font-light text-dark-400 mt-2">
                  for Enterprise Scale
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base sm:text-lg text-dark-400 mb-6 sm:mb-8 max-w-xl leading-relaxed"
            >
              Fault-tolerant microservices architecture with{' '}
              <span className="text-dark-200 font-medium">PostgreSQL clustering</span>,{' '}
              <span className="text-dark-200 font-medium">Redis Sentinel HA</span>, and{' '}
              <span className="text-dark-200 font-medium">full observability</span>.{' '}
              45+ orchestrated services. One command deployment.
            </motion.p>

            {/* Key Stats - Inline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 sm:gap-6 mb-8 sm:mb-10"
            >
              {[
                { value: '700K+', label: 'Concurrent Users', icon: Activity },
                { value: '45+', label: 'Microservices', icon: Box },
                { value: '<50ms', label: 'Response Time', icon: Zap },
                { value: '99.9%', label: 'Uptime SLA', icon: Shield },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white font-mono">{stat.value}</div>
                    <div className="text-xs text-dark-500">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <a
                href="https://github.com/matinsanei/Pixelstack"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold text-sm sm:text-base overflow-hidden transition-all"
              >
                {/* Button gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  <Github className="w-5 h-5" />
                  View Repository
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              <a
                href="#architecture"
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 glass-effect rounded-xl font-semibold text-sm sm:text-base hover:border-primary-500/30 transition-all border border-dark-700/50"
              >
                <Terminal className="w-5 h-5 text-primary-400" />
                <span>Explore Architecture</span>
              </a>
            </motion.div>

          </div>

          {/* Right: Terminal + Live Metrics */}
          <div className="space-y-6">
            <LiveTerminal />
            <LiveMetrics />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-950 to-transparent pointer-events-none z-[2]" />
    </section>
  )
}
