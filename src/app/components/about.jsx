'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('about-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);
  return (
    <div id="about-section" className="py-20 relative overflow-hidden">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Portrait Image */}
          <div className="flex justify-center lg:justify-start h-full">
            <div className="relative h-full group">
              {/* Animated border frame */}
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 rounded-2xl opacity-75 blur-xl group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
              
              {/* Glowing background */}
              <div className="absolute -inset-2 bg-gradient-to-br from-yellow-400/20 via-orange-500/20 to-yellow-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Main image container */}
              <div className="relative w-96 h-full lg:w-[500px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                {/* Floating particles around the image */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
                  <div className="absolute top-8 right-6 w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse opacity-60" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute bottom-6 left-6 w-1 h-1 bg-yellow-300 rounded-full animate-bounce opacity-50" style={{ animationDelay: '2s' }}></div>
                  <div className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-orange-300 rounded-full animate-ping opacity-70" style={{ animationDelay: '0.5s' }}></div>
                </div>
                
                {/* Image with enhanced styling */}
                <Image
                  src="/images/justim.png"
                  alt="Erlan Justin Dungog"
                  fill
                  className="object-cover rounded-xl group-hover:brightness-110 group-hover:contrast-110 transition-all duration-500"
                  priority
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-yellow-400 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-orange-500 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-orange-500 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-yellow-400 rounded-br-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Floating name badge */}
                <div className="absolute bottom-2 right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1.5 rounded-lg shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-10">
                  <p className="text-xs font-bold whitespace-nowrap">Erlan Justin</p>
                </div>
                
                {/* Status indicator */}
                <div className="absolute top-4 right-4 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
              </div>
              
              {/* Floating geometric shapes */}
              <div className="absolute -top-2 -right-2 w-6 h-6 border-2 border-yellow-400 rounded-full opacity-0 group-hover:opacity-100 animate-spin" style={{ animationDuration: '3s' }}></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Right Column - Information */}
          <div className="text-white space-y-8">
            {/* Introduction Section */}
            <div className="space-y-6 group">
              <div className="space-y-3">
                <p className="text-yellow-400 font-medium animate-pulse">My Intro</p>
                <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent group-hover:from-yellow-400 group-hover:via-white group-hover:to-yellow-400 transition-all duration-500">About Me</h2>
              </div>
              <div className="relative">
                <p className="text-gray-300 leading-relaxed max-w-lg group-hover:text-gray-200 transition-colors duration-500">
                I am Erlan Justin, a motivated fresh Bachelor of Science in Computer Science graduate with Latin Honor (Cum Laude) at Arellano University - Andres Bonifacio. A passionate individual who loves designing websites, always seeking creative ways to combine visual appeal with functionality. Enjoys experimenting with layouts, colors, and typography to create modern and user-friendly websites. Has a strong interest in following the latest web design trends and best practices to build sites that are not only visually attractive but also easy to navigate.
                </p>
                {/* Floating diamond decoration */}
                <div className="absolute -right-4 top-1/2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-20 rounded-lg transform rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>

            {/* Technical Skills Section */}
            <div className="space-y-6 group">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent group-hover:from-orange-400 group-hover:via-white group-hover:to-orange-400 transition-all duration-500">TECHNICAL SKILL</h3>
              
              <div className="space-y-4">
                {/* REACT / NEXT.JS */}
                <div className="relative group/skill">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium group-hover/skill:text-orange-300 transition-colors duration-300">REACT / NEXT.JS</span>
                    <span className="text-orange-400 font-bold text-sm group-hover/skill:text-yellow-300 transition-colors duration-300">95%</span>
                  </div>
                  <div className="relative h-4 bg-gray-700 rounded-full overflow-hidden shadow-inner">
                    <div className={`h-full bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 rounded-full shadow-lg transform transition-transform duration-1500 ease-out ${isVisible ? 'translate-x-0' : 'translate-x-[-100%]'}`} style={{ width: '95%' }}></div>
                    {/* Animated dots */}
                    <div className={`absolute top-1 right-1 w-2 h-2 bg-white rounded-full animate-bounce ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '0.5s' }}></div>
                    <div className={`absolute top-1 right-4 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '0.3s', transitionDelay: '0.8s' }}></div>
                  </div>
                </div>
                                     {/* Javascript */}
                   <div className="relative group/skill">
                  <div className="flex justify-between items-center mb-2">
                     <span className="text-gray-300 font-medium group-hover/skill:text-orange-300 transition-colors duration-300">Javascript</span>
                     <span className="text-orange-400 font-bold text-sm group-hover/skill:text-yellow-300 transition-colors duration-300">90%</span>
                  </div>
                   <div className="relative h-4 bg-gray-700 rounded-full overflow-hidden shadow-inner">
                     <div className={`h-full bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 rounded-full shadow-lg transform transition-transform duration-1200 ease-out ${isVisible ? 'translate-x-0' : 'translate-x-[-100%]'}`} style={{ width: '90%' }}></div>
                     {/* Animated squares */}
                     <div className={`absolute top-1 right-1 w-2 h-2 bg-white rounded-sm animate-spin ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ animationDuration: '1s', transitionDelay: '0.7s' }}></div>
                     <div className={`absolute top-1 right-4 w-1.5 h-1.5 bg-orange-300 rounded-sm animate-pulse ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '0.5s', transitionDelay: '1s' }}></div>
                  </div>
                </div>
                {/* HTML */}
                 <div className="relative group/skill">
                  <div className="flex justify-between items-center mb-2">
                     <span className="text-gray-300 font-medium group-hover/skill:text-orange-300 transition-colors duration-300">HTML</span>
                     <span className="text-orange-400 font-bold text-sm group-hover/skill:text-yellow-300 transition-colors duration-300">75%</span>
                  </div>
                   <div className="relative h-4 bg-gray-700 rounded-full overflow-hidden shadow-inner">
                     <div className={`h-full bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full shadow-lg transform transition-transform duration-1000 ease-out ${isVisible ? 'translate-x-0' : 'translate-x-[-100%]'}`} style={{ width: '75%' }}></div>
                     {/* Animated triangles */}
                     <div className={`absolute top-1 right-1 w-0 h-0 border-l-2 border-r-2 border-b-4 border-transparent border-b-white animate-bounce ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '0.9s' }}></div>
                     <div className={`absolute top-1 right-4 w-0 h-0 border-l-1.5 border-r-1.5 border-b-3 border-transparent border-b-yellow-300 animate-pulse ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '0.7s', transitionDelay: '1.2s' }}></div>
                  </div>
                </div>

                {/* PHP */}
                 <div className="relative group/skill">
                  <div className="flex justify-between items-center mb-2">
                     <span className="text-gray-300 font-medium group-hover/skill:text-orange-300 transition-colors duration-300">PHP</span>
                     <span className="text-orange-400 font-bold text-sm group-hover/skill:text-yellow-300 transition-colors duration-300">85%</span>
                  </div>
                   <div className="relative h-4 bg-gray-700 rounded-full overflow-hidden shadow-inner">
                     <div className={`h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full shadow-lg transform transition-transform duration-1100 ease-out ${isVisible ? 'translate-x-0' : 'translate-x-[-100%]'}`} style={{ width: '85%' }}></div>
                     {/* Animated diamonds */}
                     <div className={`absolute top-1 right-1 w-2 h-2 bg-white transform rotate-45 animate-pulse ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1.1s' }}></div>
                     <div className={`absolute top-1 right-4 w-1.5 h-1.5 bg-orange-300 transform rotate-45 animate-bounce ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '0.9s', transitionDelay: '1.4s' }}></div>
                  </div>
                </div>

                {/* CSS */}
                 <div className="relative group/skill">
                  <div className="flex justify-between items-center mb-2">
                     <span className="text-gray-300 font-medium group-hover/skill:text-orange-300 transition-colors duration-300">CSS</span>
                     <span className="text-orange-400 font-bold text-sm group-hover/skill:text-yellow-300 transition-colors duration-300">85%</span>
                  </div>
                   <div className="relative h-4 bg-gray-700 rounded-full overflow-hidden shadow-inner">
                     <div className={`h-full bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 rounded-full shadow-lg transform transition-transform duration-900 ease-out ${isVisible ? 'translate-x-0' : 'translate-x-[-100%]'}`} style={{ width: '65%' }}></div>
                     {/* Animated stars */}
                     <div className={`absolute top-1 right-1 w-2 h-2 bg-white animate-ping ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1.3s' }}></div>
                     <div className={`absolute top-1 right-4 w-1.5 h-1.5 bg-yellow-300 animate-bounce ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '1.1s', transitionDelay: '1.6s' }}></div>
                  </div>
                </div>

                  {/* Tailwind */}
                   <div className="relative group/skill">
                  <div className="flex justify-between items-center mb-2">
                     <span className="text-gray-300 font-medium group-hover/skill:text-orange-300 transition-colors duration-300">Tailwind</span>
                     <span className="text-orange-400 font-bold text-sm group-hover/skill:text-yellow-300 transition-colors duration-300">88%</span>
                  </div>
                   <div className="relative h-4 bg-gray-700 rounded-full overflow-hidden shadow-inner">
                     <div className={`h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full shadow-lg transform transition-transform duration-1300 ease-out ${isVisible ? 'translate-x-0' : 'translate-x-[-100%]'}`} style={{ width: '78%' }}></div>
                     {/* Animated hexagons */}
                     <div className={`absolute top-1 right-1 w-2 h-2 bg-white animate-spin ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ animationDuration: '2s', transitionDelay: '1.5s' }}></div>
                     <div className={`absolute top-1 right-4 w-1.5 h-1.5 bg-orange-300 animate-pulse ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '1.3s', transitionDelay: '1.8s' }}></div>
                  </div>
                </div>

                {/* PHOTOSHOP */}
                <div className="relative group/skill">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium group-hover/skill:text-orange-300 transition-colors duration-300">PHOTOSHOP</span>
                    <span className="text-orange-400 font-bold text-sm group-hover/skill:text-yellow-300 transition-colors duration-300">95%</span>
                  </div>
                  <div className="relative h-4 bg-gray-700 rounded-full overflow-hidden shadow-inner">
                    <div className={`h-full bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 rounded-full shadow-lg transform transition-transform duration-1400 ease-out ${isVisible ? 'translate-x-0' : 'translate-x-[-100%]'}`} style={{ width: '95%' }}></div>
                    {/* Animated lightning bolts */}
                    <div className={`absolute top-1 right-1 w-2 h-2 bg-white animate-pulse ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ animationDuration: '0.5s', transitionDelay: '1.7s' }}></div>
                    <div className={`absolute top-1 right-4 w-1.5 h-1.5 bg-yellow-300 animate-bounce ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '1.5s', transitionDelay: '2s' }}></div>
                  </div>
                </div>

                {/* CANVA */}
                <div className="relative group/skill">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium group-hover/skill:text-orange-300 transition-colors duration-300">CANVA</span>
                    <span className="text-orange-400 font-bold text-sm group-hover/skill:text-yellow-300 transition-colors duration-300">95%</span>
                  </div>
                  <div className="relative h-4 bg-gray-700 rounded-full overflow-hidden shadow-inner">
                    <div className={`h-full bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 rounded-full shadow-lg transform transition-transform duration-1600 ease-out ${isVisible ? 'translate-x-0' : 'translate-x-[-100%]'}`} style={{ width: '95%' }}></div>
                    {/* Animated circles */}
                    <div className={`absolute top-1 right-1 w-2 h-2 bg-white rounded-full animate-ping ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ animationDuration: '0.8s', transitionDelay: '1.9s' }}></div>
                    <div className={`absolute top-1 right-4 w-1.5 h-1.5 bg-orange-300 rounded-full animate-bounce ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '1.7s', transitionDelay: '2.2s' }}></div>
                  </div>
                </div>

                {/* FILMORA */}
                <div className="relative group/skill">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium group-hover/skill:text-orange-300 transition-colors duration-300">FILMORA</span>
                    <span className="text-orange-400 font-bold text-sm group-hover/skill:text-yellow-300 transition-colors duration-300">95%</span>
                  </div>
                  <div className="relative h-4 bg-gray-700 rounded-full overflow-hidden shadow-inner">
                    <div className={`h-full bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full shadow-lg transform transition-transform duration-1800 ease-out ${isVisible ? 'translate-x-0' : 'translate-x-[-100%]'}`} style={{ width: '95%' }}></div>
                    {/* Animated film strips */}
                    <div className={`absolute top-1 right-1 w-2 h-2 bg-white animate-pulse ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ animationDuration: '1.2s', transitionDelay: '2.1s' }}></div>
                    <div className={`absolute top-1 right-4 w-1.5 h-1.5 bg-yellow-300 animate-bounce ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '1.9s', transitionDelay: '2.4s' }}></div>
                  </div>
                </div>

                {/* FIGMA */}
                <div className="relative group/skill">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium group-hover/skill:text-orange-300 transition-colors duration-300">FIGMA</span>
                    <span className="text-orange-400 font-bold text-sm group-hover/skill:text-yellow-300 transition-colors duration-300">90%</span>
                  </div>
                  <div className="relative h-4 bg-gray-700 rounded-full overflow-hidden shadow-inner">
                    <div className={`h-full bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 rounded-full shadow-lg transform transition-transform duration-2000 ease-out ${isVisible ? 'translate-x-0' : 'translate-x-[-100%]'}`} style={{ width: '90%' }}></div>
                    {/* Animated design elements */}
                    <div className={`absolute top-1 right-1 w-2 h-2 bg-white animate-spin ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ animationDuration: '1.5s', transitionDelay: '2.3s' }}></div>
                    <div className={`absolute top-1 right-4 w-1.5 h-1.5 bg-orange-300 animate-pulse ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '2.1s', transitionDelay: '2.6s' }}></div>
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
