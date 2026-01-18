import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { Target, Eye, Award, MapPin, Users, Zap } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-green-50 via-yellow-50 to-green-50 py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-600">Rasi Solar</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Leading EPC contractor for solar power plants and EV charging stations across South India,
                            based in Salem, Tamil Nadu.
                        </p>
                    </div>
                </div>
            </section>

            {/* Company Overview */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>
                                    Rasi Solar is a premier EPC (Engineering, Procurement, and Construction) contractor specializing in
                                    solar power plants and EV charging infrastructure across South India. Based in Salem, Tamil Nadu,
                                    we bring together technical expertise, quality equipment, and professional execution to deliver
                                    sustainable energy solutions.
                                </p>
                                <p>
                                    With over 200 MW of solar capacity installed and 100+ EV charging stations deployed, we serve
                                    residential, commercial, industrial, and utility-scale clients across Karnataka, Kerala, Tamil Nadu,
                                    Andhra Pradesh, and Telangana.
                                </p>
                                <p>
                                    Our team of certified engineers and technicians ensures every project meets the highest standards
                                    of quality, safety, and performance. We use only Tier-1 equipment from globally recognized manufacturers
                                    and provide comprehensive warranties and O&M support.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-green-50 p-6 rounded-2xl">
                                <div className="text-4xl font-bold text-green-600 mb-2">200+</div>
                                <div className="text-gray-700">MW Solar Installed</div>
                            </div>
                            <div className="bg-yellow-50 p-6 rounded-2xl">
                                <div className="text-4xl font-bold text-yellow-600 mb-2">500+</div>
                                <div className="text-gray-700">Projects Completed</div>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-2xl">
                                <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
                                <div className="text-gray-700">EV Chargers</div>
                            </div>
                            <div className="bg-purple-50 p-6 rounded-2xl">
                                <div className="text-4xl font-bold text-purple-600 mb-2">99%</div>
                                <div className="text-gray-700">Customer Satisfaction</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                                <Target className="w-7 h-7 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                            <p className="text-gray-700 leading-relaxed">
                                To accelerate the adoption of clean energy across South India by delivering high-quality,
                                reliable, and cost-effective solar and EV charging solutions. We are committed to making
                                renewable energy accessible to everyone - from homeowners to large industrial facilities.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                                <Eye className="w-7 h-7 text-yellow-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                            <p className="text-gray-700 leading-relaxed">
                                To be South India&apos;s most trusted partner for sustainable energy infrastructure, powering
                                a cleaner future through innovation, excellence, and unwavering commitment to quality.
                                We envision a future where every building and vehicle runs on clean, renewable energy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Rasi Solar</h2>
                        <p className="text-xl text-gray-600">Your trusted partner for clean energy solutions</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: MapPin,
                                title: "Pan-South India Presence",
                                description: "Based in Salem, Tamil Nadu, we deliver projects across Karnataka, Kerala, Andhra Pradesh, and Telangana with local expertise and support."
                            },
                            {
                                icon: Zap,
                                title: "Complete EPC Capability",
                                description: "End-to-end project execution from site assessment and design to installation, commissioning, and ongoing maintenance."
                            },
                            {
                                icon: Award,
                                title: "Certified & Compliant",
                                description: "ISO 9001 certified, MNRE approved, and compliant with all BIS standards. Quality assurance at every step of project delivery."
                            },
                            {
                                icon: Users,
                                title: "Experienced Team",
                                description: "Certified engineers and technicians with extensive experience in solar and EV charging projects of all scales."
                            },
                            {
                                icon: Award,
                                title: "Tier-1 Equipment",
                                description: "We use only premium solar panels, inverters, and EV chargers from globally recognized manufacturers with comprehensive warranties."
                            },
                            {
                                icon: Target,
                                title: "Proven Track Record",
                                description: "Successfully delivered 200+ MW of solar capacity and 100+ EV charging stations with 99% customer satisfaction."
                            }
                        ].map((item, index) => {
                            const Icon = item.icon
                            return (
                                <div key={index} className="bg-white border border-gray-200 p-6 rounded-2xl hover:shadow-lg transition-shadow">
                                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-yellow-500 rounded-xl flex items-center justify-center mb-4">
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Approvals</h2>
                        <p className="text-xl text-gray-600">Quality and compliance you can trust</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {[
                            { name: "ISO 9001", desc: "Quality Management" },
                            { name: "MNRE Approved", desc: "Ministry of New & Renewable Energy" },
                            { name: "BIS Certified", desc: "Bureau of Indian Standards" },
                            { name: "100% Green Energy", desc: "Sustainable Solutions" }
                        ].map((cert, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center min-w-[200px]">
                                <div className="text-3xl mb-2">✓</div>
                                <div className="font-bold text-gray-900 mb-1">{cert.name}</div>
                                <div className="text-sm text-gray-600">{cert.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-green-600 to-yellow-600">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Partner with Us?
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        Join hundreds of satisfied customers who trust Rasi Solar for their clean energy needs.
                    </p>
                    <Link href="/contact" className="inline-block bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                        Get in Touch
                    </Link>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </main>
    )
}
