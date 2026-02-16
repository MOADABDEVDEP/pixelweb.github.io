'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Server, 
  Database, 
  Globe, 
  Shield, 
  Zap,
  Box,
  Activity,
  GitBranch,
  HardDrive,
  Cloud,
  ArrowDown,
  ArrowRight,
  Network
} from 'lucide-react'

const architectureLayers = [
  {
    title: 'Edge & Load Balancing',
    subtitle: 'Layer 1: Entry Point',
    color: 'from-cyan-500 to-blue-500',
    items: [
      {
        title: 'Traefik',
        icon: Globe,
        description: 'SSL termination & service discovery',
        metrics: '1M+ req/s',
        tech: 'v2.11'
      },
      {
        title: 'Nginx',
        icon: Network,
        description: 'Reverse proxy & static serving',
        metrics: '500K req/s',
        tech: 'v1.25'
      },
      {
        title: 'HAProxy',
        icon: Shield,
        description: 'L7 load balancing',
        metrics: '1M connections',
        tech: '8 threads'
      }
    ]
  },
  {
    title: 'Application Layer',
    subtitle: 'Layer 2: Business Logic',
    color: 'from-purple-500 to-pink-500',
    items: [
      {
        title: 'Next.js Cluster',
        icon: Box,
        description: 'Server-driven UI (4x instances)',
        metrics: '50ms TTI',
        tech: 'v14.2'
      },
      {
        title: 'Custom API',
        icon: GitBranch,
        description: 'Node.js orchestrator',
        metrics: '<10ms latency',
        tech: 'TypeScript'
      },
      {
        title: 'Strapi CMS',
        icon: Server,
        description: 'Headless content management',
        metrics: '10K+ req/min',
        tech: 'v5.0'
      },
      {
        title: 'Saleor Commerce',
        icon: Activity,
        description: 'GraphQL commerce API',
        metrics: '5K orders/min',
        tech: 'v3.21'
      }
    ]
  },
  {
    title: 'Data & Persistence',
    subtitle: 'Layer 3: Storage & Cache',
    color: 'from-orange-500 to-red-500',
    items: [
      {
        title: 'PostgreSQL Cluster',
        icon: Database,
        description: 'Primary + 2 read replicas',
        metrics: '99.99% uptime',
        tech: 'v15 + PgBouncer'
      },
      {
        title: 'Redis Sentinel',
        icon: Zap,
        description: 'Distributed in-memory cache',
        metrics: '<1ms access',
        tech: 'v7.0 HA'
      },
      {
        title: 'MinIO Cluster',
        icon: HardDrive,
        description: '4-node object storage',
        metrics: '10TB capacity',
        tech: 'S3-Compatible'
      },
      {
        title: 'ClickHouse',
        icon: Database,
        description: 'Analytics & metrics',
        metrics: 'Real-time',
        tech: 'Columnar DB'
      }
    ]
  }
]

export default function ArchitectureSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section id="architecture" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Battle-Tested Architecture
            </span>
          </h2>
          <p className="text-base sm:text-xl text-dark-300 max-w-3xl mx-auto px-2">
            Zero single points of failure. Every component clustered, replicated, and monitored.
          </p>
        </motion.div>

        {/* Layer-by-Layer Architecture */}
        <div className="space-y-8 sm:space-y-12 mb-10 sm:mb-16">
          {architectureLayers.map((layer, layerIndex) => (
            <motion.div
              key={layer.title}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: layerIndex * 0.2 }}
            >
              {/* Layer Header */}
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className={`px-4 sm:px-6 py-2.5 sm:py-3 glass-effect rounded-xl border-l-4 bg-gradient-to-r ${layer.color} border-transparent shrink-0`}>
                  <h3 className="text-lg sm:text-2xl font-bold">{layer.title}</h3>
                  <p className="text-xs sm:text-sm text-dark-400">{layer.subtitle}</p>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-primary-500/50 to-transparent hidden sm:block" />
              </div>

              {/* Layer Components Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                {layer.items.map((item, itemIndex) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: layerIndex * 0.2 + itemIndex * 0.1 }}
                      className="group relative glass-effect rounded-xl p-4 sm:p-6 hover:border-primary-500/30 transition-all border border-dark-700"
                    >
                      {/* Gradient glow on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${layer.color} rounded-xl opacity-0 group-hover:opacity-5 transition-opacity`} />
                      
                      <div className="relative flex sm:block items-center gap-4">
                        {/* Icon */}
                        <div className={`w-11 h-11 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br ${layer.color} flex items-center justify-center shrink-0 sm:mb-4`}>
                          <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          {/* Title */}
                          <h4 className="text-base sm:text-lg font-bold sm:mb-2 group-hover:text-primary-400 transition-colors">
                            {item.title}
                          </h4>
                          
                          {/* Description - hide on very small screens */}
                          <p className="text-xs sm:text-sm text-dark-400 sm:mb-3 hidden sm:block">
                            {item.description}
                          </p>
                          
                          {/* Metrics & Tech - compact on mobile */}
                          <div className="flex sm:flex-col gap-3 sm:gap-2 mt-1 sm:mt-0">
                            <div className="flex items-center gap-1.5 sm:justify-between text-xs">
                              <span className="text-dark-500 hidden sm:inline">Performance:</span>
                              <span className="font-mono text-primary-400">{item.metrics}</span>
                            </div>
                            <div className="flex items-center gap-1.5 sm:justify-between text-xs">
                              <span className="text-dark-500 hidden sm:inline">Technology:</span>
                              <span className="font-mono text-dark-300">{item.tech}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Arrow between layers (except last one) */}
              {layerIndex < architectureLayers.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: layerIndex * 0.2 + 0.5 }}
                  className="flex justify-center my-4 sm:my-8"
                >
                  <div className="flex flex-col items-center gap-1 sm:gap-2">
                    <ArrowDown className="w-6 h-6 sm:w-8 sm:h-8 text-primary-500 animate-bounce" />
                    <span className="text-[10px] sm:text-xs text-dark-500 font-mono">Data Flow</span>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Key Principles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {[
            {
              title: 'Orchestration over Integration',
              description: 'Central Node.js orchestrator manages data flow between CMS and Commerce Engine, eliminating point-to-point complexity.',
              icon: GitBranch
            },
            {
              title: 'Zero Single Point of Failure',
              description: 'PostgreSQL clustering with replication and Redis Sentinel ensure continuous operation during component failures.',
              icon: Shield
            },
            {
              title: 'Server-Driven UI',
              description: 'Frontend delegates layout logic to CMS, enabling marketing teams to recompose pages without developer intervention.',
              icon: Cloud
            }
          ].map((principle, index) => {
            const Icon = principle.icon
            return (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="glass-effect rounded-xl p-4 sm:p-6 hover:border-primary-500/30 transition-all"
              >
                <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary-400 mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{principle.title}</h3>
                <p className="text-sm sm:text-base text-dark-400">{principle.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
