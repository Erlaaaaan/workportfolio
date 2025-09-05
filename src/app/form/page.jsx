'use client';

import { useState } from 'react';
import Image from 'next/image';
import { db } from '../../firebaseConfig/firebase';
import { collection, addDoc } from 'firebase/firestore';    

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    work: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // // Check if Firebase is properly configured
    // if (!isFirebaseConfigured()) {
    //   console.error('Firebase is not properly configured. Please check your environment variables.');
    //   setSubmitStatus('error');
    //   alert('Firebase is not properly configured. Please contact the administrator or check your environment variables.');
    //   setIsSubmitting(false);
    //   return;
    // }

    try {
      const docRef = await addDoc(collection(db, 'contacts'), {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        work: formData.work,
        message: formData.message,
        timestamp: new Date(),
        status: 'new'
      });

      console.log('Document written with ID: ', docRef.id);

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        work: '',
        message: ''
      });

      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      // Show more specific error message
      alert(`Error: ${error.message || 'Failed to send message. Please check your internet connection and try again.'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Animated Background - Same as Home Page */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        
        {/* Floating Particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-orange-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-yellow-400 rounded-full animate-pulse opacity-80"></div>
        <div className="absolute top-60 left-1/4 w-3 h-3 bg-amber-400 rounded-full animate-bounce opacity-40"></div>
        <div className="absolute top-80 right-1/3 w-2 h-2 bg-orange-300 rounded-full animate-ping opacity-70"></div>
        <div className="absolute bottom-40 left-20 w-1 h-1 bg-yellow-300 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute bottom-60 right-10 w-3 h-3 bg-amber-300 rounded-full animate-bounce opacity-50"></div>
        
        {/* Flare Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-orange-500/20 via-transparent to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-yellow-500/20 via-transparent to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg animate-float-rotate opacity-20"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full animate-float-rotate-reverse opacity-30"></div>
        <div className="absolute top-60 left-1/4 w-20 h-20 bg-gradient-to-r from-gray-500 to-gray-600 rounded-lg animate-float-bounce opacity-15"></div>
        <div className="absolute top-80 right-1/3 w-14 h-14 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full animate-float-spiral opacity-25"></div>
        <div className="absolute bottom-40 left-20 w-18 h-18 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-lg animate-float-rotate opacity-20"></div>
        <div className="absolute bottom-60 right-10 w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full animate-float-rotate-reverse opacity-30"></div>
        
        {/* Additional Geometric Shapes */}
        <div className="absolute top-32 left-1/3 w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-lg animate-float-rotate opacity-25" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-52 right-1/4 w-10 h-10 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full animate-float-rotate-reverse opacity-20" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-72 left-1/6 w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg animate-float-bounce opacity-30" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-96 right-1/6 w-12 h-12 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full animate-float-spiral opacity-25" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-1/5 w-14 h-14 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg animate-float-rotate opacity-20" style={{animationDelay: '0.8s'}}></div>
        <div className="absolute bottom-52 right-1/5 w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full animate-float-rotate-reverse opacity-35" style={{animationDelay: '1.2s'}}></div>
        
        {/* Hexagons */}
        <div className="absolute top-1/4 left-1/5 w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 opacity-20 animate-float-rotate" style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)', animationDelay: '0.3s'}}></div>
        <div className="absolute bottom-1/4 right-1/5 w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 opacity-25 animate-float-rotate-reverse" style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)', animationDelay: '1.7s'}}></div>
        
        {/* Diamonds */}
        <div className="absolute top-1/3 right-1/3 w-10 h-10 bg-gradient-to-r from-amber-400 to-yellow-400 opacity-30 animate-float-bounce transform rotate-45" style={{animationDelay: '0.7s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-8 h-8 bg-gradient-to-r from-orange-400 to-amber-400 opacity-25 animate-float-spiral transform rotate-45" style={{animationDelay: '1.3s'}}></div>
        
        {/* More Rectangles */}
        <div className="absolute top-1/6 left-2/3 w-18 h-6 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg animate-float-rotate opacity-15" style={{animationDelay: '0.9s'}}></div>
        <div className="absolute bottom-1/6 right-2/3 w-14 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg animate-float-rotate-reverse opacity-20" style={{animationDelay: '1.6s'}}></div>
        
        {/* Small Circles */}
        <div className="absolute top-1/5 right-1/6 w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-float-bounce opacity-40" style={{animationDelay: '0.4s'}}></div>
        <div className="absolute bottom-1/5 left-1/6 w-4 h-4 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full animate-float-spiral opacity-35" style={{animationDelay: '1.1s'}}></div>
        <div className="absolute top-2/3 left-1/2 w-5 h-5 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full animate-float-rotate opacity-30" style={{animationDelay: '0.6s'}}></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-1/3 left-1/6 w-32 h-32 bg-gradient-to-r from-orange-400/30 to-yellow-400/30 rounded-full blur-xl animate-float-bounce"></div>
        <div className="absolute bottom-1/3 right-1/6 w-24 h-24 bg-gradient-to-r from-amber-400/30 to-orange-400/30 rounded-full blur-xl animate-float-rotate"></div>
        
        {/* Diagonal Lines */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent transform rotate-12"></div>
        <div className="absolute top-1/3 right-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent transform -rotate-12"></div>
        
        {/* Floating Triangles */}
        <div className="absolute top-1/4 left-1/3 w-0 h-0 border-l-8 border-r-8 border-b-12 border-l-transparent border-r-transparent border-b-orange-400/40 animate-float-rotate"></div>
        <div className="absolute bottom-1/4 right-1/3 w-0 h-0 border-l-6 border-r-6 border-b-10 border-l-transparent border-r-transparent border-b-yellow-400/40 animate-float-rotate-reverse"></div>
        
        {/* Orbital Rings */}
        <div className="absolute top-1/2 left-1/2 w-64 h-64 border border-orange-500/20 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 border border-yellow-500/20 rounded-full animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
      </div>

      <div className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 mt-20">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-gradient-to-br from-gray-800/80 via-gray-700/80 to-gray-800/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-gray-600/30">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              {/* Subject and Work Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="work" className="block text-sm font-medium text-gray-300">
                    Type of Work
                  </label>
                  <select
                    id="work"
                    name="work"
                    value={formData.work}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select work type</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-apps">Mobile Apps</option>
                    <option value="ui-ux-design">UI/UX Design</option>
                    <option value="videography">Videography</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-vertical"
                  placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 ${
                    isSubmitting
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 shadow-lg shadow-orange-500/25'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="text-center p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                  <p className="text-green-400 font-medium">
                    ✅ Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="text-center p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                  <p className="text-red-400 font-medium">
                    ❌ Something went wrong. Please try again.
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-700/60 backdrop-blur-sm rounded-xl p-6 border border-gray-600/30">
              <h3 className="text-xl font-semibold text-white mb-4">Or reach me directly</h3>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8">
                <div className="flex items-center space-x-2 text-gray-300">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>justindungog112@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+63 9056392690 (Viber)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
