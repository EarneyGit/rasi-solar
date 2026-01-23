'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ShoppingCart, Star, Phone, Mail } from 'lucide-react'

const massageChairs = [
    {
        id: 1,
        name: 'Premium 4D Massage Chair',
        model: 'MC-4D-PRO',
        image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&h=600&fit=crop',
        price: '₹2,49,999',
        originalPrice: '₹3,49,999',
        rating: 4.8,
        reviews: 156,
        features: ['4D Massage Technology', 'Zero Gravity', 'Full Body Air Massage', 'Bluetooth Speakers', 'Heat Therapy'],
        description: 'Experience ultimate relaxation with our premium 4D massage chair featuring advanced massage technology and zero gravity positioning.'
    },
    {
        id: 2,
        name: 'Executive Massage Chair',
        model: 'MC-EXEC-2024',
        image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=800&h=600&fit=crop',
        price: '₹1,89,999',
        originalPrice: '₹2,49,999',
        rating: 4.6,
        reviews: 203,
        features: ['3D Massage Rollers', 'L-Track Design', 'Air Compression', 'Foot Roller Massage', 'USB Charging'],
        description: 'Perfect for home or office use, this executive massage chair offers professional-grade massage therapy with modern design.'
    },
    {
        id: 3,
        name: 'Luxury Recliner Massage Chair',
        model: 'MC-LUX-360',
        image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&h=600&fit=crop',
        price: '₹3,29,999',
        originalPrice: '₹4,29,999',
        rating: 4.9,
        reviews: 89,
        features: ['360° Massage Coverage', 'AI Body Scanning', 'Voice Control', 'Chromotherapy Lights', 'Premium Leather'],
        description: 'Our flagship luxury massage chair with AI-powered body scanning and 360-degree massage coverage for the ultimate spa experience at home.'
    },
    {
        id: 4,
        name: 'Compact Home Massage Chair',
        model: 'MC-HOME-LITE',
        image: 'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=800&h=600&fit=crop',
        price: '₹99,999',
        originalPrice: '₹1,49,999',
        rating: 4.4,
        reviews: 312,
        features: ['Space-Saving Design', 'Shiatsu Massage', 'Heating Function', 'Remote Control', 'Easy Assembly'],
        description: 'Ideal for smaller spaces, this compact massage chair delivers powerful Shiatsu massage therapy without compromising on features.'
    },
    {
        id: 5,
        name: 'Professional Spa Massage Chair',
        model: 'MC-SPA-PRO',
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop',
        price: '₹2,79,999',
        originalPrice: '₹3,79,999',
        rating: 4.7,
        reviews: 145,
        features: ['SL-Track System', 'Calf & Foot Massage', 'Multiple Auto Programs', 'Adjustable Intensity', 'Premium Fabric'],
        description: 'Bring the spa experience home with this professional-grade massage chair featuring SL-track technology and customizable programs.'
    },
    {
        id: 6,
        name: 'Smart Massage Chair Pro',
        model: 'MC-SMART-X1',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
        price: '₹1,59,999',
        originalPrice: '₹2,19,999',
        rating: 4.5,
        reviews: 178,
        features: ['App Control', 'Memory Function', 'Stretch Programs', 'LED Display', 'Quick Massage Modes'],
        description: 'Control your massage experience from your smartphone with this smart massage chair featuring app integration and memory settings.'
    }
]

export default function MassageChairsPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
                {/* Hero Section */}
                <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-6">
                    <div className="max-w-7xl mx-auto text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                        >
                            Premium Massage Chairs
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl md:text-2xl mb-8 opacity-90"
                        >
                            Experience Ultimate Relaxation & Wellness at Home
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <Link
                                href="#products"
                                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
                            >
                                Browse Products
                            </Link>
                            <Link
                                href="/contact"
                                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-block"
                            >
                                Contact Us
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* Products Grid */}
                <section id="products" className="py-20 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Our Massage Chair Collection
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Choose from our premium selection of massage chairs designed for ultimate comfort and therapeutic benefits
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {massageChairs.map((chair, index) => (
                                <motion.div
                                    key={chair.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
                                >
                                    {/* Product Image */}
                                    <div className="relative h-64 bg-gray-200">
                                        <Image
                                            src={chair.image}
                                            alt={chair.name}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                            SALE
                                        </div>
                                    </div>

                                    {/* Product Details */}
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm text-gray-500">{chair.model}</span>
                                            <div className="flex items-center space-x-1">
                                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                <span className="text-sm font-semibold">{chair.rating}</span>
                                                <span className="text-sm text-gray-500">({chair.reviews})</span>
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{chair.name}</h3>
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{chair.description}</p>

                                        {/* Features */}
                                        <div className="mb-4">
                                            <ul className="space-y-1">
                                                {chair.features.slice(0, 3).map((feature, idx) => (
                                                    <li key={idx} className="text-sm text-gray-600 flex items-center">
                                                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Price */}
                                        <div className="mb-4">
                                            <div className="flex items-baseline space-x-2">
                                                <span className="text-2xl font-bold text-gray-900">{chair.price}</span>
                                                <span className="text-lg text-gray-400 line-through">{chair.originalPrice}</span>
                                            </div>
                                            <p className="text-sm text-green-600 font-semibold">
                                                Save {parseInt(chair.originalPrice.replace(/[₹,]/g, '')) - parseInt(chair.price.replace(/[₹,]/g, ''))} INR
                                            </p>
                                        </div>

                                        {/* Enquiry Button */}
                                        <a
                                            href={`https://wa.me/917010132135?text=Hi, I'm interested in ${encodeURIComponent(chair.name)} - ${chair.model}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                                        >
                                            <ShoppingCart className="w-5 h-5" />
                                            <span>Enquire on WhatsApp</span>
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact CTA Section */}
                <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Need Help Choosing the Right Massage Chair?
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Our experts are here to help you find the perfect massage chair for your needs and budget
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://wa.me/917010132135?text=Hi, I need help choosing a massage chair"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
                            >
                                <Phone className="w-5 h-5" />
                                <span>WhatsApp: +91 70101 32135</span>
                            </a>
                            <Link
                                href="/contact"
                                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center space-x-2"
                            >
                                <Mail className="w-5 h-5" />
                                <span>Send Enquiry</span>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
