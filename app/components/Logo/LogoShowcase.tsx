"use client";
import React from 'react';
import Logo from './index';

const LogoShowcase: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto p-8 space-y-16">
        {/* Hero Section */}
        <div className="text-center py-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Brand Identity Transformation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A bold and modern logo redesign that transforms "Deborah Barasa" into the memorable brand "Debbie" 
            through innovative design and meaningful visual storytelling.
          </p>
        </div>

        {/* Main Transformation Demo */}
        <section className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">The Transformation Experience</h2>
            <p className="text-gray-600">Watch the elegant transition from formal to brand identity</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl">
                <p className="text-sm text-gray-600 mb-6 font-medium">Extra Large - Full Animation</p>
                <Logo size="xl" variant="full" animated={true} theme="light" />
              </div>
              
              <div className="p-8 bg-gray-900 rounded-2xl">
                <p className="text-sm text-gray-300 mb-6 font-medium">Large - Dark Theme</p>
                <Logo size="lg" variant="full" animated={true} theme="dark" />
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-r from-pink-50 to-blue-50 rounded-2xl">
                <p className="text-sm text-gray-600 mb-4 font-medium">Modern Style</p>
                <Logo size="lg" variant="modern" animated={false} />
              </div>
              
              <div className="p-6 bg-gray-50 rounded-2xl">
                <p className="text-sm text-gray-600 mb-4 font-medium">Compact Version</p>
                <Logo size="lg" variant="compact" animated={false} />
              </div>
              
              <div className="p-6 bg-gray-50 rounded-2xl text-center">
                <p className="text-sm text-gray-600 mb-4 font-medium">Icon Only</p>
                <Logo size="lg" variant="icon" animated={false} />
              </div>
            </div>
          </div>
        </section>

        {/* Size Variations */}
        <section className="bg-white rounded-3xl p-12 shadow-xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Size Variations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(['sm', 'md', 'lg', 'xl'] as const).map((logoSize) => (
              <div key={logoSize} className="p-6 bg-gray-50 rounded-2xl text-center">
                <p className="text-xs text-gray-600 mb-4 font-medium uppercase tracking-wide">
                  {logoSize === 'sm' ? 'Small' : logoSize === 'md' ? 'Medium' : logoSize === 'lg' ? 'Large' : 'Extra Large'}
                </p>
                <Logo size={logoSize} variant="compact" animated={false} />
              </div>
            ))}
          </div>
        </section>

        {/* Practical Applications */}
        <section className="bg-white rounded-3xl p-12 shadow-xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Real-World Applications</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Website Header */}
            <div className="space-y-4">
              <p className="text-sm text-gray-600 font-medium">Website Header</p>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <Logo size="md" variant="compact" animated={false} />
                  <nav className="flex space-x-8 text-gray-600 font-medium">
                    <span className="hover:text-pink-500 cursor-pointer transition-colors">About</span>
                    <span className="hover:text-pink-500 cursor-pointer transition-colors">Services</span>
                    <span className="hover:text-pink-500 cursor-pointer transition-colors">Portfolio</span>
                    <span className="hover:text-pink-500 cursor-pointer transition-colors">Contact</span>
                  </nav>
                </div>
              </div>
            </div>

            {/* Business Card */}
            <div className="space-y-4">
              <p className="text-sm text-gray-600 font-medium">Business Card</p>
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-xl shadow-lg max-w-sm">
                <Logo size="md" variant="modern" animated={false} theme="dark" />
                <div className="mt-6 space-y-2">
                  <p className="font-bold text-lg">Fullstack Developer</p>
                  <p className="text-gray-300 text-sm">debbie@example.com</p>
                  <p className="text-gray-300 text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            {/* Email Signature */}
            <div className="space-y-4">
              <p className="text-sm text-gray-600 font-medium">Email Signature</p>
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-pink-500">
                <div className="flex items-center space-x-4 mb-3">
                  <Logo size="sm" variant="compact" animated={false} />
                </div>
                <div className="text-sm text-gray-600 space-y-1">
                  <p className="font-semibold text-gray-800">Deborah Barasa</p>
                  <p>Senior Fullstack Developer</p>
                  <p>debbie@company.com | +1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            {/* Social Media Profile */}
            <div className="space-y-4">
              <p className="text-sm text-gray-600 font-medium">Social Media Profile</p>
              <div className="bg-gradient-to-r from-pink-500 to-blue-600 p-8 rounded-xl text-white text-center">
                <div className="bg-white bg-opacity-20 rounded-full p-4 inline-block mb-4">
                  <Logo size="md" variant="icon" animated={false} />
                </div>
                <h3 className="text-xl font-bold mb-2">Debbie</h3>
                <p className="text-pink-100">Transforming ideas into digital reality</p>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Guidelines */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Brand Guidelines</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Visual Identity</h3>
              <p className="text-gray-300 leading-relaxed">
                The transformation symbol represents growth, evolution, and professional development. 
                Use the gradient consistently across all brand materials.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Animation Guidelines</h3>
              <p className="text-gray-300 leading-relaxed">
                Use the full animated version for hero sections and first impressions. 
                Static versions work best for navigation and repeated use.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📐</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Usage Rules</h3>
              <p className="text-gray-300 leading-relaxed">
                Maintain clear space around the logo equal to the height of the transformation symbol. 
                Never distort or modify the gradient colors.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LogoShowcase;
