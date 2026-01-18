'use client'

import { X } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export function WhatsAppButton() {
    const [isOpen, setIsOpen] = useState(false)
    const phoneNumber = '917010132135' // +91 70101 32135 without spaces and special characters
    const message = 'Hello! I am interested in your solar and EV charging solutions.'

    const handleWhatsAppClick = () => {
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
        window.open(whatsappUrl, '_blank')
    }

    return (
        <>
            {/* WhatsApp Button */}
            <motion.div
                className="fixed bottom-6 right-6 z-50"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 1 }}
            >
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.8 }}
                            transition={{ duration: 0.2 }}
                            className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl p-6 w-80 mb-2"
                        >
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center p-2">
                                    <Image
                                        src="/whatsapp-white-icon.png"
                                        alt="WhatsApp"
                                        width={32}
                                        height={32}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Chat with us!</h3>
                                    <p className="text-sm text-gray-500">We typically reply instantly</p>
                                </div>
                            </div>

                            <p className="text-gray-600 text-sm mb-4">
                                Have questions about solar installations or EV charging? We're here to help!
                            </p>

                            <button
                                onClick={handleWhatsAppClick}
                                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                            >
                                <Image
                                    src="/whatsapp-white-icon.png"
                                    alt="WhatsApp"
                                    width={20}
                                    height={20}
                                />
                                <span>Start WhatsApp Chat</span>
                            </button>

                            <p className="text-xs text-gray-400 mt-3 text-center">
                                +91 70101 32135
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Main WhatsApp Button */}
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 p-3"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {isOpen ? (
                        <X className="w-8 h-8 text-white" />
                    ) : (
                        <Image
                            src="/whatsapp-white-icon.png"
                            alt="WhatsApp"
                            width={40}
                            height={40}
                            className="w-full h-full object-contain"
                        />
                    )}
                </motion.button>

                {/* Notification Badge */}
                {!isOpen && (
                    <motion.div
                        className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <span className="text-white text-xs font-bold">1</span>
                    </motion.div>
                )}
            </motion.div>
        </>
    )
}
