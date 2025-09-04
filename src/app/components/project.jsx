'use client';

import { useState } from 'react';

const Project = () => {
  const [showFastModal, setShowFastModal] = useState(false);
  const [showResponsiveModal, setShowResponsiveModal] = useState(false);
  const [showIntuitiveModal, setShowIntuitiveModal] = useState(false);
  const [showDynamicModal, setShowDynamicModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedImageTitle, setSelectedImageTitle] = useState('');

  return (
    <div className="py-20 relative overflow-hidden">
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
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
         
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
          
          {/* Projects Card */}
          <div 
            className="relative group bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 rounded-xl p-8 hover:from-gray-700 hover:via-gray-600 hover:to-gray-700 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-2xl border border-gray-600/20"
            onClick={() => setShowFastModal(true)}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative flex flex-col items-center text-center space-y-6">
              {/* Icon with background */}
              <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-purple-500 to-blue-600 rounded-full shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300 transform group-hover:scale-110">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">Projects</h3>
              
              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
                click to view my projects
              </p>
              
              {/* Hover indicator */}
              <div className="w-8 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></div>
            </div>
          </div>

          {/* Certificates Card */}
          <div 
            className="relative group bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 rounded-xl p-8 hover:from-gray-700 hover:via-gray-600 hover:to-gray-700 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-2xl border border-gray-600/20"
            onClick={() => setShowResponsiveModal(true)}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative flex flex-col items-center text-center space-y-6">
              {/* Icon with background */}
              <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full shadow-lg group-hover:shadow-yellow-500/25 transition-all duration-300 transform group-hover:scale-110">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">Certificates</h3>
              
              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
                Professional achievements and completed courses
              </p>
              
              {/* Hover indicator */}
              <div className="w-8 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></div>
            </div>
          </div>

          {/* My Services Card */}
          <div 
            className="relative group bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 rounded-xl p-8 hover:from-gray-700 hover:via-gray-600 hover:to-gray-700 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-2xl border border-gray-600/20"
            onClick={() => setShowIntuitiveModal(true)}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative flex flex-col items-center text-center space-y-6">
              {/* Icon with background */}
              <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-green-500 to-teal-600 rounded-full shadow-lg group-hover:shadow-green-500/25 transition-all duration-300 transform group-hover:scale-110">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-white group-hover:text-green-300 transition-colors duration-300">My Services</h3>
              
              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
                Professional services I offer
              </p>
              
              {/* Hover indicator */}
              <div className="w-8 h-1 bg-gradient-to-r from-green-500 to-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></div>
            </div>
          </div>





          </div>
        </div>
      </div>

      {/* Projects Modal */}
      {showFastModal && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-lg flex items-center justify-center z-50"
          onClick={() => setShowFastModal(false)}
        >
          <div 
            className="bg-gray-900/70 backdrop-blur-xl rounded-lg p-8 max-w-6xl w-full mx-4 max-h-[90vh] overflow-y-auto border border-gray-600/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold text-white">My Projects</h2>
                <p className="text-gray-400 mt-2">Showcasing my best work across different categories</p>
              </div>
              <button 
                onClick={() => setShowFastModal(false)}
                className="text-gray-400 hover:text-white text-2xl font-bold"
              >
                ×
              </button>
            </div>
            
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-h-[60vh] overflow-y-auto pr-4">
              
              {/* Real Estate Website */}
              <div className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors shadow-lg">
                <div className="h-80 bg-white flex items-center justify-center p-4">
                  <img 
                    src="/images/realestate.png" 
                    alt="Real Estate Website" 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <span className="text-gray-400 text-lg" style={{display: 'none'}}>Real Estate Website</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                      Web Development
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Real Estate Website</h3>
                  <p className="text-gray-300 mb-4">Real Estate platform development</p>
                  <a 
                    href="https://inspire-real-estate.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors block text-center"
                  >
                    View Live Demo
                  </a>
                </div>
              </div>

              {/* Inspire Hub */}
              <div className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors shadow-lg">
                <div className="h-80 bg-white flex items-center justify-center p-4">
                  <img 
                    src="/images/hub.png" 
                    alt="Inspire Hub" 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <span className="text-gray-400 text-lg" style={{display: 'none'}}>Inspire Hub</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                      Web Development
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Inspire Hub</h3>
                  <p className="text-gray-300 mb-4">Front-end part</p>
                  <a 
                    href="https://inspire-hub-sigma.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors block text-center"
                  >
                    View Live Demo
                  </a>
                </div>
              </div>

              {/* All Cars PH Prototype */}
              <div className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors shadow-lg">
                <div className="h-80 bg-white flex items-center justify-center p-4">
                  <img 
                    src="/images/allcars.png" 
                    alt="All Cars PH Prototype" 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <span className="text-gray-400 text-lg" style={{display: 'none'}}>All Cars PH Prototype</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                      UI/UX
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">All Cars PH Prototype</h3>
                  <p className="text-gray-300 mb-4">User interface design system</p>
                  <a 
                    href="https://www.figma.com/proto/NmO00a24rvMbassTi16dIX/Untitled?node-id=1-3&t=b2kHqTvzHEIiZ3sv-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors block text-center"
                  >
                    View Prototype
                  </a>
                </div>
              </div>

              {/* The Standard Concert */}
              <div className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors shadow-lg">
                <div className="h-80 bg-white flex items-center justify-center p-4">
                  <img 
                    src="/images/rquin.png" 
                    alt="RQUIN Solutions Inc" 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <span className="text-gray-400 text-lg" style={{display: 'none'}}>RQUIN Solutions Inc</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                      Website Development
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">RQUIN Solutions Inc.</h3>
                  <p className="text-gray-300 mb-4">Whole Website</p>
                  <a 
                    href="https://www.rquinsolutions.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors block text-center"
                  >
                    Watch Website
                  </a>
                </div>
              </div>

              {/* Project 5 - Digital Marketing */}
              <div className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors shadow-lg">
                <div className="h-80 bg-white flex items-center justify-center p-4">
                  <img 
                    src="/images/Digital.png" 
                    alt="Digital Marketing Campaign" 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <span className="text-gray-400 text-lg" style={{display: 'none'}}>Employee Record System Client Side</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                      Website Development
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Employee Record System Client Side</h3>
                  <p className="text-gray-300 mb-4">Digital marketing campaign and strategy</p>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors block text-center"
                  >
                    Not yet deployed
                  </a>
                </div>
              </div>

              {/* Project 6 - Cyber Security */}
              <div className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors shadow-lg">
                <div className="h-80 bg-white flex items-center justify-center p-4">
                  <img 
                    src="/images/cyber.png" 
                    alt="Cyber Security Project" 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <span className="text-gray-400 text-lg" style={{display: 'none'}}>Employee Record System Admin Side</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                    Website Development
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Employee Record System Admin Side</h3>
                  <p className="text-gray-300 mb-4">Security assessment and implementation</p>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors block text-center"
                  >
                    Not yet deployed
                  </a>
                </div>
                        </div>


          </div>
        </div>
        </div>
      )}

      {/* Responsive Modal */}
      {showResponsiveModal && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-lg flex items-center justify-center z-50"
          onClick={() => setShowResponsiveModal(false)}
        >
          <div 
            className="bg-gray-900/70 backdrop-blur-xl rounded-lg p-8 max-w-6xl w-full mx-4 max-h-[90vh] overflow-y-auto border border-gray-600/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold text-white">My Certifications</h2>
                <p className="text-gray-400 mt-2">Professional achievements and completed courses</p>
              </div>
              <button 
                onClick={() => setShowResponsiveModal(false)}
                className="text-gray-400 hover:text-white text-2xl font-bold"
              >
                ×
              </button>
            </div>
            
            {/* Certificates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-h-[60vh] overflow-y-auto pr-4">
              
              {/* Digital Certification */}
              <div className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors shadow-lg">
                <div className="h-80 bg-white flex items-center justify-center p-4">
                  <img 
                    src="/images/Digital.png" 
                    alt="Digital Certification" 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <span className="text-gray-400 text-lg" style={{display: 'none'}}>Digital Certification</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Digital Certification</h3>
                  <p className="text-gray-300 mb-4">Professional digital skills certification</p>
                  <button 
                    className="w-full bg-yellow-500 text-gray-900 py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors block text-center font-medium"
                    onClick={() => {
                      setSelectedImage('/images/Digital.png');
                      setSelectedImageTitle('Digital Certification');
                      setShowImageModal(true);
                    }}
                  >
                    View Image
                  </button>
                </div>
              </div>

              {/* Cyber Certification */}
              <div className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors shadow-lg">
                <div className="h-80 bg-white flex items-center justify-center p-4">
                  <img 
                    src="/images/cyber.png" 
                    alt="Cyber Certification" 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <span className="text-gray-400 text-lg" style={{display: 'none'}}>Cyber Certification</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Cyber Certification</h3>
                  <p className="text-gray-300 mb-4">Cybersecurity and digital protection certification</p>
                  <button 
                    className="w-full bg-yellow-500 text-gray-900 py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors block text-center font-medium"
                    onClick={() => {
                      setSelectedImage('/images/cyber.png');
                      setSelectedImageTitle('Cyber Certification');
                      setShowImageModal(true);
                    }}
                  >
                    View Image
                  </button>
                </div>
              </div>

              {/* Real Estate Certification */}
              <div className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors shadow-lg">
                <div className="h-80 bg-white flex items-center justify-center p-4">
                  <img 
                    src="/images/estate.jpg" 
                    alt="Real Estate Certification" 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <span className="text-gray-400 text-lg" style={{display: 'none'}}>Real Estate Certification</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Real Estate Certification</h3>
                  <p className="text-gray-300 mb-4">Real estate certification</p>
                  <button 
                    className="w-full bg-yellow-500 text-gray-900 py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors block text-center font-medium"
                    onClick={() => {
                      setSelectedImage('/images/estate.jpg');
                      setSelectedImageTitle('Real Estate Certification');
                      setShowImageModal(true);
                    }}
                  >
                    View Image
                  </button>
                </div>
              </div>

              {/* Live Project Certification */}
              <div className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors shadow-lg">
                <div className="h-80 bg-white flex items-center justify-center p-4">
                  <img 
                    src="/images/live.png" 
                    alt="Live Project Certification" 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <span className="text-gray-400 text-lg" style={{display: 'none'}}>Live Project Certification</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Live Project Certification</h3>
                  <p className="text-gray-300 mb-4">Live project development and deployment certification</p>
                  <button 
                    className="w-full bg-yellow-500 text-gray-900 py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors block text-center font-medium"
                    onClick={() => {
                      setSelectedImage('/images/live.png');
                      setSelectedImageTitle('Live Project Certification');
                      setShowImageModal(true);
                    }}
                  >
                    View Image
                  </button>
                </div>
              </div>

              {/* Recognition Certificate */}
              <div className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors shadow-lg">
                <div className="h-80 bg-white flex items-center justify-center p-4">
                  <img 
                    src="/images/promo.png" 
                    alt="Promotional Certification" 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <span className="text-gray-400 text-lg" style={{display: 'none'}}>Promotional Certification</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Promotional Certification</h3>
                  <p className="text-gray-300 mb-4">Promotional video making contest champion</p>
                  <button 
                    className="w-full bg-yellow-500 text-gray-900 py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors block text-center font-medium"
                    onClick={() => {
                      setSelectedImage('/images/promo.png');
                      setSelectedImageTitle('Recognition Certificate');
                      setShowImageModal(true);
                    }}
                  >
                    View Image
                  </button>
              </div>
              </div>

              {/* Additional Certificate */}
              

            </div>
          </div>
        </div>
      )}


      {/* Dynamic Modal */}
      {showDynamicModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setShowDynamicModal(false)}
        >
          <div 
            className="bg-gray-800 rounded-lg p-8 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Dynamic Interactions</h2>
              <button 
                onClick={() => setShowDynamicModal(false)}
                className="text-gray-400 hover:text-white text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">Smooth Animations</h3>
                <p className="text-gray-300">CSS transitions and keyframe animations for engaging user interactions.</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">Interactive Elements</h3>
                <p className="text-gray-300">Hover effects, click animations, and dynamic content updates.</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">Modern JavaScript</h3>
                <p className="text-gray-300">React components and modern JavaScript for dynamic functionality.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* My Services Modal */}
      {showIntuitiveModal && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-lg flex items-center justify-center z-50"
          onClick={() => setShowIntuitiveModal(false)}
        >
          <div 
            className="bg-gray-900/70 backdrop-blur-xl rounded-lg p-8 max-w-6xl w-full mx-4 max-h-[90vh] overflow-y-auto border border-gray-600/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold text-white">My Services</h2>
                <p className="text-gray-400 mt-2">Professional services I offer to clients</p>
              </div>
              <button 
                onClick={() => setShowIntuitiveModal(false)}
                className="text-gray-400 hover:text-white text-2xl font-bold"
              >
                ×
              </button>
            </div>
            
            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[60vh] overflow-y-auto pr-4">
              
              {/* Web Development */}
              <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors shadow-lg border border-gray-600/20">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Web Development</h3>
                <p className="text-gray-300 text-sm">Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.</p>
              </div>

              {/* Mobile Apps */}
              <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors shadow-lg border border-gray-600/20">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Mobile Apps</h3>
                <p className="text-gray-300 text-sm">Cross-platform mobile applications for iOS and Android using React Native and Flutter.</p>
              </div>

              {/* UI/UX Design */}
              <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors shadow-lg border border-gray-600/20">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">UI/UX Design</h3>
                <p className="text-gray-300 text-sm">User interface and experience design using Figma, Adobe XD, and modern design principles.</p>
              </div>

              {/* Videography */}
              <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors shadow-lg border border-gray-600/20">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Videography</h3>
                <p className="text-gray-300 text-sm">Professional video production and editing services using Filmora and Adobe Premiere Pro.</p>
              </div>

              {/* Maintenance */}
              <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors shadow-lg border border-gray-600/20">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Video Editing</h3>
                <p className="text-gray-300 text-sm">Video editing is the process of arranging, enhancing, and combining video clips, audio, and effects to create a polished and engaging final production.</p>
              </div>

              {/* Consultation */}
              <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors shadow-lg border border-gray-600/20">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Maintenance</h3>
                <p className="text-gray-300 text-sm">Ongoing website maintenance, updates, and technical support to keep your digital presence running smoothly.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Image Modal */}
      {showImageModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-lg flex items-center justify-center z-50"
          onClick={() => setShowImageModal(false)}
        >
          <div 
            className="bg-gray-900/70 backdrop-blur-xl rounded-lg p-6 max-w-7xl w-full mx-4 max-h-[95vh] overflow-y-auto border border-gray-600/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-bold text-white">{selectedImageTitle}</h2>
              <button 
                onClick={() => setShowImageModal(false)}
                className="text-gray-400 hover:text-white text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="flex justify-center items-center">
              <img 
                src={selectedImage} 
                alt={selectedImageTitle} 
                className="max-w-full max-h-[85vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
