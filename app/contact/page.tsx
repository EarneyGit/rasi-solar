import { Header } from '@/components/Header'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-green-50 via-yellow-50 to-green-50 py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-600">Touch</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Ready to start your solar or EV charging project? Our team is here to help you every step of the way.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-12 -mt-8">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                <Phone className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
                            <p className="text-gray-600">+91 70101 32135</p>
                            <p className="text-sm text-gray-500 mt-1">Mon-Sat, 9 AM - 6 PM</p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                <Mail className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
                            <p className="text-gray-600">rasisolar@gmail.com</p>
                            <p className="text-sm text-gray-500 mt-1">We reply within 24 hours</p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                                <MapPin className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Visit Us</h3>
                            <p className="text-gray-600">Salem, Tamil Nadu</p>
                            <p className="text-sm text-gray-500 mt-1">Serving all of South India</p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                                <Clock className="w-6 h-6 text-yellow-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Business Hours</h3>
                            <p className="text-gray-600">Mon - Sat</p>
                            <p className="text-sm text-gray-500 mt-1">9:00 AM - 6:00 PM</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <ContactSection />

            {/* Service Areas */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Areas</h2>
                        <p className="text-xl text-gray-600">We serve clients across South India</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
                        {[
                            "Tamil Nadu",
                            "Karnataka",
                            "Kerala",
                            "Andhra Pradesh",
                            "Telangana"
                        ].map((state, index) => (
                            <div key={index} className="bg-white p-4 rounded-xl text-center shadow-sm">
                                <div className="text-2xl mb-2">📍</div>
                                <div className="font-semibold text-gray-900">{state}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-xl text-gray-600">Quick answers to common questions</p>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                q: "What is the typical timeline for a solar installation?",
                                a: "Residential projects typically take 2-4 weeks from approval to commissioning. Commercial and industrial projects may take 1-3 months depending on size and complexity."
                            },
                            {
                                q: "Do you provide financing options?",
                                a: "Yes, we can connect you with our financing partners who offer solar loans with attractive interest rates and flexible repayment terms."
                            },
                            {
                                q: "What warranties do you provide?",
                                a: "We provide 25-year warranty on solar panels, 10-year warranty on inverters, and 5-year warranty on installation workmanship."
                            },
                            {
                                q: "Do you handle all government approvals?",
                                a: "Yes, we handle all necessary approvals including TANGEDCO/DISCOM approvals, net metering applications, and subsidy documentation."
                            },
                            {
                                q: "What maintenance is required for solar systems?",
                                a: "Solar systems require minimal maintenance - mainly periodic cleaning and annual inspections. We offer comprehensive O&M contracts for hassle-free operation."
                            }
                        ].map((faq, index) => (
                            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                                <p className="text-gray-600">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </main>
    )
}
