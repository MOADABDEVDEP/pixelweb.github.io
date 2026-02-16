'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Activity, Cpu, HardDrive, Wifi, Database, Shield } from 'lucide-react'

interface MetricData {
  value: number
  target: number
  trend: 'up' | 'down' | 'stable'
}

export default function LiveMetrics() {
  const [metrics, setMetrics] = useState({
    requests: { value: 0, target: 847293, trend: 'up' as const },
    latency: { value: 0, target: 12, trend: 'stable' as const },
    uptime: { value: 0, target: 99.97, trend: 'up' as const },
    containers: { value: 0, target: 45, trend: 'stable' as const },
    cpu: { value: 0, target: 23, trend: 'down' as const },
    memory: { value: 0, target: 67, trend: 'stable' as const },
  })

  useEffect(() => {
    // Animate counter up
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps
    let step = 0

    const interval = setInterval(() => {
      step++
      const progress = Math.min(step / steps, 1)
      const ease = 1 - Math.pow(1 - progress, 3) // easeOutCubic

      setMetrics({
        requests: { value: Math.round(847293 * ease), target: 847293, trend: 'up' },
        latency: { value: Math.round(12 * ease * 10) / 10, target: 12, trend: 'stable' },
        uptime: { value: Math.round(99.97 * ease * 100) / 100, target: 99.97, trend: 'up' },
        containers: { value: Math.round(45 * ease), target: 45, trend: 'stable' },
        cpu: { value: Math.round(23 * ease), target: 23, trend: 'down' },
        memory: { value: Math.round(67 * ease), target: 67, trend: 'stable' },
      })

      if (step >= steps) {
        clearInterval(interval)
        // Start fluctuation
        startFluctuation()
      }
    }, stepDuration)

    return () => clearInterval(interval)
  }, [])

  const startFluctuation = () => {
    setInterval(() => {
      setMetrics(prev => ({
        requests: { ...prev.requests, value: prev.requests.target + Math.floor(Math.random() * 5000 - 2000) },
        latency: { ...prev.latency, value: Math.round((prev.latency.target + (Math.random() * 6 - 3)) * 10) / 10 },
        uptime: { ...prev.uptime, value: 99.97 },
        containers: { ...prev.containers, value: 45 },
        cpu: { ...prev.cpu, value: Math.round(prev.cpu.target + (Math.random() * 8 - 4)) },
        memory: { ...prev.memory, value: Math.round(prev.memory.target + (Math.random() * 6 - 3)) },
      }))
    }, 2000)
  }

  const formatNumber = (n: number) => {
    if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M'
    if (n >= 1000) return (n / 1000).toFixed(0) + 'K'
    return n.toString()
  }

  const metricCards = [
    {
      label: 'Requests/min',
      value: formatNumber(metrics.requests.value),
      icon: Activity,
      color: 'text-green-400',
      bg: 'from-green-500/10 to-green-600/5',
    },
    {
      label: 'Avg Latency',
      value: `${metrics.latency.value}ms`,
      icon: Wifi,
      color: 'text-primary-400',
      bg: 'from-primary-500/10 to-primary-600/5',
    },
    {
      label: 'Uptime',
      value: `${metrics.uptime.value}%`,
      icon: Shield,
      color: 'text-emerald-400',
      bg: 'from-emerald-500/10 to-emerald-600/5',
    },
    {
      label: 'Containers',
      value: `${metrics.containers.value}/45`,
      icon: Database,
      color: 'text-purple-400',
      bg: 'from-purple-500/10 to-purple-600/5',
    },
    {
      label: 'CPU Usage',
      value: `${metrics.cpu.value}%`,
      icon: Cpu,
      color: 'text-orange-400',
      bg: 'from-orange-500/10 to-orange-600/5',
    },
    {
      label: 'Memory',
      value: `${metrics.memory.value}%`,
      icon: HardDrive,
      color: 'text-cyan-400',
      bg: 'from-cyan-500/10 to-cyan-600/5',
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-mono text-dark-400">SYSTEM HEALTH MONITOR</span>
        </div>
        <span className="text-xs font-mono text-dark-500">pixelstack.cloud</span>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
        {metricCards.map((metric, index) => {
          const Icon = metric.icon
          return (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
              className={`glass-effect rounded-lg p-4 bg-gradient-to-br ${metric.bg} border border-dark-700/30 hover:border-dark-600/50 transition-all`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Icon className={`w-4 h-4 ${metric.color}`} />
                <span className="text-xs text-dark-500 truncate">{metric.label}</span>
              </div>
              <div className={`text-xl font-bold font-mono ${metric.color}`}>
                {metric.value}
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
