"use client";
import React, { useEffect, useState } from 'react';
import { FaLinkedinIn, FaGithub, FaTwitter, FaEnvelope, FaDownload } from 'react-icons/fa';
import Image from 'next/image';

const jobTitles = [
  "Product Manager",
  "Frontend Developer",
  "Backend Developer",
  "Android Developer",
  "UI/UX Designer",
  "Data Engineer",
  "Machine Learning Engineer"
];

const Hero = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    setIsVisible(true);
    
    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const currentTitle = jobTitles[currentTitleIndex];
    let timeout;

    if (!isDeleting && currentText === currentTitle) {
      // Pause at end of typing
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === '') {
      // Move to next title
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % jobTitles.length);
      timeout = setTimeout(() => {}, 500);
    } else {
      // Typing or deleting
      const typingSpeed = isDeleting ? 50 : 100;
      timeout = setTimeout(() => {
        setCurrentText(prev => {
          if (isDeleting) {
            return currentTitle.substring(0, prev.length - 1);
          } else {
            return currentTitle.substring(0, prev.length + 1);
          }
        });
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTitleIndex]);

  return (
    <section className="bg-gradient-to-br from-pink-50 via-white to-blue-50 min-h-screen flex items-center justify-center px-6 md:px-24 py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-pink-300/30 rounded-full animate-float-slow"></div>
        <div className="absolute top-32 right-1/3 w-3 h-3 bg-blue-300/20 rounded-full animate-float-medium" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-1/6 w-1.5 h-1.5 bg-pink-400/40 rounded-full animate-twinkle" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-60 right-1/4 w-2.5 h-2.5 bg-purple-300/25 rounded-full animate-dance-gentle" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className={`space-y-8 transition-all duration-700 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
          {/* Greeting and Name */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
              Hello, I&apos;m <span className="text-pink-500">Debrah</span>
            </h1>

            {/* Animated Job Title with Typing Effect */}
            <div className="h-16 flex items-center">
              <div className="relative">
                <span className="text-3xl md:text-4xl font-bold text-gray-700">
                  I&apos;m a{' '}
                  <span className="bg-gradient-to-r from-pink-500 to-blue-600 bg-clip-text text-transparent">
                    {currentText}
                    <span 
                      className={`inline-block w-0.5 h-8 md:h-10 bg-pink-500 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}
                      style={{ animation: 'blink 1.06s infinite' }}
                    ></span>
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-xl leading-relaxed max-w-2xl font-light">
            I specialize in building responsive web and mobile applications that are scalable and efficient.
            Passionate about creating digital experiences that make a difference.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 mt-8">
            <a
              href="/images/Blue_Modern_Resume.pdf"
              download="Blue_Modern_Resume.pdf"
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:from-pink-600 hover:to-pink-700 transition-all duration-300 text-lg font-semibold group"
            >
              <FaDownload className="text-xl group-hover:scale-110 transition-transform" />
              Download CV
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 border-2 border-pink-500 text-pink-500 px-8 py-4 rounded-xl hover:bg-pink-500 hover:text-white transition-all duration-300 text-lg font-semibold"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6 mt-8">
            {[
              { href: "https://x.com/che_deborah", icon: <FaTwitter size={22} />, label: "Twitter" },
              { href: "https://www.linkedin.com/in/deborah-cherotich-1603342b7/", icon: <FaLinkedinIn size={22} />, label: "LinkedIn" },
              { href: "mailto:cherotichdeborah02@gmail.com", icon: <FaEnvelope size={22} />, label: "Email" },
              { href: "https://github.com/Deborah-Cherotich", icon: <FaGithub size={22} />, label: "GitHub" }
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="bg-white text-gray-600 p-4 rounded-xl shadow-md hover:shadow-lg hover:bg-pink-500 hover:text-white transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className={`flex justify-center transition-all duration-700 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
          <div className="relative">
            {/* Background Effects */}
            <div className="absolute -inset-6 bg-gradient-to-r from-pink-400 to-blue-400 rounded-3xl blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute -inset-3 bg-gradient-to-r from-pink-200 to-blue-200 rounded-2xl opacity-30"></div>

            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/debz.jpg"
                alt="Deborah Barasa - Fullstack Developer"
                className="w-full max-w-md lg:max-w-lg transform hover:scale-105 transition-transform duration-700"
                width={600}
                height={600}
                priority
              />
            </div>

            {/* Floating Element */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-pink-100">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-gray-700">Available for work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
