import { Sun, Linkedin, Twitter, Github, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Sun className="w-8 h-8 text-yellow-500" />
              <span className="text-2xl font-bold">Rasi Solar</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading EPC contractor for solar power plants (3kW-100MW) and EV charging stations (30kW-240kW)
              across South India. Based in Salem, Tamil Nadu.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Rooftop Solar</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Ground-Mounted Solar</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Solar Parks</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Off-Grid Systems</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">EV Charging Stations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">O&M Services</a></li>
            </ul>
          </div>

          {/* Project Types */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Project Types</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Residential Solar</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Commercial Solar</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Industrial Solar</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Utility-Scale Projects</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">EV Charging Infrastructure</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Solar + EV Integration</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Certifications & Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex flex-wrap items-center space-x-6 mb-4 lg:mb-0">
              <span className="text-sm text-gray-400">✓ ISO 9001 Certified</span>
              <span className="text-sm text-gray-400">⚡ MNRE Approved</span>
              <span className="text-sm text-gray-400">🏆 BIS Certified</span>
              <span className="text-sm text-gray-400">🌱 100% Green Energy</span>
            </div>
            <div className="text-sm text-gray-400">
              © 2026 Rasi Solar. All rights reserved. | Developed by <a href="https://earney.in" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors">Earney</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}