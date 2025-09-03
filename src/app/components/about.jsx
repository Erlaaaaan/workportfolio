'use client';

import Image from 'next/image';

const About = () => {
  return (
    <div className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Portrait Image */}
          <div className="flex justify-center lg:justify-start h-full">
            <div className="relative h-full">
              {/* Golden border frame */}
              <div className="absolute inset-0 border-2 border-yellow-400 rounded-lg transform rotate-1"></div>
              <div className="relative w-96 h-full lg:w-[500px] bg-white rounded-lg overflow-hidden">
                <Image
                  src="/images/justim.png"
                  alt="Erlan Justin Dungog"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Column - Information */}
          <div className="text-white space-y-8">
            {/* Introduction Section */}
            <div className="space-y-4">
              <p className="text-yellow-400 font-medium">My Intro</p>
              <h2 className="text-4xl lg:text-5xl font-bold">About Me</h2>
              <p className="text-gray-300 leading-relaxed max-w-lg">
                A passionate individual who loves designing websites, always seeking creative ways to combine visual appeal with functionality. Enjoys experimenting with layouts, colors, and typography to create modern and user-friendly websites. Has a strong interest in following the latest web design trends and best practices to build sites that are not only visually attractive but also easy to navigate.
              </p>
            </div>

            {/* Technical Skills Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">TECHNICAL SKILL</h3>
              
              <div className="space-y-4">
                {/* REACT / NEXT.JS */}
                <div className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium">REACT / NEXT.JS</span>
                  </div>
                  <div className="relative h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-500 rounded-full" style={{ width: '95%' }}></div>
                    {/* Glowing circle overlay */}
                  
                  </div>
                </div>
                  {/* Java */}
                  <div className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium">Javascript</span>
                  </div>
                  <div className="relative h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-500 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                {/* HTML */}
                <div className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium">HTML</span>
                  </div>
                  <div className="relative h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-500 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>

                {/* PHP */}
                <div className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium">PHP</span>
                  </div>
                  <div className="relative h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-500 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>

                {/* CSS */}
                <div className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium">CSS</span>
                  </div>
                  <div className="relative h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-500 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>

                  {/* Tailwind */}
                  <div className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium">Tailwind</span>
                  </div>
                  <div className="relative h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-500 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>

                {/* PHOTOSHOP */}
                <div className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium">PHOTOSHOP</span>
                  </div>
                  <div className="relative h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-500 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>

                {/* CANVA */}
                <div className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium">CANVA</span>
                  </div>
                  <div className="relative h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-500 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>

                {/* FILMORA */}
                <div className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium">FILMORA</span>
                  </div>
                  <div className="relative h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-500 rounded-full" style={{ width: '95%' }}></div>
                    {/* Glowing pentagon overlay */}
                    
                  </div>
                </div>

                {/* FIGMA */}
                <div className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium">FIGMA</span>
                  </div>
                  <div className="relative h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-500 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>

              {/* Animated geometric overlays */}
              <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-orange-500 opacity-20 rounded-full blur-xl animate-pulse" style={{ transform: 'translate(-50%, -50%)' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
