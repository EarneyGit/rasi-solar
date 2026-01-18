'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { MapPin, Zap, Building2 } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function ProjectsPage() {
    const [filter, setFilter] = useState('all')

    const projects = [
        {
            id: 1,
            title: "50MW Solar Park",
            location: "Tumkur, Karnataka",
            capacity: "50MW",
            type: "Utility-Scale Solar",
            category: "solar",
            year: "2025",
            description: "Ground-mounted solar park with single-axis trackers and 33kV substation",
            image: "bg-gradient-to-br from-green-400 to-green-600"
        },
        {
            id: 2,
            title: "Industrial Rooftop Solar",
            location: "Coimbatore, Tamil Nadu",
            capacity: "5MW",
            type: "Commercial Solar",
            category: "solar",
            year: "2025",
            description: "Large-scale rooftop installation for manufacturing facility",
            image: "bg-gradient-to-br from-blue-400 to-blue-600"
        },
        {
            id: 3,
            title: "Highway EV Charging Hub",
            location: "Bangalore-Chennai Highway",
            capacity: "2.4MW (20 Chargers)",
            type: "EV Infrastructure",
            category: "ev",
            year: "2026",
            description: "Ultra-fast charging station with 240kW DC chargers",
            image: "bg-gradient-to-br from-purple-400 to-purple-600"
        },
        {
            id: 4,
            title: "University Campus Solar",
            location: "Kochi, Kerala",
            capacity: "1MW",
            type: "Institutional Solar",
            category: "solar",
            year: "2025",
            description: "Hybrid rooftop and ground-mounted system for educational campus",
            image: "bg-gradient-to-br from-yellow-400 to-yellow-600"
        },
        {
            id: 5,
            title: "Solar + EV Integration",
            location: "Hyderabad, Telangana",
            capacity: "500kW Solar + 12 Chargers",
            type: "Integrated Solution",
            category: "both",
            year: "2025",
            description: "Solar carport with integrated EV charging for commercial complex",
            image: "bg-gradient-to-br from-teal-400 to-teal-600"
        },
        {
            id: 6,
            title: "Residential Solar Complex",
            location: "Chennai, Tamil Nadu",
            capacity: "250kW",
            type: "Residential Solar",
            category: "solar",
            year: "2024",
            description: "Rooftop solar for 50-unit apartment complex with net metering",
            image: "bg-gradient-to-br from-orange-400 to-orange-600"
        },
        {
            id: 7,
            title: "Mall EV Charging Station",
            location: "Bangalore, Karnataka",
            capacity: "720kW (12 x 60kW)",
            type: "Commercial EV",
            category: "ev",
            year: "2025",
            description: "DC fast charging infrastructure for shopping mall parking",
            image: "bg-gradient-to-br from-indigo-400 to-indigo-600"
        },
        {
            id: 8,
            title: "Textile Factory Solar",
            location: "Tirupur, Tamil Nadu",
            capacity: "3MW",
            type: "Industrial Solar",
            category: "solar",
            year: "2024",
            description: "Ground-mounted solar plant for textile manufacturing unit",
            image: "bg-gradient-to-br from-red-400 to-red-600"
        },
        {
            id: 9,
            title: "Hotel Rooftop Solar",
            location: "Mysore, Karnataka",
            capacity: "150kW",
            type: "Commercial Solar",
            category: "solar",
            year: "2025",
            description: "Rooftop solar system for luxury hotel with battery backup",
            image: "bg-gradient-to-br from-pink-400 to-pink-600"
        },
        {
            id: 10,
            title: "Fleet Charging Depot",
            location: "Vijayawada, Andhra Pradesh",
            capacity: "1.8MW (15 Chargers)",
            type: "Fleet EV Charging",
            category: "ev",
            year: "2026",
            description: "Dedicated charging infrastructure for electric bus fleet",
            image: "bg-gradient-to-br from-cyan-400 to-cyan-600"
        },
        {
            id: 11,
            title: "Hospital Solar System",
            location: "Madurai, Tamil Nadu",
            capacity: "500kW",
            type: "Healthcare Solar",
            category: "solar",
            year: "2024",
            description: "Hybrid solar with battery backup for multi-specialty hospital",
            image: "bg-gradient-to-br from-lime-400 to-lime-600"
        },
        {
            id: 12,
            title: "IT Park Solar + EV",
            location: "Thiruvananthapuram, Kerala",
            capacity: "2MW Solar + 20 Chargers",
            type: "Integrated Solution",
            category: "both",
            year: "2025",
            description: "Complete green energy solution for IT campus",
            image: "bg-gradient-to-br from-emerald-400 to-emerald-600"
        }
    ]

    const filteredProjects = projects.filter(project => {
        if (filter === 'all') return true
        if (filter === 'solar') return project.category === 'solar' || project.category === 'both'
        if (filter === 'ev') return project.category === 'ev' || project.category === 'both'
        return true
    })

    return (
        <main className="min-h-screen bg-white">
            <Header />
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-green-50 via-yellow-50 to-green-50 py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-600">Projects</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Delivering excellence across South India - from rooftop installations to utility-scale solar parks
                            and cutting-edge EV charging infrastructure.
                        </p>
                    </div>

                    {/* Filter Buttons */}
                    <div className="flex justify-center gap-4 flex-wrap">
                        <button
                            onClick={() => setFilter('all')}
                            className={`px-6 py-3 rounded-full font-semibold transition-colors ${filter === 'all'
                                ? 'bg-green-600 text-white'
                                : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            All Projects ({projects.length})
                        </button>
                        <button
                            onClick={() => setFilter('solar')}
                            className={`px-6 py-3 rounded-full font-semibold transition-colors ${filter === 'solar'
                                ? 'bg-green-600 text-white'
                                : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            Solar Projects
                        </button>
                        <button
                            onClick={() => setFilter('ev')}
                            className={`px-6 py-3 rounded-full font-semibold transition-colors ${filter === 'ev'
                                ? 'bg-green-600 text-white'
                                : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            EV Charging
                        </button>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <div key={project.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                                {/* Project Image Placeholder */}
                                <div className={`h-48 ${project.image} flex items-center justify-center`}>
                                    <Building2 className="w-16 h-16 text-white/50" />
                                </div>

                                {/* Project Details */}
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                                            {project.type}
                                        </span>
                                        <span className="text-sm text-gray-500">{project.year}</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                                    <p className="text-gray-600 text-sm mb-4">{project.description}</p>

                                    <div className="space-y-2">
                                        <div className="flex items-center text-sm text-gray-700">
                                            <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                                            {project.location}
                                        </div>
                                        <div className="flex items-center text-sm text-gray-700">
                                            <Zap className="w-4 h-4 mr-2 text-gray-400" />
                                            {project.capacity}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-500">No projects found for this filter.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-green-600 mb-2">200+</div>
                            <div className="text-gray-600">MW Installed</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
                            <div className="text-gray-600">Projects Completed</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-green-600 mb-2">100+</div>
                            <div className="text-gray-600">EV Chargers</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-green-600 mb-2">5</div>
                            <div className="text-gray-600">States Covered</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-green-600 to-yellow-600">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Want to See Your Project Here?
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        Let&apos;s discuss your solar or EV charging project and create another success story together.
                    </p>
                    <Link href="/contact" className="inline-block bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                        Start Your Project
                    </Link>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </main>
    )
}
