// import React from 'react';
// import { FaTwitter, FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <>
//       {/* Footer Section */}
//       <footer className="bg-gray-900 text-white py-10">
//         <div className="container mx-auto text-center">
//           {/* Social Media Icons */}
//           <div className="flex justify-center space-x-6 mb-6">
//             <a href="https://x.com/che_deborah" className="text-white hover:text-pink-500 transition-colors" target="_blank" rel="noopener noreferrer">
//               <FaTwitter size={24} />
//             </a>
//             <a href="https://github.com/Deborah-Cherotich" className="text-white hover:text-pink-500 transition-colors" target="_blank" rel="noopener noreferrer">
//               <FaGithub size={24} />
//             </a>
//             <a href="https://www.linkedin.com/in/deborah-cherotich-1603342b7/" className="text-white hover:text-pink-500 transition-colors" target="_blank" rel="noopener noreferrer">
//               <FaLinkedinIn size={24} />
//             </a>
//             <a href="mailto:cherotichdeborahb@gmail.com" className="text-white hover:text-pink-500 transition-colors">
//               <FaEnvelope size={24} />
//             </a>
//           </div>
//           {/* Email Address */}
//           <p className="text-lg text-gray-300 mb-4">cherotichdeborahb@gmail.com</p>
//           {/* Footer Text */}
//           <p className="text-gray-500 text-sm">&copy; 2024 My Portfolio</p>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;


import React from 'react';
import { FaTwitter, FaGithub, FaLinkedinIn, FaEnvelope, FaHeart, FaCode } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-pink-800 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Creative Tagline */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-pink-300/30">
            <FaCode className="text-pink-300 text-xl" />
            <span className="text-lg font-semibold text-pink-200">
              Tech Gal with Princess Energy 👑
            </span>
            <div className="w-1 h-1 bg-pink-400 rounded-full"></div>
            <span className="text-lg font-bold text-white">
              #TechForLife
            </span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-8 mb-6">
          <a 
            href="https://x.com/che_deborah" 
            className="text-pink-200 hover:text-white hover:scale-110 transition-all duration-300 transform hover:-translate-y-1"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaTwitter size={24} />
          </a>
          <a 
            href="https://github.com/Deborah-Cherotich" 
            className="text-pink-200 hover:text-white hover:scale-110 transition-all duration-300 transform hover:-translate-y-1"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/deborah-barasa-29071b351/" 
            className="text-pink-200 hover:text-white hover:scale-110 transition-all duration-300 transform hover:-translate-y-1"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaLinkedinIn size={24} />
          </a>
          <a 
            href="mailto:cherotichdeborah02@gmail.com" 
            className="text-pink-200 hover:text-white hover:scale-110 transition-all duration-300 transform hover:-translate-y-1"
          >
            <FaEnvelope size={24} />
          </a>
        </div>

        {/* Email */}
        <div className="text-center mb-6">
          <a 
            href="mailto:cherotichdeborah02@gmail.com"
            className="text-white hover:text-pink-300 transition-colors duration-300 text-lg font-medium"
          >
            cherotichdeborah02@gmail.com
          </a>
        </div>

        {/* Copyright with Creative Touch */}
        <div className="text-center">
          <p className="text-pink-200 text-lg flex items-center justify-center mb-2">
            Crafted with <FaHeart className="text-pink-400 mx-2 animate-pulse" /> by Deborah Barasa
          </p>
          <div className="flex items-center justify-center space-x-4 text-pink-200/80 text-sm">
            <span>✨ Building digital dreams</span>
            <div className="w-1 h-1 bg-pink-400 rounded-full"></div>
            <span>💻 Code & Creativity</span>
            <div className="w-1 h-1 bg-pink-400 rounded-full"></div>
            <span>🚀 Future Innovator</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;