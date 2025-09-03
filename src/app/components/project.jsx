'use client';

import { useState } from 'react';

const Project = () => {
  const [showFastModal, setShowFastModal] = useState(false);
  const [showResponsiveModal, setShowResponsiveModal] = useState(false);
  const [showIntuitiveModal, setShowIntuitiveModal] = useState(false);
  const [showDynamicModal, setShowDynamicModal] = useState(false);

  return (
    <div className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
         
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          
          {/* Fast Card */}
          <div 
            className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors cursor-pointer"
            onClick={() => setShowFastModal(true)}
          >
            <div className="flex flex-col items-center text-center space-y-4">
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center">
                <svg className="w-12 h-12 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-white">Projects </h3>
              
              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                click to view my projects
              </p>
            </div>
          </div>

          {/* Responsive Card */}
          <div 
            className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors cursor-pointer"
            onClick={() => setShowResponsiveModal(true)}
          >
            <div className="flex flex-col items-center text-center space-y-4">
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-white">Certificates</h3>
              
              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                Adaptive layouts designed to work flawlessly on any screen size, from mobile to desktop.
              </p>
            </div>
          </div>





          </div>
        </div>
      </div>

      {/* Projects Modal */}
      {showFastModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-lg flex items-center justify-center z-50">
          <div className="bg-gray-900/70 backdrop-blur-xl rounded-lg p-8 max-w-6xl w-full mx-4 max-h-[90vh] overflow-y-auto border border-gray-600/30 shadow-2xl">
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
              <div className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors">
                <div className="h-48 bg-gray-700 flex items-center justify-center">
                  <img 
                    src="/images/realestate.png" 
                    alt="Real Estate Website" 
                    className="w-full h-full object-cover"
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
              <div className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors">
                <div className="h-48 bg-gray-700 flex items-center justify-center">
                  <img 
                    src="/images/hub.png" 
                    alt="Inspire Hub" 
                    className="w-full h-full object-cover"
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
              <div className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors">
                <div className="h-48 bg-gray-700 flex items-center justify-center">
                  <img 
                    src="/images/allcars.png" 
                    alt="All Cars PH Prototype" 
                    className="w-full h-full object-cover"
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
              <div className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors">
                <div className="h-48 bg-gray-700 flex items-center justify-center">
                  <img 
                    src="/images/rquin.png" 
                    alt="RQUIN Solutions Inc" 
                    className="w-full h-full object-cover"
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
              <div className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors">
                <div className="h-48 bg-gray-700 flex items-center justify-center">
                  <img 
                    src="/images/Digital.png" 
                    alt="Digital Marketing Campaign" 
                    className="w-full h-full object-cover"
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
              <div className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors">
                <div className="h-48 bg-gray-700 flex items-center justify-center">
                  <img 
                    src="/images/cyber.png" 
                    alt="Cyber Security Project" 
                    className="w-full h-full object-cover"
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-8 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Responsive Design</h2>
              <button 
                onClick={() => setShowResponsiveModal(false)}
                className="text-gray-400 hover:text-white text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">Mobile-First Approach</h3>
                <p className="text-gray-300">Designing for mobile devices first, then scaling up to larger screens.</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">Flexible Grid Systems</h3>
                <p className="text-gray-300">CSS Grid and Flexbox for layouts that adapt to any screen size.</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">Touch-Friendly Interface</h3>
                <p className="text-gray-300">Optimized button sizes and spacing for touch interactions on mobile devices.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Intuitive Modal */}
      {showIntuitiveModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-8 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Intuitive User Experience</h2>
              <button 
                onClick={() => setShowIntuitiveModal(false)}
                className="text-gray-400 hover:text-white text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">Clear Navigation</h3>
                <p className="text-gray-300">Intuitive menu structures and clear call-to-action buttons for easy navigation.</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">Consistent Design</h3>
                <p className="text-gray-300">Uniform color schemes, typography, and spacing throughout the interface.</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">User Feedback</h3>
                <p className="text-gray-300">Visual feedback for user actions like hover states and loading indicators.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Dynamic Modal */}
      {showDynamicModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-8 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
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
    </div>
  );
};

export default Project;
