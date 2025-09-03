'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-black text-white px-6 py-4 relative overflow-hidden">
      {/* Background wavy patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-2 left-10 w-32 h-0.5 bg-gradient-to-r from-purple-500 to-orange-400 blur-sm"></div>
          <div className="absolute top-4 left-20 w-24 h-0.5 bg-gradient-to-r from-purple-400 to-yellow-400 blur-sm"></div>
          <div className="absolute top-6 left-32 w-28 h-0.5 bg-gradient-to-r from-purple-500 to-orange-500 blur-sm"></div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand/Logo Section */}
        <div className="flex items-center space-x-3">
          {/* Purple glowing logo */}
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/50">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Navigation Container */}
        <div className="flex items-center space-x-6">
          {/* Navigation Links Container */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-lg px-6 py-2">
            <nav className="flex items-center space-x-8">
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                About Me
              </Link>
              <Link href="/experience" className="text-gray-300 hover:text-white transition-colors">
                Experience
              </Link>
              <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                Our Service
              </Link>
            </nav>
          </div>

          {/* Contact Me Button */}
          <Link href="/contact" className="bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg shadow-purple-500/25">
            Contact Me
          </Link>
        </div>
      </div>
    </header>
  );
}
