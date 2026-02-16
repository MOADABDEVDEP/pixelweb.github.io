'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Database, 
  Zap, 
  Globe, 
  Shield, 
  BarChart, 
  Cloud,
  Lock,
  Gauge,
  Server,
  HardDrive,
  Eye,
  Workflow
} from 'lucide-react'

const capabilities = [
  {
    title: 'Fault-Tolerant Database',
    description: 'Write/Read splitting with auto-failover and connection pooling',
    icon: Database,
    tech: 'PostgreSQL Cluster + PgBouncer',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    title: 'Edge Routing',
    description: 'Dynamic service discovery, load balancing, and SSL termination',
    icon: Globe,
    tech: 'Traefik v2.11',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    title: 'Advanced Caching',
    description: 'Distributed in-memory data store with high availability',
    icon: Zap,
    tech: 'Redis Sentinel Cluster (7.0)',
    color: 'from-red-500 to-orange-500'
  },
  {
    title: 'Server-Driven UI',
    description: 'Dynamic block-based rendering engine. Backend defines the layout',
    icon: Server,
    tech: 'Next.js + Custom Engine',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Real-time Analytics',
    description: 'High-speed columnar database for user behavior tracking',
    icon: BarChart,
    tech: 'ClickHouse Shards',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    title: 'Asset Storage',
    description: 'S3-compatible decentralized storage for media assets',
    icon: HardDrive,
    tech: 'MinIO Cluster',
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Full Observability',
    description: 'Metrics, logs, and distributed tracing out of the box',
    icon: Eye,
    tech: 'Prometheus + Grafana + Jaeger',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'Container Orchestration',
    description: 'Reproducible environment with 45+ microservices orchestrated',
    icon: Workflow,
    tech: 'Docker Compose',
    color: 'from-blue-600 to-cyan-600'
  }
]

const performanceMetrics = [
  { label: 'Response Time', value: '<50ms', description: 'Average API response', icon: Gauge },
  { label: 'Throughput', value: '1M+ req/s', description: 'Peak request handling', icon: Zap },
  { label: 'Concurrent Users', value: '700K+', description: 'Simultaneous connections', icon: Globe },
  { label: 'Data Transfer', value: 'Architecture-based', description: 'Scalable network capacity', icon: BarChart },
  { label: 'Cache Hit Rate', value: '95%+', description: 'Redis cache efficiency', icon: Database },
  { label: 'Uptime SLA', value: '99.9%', description: 'Production availability', icon: Shield }
]

export default function FeaturesSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section id="features" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/50 to-dark-950" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Capabilities Grid */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Enterprise Capabilities
            </span>
          </h2>
          <p className="text-base sm:text-xl text-dark-300 max-w-3xl mx-auto px-2">
            Built-in features that would take months to implement from scratch
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-16 sm:mb-24">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon
            return (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative glass-effect rounded-xl p-4 sm:p-6 hover:border-primary-500/30 transition-all cursor-pointer"
              >
                {/* Gradient Glow on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${capability.color} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity blur-xl`} />
                
                <div className="relative flex sm:block items-center gap-4">
                  <div className={`w-11 h-11 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br ${capability.color} flex items-center justify-center shrink-0 sm:mb-4`}>
                    <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-bold sm:mb-2 group-hover:text-primary-400 transition-colors">
                      {capability.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-dark-400 sm:mb-3 hidden sm:block">
                      {capability.description}
                    </p>
                    
                    <div className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 bg-dark-800 rounded-full text-[10px] sm:text-xs font-mono text-primary-400 mt-1 sm:mt-0">
                      {capability.tech}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Performance Benchmarks
            </span>
          </h2>
          <p className="text-base sm:text-xl text-dark-300 max-w-3xl mx-auto px-2">
            Real-world metrics from production deployments under peak load
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {performanceMetrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
                className="glass-effect rounded-xl p-4 sm:p-6 lg:p-8 text-center hover:border-primary-500/30 transition-all"
              >
                <Icon className="w-7 h-7 sm:w-10 sm:h-10 text-primary-400 mx-auto mb-2 sm:mb-4" />
                
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                  {metric.value}
                </div>
                
                <div className="text-sm sm:text-lg font-semibold text-dark-200 mb-0.5 sm:mb-1">
                  {metric.label}
                </div>
                
                <div className="text-xs sm:text-sm text-dark-400 hidden sm:block">
                  {metric.description}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
