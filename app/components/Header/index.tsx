// "use client";

// import React, { useState } from "react";
// import { MdMenu, MdClose } from "react-icons/md";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <header className="bg-gray-100 pt-8 shadow-sm">
//       <div className="container flex justify-between items-center relative px-12 md:px-16">
//         {/* Name with curvy font */}
//         <div className="mr-8">
//           <p
//             className="text-[44px] text-pink-500 font-serif font-bold ml-7"
//             style={{ fontFamily: "'Dancing Script', cursive" }}
//           >
//             <i>Deborah Barasa</i>
//           </p>
//         </div>

//         {/* Hamburger Menu Icon */}
//         <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
//           {isOpen ? (
//             <MdClose size={30} className="text-pink-500" />
//           ) : (
//             <MdMenu size={30} className="text-pink-500" />
//           )}
//         </div>

//         {/* Navigation Menu */}
//         <nav
//           className={`absolute md:static top-16 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-transform duration-300 ease-in-out z-10 ${
//             isOpen ? "block" : "hidden md:block"
//           }`}
//         >
//           <ul className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-10 py-4 md:py-0">
//             <li>
//               <a href="#about" className="hover:text-pink-500 text-2xl">
//                 About
//               </a>
//             </li>
//             <li>
//               <a href="#services" className="hover:text-pink-500 text-2xl">
//                 Services
//               </a>
//             </li>
//             <li>
//               <a href="#projects" className="hover:text-pink-500 text-2xl">
//                 Portfolio
//               </a>
//             </li>
//             <li>
//               <a href="#contact" className="hover:text-pink-500 text-2xl">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </nav>

//         {/* Hire Me Button */}
//         <div className="hidden lg:block ml-8">
//           <a
//             href="#contact"
//             className="bg-pink-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-pink-600 transition duration-300"
//           >
//             Hire Me
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


// "use client";

// import React, { useState } from "react";
// import { MdMenu, MdClose } from "react-icons/md";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <header className="bg-gradient-to-r from-pink-50 to-white pt-8 shadow-lg border-b border-pink-100">
//       <div className="container flex justify-between items-center relative px-6 md:px-16">
//         {/* Name with enhanced styling */}
//         <div className="mr-8">
//           <p
//             className="text-[44px] bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent font-serif font-bold ml-4 md:ml-7 drop-shadow-sm hover:scale-105 transition-transform duration-300"
//             style={{ fontFamily: "'Dancing Script', cursive" }}
//           >
//             <i>Deborah Barasa</i>
//           </p>
//         </div>

//         {/* Hamburger Menu Icon */}
//         <div className="md:hidden cursor-pointer p-2 rounded-full hover:bg-pink-100 transition-colors duration-200" onClick={toggleMenu}>
//           {isOpen ? (
//             <MdClose size={30} className="text-pink-500 hover:text-pink-600 transition-colors" />
//           ) : (
//             <MdMenu size={30} className="text-pink-500 hover:text-pink-600 transition-colors" />
//           )}
//         </div>

//         {/* Navigation Menu */}
//         <nav
//           className={`absolute md:static top-20 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-2xl md:shadow-none rounded-2xl md:rounded-none mx-4 md:mx-0 transition-all duration-300 ease-in-out z-10 backdrop-blur-sm bg-white/95 ${
//             isOpen ? "block animate-fadeIn" : "hidden md:block"
//           }`}
//         >
//           <ul className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12 py-6 md:py-0">
//             {[
//               { href: "#about", label: "About" },
//               { href: "#services", label: "Services" },
//               { href: "#projects", label: "Portfolio" },
//               { href: "#contact", label: "Contact" }
//             ].map((item) => (
//               <li key={item.href}>
//                 <a 
//                   href={item.href} 
//                   className="text-2xl text-gray-700 hover:text-pink-500 transition-all duration-300 hover:scale-110 font-medium relative group"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {item.label}
//                   <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-400 group-hover:w-full transition-all duration-300"></span>
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* Hire Me Button */}
//         <div className="hidden lg:block ml-8">
//           <a
//             href="#contact"
//             className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-3 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 hover:from-pink-600 hover:to-pink-700 transition-all duration-300 font-medium transform hover:-translate-y-1"
//           >
//             Let's talk ✨
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;



"use client";

import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-pink-50 to-white pt-8 shadow-lg border-b border-pink-100">
      <div className="container flex justify-between items-center relative px-6 md:px-16">
        {/* Name with dancing dots */}
        <div className="flex items-center space-x-4">
          {/* Dancing Dots */}
          <div className="flex flex-col space-y-1">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            </div>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
            </div>
          </div>
          
          {/* Name */}
          <p
            className="text-[44px] bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent font-serif font-bold drop-shadow-sm hover:scale-105 transition-transform duration-300"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            <i>Deborah Barasa</i>
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
            Let's talk ✨
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;