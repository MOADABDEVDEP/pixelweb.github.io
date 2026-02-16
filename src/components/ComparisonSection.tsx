'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Check, X } from 'lucide-react'

const comparisonData = [
  {
    feature: 'Architecture',
    pixelstack: 'Microservices with fault tolerance',
    shopify: 'Monolithic SaaS',
    magento: 'Modular monolith',
    sapCommerce: 'Monolithic enterprise'
  },
  {
    feature: 'Database Clustering',
    pixelstack: true,
    shopify: false,
    magento: false,
    sapCommerce: 'Manual setup'
  },
  {
    feature: 'Concurrent Users',
    pixelstack: '700K+',
    shopify: '~100K (tier dependent)',
    magento: '~50K (hardware dependent)',
    sapCommerce: '~200K'
  },
  {
    feature: 'Infrastructure Control',
    pixelstack: 'Full ownership',
    shopify: 'Vendor locked',
    magento: 'Self-hosted',
    sapCommerce: 'Self-hosted'
  },
  {
    feature: 'Observability Built-in',
    pixelstack: true,
    shopify: 'Limited',
    magento: false,
    sapCommerce: 'Requires add-ons'
  },
  {
    feature: 'Response Time',
    pixelstack: '<50ms',
    shopify: '~200ms',
    magento: '~500ms',
    sapCommerce: '~300ms'
  },
  {
    feature: 'Deployment',
    pixelstack: 'Docker & Kubernetes ready',
    shopify: 'Managed hosting',
    magento: 'Complex setup',
    sapCommerce: 'Complex setup'
  },
  {
    feature: 'Total Cost (Annual)',
    pixelstack: 'Infrastructure only (~$5K)',
    shopify: '$29K+ (Plus plan)',
    magento: '$20K+ (hosting + dev)',
    sapCommerce: '$100K+ (licensing)'
  }
]

export default function ComparisonSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              How We Compare
            </span>
          </h2>
          <p className="text-base sm:text-xl text-dark-300 max-w-3xl mx-auto">
            Side-by-side comparison with industry-leading platforms
          </p>
          <p className="text-xs text-dark-500 mt-2 sm:hidden">← Swipe to see all →</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-effect rounded-2xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-dark-700">
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-dark-300 whitespace-nowrap">
                    Feature
                  </th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold bg-gradient-to-r from-primary-500/20 to-primary-600/20 whitespace-nowrap">
                    <div className="text-sm sm:text-lg text-primary-400">PixelStack</div>
                  </th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-dark-300 whitespace-nowrap">
                    Shopify Plus
                  </th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-dark-300 whitespace-nowrap">
                    Magento
                  </th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-dark-300 whitespace-nowrap">
                    SAP Commerce
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <motion.tr
                    key={row.feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                    className="border-b border-dark-800 hover:bg-dark-800/30 transition-colors"
                  >
                    <td className="px-3 sm:px-6 py-3 sm:py-4 font-semibold text-dark-200 text-xs sm:text-sm whitespace-nowrap">
                      {row.feature}
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-center bg-primary-500/5">
                      {typeof row.pixelstack === 'boolean' ? (
                        row.pixelstack ? (
                          <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 mx-auto" />
                        )
                      ) : (
                        <span className="text-primary-400 font-semibold text-xs sm:text-sm">
                          {row.pixelstack}
                        </span>
                      )}
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-dark-400 text-xs sm:text-sm">
                      {typeof row.shopify === 'boolean' ? (
                        row.shopify ? (
                          <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 mx-auto" />
                        )
                      ) : (
                        row.shopify
                      )}
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-dark-400 text-xs sm:text-sm">
                      {typeof row.magento === 'boolean' ? (
                        row.magento ? (
                          <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 mx-auto" />
                        )
                      ) : (
                        row.magento
                      )}
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-dark-400 text-xs sm:text-sm">
                      {typeof row.sapCommerce === 'boolean' ? (
                        row.sapCommerce ? (
                          <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 mx-auto" />
                        )
                      ) : (
                        row.sapCommerce
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-dark-400 text-sm">
            * Performance metrics based on production deployments and official vendor documentation
          </p>
        </motion.div>
      </div>
    </section>
  )
}
