"use client";

import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-100 pt-8 shadow-sm">
      <div className="container flex justify-between items-center relative px-12 md:px-16">
        {/* Name with curvy font */}
        <div className="mr-8">
          <p
            className="text-[44px] text-pink-500 font-serif font-bold ml-7"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            <i>Deborah Cherotich</i>
          </p>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {isOpen ? (
            <MdClose size={30} className="text-pink-500" />
          ) : (
            <MdMenu size={30} className="text-pink-500" />
          )}
        </div>

        {/* Navigation Menu */}
        <nav
          className={`absolute md:static top-16 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-transform duration-300 ease-in-out z-10 ${
            isOpen ? "block" : "hidden md:block"
          }`}
        >
          <ul className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-10 py-4 md:py-0">
            <li>
              <a href="#about" className="hover:text-pink-500 text-2xl">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-pink-500 text-2xl">
                Services
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-pink-500 text-2xl">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-pink-500 text-2xl">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Hire Me Button */}
        <div className="hidden lg:block ml-8">
          <a
            href="#contact"
            className="bg-pink-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-pink-600 transition duration-300"
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;