'use client'

import { Sun } from 'lucide-react'
import Link from 'next/link'

export function Header() {
    return (
        <nav className="relative z-10 flex items-center justify-between p-6 lg:px-12 bg-white border-b border-gray-200">
            <Link href="/" className="flex items-center space-x-2">
                <Sun className="w-8 h-8 text-yellow-600" />
                <span className="text-2xl font-bold text-gray-900">Rasi Solar</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
                <Link href="/solutions" className="text-gray-700 hover:text-green-600 transition-colors">Solutions</Link>
                <Link href="/services" className="text-gray-700 hover:text-green-600 transition-colors">Services</Link>
                <Link href="/about" className="text-gray-700 hover:text-green-600 transition-colors">About</Link>
                <Link href="/projects" className="text-gray-700 hover:text-green-600 transition-colors">Projects</Link>
                <Link href="/contact" className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors">
                    Contact Us
                </Link>
            </div>
        </nav>
    )
}
