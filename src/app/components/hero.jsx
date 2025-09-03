'use client';

import Image from 'next/image';
import { useState } from 'react';

const Hero = () => {
  const [showProjectsModal, setShowProjectsModal] = useState(false);
  const [showCertificationsModal, setShowCertificationsModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-orange-900/20 animate-pulse"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>

        {/* Flare effects */}
        <div className="absolute top-10 left-10 w-40 h-3 bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-2xl opacity-60 animate-pulse"></div>
        <div className="absolute top-20 right-20 w-48 h-4 bg-gradient-to-r from-transparent via-purple-400 to-transparent blur-3xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-36 h-3 bg-gradient-to-r from-transparent via-orange-400 to-transparent blur-2xl opacity-50 animate-pulse delay-2000"></div>
        <div className="absolute bottom-10 right-10 w-44 h-4 bg-gradient-to-r from-transparent via-pink-400 to-transparent blur-3xl opacity-60 animate-pulse delay-1500"></div>

        {/* Geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-blue-400 border-dashed opacity-40 animate-spin"></div>
        <div className="absolute top-3/4 right-1/4 w-12 h-12 border-2 border-purple-400 border-dashed opacity-40 animate-spin delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-8 h-8 border-2 border-orange-400 border-dashed opacity-40 animate-spin delay-2000"></div>

        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute top-40 right-40 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-50 animate-bounce delay-1000"></div>
        <div className="absolute bottom-40 left-40 w-5 h-5 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full opacity-60 animate-bounce delay-2000"></div>

        {/* Diagonal lines */}
        <div className="absolute top-1/3 left-1/3 w-32 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent blur-xl opacity-40 transform rotate-45"></div>
        <div className="absolute top-2/3 right-1/3 w-28 h-2 bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-2xl opacity-50 transform -rotate-45"></div>
        
        {/* Floating triangles */}
        <div className="absolute top-1/3 left-1/6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[16px] border-b-purple-500 opacity-40 animate-bounce delay-500"></div>
        <div className="absolute top-2/3 right-1/6 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[12px] border-b-orange-400 opacity-40 animate-bounce delay-1500"></div>

        {/* Orbital rings */}
        <div className="absolute top-1/2 left-1/2 w-96 h-96 border border-blue-400/30 rounded-full animate-spin"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 border border-purple-400/20 rounded-full animate-spin delay-1000"></div>
      </div>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
                {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh] relative">
          
          {/* Left Section - Social Media + Content */}
          <div className="flex gap-8 z-10">
            {/* Social Media Icons */}
            <div className="flex flex-col space-y-6">
              {/* GitHub */}
              <a href="https://github.com/Erlaaaaan" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              
              {/* Facebook */}
              <a href="https://web.facebook.com/justcarpi/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              
              {/* Instagram */}
              <a href="https://www.instagram.com/erlanjustin/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>

            {/* Main Content */}
            <div className="text-white space-y-6">
              <div className="space-y-2">
                <p className="text-orange-400 font-medium">Hi, I am</p>
                <h1 className="text-5xl lg:text-6xl font-bold leading-none">Erlan Justin Dungog</h1>
                <p className="text-2xl font-semibold">System Developer</p>
              </div>
              
              <p className="text-gray-300 leading-relaxed max-w-lg">
              A passionate individual who loves designing websites, always seeking creative ways to combine visual appeal with functionality. Enjoys experimenting with layouts, colors, and typography to create modern and user-friendly websites. Has a strong interest in following the latest web design trends and best practices to build sites that are not only visually attractive but also easy to navigate.
              </p>
             
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
                  Download CV
                </button>
                <button className="px-8 py-3 border-2 border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition-colors">
                  Contact Me
                </button>
              </div>
            </div>
          </div>

          {/* Right Section - Portrait Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-96 lg:w-800 lg:h-[590px] z-20">
              <Image
                src="/images/erlan.jpg"
                alt="Erlan Justin Dungog"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-1">
          <div className="bg-gray-800 rounded-lg shadow-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Experience */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-700 border-2 border-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">4 months Job</h3>
                  <p className="text-gray-400 text-sm">Experience</p>
                </div>
              </div>

              {/* Projects */}
              <div 
                className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-2 rounded-lg transition-colors"
                onClick={() => setShowProjectsModal(true)}
              >
                <div className="w-12 h-12 bg-gray-700 border-2 border-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">9 Projects</h3>
                  <p className="text-gray-400 text-sm">Completed</p>
                </div>
              </div>

              {/* Support */}
              <div 
                className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-2 rounded-lg transition-colors"
                onClick={() => setShowCertificationsModal(true)}
              >
                <div className="w-12 h-12 bg-gray-700 border-2 border-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">5</h3>
                  <p className="text-gray-400 text-sm">Certifications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Modal */}
      {showProjectsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-8 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">My Projects</h2>
              <button 
                onClick={() => setShowProjectsModal(false)}
                className="text-gray-400 hover:text-white text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">Portfolio Website</h3>
                <p className="text-gray-300">A modern portfolio website built with Next.js and Tailwind CSS</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">E-commerce Platform</h3>
                <p className="text-gray-300">Full-stack e-commerce solution with payment integration</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">Task Management App</h3>
                <p className="text-gray-300">React-based task management application with real-time updates</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">Weather Dashboard</h3>
                <p className="text-gray-300">Weather application with API integration and responsive design</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">Blog Platform</h3>
                <p className="text-gray-300">Content management system with markdown support</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">Social Media Dashboard</h3>
                <p className="text-gray-300">Analytics dashboard for social media management</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">Inventory System</h3>
                <p className="text-gray-300">PHP-based inventory management system</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">Restaurant Website</h3>
                <p className="text-gray-300">Responsive restaurant website with online ordering</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">Learning Management System</h3>
                <p className="text-gray-300">Educational platform for online learning</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Certifications Modal */}
      {showCertificationsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-8 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">My Certifications</h2>
              <button 
                onClick={() => setShowCertificationsModal(false)}
                className="text-gray-400 hover:text-white text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">React Developer Certification</h3>
                <p className="text-gray-300">Advanced React development and best practices</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">Next.js Framework Certification</h3>
                <p className="text-gray-300">Full-stack development with Next.js</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">PHP Development Certification</h3>
                <p className="text-gray-300">Backend development with PHP and MySQL</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">UI/UX Design Certification</h3>
                <p className="text-gray-300">User interface and experience design principles</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">Web Development Fundamentals</h3>
                <p className="text-gray-300">HTML, CSS, and JavaScript fundamentals</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
