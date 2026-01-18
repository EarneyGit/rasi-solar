'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Play, TrendingUp, Users, Zap } from 'lucide-react'

const caseStudies = [
  {
    id: 1,
    title: "50MW Solar Park - Karnataka",
    category: "Utility-Scale Solar",
    description: "Complete EPC execution of a 50MW ground-mounted solar park with advanced tracking systems and grid integration across 120 acres.",
    metrics: [
      { label: "Total Capacity", value: "50MW", icon: TrendingUp },
      { label: "Annual Generation", value: "75,000 MWh", icon: Zap },
      { label: "CO₂ Reduction", value: "60,000 tons/year", icon: Users }
    ],
    image: "bg-gradient-to-br from-green-400 to-green-600",
    features: ["Single-axis trackers", "33kV substation", "SCADA monitoring", "25-year O&M contract"]
  },
  {
    id: 2,
    title: "5MW Industrial Rooftop - Tamil Nadu",
    category: "Commercial Solar",
    description: "Large-scale rooftop solar installation for manufacturing facility with net metering and energy management system.",
    metrics: [
      { label: "Installed Capacity", value: "5MW", icon: TrendingUp },
      { label: "Cost Savings", value: "₹4.5Cr/year", icon: Users },
      { label: "Payback Period", value: "4.2 years", icon: Zap }
    ],
    image: "bg-gradient-to-br from-blue-400 to-blue-600",
    features: ["Rooftop mounting", "String inverters", "Real-time monitoring", "Grid synchronization"]
  },
  {
    id: 3,
    title: "EV Charging Hub - Bangalore",
    category: "EV Infrastructure",
    description: "High-capacity EV charging station with 20 charging points including ultra-fast 240kW chargers for highway corridor.",
    metrics: [
      { label: "Charging Points", value: "20 Units", icon: TrendingUp },
      { label: "Total Capacity", value: "2.4MW", icon: Zap },
      { label: "Daily Charges", value: "300+ vehicles", icon: Users }
    ],
    image: "bg-gradient-to-br from-purple-400 to-purple-600",
    features: ["240kW ultra-fast DC", "60kW fast charging", "Payment integration", "24/7 operations"]
  },
  {
    id: 4,
    title: "1MW Educational Campus - Kerala",
    category: "Institutional Solar",
    description: "Complete solar solution for university campus with hybrid ground-mounted and rooftop systems providing 100% daytime power.",
    metrics: [
      { label: "System Size", value: "1MW", icon: TrendingUp },
      { label: "Buildings Covered", value: "15 blocks", icon: Users },
      { label: "Energy Independence", value: "100% daytime", icon: Zap }
    ],
    image: "bg-gradient-to-br from-yellow-400 to-yellow-600",
    features: ["Hybrid installation", "Educational monitoring", "Student engagement", "Research integration"]
  },
  {
    id: 5,
    title: "Solar + EV Integration - Hyderabad",
    category: "Integrated Solution",
    description: "Combined 500kW solar carport with 12 EV charging stations creating a sustainable energy ecosystem for commercial complex.",
    metrics: [
      { label: "Solar Capacity", value: "500kW", icon: TrendingUp },
      { label: "EV Chargers", value: "12 x 60kW", icon: Zap },
      { label: "Green Energy", value: "100% solar", icon: Users }
    ],
    image: "bg-gradient-to-br from-teal-400 to-teal-600",
    features: ["Solar carport design", "Integrated charging", "Battery storage", "Smart energy management"]
  }
]

export function CaseStudies() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }

  const currentCase = caseStudies[currentSlide]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Project Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering excellence across South India - from rooftop installations to utility-scale solar parks
            and cutting-edge EV charging infrastructure.
          </p>
        </motion.div>

        <div className="relative">
          {/* Main Case Study Display */}
          <motion.div
            key={currentCase.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 rounded-3xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Content Side */}
              <div className="p-8 lg:p-12">
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
                    {currentCase.category}
                  </span>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {currentCase.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {currentCase.description}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {currentCase.metrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <metric.icon className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        {metric.value}
                      </div>
                      <div className="text-sm text-gray-600">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {currentCase.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link href="/projects" className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors flex items-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>View Demo</span>
                </Link>
              </div>

              {/* Visual Side */}
              <div className={`${currentCase.image} flex items-center justify-center p-12 relative`}>
                <div className="text-white text-center">
                  <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">Interactive Demo</h4>
                  <p className="opacity-90">Click to explore the platform</p>
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute top-8 right-8 w-16 h-16 bg-white bg-opacity-20 rounded-full"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-8 left-8 w-12 h-12 bg-white bg-opacity-20 rounded-full"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            {/* Slide Indicators */}
            <div className="flex space-x-3">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-green-600' : 'bg-gray-300'
                    }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Case Study Thumbnails */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
            {caseStudies.map((study, index) => (
              <button
                key={study.id}
                onClick={() => setCurrentSlide(index)}
                className={`p-4 rounded-xl text-left transition-all ${index === currentSlide
                  ? 'bg-green-50 border-2 border-green-200'
                  : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                  }`}
              >
                <div className="text-sm font-medium text-gray-900 mb-1">
                  {study.title}
                </div>
                <div className="text-xs text-gray-600">
                  {study.category}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}