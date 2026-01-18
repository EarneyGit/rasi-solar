'use client'

import { Sun, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navLinks = [
        { href: '/solutions', label: 'Solutions' },
        { href: '/services', label: 'Services' },
        { href: '/about', label: 'About' },
        { href: '/projects', label: 'Projects' },
    ]

    return (
        <>
            <nav className="relative z-50 flex items-center justify-between p-6 lg:px-12 bg-white border-b border-gray-200">
                <Link href="/" className="flex items-center space-x-2">
                    <Sun className="w-8 h-8 text-yellow-600" />
                    <span className="text-2xl font-bold text-gray-900">Rasi Solar</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-gray-700 hover:text-green-600 transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors"
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="lg:hidden p-2 text-gray-700 hover:text-green-600 transition-colors"
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>
            </nav>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
                        >
                            <div className="p-6">
                                {/* Close Button */}
                                <div className="flex justify-between items-center mb-8">
                                    <div className="flex items-center space-x-2">
                                        <Sun className="w-6 h-6 text-yellow-600" />
                                        <span className="text-xl font-bold text-gray-900">Rasi Solar</span>
                                    </div>
                                    <button
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="p-2 text-gray-700 hover:text-green-600 transition-colors"
                                        aria-label="Close menu"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>

                                {/* Navigation Links */}
                                <div className="flex flex-col space-y-1">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="text-gray-700 hover:text-green-600 hover:bg-green-50 px-4 py-3 rounded-lg transition-colors text-lg font-medium"
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                    <Link
                                        href="/contact"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors text-lg font-medium text-center mt-4"
                                    >
                                        Contact Us
                                    </Link>
                                </div>

                                {/* Additional Info */}
                                <div className="mt-8 pt-8 border-t border-gray-200">
                                    <p className="text-sm text-gray-600 mb-2">Contact Information</p>
                                    <p className="text-sm font-medium text-gray-900">+91 70101 32135</p>
                                    <p className="text-sm text-gray-600">rasisolar@gmail.com</p>
                                    <p className="text-sm text-gray-600 mt-2">Salem, Tamil Nadu</p>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
