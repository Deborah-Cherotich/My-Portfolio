"use client";

import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-pink-50 to-white pt-8 shadow-lg border-b border-pink-100 relative overflow-hidden">
      {/* Dancing Dots Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large floating dots */}
        <div className="absolute top-4 left-1/4 w-3 h-3 bg-pink-300/40 rounded-full animate-float-slow"></div>
        <div className="absolute top-12 right-1/3 w-2 h-2 bg-pink-400/50 rounded-full animate-float-medium" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-6 right-1/4 w-4 h-4 bg-pink-200/30 rounded-full animate-float-fast" style={{ animationDelay: '2s' }}></div>
        
        {/* Medium dancing dots */}
        <div className="absolute top-8 left-1/2 w-2.5 h-2.5 bg-purple-300/40 rounded-full animate-dance-gentle" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-16 left-1/6 w-1.5 h-1.5 bg-pink-500/60 rounded-full animate-dance-bounce" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-3 right-1/6 w-3.5 h-3.5 bg-pink-100/70 rounded-full animate-dance-sway" style={{ animationDelay: '3s' }}></div>
        
        {/* Small twinkling dots */}
        <div className="absolute top-10 left-1/3 w-1 h-1 bg-pink-600/80 rounded-full animate-twinkle" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute top-14 right-1/2 w-1.5 h-1.5 bg-purple-400/60 rounded-full animate-twinkle" style={{ animationDelay: '2.2s' }}></div>
        <div className="absolute top-5 left-3/4 w-1 h-1 bg-pink-400/70 rounded-full animate-twinkle" style={{ animationDelay: '1.8s' }}></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-7 left-1/5 w-2 h-2 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full animate-float-orbit opacity-50" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute top-13 right-1/5 w-2.5 h-2.5 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full animate-float-orbit opacity-40" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container flex justify-between items-center relative px-6 md:px-16 z-10">
        {/* Name with enhanced styling */}
        <div className="mr-8">
          <p
            className="text-[44px] bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent font-serif font-bold ml-4 md:ml-7 drop-shadow-sm hover:scale-105 transition-transform duration-300"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            <i>Debbie</i>
          </p>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden cursor-pointer p-2 rounded-full hover:bg-pink-100 transition-colors duration-200" onClick={toggleMenu}>
          {isOpen ? (
            <MdClose size={30} className="text-pink-500 hover:text-pink-600 transition-colors" />
          ) : (
            <MdMenu size={30} className="text-pink-500 hover:text-pink-600 transition-colors" />
          )}
        </div>

        {/* Navigation Menu */}
        <nav
          className={`absolute md:static top-20 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-2xl md:shadow-none rounded-2xl md:rounded-none mx-4 md:mx-0 transition-all duration-300 ease-in-out z-10 backdrop-blur-sm bg-white/95 ${
            isOpen ? "block animate-fadeIn" : "hidden md:block"
          }`}
        >
          <ul className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12 py-6 md:py-0">
            {[
              { href: "#about", label: "About" },
              { href: "#services", label: "Services" },
              { href: "#projects", label: "Portfolio" },
              { href: "#contact", label: "Contact" }
            ].map((item) => (
              <li key={item.href}>
                <a 
                  href={item.href} 
                  className="text-2xl text-gray-700 hover:text-pink-500 transition-all duration-300 hover:scale-110 font-medium relative group"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hire Me Button */}
        <div className="hidden lg:block ml-8">
          <a
            href="#contact"
            className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-3 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 hover:from-pink-600 hover:to-pink-700 transition-all duration-300 font-medium transform hover:-translate-y-1"
          >
            Let&apos;s talk ✨
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
