'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import {
    Droplet,
    Zap,
    Shield,
    Leaf,
    TrendingDown,
    CheckCircle,
    Phone,
    Mail,
    Wind,
    Filter,
    Sparkles
} from 'lucide-react'

const benefits = [
    {
        icon: Zap,
        title: 'Plug & Play',
        description: 'No installation or water pipe connection needed. Just plug it in and start producing water.'
    },
    {
        icon: TrendingDown,
        title: 'Cost-Effective',
        description: 'Cheaper than buying water cans in the long run. Save thousands annually on water delivery.'
    },
    {
        icon: Shield,
        title: 'Healthier Water',
        description: 'No microplastics from bottles. Water is made fresh daily with UV sterilization.'
    },
    {
        icon: Leaf,
        title: 'Sustainable',
        description: 'Zero water wastage unlike RO systems which waste 3 liters for every 1 liter produced.'
    }
]

const specifications = [
    { label: 'Daily Capacity', value: '20L / 50L / 100L models' },
    { label: 'Power Consumption', value: '400W (Similar to a fridge)' },
    { label: 'Dimensions', value: '45cm x 35cm x 120cm (H x W x D)' },
    { label: 'Required Humidity', value: 'Works best above 35% RH' },
    { label: 'Ideal For', value: 'Coastal cities & humid regions' },
    { label: 'Filtration', value: 'Multi-stage UV + Carbon + Mineral' },
    { label: 'Noise Level', value: 'Whisper-quiet operation (< 45dB)' },
    { label: 'Warranty', value: '2 years comprehensive warranty' }
]

const faqs = [
    {
        question: 'Is the water safe to drink?',
        answer: 'Yes, absolutely! The water is cleaner than tap water due to our multi-stage internal UV sterilization and carbon filtration system. It removes 99.99% of bacteria and viruses.'
    },
    {
        question: 'Does it work in AC rooms?',
        answer: 'Yes, it works in air-conditioned rooms, but it produces water faster in natural ventilation where humidity levels are higher.'
    },
    {
        question: 'What is the maintenance required?',
        answer: 'Minimal maintenance required. Filters need changing once every 6-12 months depending on usage. We provide filter replacement reminders and service.'
    },
    {
        question: 'How much does it cost to run?',
        answer: 'Very economical! Power consumption is similar to a refrigerator (400W). Monthly electricity cost is approximately ₹500-800 depending on usage and local rates.'
    },
    {
        question: 'Will it work in my city?',
        answer: 'AWG machines work exceptionally well in coastal and humid regions (35%+ humidity). Perfect for cities like Mumbai, Chennai, Kochi, Kolkata, and other high-humidity areas.'
    },
    {
        question: 'How long does it take to produce water?',
        answer: 'Depending on humidity levels, the machine can produce 20-100 liters per day. You\'ll have fresh water available within 2-3 hours of starting the machine.'
    }
]

export default function WaterFromAirPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-700 text-white py-20 px-6 overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                Turn Humidity into Pure Drinking Water
                            </h1>
                            <p className="text-xl md:text-2xl mb-8 opacity-90">
                                No plumbing required. No water cans. Just plug it in and drink unlimited pure water generated directly from the air.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/contact?product=Atmospheric Water Generator"
                                    className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors text-center inline-block"
                                >
                                    Get Pricing
                                </Link>
                                <Link
                                    href="/contact?enquiry=AWG Demo"
                                    className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center inline-block"
                                >
                                    Book a Demo
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&h=600&fit=crop"
                                    alt="Atmospheric Water Generator in modern living room"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Problem vs Solution */}
                <section className="py-20 px-6 bg-gray-50">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-red-50 border-l-4 border-red-500 p-8 rounded-lg"
                            >
                                <h3 className="text-2xl font-bold text-red-900 mb-4">The Problem</h3>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-start">
                                        <span className="text-red-500 mr-2">✗</span>
                                        Tired of waiting for water delivery?
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-500 mr-2">✗</span>
                                        Worried about plastic cans or contaminated groundwater?
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-500 mr-2">✗</span>
                                        Paying thousands monthly for bottled water?
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-500 mr-2">✗</span>
                                        Concerned about microplastics in drinking water?
                                    </li>
                                </ul>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-green-50 border-l-4 border-green-500 p-8 rounded-lg"
                            >
                                <h3 className="text-2xl font-bold text-green-900 mb-4">The Solution</h3>
                                <p className="text-gray-700 mb-4">
                                    Our <strong>Atmospheric Water Generators (AWG)</strong> create their own source of water from the humidity in the air.
                                </p>
                                <p className="text-gray-700 font-semibold">
                                    Perfect for homes and offices in humid climates. No dependency on external water supply!
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section className="py-20 px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                How It Works
                            </h2>
                            <p className="text-lg text-gray-600">
                                Simple 3-step process to convert air into pure drinking water
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Wind className="w-10 h-10 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">1. Air Intake</h3>
                                <p className="text-gray-600">
                                    The machine draws in humid air from the room using an advanced fan system.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-center"
                            >
                                <div className="w-20 h-20 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Droplet className="w-10 h-10 text-cyan-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">2. Condensation</h3>
                                <p className="text-gray-600">
                                    It cools the air to convert moisture into liquid water through condensation.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-center"
                            >
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Filter className="w-10 h-10 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Purification</h3>
                                <p className="text-gray-600">
                                    Water passes through multi-stage filtration (UV + Carbon) ensuring 100% bacteria-free, mineral-rich water.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Key Benefits */}
                <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-cyan-50">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Why Choose Our AWG System?
                            </h2>
                            <p className="text-lg text-gray-600">
                                Experience the future of water generation technology
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                                >
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                        <benefit.icon className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="py-20 px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Technical Specifications
                            </h2>
                            <p className="text-lg text-gray-600">
                                Designed for high-humidity environments to maximize water production
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl shadow-xl overflow-hidden"
                        >
                            <table className="w-full">
                                <tbody>
                                    {specifications.map((spec, index) => (
                                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                            <td className="px-6 py-4 font-semibold text-gray-900 border-b border-gray-200">
                                                {spec.label}
                                            </td>
                                            <td className="px-6 py-4 text-gray-700 border-b border-gray-200">
                                                {spec.value}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </motion.div>

                        <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                            <div className="flex items-start">
                                <Sparkles className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-2">Perfect for Coastal Cities!</h4>
                                    <p className="text-gray-700">
                                        Our AWG systems perform exceptionally well in Mumbai, Chennai, Kochi, Kolkata, Goa, and other high-humidity regions.
                                        The higher the humidity, the more water your machine produces!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20 px-6 bg-gray-50">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-lg text-gray-600">
                                Everything you need to know about Atmospheric Water Generators
                            </p>
                        </div>

                        <div className="space-y-6">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
                                >
                                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                                        {faq.question}
                                    </h3>
                                    <p className="text-gray-700 ml-7">{faq.answer}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16 px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Experience Water from Air?
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Get a free consultation and discover how much you can save with our AWG technology
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:+917010132135"
                                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
                            >
                                <Phone className="w-5 h-5" />
                                <span>Call: +91 70101 32135</span>
                            </a>
                            <Link
                                href="/contact?product=AWG System"
                                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center space-x-2"
                            >
                                <Mail className="w-5 h-5" />
                                <span>Request Quote</span>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
