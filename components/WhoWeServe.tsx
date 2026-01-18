'use client'

import { motion } from 'framer-motion'
import {
  Building2,
  Factory,
  CreditCard,
  Zap,
  Tractor,
  Users,
  Recycle,
  Smartphone,
  Car
} from 'lucide-react'

const solarSegments = [
  {
    icon: Building2,
    title: "Residential Customers",
    description: "Rooftop solar installations from 3kW to 10kW for homes and apartments",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Factory,
    title: "Commercial Buildings",
    description: "10kW to 100kW solar solutions for offices, shops, and commercial complexes",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: Zap,
    title: "Industrial Facilities",
    description: "100kW to 10MW ground-mounted and rooftop systems for manufacturing units",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Tractor,
    title: "Solar Parks",
    description: "Utility-scale projects from 10MW to 100MW across South India",
    color: "bg-yellow-100 text-yellow-600"
  },
  {
    icon: Users,
    title: "Government Projects",
    description: "Solar installations for government buildings, schools, and public institutions",
    color: "bg-emerald-100 text-emerald-600"
  },
  {
    icon: Building2,
    title: "Educational Institutions",
    description: "Campus-wide solar solutions for schools, colleges, and universities",
    color: "bg-orange-100 text-orange-600"
  },
  {
    icon: CreditCard,
    title: "Healthcare Facilities",
    description: "Reliable solar power systems for hospitals and medical centers",
    color: "bg-teal-100 text-teal-600"
  },
  {
    icon: Car,
    title: "EV Fleet Operators",
    description: "Complete EV charging infrastructure for fleet management companies",
    color: "bg-indigo-100 text-indigo-600"
  },
  {
    icon: Smartphone,
    title: "Charging Network Providers",
    description: "30kW to 240kW charging stations for public and private networks",
    color: "bg-red-100 text-red-600"
  }
]

export function WhoWeServe() {
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
            Serving Diverse Energy Needs Across South India
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From residential rooftops to utility-scale solar parks, we deliver complete EPC solutions
            tailored to your specific energy requirements and business goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solarSegments.map((segment, index) => (
            <motion.div
              key={segment.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-200 cursor-pointer h-full">
                <div className={`w-16 h-16 rounded-2xl ${segment.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <segment.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {segment.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {segment.description}
                </p>
                <div className="mt-6 flex items-center text-green-600 font-medium group-hover:text-green-700 transition-colors">
                  <span>Learn more</span>
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
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
          <div className="bg-gradient-to-r from-green-50 to-yellow-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Have a Unique Project Requirement?
            </h3>
            <p className="text-gray-600 mb-6">
              We specialize in custom EPC solutions for unique energy projects and hybrid solar-EV installations.
            </p>
            <button className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors">
              Discuss Your Project
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}