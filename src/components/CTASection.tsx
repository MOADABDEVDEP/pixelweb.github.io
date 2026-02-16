'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Github, 
  ExternalLink, 
  BookOpen, 
  FileCode, 
  Mail,
  Linkedin,
  Twitter
} from 'lucide-react'

export default function CTASection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-primary-950/20 to-dark-950" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
        />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Ready to Build at Scale?
            </span>
          </h2>
          
          <p className="text-base sm:text-xl text-dark-300 mb-8 sm:mb-12 max-w-2xl mx-auto px-2">
            This enterprise-grade platform is currently in final development stages. 
            If you're interested in collaboration or early access opportunities, 
            please reach out via LinkedIn for professional discussions.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-16 px-2">
            <a
              href="https://linkedin.com/in/matinsanei"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg font-semibold text-base sm:text-lg transition-all hover:shadow-lg hover:shadow-primary-500/50"
            >
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 mb-10 sm:mb-16">
            {[
              {
                title: 'Enterprise Features',
                description: 'Explore platform capabilities',
                icon: FileCode,
                link: '#features'
              },
              {
                title: 'Architecture Overview',
                description: 'Battle-tested system design',
                icon: BookOpen,
                link: '#architecture'
              },
              {
                title: 'Professional Collaboration',
                description: 'Connect for partnership opportunities',
                icon: Linkedin,
                link: 'https://linkedin.com/in/matinsanei'
              }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.a
                  key={item.title}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="glass-effect rounded-xl p-4 sm:p-6 hover:border-primary-500/30 transition-all group cursor-pointer flex sm:block items-center gap-4"
                >
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary-400 sm:mb-3 shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold sm:mb-2 group-hover:text-primary-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-dark-400">{item.description}</p>
                  </div>
                </motion.a>
              )
            })}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center gap-4"
          >
            <a
              href="https://github.com/matinsanei"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:border-primary-500/50 transition-all group"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://linkedin.com/in/matinsanei"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:border-primary-500/50 transition-all group"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
