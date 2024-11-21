import React from 'react';
import { FaTwitter, FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto text-center">
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://x.com/che_deborah" className="text-white hover:text-pink-500 transition-colors" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} />
            </a>
            <a href="https://github.com/Deborah-Cherotich" className="text-white hover:text-pink-500 transition-colors" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/deborah-cherotich-1603342b7/" className="text-white hover:text-pink-500 transition-colors" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn size={24} />
            </a>
            <a href="mailto:cherotichdeborahb@gmail.com" className="text-white hover:text-pink-500 transition-colors">
              <FaEnvelope size={24} />
            </a>
          </div>
          {/* Email Address */}
          <p className="text-lg text-gray-300 mb-4">cherotichdeborahb@gmail.com</p>
          {/* Footer Text */}
          <p className="text-gray-500 text-sm">&copy; 2024 My Portfolio</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
