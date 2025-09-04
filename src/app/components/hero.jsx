'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [showExperienceModal, setShowExperienceModal] = useState(false);
  const [showProjectsModal, setShowProjectsModal] = useState(false);
  const [showCertificationsModal, setShowCertificationsModal] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate particles only on client side to avoid hydration mismatch
    const generatedParticles = [...Array(15)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 3,
      animationDuration: 2 + Math.random() * 3
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated geometric rectangles background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Rectangles - Moving and rotating */}
        <div className="absolute w-24 h-12 bg-gradient-to-r from-amber-400/20 to-orange-500/20 rounded-lg animate-float-rotate" style={{
          animation: 'float-rotate 15s ease-in-out infinite',
          top: '20%',
          left: '20%'
        }} />
        <div className="absolute w-20 h-10 bg-gradient-to-r from-gray-400/20 to-gray-600/20 rounded-lg animate-float-rotate-reverse" style={{
          animation: 'float-rotate-reverse 18s ease-in-out infinite',
          top: '40%',
          right: '32%'
        }} />
        <div className="absolute w-32 h-16 bg-gradient-to-r from-amber-400/15 via-orange-500/15 to-yellow-400/15 rounded-lg animate-float-rotate" style={{
          animation: 'float-rotate 20s ease-in-out infinite',
          bottom: '40%',
          left: '25%'
        }} />
        <div className="absolute w-28 h-14 bg-gradient-to-r from-amber-400/25 to-orange-500/25 rounded-lg animate-float-rotate-reverse" style={{
          animation: 'float-rotate-reverse 22s ease-in-out infinite',
          top: '33%',
          right: '25%'
        }} />
        
        {/* Triangles - Moving and rotating */}
        <div className="absolute w-0 h-0 border-l-[20px] border-l-transparent border-b-[35px] border-b-amber-500/30 border-r-[20px] border-r-transparent animate-float-rotate" style={{
          animation: 'float-rotate 12s ease-in-out infinite',
          top: '25%',
          left: '16%'
        }} />
        <div className="absolute w-0 h-0 border-l-[25px] border-l-transparent border-b-[40px] border-b-gray-600/30 border-r-[25px] border-r-transparent animate-float-rotate-reverse" style={{
          animation: 'float-rotate-reverse 16s ease-in-out infinite',
          bottom: '25%',
          right: '16%'
        }} />
        
        {/* Circles - Moving and rotating */}
        <div className="absolute w-16 h-16 rounded-full bg-gradient-to-r from-amber-400/20 to-orange-500/20 animate-float-rotate" style={{
          animation: 'float-rotate 14s ease-in-out infinite',
          top: '50%',
          left: '25%'
        }} />
        <div className="absolute w-20 h-20 rounded-full bg-gradient-to-r from-gray-400/20 to-gray-600/20 animate-float-rotate-reverse" style={{
          animation: 'float-rotate-reverse 19s ease-in-out infinite',
          bottom: '50%',
          right: '25%'
        }} />
        
        {/* Hexagon - Moving and rotating */}
        <div className="absolute w-24 h-24 bg-gradient-to-r from-amber-400/15 via-orange-500/15 to-yellow-400/15 animate-float-rotate" style={{
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          animation: 'float-rotate 17s ease-in-out infinite',
          top: '33%',
          left: '66%'
        }} />
        
        {/* Diamond - Moving and rotating */}
        <div className="absolute w-20 h-20 bg-gradient-to-r from-amber-400/25 to-orange-500/25 animate-float-rotate-reverse" style={{
          transform: 'rotate(45deg)',
          animation: 'float-rotate-reverse 21s ease-in-out infinite',
          bottom: '33%',
          left: '50%'
        }} />
        
        {/* Additional moving shapes */}
        <div className="absolute w-28 h-14 bg-gradient-to-r from-amber-400/15 via-orange-500/15 to-yellow-400/15 rounded-lg animate-float-rotate" style={{
          animation: 'float-rotate 25s ease-in-out infinite',
          top: '16%',
          right: '33%'
        }} />
        <div className="absolute w-32 h-16 bg-gradient-to-r from-gray-400/20 to-gray-600/20 rounded-lg animate-float-rotate-reverse" style={{
          animation: 'float-rotate-reverse 28s ease-in-out infinite',
          bottom: '16%',
          left: '33%'
        }} />
        
        {/* More moving triangles */}
        <div className="absolute w-0 h-0 border-l-[30px] border-l-transparent border-b-[50px] border-b-amber-300/40 border-r-[30px] border-r-transparent animate-float-rotate" style={{
          animation: 'float-rotate 13s ease-in-out infinite',
          top: '66%',
          left: '12%'
        }} />
        <div className="absolute w-0 h-0 border-l-[18px] border-l-transparent border-b-[30px] border-b-gray-500/40 border-r-[18px] border-r-transparent animate-float-rotate-reverse" style={{
          animation: 'float-rotate-reverse 24s ease-in-out infinite',
          top: '12%',
          right: '12%'
        }} />
        
        {/* More moving circles */}
        <div className="absolute w-12 h-12 rounded-full bg-gradient-to-r from-amber-400/20 to-orange-500/20 animate-float-rotate" style={{
          animation: 'float-rotate 26s ease-in-out infinite',
          bottom: '12%',
          left: '12%'
        }} />
        <div className="absolute w-18 h-18 rounded-full bg-gradient-to-r from-gray-400/20 to-gray-600/20 animate-float-rotate-reverse" style={{
          animation: 'float-rotate-reverse 30s ease-in-out infinite',
          top: '75%',
          right: '12%'
        }} />
        
        {/* Additional moving hexagon */}
        <div className="absolute w-20 h-20 bg-gradient-to-r from-amber-400/15 via-orange-500/15 to-yellow-400/15 animate-float-rotate" style={{
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          animation: 'float-rotate 23s ease-in-out infinite',
          bottom: '25%',
          right: '33%'
        }} />
        
        {/* Additional moving diamond */}
        <div className="absolute w-16 h-16 bg-gradient-to-r from-amber-400/15 via-orange-500/15 to-yellow-400/15 animate-float-rotate-reverse" style={{
          transform: 'rotate(45deg)',
          animation: 'float-rotate-reverse 27s ease-in-out infinite',
          top: '50%',
          right: '16%'
        }} />
        
        {/* Extra moving decorative elements */}
        <div className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-amber-400/20 to-orange-500/20 animate-float-rotate" style={{
          animation: 'float-rotate 29s ease-in-out infinite',
          top: '25%',
          right: '33%'
        }} />
        <div className="absolute w-10 h-10 rounded-full bg-gradient-to-r from-gray-400/20 to-gray-600/20 animate-float-rotate-reverse" style={{
          animation: 'float-rotate-reverse 31s ease-in-out infinite',
          bottom: '33%',
          left: '16%'
        }} />
        <div className="absolute w-6 h-6 bg-gradient-to-r from-amber-400/15 via-orange-500/15 to-yellow-400/15 animate-float-rotate" style={{
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          animation: 'float-rotate 32s ease-in-out infinite',
          top: '75%',
          left: '33%'
        }} />
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
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
            <div className="relative w-80 h-96 lg:w-800 lg:h-[590px] z-20 group">
              {/* Animated border frame */}
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 rounded-2xl opacity-75 blur-xl group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
              
              {/* Glowing background */}
              <div className="absolute -inset-2 bg-gradient-to-br from-orange-500/20 via-yellow-500/20 to-orange-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Main image container */}
              <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                {/* Floating particles around the image */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-4 left-4 w-2 h-2 bg-orange-400 rounded-full animate-ping opacity-75"></div>
                  <div className="absolute top-8 right-6 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse opacity-60" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute bottom-6 left-6 w-1 h-1 bg-orange-300 rounded-full animate-bounce opacity-50" style={{ animationDelay: '2s' }}></div>
                  <div className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-ping opacity-70" style={{ animationDelay: '0.5s' }}></div>
                </div>
                
                {/* Image with enhanced styling */}
              <Image
                src="/images/erlan.jpg"
                alt="Erlan Justin Dungog"
                fill
                  className="object-cover rounded-xl group-hover:brightness-110 group-hover:contrast-110 transition-all duration-500"
                priority
              />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-orange-500 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-yellow-500 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-yellow-500 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-orange-500 rounded-br-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Floating name badge */}
                <div className="absolute bottom-2 right-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-3 py-1.5 rounded-lg shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-10">
                  <p className="text-xs font-bold whitespace-nowrap">Erlan Justin</p>
                </div>
                
                {/* Status indicator */}
                <div className="absolute top-4 right-4 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
              </div>
              
              {/* Floating geometric shapes */}
              <div className="absolute -top-2 -right-2 w-6 h-6 border-2 border-orange-400 rounded-full opacity-0 group-hover:opacity-100 animate-spin" style={{ animationDuration: '3s' }}></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>



        {/* Statistics Section */}
        <div className="mt-8">
          <div className="bg-gradient-to-br from-gray-800/80 via-gray-700/80 to-gray-800/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-gray-600/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Experience */}
              <div 
                className="group relative flex items-center space-x-6 w-full p-6 bg-gradient-to-br from-gray-700/50 via-gray-600/50 to-gray-700/50 hover:from-gray-600/70 hover:via-gray-500/70 hover:to-gray-600/70 rounded-xl transition-all duration-300 border-2 border-transparent hover:border-orange-500/50 transform hover:scale-105 hover:shadow-xl"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative flex items-center space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-orange-500/25 transition-all duration-300 transform group-hover:scale-110">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-left">
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors duration-300">4 months Job</h3>
                    <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">Experience</p>
                  </div>
                </div>
                
                {/* Hover indicator */}
                <div className="absolute bottom-2 left-1/2 w-8 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></div>
              </div>

              {/* Projects */}
              <div 
                className="group relative flex items-center space-x-6 w-full p-6 bg-gradient-to-br from-gray-700/50 via-gray-600/50 to-gray-700/50 hover:from-gray-600/70 hover:via-gray-500/70 hover:to-gray-600/70 rounded-xl transition-all duration-300 border-2 border-transparent hover:border-green-500/50 transform hover:scale-105 hover:shadow-xl"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative flex items-center space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-green-500/25 transition-all duration-300 transform group-hover:scale-110">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-left">
                    <h3 className="text-xl font-bold text-white group-hover:text-green-300 transition-colors duration-300">6 Projects</h3>
                    <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">Completed</p>
                  </div>
                </div>
                
                {/* Hover indicator */}
                <div className="absolute bottom-2 left-1/2 w-8 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></div>
              </div>

              {/* Certifications */}
              <div 
                className="group relative flex items-center space-x-6 w-full p-6 bg-gradient-to-br from-gray-700/50 via-gray-600/50 to-gray-700/50 hover:from-gray-600/70 hover:via-gray-500/70 hover:to-gray-600/70 rounded-xl transition-all duration-300 border-2 border-transparent hover:border-purple-500/50 transform hover:scale-105 hover:shadow-xl"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative flex items-center space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300 transform group-hover:scale-110">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                  </svg>
                </div>
                <div className="text-left">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">5</h3>
                    <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">Certifications</p>
                  </div>
                </div>
                
                {/* Hover indicator */}
                <div className="absolute bottom-2 left-1/2 w-8 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Modal */}
      {showExperienceModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-8 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">My Experience</h2>
              <button 
                onClick={() => setShowExperienceModal(false)}
                className="text-gray-400 hover:text-white text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">System Developer</h3>
                <p className="text-orange-400 text-sm mb-2">4 months • Current Position</p>
                <p className="text-gray-300">Developing and maintaining software systems, implementing new features, and ensuring system reliability and performance.</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">Web Development Intern</h3>
                <p className="text-orange-400 text-sm mb-2">3 months • Previous Role</p>
                <p className="text-gray-300">Assisted in developing responsive web applications using modern frameworks and technologies.</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">Freelance Web Designer</h3>
                <p className="text-orange-400 text-sm mb-2">2 years • Side Projects</p>
                <p className="text-gray-300">Created custom websites for small businesses, focusing on user experience and modern design principles.</p>
              </div>
            </div>
          </div>
        </div>
      )}

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
