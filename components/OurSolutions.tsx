'use client'

import { motion } from 'framer-motion'
import {
  Users,
  BarChart3,
  CreditCard,
  Smartphone,
  Globe,
  Brain,
  RefreshCw,
  Database,
  Zap
} from 'lucide-react'

const solutions = [
  {
    icon: Users,
    title: "Rooftop Solar Systems",
    description: "Residential and commercial rooftop installations from 3kW to 100kW with complete design and installation",
    features: ["Site assessment", "Custom design", "Grid integration", "Net metering setup"],
    techStack: ["Tier-1 Panels", "String Inverters", "Monitoring", "Warranty"],
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: BarChart3,
    title: "Ground-Mounted Solar",
    description: "Large-scale ground-mounted systems from 100kW to 10MW for industrial and institutional clients",
    features: ["Land optimization", "Structural design", "SCADA integration", "Performance guarantee"],
    techStack: ["Bifacial Panels", "Central Inverters", "Trackers", "25-Year Warranty"],
    color: "bg-green-100 text-green-600"
  },
  {
    icon: Globe,
    title: "Solar Parks (10MW-100MW)",
    description: "Utility-scale solar park development with complete EPC services across South India",
    features: ["Project development", "Grid connectivity", "Substation setup", "O&M planning"],
    techStack: ["Mono PERC", "String Inverters", "Weather Station", "SCADA"],
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Database,
    title: "Off-Grid Solar Systems",
    description: "Standalone solar solutions with battery storage for remote locations and backup power",
    features: ["Battery sizing", "Hybrid systems", "Diesel integration", "Remote monitoring"],
    techStack: ["Lithium Batteries", "Hybrid Inverters", "Charge Controllers", "Backup"],
    color: "bg-yellow-100 text-yellow-600"
  },
  {
    icon: Smartphone,
    title: "AC Charging Stations (30kW)",
    description: "Level 2 AC charging solutions for residential complexes and workplace charging",
    features: ["Wall-mounted units", "Smart charging", "RFID access", "Mobile app"],
    techStack: ["30kW AC", "Type 2 Connector", "OCPP Protocol", "Cloud Platform"],
    color: "bg-emerald-100 text-emerald-600"
  },
  {
    icon: Zap,
    title: "DC Fast Charging (60kW)",
    description: "Quick charging stations for commercial locations, malls, and public parking",
    features: ["Fast charging", "Dual connectors", "Payment integration", "Real-time monitoring"],
    techStack: ["60kW DC", "CCS2 + CHAdeMO", "Payment Gateway", "Analytics"],
    color: "bg-orange-100 text-orange-600"
  },
  {
    icon: Brain,
    title: "Ultra-Fast Charging (120kW-240kW)",
    description: "High-power charging infrastructure for highways, fleet charging, and rapid transit",
    features: ["Ultra-fast charging", "Multiple vehicles", "Load management", "24/7 support"],
    techStack: ["120-240kW DC", "Liquid Cooled", "Dynamic Load", "Remote Diagnostics"],
    color: "bg-indigo-100 text-indigo-600"
  },
  {
    icon: RefreshCw,
    title: "Solar + EV Integration",
    description: "Combined solar power and EV charging solutions for sustainable energy ecosystems",
    features: ["Integrated design", "Energy optimization", "Battery storage", "Smart grid"],
    techStack: ["Solar Carports", "Bidirectional", "Energy Storage", "Smart Meters"],
    color: "bg-teal-100 text-teal-600"
  },
  {
    icon: CreditCard,
    title: "O&M Services",
    description: "Comprehensive operation and maintenance services for solar plants and charging stations",
    features: ["Preventive maintenance", "Performance monitoring", "Cleaning services", "Breakdown support"],
    techStack: ["Remote Monitoring", "Annual Contracts", "Spare Parts", "24/7 Helpline"],
    color: "bg-red-100 text-red-600"
  }
]

export function OurSolutions() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Complete EPC Solutions for Solar & EV Charging
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From 3kW rooftop systems to 100MW solar parks, and 30kW to 240kW EV charging stations -
            we deliver turnkey solutions across South India.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-200 h-full">
                <div className={`w-16 h-16 rounded-2xl ${solution.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <solution.icon className="w-8 h-8" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {solution.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-100 pt-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Specifications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-600 to-yellow-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Solar or EV Charging Project?
            </h3>
            <p className="mb-6 opacity-90">
              Get a free site assessment and customized proposal for your energy project. Our experts will help you choose the right solution.
            </p>
            <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Request Free Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 