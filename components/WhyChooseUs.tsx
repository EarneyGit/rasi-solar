'use client'

import { motion } from 'framer-motion'
import { Target, Brain, Award, Settings, TrendingUp } from 'lucide-react'

const reasons = [
  {
    icon: Target,
    title: "Pan-South India Presence",
    description: "Based in Salem, Tamil Nadu, we deliver solar and EV charging projects across Karnataka, Kerala, Andhra Pradesh, and Telangana.",
    color: "bg-yellow-100 text-yellow-600"
  },
  {
    icon: Brain,
    title: "Complete EPC Capability",
    description: "End-to-end project execution from site assessment and design to installation, commissioning, and ongoing maintenance.",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: Award,
    title: "Certified & Compliant",
    description: "ISO certified, MNRE approved, and compliant with all BIS standards. Quality assurance at every step of project delivery.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Settings,
    title: "Tier-1 Equipment",
    description: "We use only premium solar panels, inverters, and EV chargers from globally recognized manufacturers with comprehensive warranties.",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    description: "Successfully delivered 200+ MW of solar capacity and 100+ EV charging stations across South India with 99% customer satisfaction.",
    color: "bg-emerald-100 text-emerald-600"
  }
]

export function WhyChooseUs() {
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
            Why Choose Rasi Solar
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re not just another EPC contractor. We&apos;re your trusted partner
            for sustainable energy solutions with proven expertise and unwavering commitment to quality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-200 h-full">
                <div className={`w-16 h-16 rounded-2xl ${reason.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <reason.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}