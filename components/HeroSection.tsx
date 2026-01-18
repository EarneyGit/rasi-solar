'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Zap, Sun, Battery } from 'lucide-react'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-green-100 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-16 h-16 bg-yellow-400 rounded-full opacity-20"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-12 h-12 bg-green-500 rounded-full opacity-20"
          animate={{
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-20 h-20 bg-yellow-300 rounded-full opacity-15"
          animate={{
            x: [0, 30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 lg:px-12">
        <Link href="/" className="flex items-center space-x-2">
          <Sun className="w-8 h-8 text-yellow-600" />
          <span className="text-2xl font-bold text-gray-900">Rasi Solar</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/solutions" className="text-gray-700 hover:text-green-600 transition-colors">Solutions</Link>
          <Link href="/services" className="text-gray-700 hover:text-green-600 transition-colors">Services</Link>
          <Link href="/about" className="text-gray-700 hover:text-green-600 transition-colors">About</Link>
          <Link href="/projects" className="text-gray-700 hover:text-green-600 transition-colors">Projects</Link>
          <Link href="/contact" className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors">
            Contact Us
          </Link>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-100px)] px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Powering South India&apos;s{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-600">
                Clean Energy Future
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Expert EPC solutions for solar power plants (3kW-100MW) and EV charging infrastructure (30kW-240kW) across South India.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <button className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl">
              <span>Get Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-green-600 hover:text-green-600 transition-all duration-300 flex items-center space-x-2">
              <Play className="w-5 h-5" />
              <span>View Our Projects</span>
            </button>
          </motion.div>

          {/* Feature Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:grid sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto"
          >
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-3">
                <Sun className="w-8 h-8 text-yellow-600" />
              </div>
              <span className="text-sm font-medium text-gray-600">Solar Installation</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-3">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <span className="text-sm font-medium text-gray-600">EV Charging</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <Battery className="w-8 h-8 text-blue-600" />
              </div>
              <span className="text-sm font-medium text-gray-600">Complete EPC</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
} 