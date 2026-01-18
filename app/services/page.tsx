import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { ClipboardCheck, Wrench, Zap, LineChart, Shield, Settings, FileSearch, Headphones } from 'lucide-react'
import Link from 'next/link'

export default function ServicesPage() {
    const services = [
        {
            icon: ClipboardCheck,
            title: "Complete EPC Services",
            description: "End-to-end Engineering, Procurement, and Construction services for solar power plants and EV charging stations.",
            details: [
                "Single-point responsibility from concept to commissioning",
                "Detailed project planning and timeline management",
                "Quality assurance at every stage",
                "Compliance with all regulatory requirements",
                "Handover with complete documentation",
                "Performance testing and validation"
            ]
        },
        {
            icon: FileSearch,
            title: "Site Assessment & Feasibility Studies",
            description: "Comprehensive site evaluation to determine the best solar or EV charging solution for your location.",
            details: [
                "Solar irradiation analysis and shadow studies",
                "Roof structural assessment and load calculations",
                "Electrical infrastructure evaluation",
                "Grid connectivity feasibility",
                "Financial modeling and ROI projections",
                "Detailed technical and commercial proposals"
            ]
        },
        {
            icon: Settings,
            title: "System Design & Engineering",
            description: "Custom engineering solutions optimized for maximum energy generation and system efficiency.",
            details: [
                "3D modeling and layout optimization",
                "Electrical single-line diagrams",
                "Structural and civil engineering drawings",
                "Equipment selection and specifications",
                "Grid integration and protection studies",
                "As-built drawings and documentation"
            ]
        },
        {
            icon: Wrench,
            title: "Installation & Commissioning",
            description: "Professional installation by certified technicians with strict adherence to safety and quality standards.",
            details: [
                "Module mounting and array installation",
                "Electrical wiring and inverter setup",
                "Grid synchronization and testing",
                "Safety systems and earthing",
                "System commissioning and performance validation",
                "Training for operation and maintenance"
            ]
        },
        {
            icon: Zap,
            title: "Grid Integration & Net Metering",
            description: "Complete support for grid connection approvals and net metering setup with TANGEDCO and other DISCOMs.",
            details: [
                "TANGEDCO/DISCOM application and approvals",
                "Net metering and bi-directional meter installation",
                "Grid synchronization and protection relay setup",
                "Power quality compliance and testing",
                "Subsidy documentation and processing",
                "Interconnection agreement support"
            ]
        },
        {
            icon: Shield,
            title: "O&M Services",
            description: "Comprehensive operation and maintenance services to ensure optimal performance and longevity of your solar assets.",
            details: [
                "Preventive maintenance schedules",
                "Panel cleaning and inspection services",
                "Performance monitoring and reporting",
                "Breakdown support and repairs",
                "Inverter and equipment servicing",
                "Annual maintenance contracts (AMC)"
            ]
        },
        {
            icon: LineChart,
            title: "Performance Monitoring",
            description: "Advanced monitoring systems for real-time tracking of energy generation and system health.",
            details: [
                "Cloud-based monitoring platforms",
                "Mobile app for remote access",
                "Real-time alerts and notifications",
                "Performance analytics and reporting",
                "Weather station integration",
                "Historical data analysis and optimization"
            ]
        },
        {
            icon: Headphones,
            title: "Energy Audits & Consulting",
            description: "Professional energy audits to identify savings opportunities and optimize your energy consumption.",
            details: [
                "Detailed energy consumption analysis",
                "Load profiling and demand assessment",
                "Energy efficiency recommendations",
                "Solar system sizing and optimization",
                "Financial analysis and payback calculations",
                "Ongoing energy management support"
            ]
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
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-600">EPC Services</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Complete turnkey solutions from site assessment to commissioning and beyond.
                            We handle everything so you can focus on enjoying clean, renewable energy.
                        </p>
                    </div>

                    {/* Service Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-green-600 mb-2">200+</div>
                            <div className="text-gray-600">MW Installed</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
                            <div className="text-gray-600">Projects</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-green-600 mb-2">100+</div>
                            <div className="text-gray-600">EV Chargers</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-green-600 mb-2">99%</div>
                            <div className="text-gray-600">Satisfaction</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, index) => {
                            const Icon = service.icon
                            return (
                                <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-yellow-500 rounded-xl flex items-center justify-center mb-6">
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                                    <ul className="space-y-3">
                                        {service.details.map((detail, idx) => (
                                            <li key={idx} className="flex items-start text-sm">
                                                <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-gray-700">{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
                        <p className="text-xl text-gray-600">Simple, transparent, and efficient - from inquiry to energization</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                        {[
                            { step: "1", title: "Inquiry", desc: "Contact us with your requirements" },
                            { step: "2", title: "Site Visit", desc: "Free assessment and feasibility study" },
                            { step: "3", title: "Proposal", desc: "Detailed technical and financial proposal" },
                            { step: "4", title: "Installation", desc: "Professional EPC execution" },
                            { step: "5", title: "Energization", desc: "Commissioning and handover" }
                        ].map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                    {item.step}
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-green-600 to-yellow-600">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Need Expert EPC Services?
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        Let our experienced team handle your solar or EV charging project from start to finish.
                    </p>
                    <Link href="/contact" className="inline-block bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                        Request a Quote
                    </Link>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </main>
    )
}
