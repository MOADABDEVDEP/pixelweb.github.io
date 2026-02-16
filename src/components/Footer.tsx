'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PS</span>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                PixelStack Enterprise
              </span>
            </div>
            <p className="text-dark-400 mb-4 max-w-md">
              High-Performance Digital Experience Platform engineered for modern enterprise commerce. 
              Built with fault tolerance, scalability, and observability at its core.
            </p>
            <div className="flex items-center gap-2 text-sm text-dark-500">
              <span>Built with</span>
              <span className="text-red-500">❤️</span>
              <span>and Engineering Precision</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-dark-200">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com/matinsanei/Pixelstack#readme" target="_blank" rel="noopener noreferrer" className="text-dark-400 hover:text-primary-400 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="https://github.com/matinsanei/Pixelstack#architecture" target="_blank" rel="noopener noreferrer" className="text-dark-400 hover:text-primary-400 transition-colors">
                  Architecture Guide
                </a>
              </li>
              <li>
                <a href="https://github.com/matinsanei/Pixelstack#installation--setup" target="_blank" rel="noopener noreferrer" className="text-dark-400 hover:text-primary-400 transition-colors">
                  Installation
                </a>
              </li>
              <li>
                <a href="https://github.com/matinsanei/Pixelstack/issues" target="_blank" rel="noopener noreferrer" className="text-dark-400 hover:text-primary-400 transition-colors">
                  Issues & Support
                </a>
              </li>
            </ul>
          </div>

          {/* Technology Stack */}
          <div>
            <h3 className="font-semibold mb-4 text-dark-200">Core Stack</h3>
            <ul className="space-y-2 text-sm text-dark-400">
              <li>Next.js</li>
              <li>Strapi v5 CMS</li>
              <li>Saleor Commerce</li>
              <li>PostgreSQL Cluster</li>
              <li>Redis Sentinel</li>
              <li>Docker Orchestration</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-dark-500">
            © {currentYear} PixelStack Development Group. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 text-sm text-dark-500">
            <a href="https://github.com/matinsanei/Pixelstack/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
              License
            </a>
            <span>•</span>
            <a href="https://github.com/matinsanei/Pixelstack" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
              GitHub
            </a>
            <span>•</span>
            <span className="font-mono">v1.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
