import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { Sun, Zap, Factory, Building2, Battery, Car } from 'lucide-react'
import Link from 'next/link'

export default function SolutionsPage() {
    const solutions = [
        {
            icon: Building2,
            title: "Residential Solar Systems",
            capacity: "3kW - 10kW",
            description: "Complete rooftop solar solutions for homes and apartments with net metering, grid integration, and smart monitoring.",
            features: [
                "Customized system design based on roof space and energy needs",
                "Premium Tier-1 solar panels with 25-year warranty",
                "String inverters with 10-year warranty",
                "Net metering setup and TANGEDCO approvals",
                "Mobile app for real-time monitoring",
                "Annual maintenance and cleaning services"
            ],
            benefits: "Reduce electricity bills by 70-90%, ROI in 3-4 years, increase property value"
        },
        {
            icon: Factory,
            title: "Commercial Solar Solutions",
            capacity: "10kW - 100kW",
            description: "Rooftop and ground-mounted solar systems for offices, shops, hotels, and commercial complexes with complete EPC services.",
            features: [
                "Detailed site assessment and shadow analysis",
                "Structural engineering and load calculations",
                "High-efficiency bifacial solar modules",
                "Central or string inverters based on site requirements",
                "SCADA integration for performance monitoring",
                "Comprehensive O&M contracts available"
            ],
            benefits: "Lower operational costs, tax benefits under accelerated depreciation, corporate sustainability goals"
        },
        {
            icon: Zap,
            title: "Industrial Solar Plants",
            capacity: "100kW - 10MW",
            description: "Large-scale ground-mounted and rooftop solar installations for manufacturing facilities, warehouses, and industrial estates.",
            features: [
                "Complete EPC from feasibility study to commissioning",
                "Mono PERC or bifacial modules for maximum efficiency",
                "Central inverters with 98%+ efficiency",
                "Weather stations and advanced monitoring systems",
                "Grid synchronization and power quality management",
                "Performance guarantee and insurance coverage"
            ],
            benefits: "Significant energy cost savings, uninterrupted power supply, reduced carbon footprint"
        },
        {
            icon: Sun,
            title: "Utility-Scale Solar Parks",
            capacity: "10MW - 100MW",
            description: "Turnkey EPC solutions for large solar parks with single-axis trackers, 33kV substations, and complete grid integration.",
            features: [
                "Land acquisition support and feasibility studies",
                "Single-axis or fixed-tilt mounting structures",
                "1500V DC system architecture for efficiency",
                "33kV/110kV substation and transmission lines",
                "SCADA, weather monitoring, and security systems",
                "25-year O&M contracts with performance guarantees"
            ],
            benefits: "Power purchase agreements, government incentives, long-term revenue generation"
        },
        {
            icon: Battery,
            title: "Off-Grid Solar Systems",
            capacity: "3kW - 100kW",
            description: "Standalone solar solutions with battery storage for remote locations, telecom towers, and backup power applications.",
            features: [
                "Lithium-ion or lead-acid battery banks",
                "Hybrid inverters with diesel generator integration",
                "Advanced charge controllers and BMS",
                "Remote monitoring and diagnostics",
                "Weatherproof outdoor enclosures",
                "Expandable system design for future growth"
            ],
            benefits: "Energy independence, reliable backup power, reduced diesel consumption"
        },
        {
            icon: Car,
            title: "EV Charging Infrastructure",
            capacity: "30kW - 240kW",
            description: "Complete EV charging station solutions from AC chargers to ultra-fast DC charging for residential, commercial, and highway applications.",
            features: [
                "AC chargers (30kW) for residential and workplace",
                "DC fast chargers (60kW) for commercial locations",
                "Ultra-fast chargers (120-240kW) for highways",
                "OCPP protocol for network integration",
                "Payment gateway and RFID access control",
                "Solar + EV integration for green charging"
            ],
            benefits: "Revenue generation, attract EV customers, sustainability leadership, government subsidies"
        }
    ]

    return (
        <main className="min-h-screen bg-white">
            <Header />
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-green-50 via-yellow-50 to-green-50 py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Our Solar & EV <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-600">Solutions</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From 3kW rooftop systems to 100MW solar parks, and 30kW to 240kW EV charging stations -
                            we deliver complete turnkey solutions across South India.
                        </p>
                    </div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="space-y-16">
                        {solutions.map((solution, index) => {
                            const Icon = solution.icon
                            return (
                                <div key={index} className={`flex flex-col lg:flex-row gap-8 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                    <div className="lg:w-1/3">
                                        <div className="sticky top-8">
                                            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-yellow-500 rounded-2xl flex items-center justify-center mb-4">
                                                <Icon className="w-8 h-8 text-white" />
                                            </div>
                                            <h2 className="text-3xl font-bold text-gray-900 mb-2">{solution.title}</h2>
                                            <p className="text-2xl font-semibold text-green-600 mb-4">{solution.capacity}</p>
                                            <p className="text-gray-600 leading-relaxed">{solution.description}</p>
                                            <div className="mt-6 p-4 bg-green-50 rounded-lg">
                                                <p className="text-sm font-semibold text-gray-900 mb-2">Key Benefits:</p>
                                                <p className="text-sm text-gray-700">{solution.benefits}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:w-2/3">
                                        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                                            <h3 className="text-xl font-bold text-gray-900 mb-6">What's Included:</h3>
                                            <ul className="space-y-4">
                                                {solution.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-start">
                                                        <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="text-gray-700">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-green-600 to-yellow-600">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Go Solar or Install EV Charging?
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        Get a free site assessment and customized proposal for your project. Our experts will help you choose the right solution.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                            Get Free Consultation
                        </Link>
                        <Link href="/projects" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors">
                            View Our Projects
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </main>
    )
}
