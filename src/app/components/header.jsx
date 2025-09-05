'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <header className={`fixed top-0 left-0 right-0 z-50 text-white px-6 py-4 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/20 backdrop-blur-md shadow-lg border-b border-white/10' 
          : 'bg-gray-700/90 backdrop-blur-sm'
      }`}>
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
          {/* Logo */}
          <Link href="/" className="w-20 h-12 rounded-lg flex items-center justify-center shadow-lg overflow-hidden bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 cursor-pointer group">
            <img src="/images/123123.png" alt="EJ Logo" className="w-full h-full object-contain filter brightness-110 contrast-110 group-hover:scale-105 transition-transform duration-300" />
          </Link>
        </div>

        {/* Navigation Container */}
        <div className="flex items-center space-x-6">
          {/* Contact Me Button */}
          <Link href="/form">
            <button className="bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg shadow-purple-500/25">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
