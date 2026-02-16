'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const terminalLines = [
  { type: 'command', text: '$ docker compose up -d --build' },
  { type: 'output', text: '[+] Building 45 services...' },
  { type: 'output', text: '[+] Network pixelstack-network created' },
  { type: 'success', text: '✓ Container pixelstack_postgres_primary   Started' },
  { type: 'success', text: '✓ Container pixelstack_postgres_replica1  Started' },
  { type: 'success', text: '✓ Container pixelstack_postgres_replica2  Started' },
  { type: 'success', text: '✓ Container pixelstack_redis_master       Started' },
  { type: 'success', text: '✓ Container pixelstack_redis_sentinel     Started' },
  { type: 'success', text: '✓ Container pixelstack_traefik            Started' },
  { type: 'success', text: '✓ Container pixelstack_varnish_cache      Started' },
  { type: 'success', text: '✓ Container pixelstack_strapi_cms         Started' },
  { type: 'success', text: '✓ Container pixelstack_saleor_api         Started' },
  { type: 'success', text: '✓ Container pixelstack_saleor_worker      Started' },
  { type: 'success', text: '✓ Container pixelstack_custom_api         Started' },
  { type: 'success', text: '✓ Container pixelstack_nextjs_1           Started' },
  { type: 'success', text: '✓ Container pixelstack_nextjs_2           Started' },
  { type: 'success', text: '✓ Container pixelstack_nextjs_3           Started' },
  { type: 'success', text: '✓ Container pixelstack_nextjs_4           Started' },
  { type: 'success', text: '✓ Container pixelstack_grafana            Started' },
  { type: 'success', text: '✓ Container pixelstack_prometheus         Started' },
  { type: 'success', text: '✓ Container pixelstack_jaeger             Started' },
  { type: 'info', text: '' },
  { type: 'command', text: '$ docker ps --format "table {{.Names}}\\t{{.Status}}"' },
  { type: 'header', text: 'NAMES                              STATUS' },
  { type: 'output', text: 'pixelstack_traefik                 Up 2m (healthy)' },
  { type: 'output', text: 'pixelstack_postgres_primary        Up 2m (healthy)' },
  { type: 'output', text: 'pixelstack_redis_master            Up 2m (healthy)' },
  { type: 'output', text: 'pixelstack_custom_api              Up 1m (healthy)' },
  { type: 'output', text: 'pixelstack_nextjs_1                Up 1m (healthy)' },
  { type: 'info', text: '' },
  { type: 'highlight', text: '✦ All 45 services operational. Platform ready.' },
]

const asciiArt = [
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  ' ██████╗ ██╗██╗  ██╗███████╗██╗     ███████╗████████╗ █████╗  ██████╗██╗  ██╗',
  ' ██╔══██╗██║╚██╗██╔╝██╔════╝██║     ██╔════╝╚══██╔══╝██╔══██╗██╔════╝██║ ██╔╝',
  ' ██████╔╝██║ ╚███╔╝ █████╗  ██║     ███████╗   ██║   ███████║██║     █████╔╝ ',
  ' ██╔═══╝ ██║ ██╔██╗ ██╔══╝  ██║     ╚════██║   ██║   ██╔══██║██║     ██╔═██╗ ',
  ' ██║     ██║██╔╝ ██╗███████╗███████╗███████║   ██║   ██║  ██║╚██████╗██║  ██╗',
  ' ╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝',
  '',
  '        Enterprise Digital Experience Platform',
  '          45+ Microservices Ready',
  '              🚀 Production Ready 🚀'
]

const mobileSuccessMessage = [
  '',
  ' +--[PIXELSTACK]--+',
  ' |    .o=*.o.     |',
  ' |   . =oB +      |',
  ' |    o.O.* .     |',
  ' |   ..o.B +      |',
  ' |    .+.S.o      |',
  ' |   . .o.+.      |',
  ' |    E ..o.      |',
  ' |     . .o.      |',
  ' |      .o..      |',
  ' +----[45 SVC]----+',
  '',
  '   All systems ready',
  '',
]

export default function LiveTerminal() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [showAsciiArt, setShowAsciiArt] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines(prev => {
        if (prev >= terminalLines.length) {
          // Show ASCII art instead of resetting
          setShowAsciiArt(true)
          clearInterval(interval)
          return prev
        }
        return prev + 1
      })
    }, 180)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [visibleLines, showAsciiArt])

  const getLineColor = (type: string) => {
    switch (type) {
      case 'command': return 'text-primary-400'
      case 'success': return 'text-green-400'
      case 'info': return 'text-dark-500'
      case 'header': return 'text-yellow-400 font-bold'
      case 'highlight': return 'text-primary-300 font-bold'
      default: return 'text-dark-300'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="relative glass-effect rounded-xl overflow-hidden border border-dark-700/50 shadow-2xl shadow-primary-500/5"
    >
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3 bg-dark-900/80 border-b border-dark-700/50">
        <div className="flex gap-1.5 sm:gap-2">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-dark-500 text-[10px] sm:text-xs font-mono truncate">pixelstack@production</span>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-green-500 text-[10px] sm:text-xs font-mono">LIVE</span>
        </div>
      </div>
      
      {/* Terminal Body */}
      <div 
        ref={scrollRef}
        className="p-3 sm:p-4 lg:p-6 font-mono text-[11px] sm:text-sm lg:text-xs h-[260px] sm:h-[340px] overflow-y-auto scrollbar-thin focus:outline-none"
      >
        {showAsciiArt ? (
          // Show ASCII Art (mobile: simple message, desktop: full ASCII)
          <>
            {/* Mobile version - simple text */}
            <div className="block sm:hidden text-primary-400 leading-[1.3] pt-8 flex justify-center">
              <div className="inline-block text-left">
                {mobileSuccessMessage.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.08 }}
                    className="text-[11px] font-mono whitespace-pre"
                  >
                    {line}
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Desktop version - full ASCII art */}
            <div className="hidden sm:block text-primary-400 leading-tight pt-4 sm:pt-6 lg:pt-8">
              {asciiArt.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="whitespace-pre text-[10px] lg:text-xs"
                >
                  {line}
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          // Show typing animation
          <>
            {terminalLines.slice(0, visibleLines).map((line, index) => (
              <div key={index} className={`${getLineColor(line.type)} leading-relaxed whitespace-pre-wrap break-words`}>
                {line.text}
              </div>
            ))}
            {visibleLines < terminalLines.length && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="inline-block w-2.5 h-4 bg-primary-400 mt-1"
              />
            )}
          </>
        )}
      </div>
    </motion.div>
  )
}
