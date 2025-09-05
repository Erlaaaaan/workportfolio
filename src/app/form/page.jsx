'use client';

import { useState } from 'react';
import { db } from '../../firebaseConfig/firebase';
import { collection, addDoc } from 'firebase/firestore';


export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    work: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Add form data to Firestore
      const docRef = await addDoc(collection(db, 'contactMessages'), {
        name: formData.name,
        email: formData.email,
        work: formData.work,
        subject: formData.subject,
        message: formData.message,
        timestamp: new Date(),
        status: 'new'
      });

      console.log('Document written with ID: ', docRef.id);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', work: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error adding document: ', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
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

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Send me a message and I'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-gradient-to-br from-gray-800/80 via-gray-700/80 to-gray-800/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-600/30">
          <form onSubmit={handleSubmit} className="space-y-8">
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
                  className="w-full px-4 py-3 bg-gray-600/50 border border-gray-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
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
                  className="w-full px-4 py-3 bg-gray-600/50 border border-gray-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            {/* Work/Service Selection */}
            <div className="space-y-2">
              <label htmlFor="work" className="block text-sm font-medium text-gray-300">
                Type of Work/Service *
              </label>
              <div className="relative">
                <select
                  id="work"
                  name="work"
                  value={formData.work}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-600/50 border border-gray-500/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 appearance-none cursor-pointer pr-10"
                >
                  <option value="" className="text-gray-400">Select a service...</option>
                  <option value="web-development" className="text-gray-800">Web Development</option>
                  <option value="mobile-apps" className="text-gray-800">Mobile Apps</option>
                  <option value="ui-ux-design" className="text-gray-800">UI/UX Design</option>
                  <option value="videography" className="text-gray-800">Videography</option>
                  <option value="maintenance" className="text-gray-800">Maintenance</option>
                  <option value="other" className="text-gray-800">Other</option>
                </select>
                {/* Custom dropdown arrow */}
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Subject */}
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
                className="w-full px-4 py-3 bg-gray-600/50 border border-gray-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                placeholder="What's this about?"
              />
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
                className="w-full px-4 py-3 bg-gray-600/50 border border-gray-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Tell me about your project or idea..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-12 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-orange-500/25 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending Message...</span>
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="text-center p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                <p className="text-green-400 font-medium">
                  ✓ Message sent successfully! I'll get back to you soon.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="text-center p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                <p className="text-red-400 font-medium">
                  ✗ Something went wrong. Please try again.
                </p>
              </div>
            )}
          </form>

          {/* Contact Information */}
          <div className="mt-12 pt-8 border-t border-gray-600/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-400">Justindungog112@gmail.com</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-400">+63 9056392690</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
                <p className="text-gray-400">Pasig City, Philippines</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
