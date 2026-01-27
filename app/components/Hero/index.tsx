// "use client";
// import React, { useEffect, useState } from 'react';
// import { FaLinkedinIn, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa'; 
// import Image from 'next/image';

// const jobTitles = [
//   "A Frontend Developer.",
//   "A Backend Developer.",
//   "An Android Developer.",
//   "A Product Manager.",
//   "A UI/UX Designer.",
//   "A Data Engineer.",
//   "A Machine Learning Engineer."
// ];

// const Hero = () => {
//   const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
//     }, 5000);

//     return () => clearInterval(interval); 
//   }, []);

//   return (
//     <section className="bg-pink-50 min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-24 py-8 mb-40">
//       <div className="md:w-1/2 space-y-6">
//         <div className="space-y-6">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
//           Hello, I&#39;m Deborah <br />
//           <span className="text-5xl md:text-5xl text-blue-900 transition-opacity duration-500">
//               {jobTitles[currentTitleIndex]}
//             </span>
//           </h1>
//           <p className="text-black-500 text-lg md:text-2xl">
//             I specialize in building responsive web and mobile applications that are scalable and efficient with a focus on delivering quality work that exceeds expectations.
//           </p>
//         </div>

//         <div className="flex space-x-6 mt-6 justify-center md:justify-start">
//           <a href="https://x.com/che_deborah" className="text-gray-800 hover:text-pink-500 transition duration-300">
//             <FaTwitter size={24} /> 
//           </a>
//           <a href="https://www.linkedin.com/in/deborah-cherotich-1603342b7/" className="text-gray-800 hover:text-pink-500 transition duration-300">
//             <FaLinkedinIn size={24} /> 
//           </a>
//           <a href="mailto:cherotichdeborahb@gmail.com" className="text-gray-800 hover:text-pink-500 transition duration-300">
//             <FaEnvelope size={24} /> 
//           </a>
//           <a href="https://github.com/Deborah-Cherotich" className="text-gray-800 hover:text-pink-500 transition duration-300">
//             <FaGithub size={24} /> 
//           </a>
//         </div>

//         <a 
//           href="/images/Deborah%20Cherotich%20Resume.pdf"
//           download="Deborah Barasa Resume.pdf" 
//           className="inline-block bg-pink-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-pink-600 transition duration-300 self-center md:self-start"
//         >
//           Download CV
//         </a>
//       </div>

//       {/* Image Section */}
//       <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
//         <Image 
//           src="/images/debz.jpg" 
//           alt="Deborah Cherotich" 
//           className="rounded-2xl w-full max-w-[400px] h-[50]" 
//           width={600} 
//           height={600} 
//         />
//       </div>
//     </section>
//   );
// };

// export default Hero;

// "use client";
// import React, { useEffect, useState } from 'react';
// import { FaLinkedinIn, FaGithub, FaTwitter, FaEnvelope, FaDownload } from 'react-icons/fa'; 
// import Image from 'next/image';

// const jobTitles = [
//   "Product Manager.",
//   "Frontend Developer.",
//   "Backend Developer.",
//   "Android Developer.",
//   "UI/UX Designer.",
//   "Data Engineer.",
//   "Machine Learning Engineer."
// ];

// const Hero = () => {
//   const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
//     }, 5000);

//     return () => clearInterval(interval); 
//   }, []);

//   return (
//     <section className="bg-gradient-to-br from-pink-50 via-white to-blue-50 min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-24 py-12 md:py-20">
//       {/* Text Content */}
//       <div className="md:w-1/2 space-y-8 order-2 md:order-1">
//         <div className="space-y-6">
//           {/* Greeting and Name - Matches screenshot layout */}
//           <div className="mb-6">
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
//               Hello, I'm <span className="text-pink-500">Deborah.</span>
//             </h1>
//           </div>
          
//           {/* Animated Job Title with color transition */}
//           <div className="h-20 md:h-24 flex items-center mb-6">
//             <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-blue-600 bg-clip-text text-transparent transition-all duration-1000">
//               {jobTitles[currentTitleIndex]}
//             </span>
//           </div>

//           {/* Description */}
//           <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
//             I specialize in building responsive web and mobile applications that are scalable and efficient with a focus on delivering quality work that exceeds expectations.
//           </p>
//         </div>

//         {/* Social Links */}
//         <div className="flex space-x-5 mt-8 justify-center md:justify-start">
//           {[
//             { href: "https://x.com/che_deborah", icon: <FaTwitter size={24} />, label: "Twitter" },
//             { href: "https://www.linkedin.com/in/deborah-cherotich-1603342b7/", icon: <FaLinkedinIn size={24} />, label: "LinkedIn" },
//             { href: "mailto:cherotichdeborahb@gmail.com", icon: <FaEnvelope size={24} />, label: "Email" },
//             { href: "https://github.com/Deborah-Cherotich", icon: <FaGithub size={24} />, label: "GitHub" }
//           ].map((social) => (
//             <a
//               key={social.label}
//               href={social.href}
//               className="bg-white text-gray-700 p-3 rounded-xl shadow-md hover:shadow-lg hover:bg-pink-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
//               aria-label={social.label}
//             >
//               {social.icon}
//             </a>
//           ))}
//         </div>

//         {/* Download CV Button */}
//         <div className="flex justify-center md:justify-start mt-8">
//           <a 
//             href="/images/Deborah%20Cherotich%20Resume.pdf"
//             download="Deborah Barasa Resume.pdf" 
//             className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:from-pink-600 hover:to-pink-700 transition-all duration-300 text-base font-medium"
//           >
//             <FaDownload className="text-lg" />
//             Download CV
//           </a>
//         </div>
//       </div>

//       {/* Image Section */}
//       <div className="md:w-1/2 mb-12 md:mb-0 flex justify-center order-1 md:order-2">
//         <div className="relative">
//           <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 to-blue-400 rounded-3xl blur-lg opacity-20"></div>
//           <Image 
//             src="/images/debz.jpg" 
//             alt="Deborah Barasa" 
//             className="relative rounded-2xl w-full max-w-md md:max-w-lg shadow-xl"
//             width={500} 
//             height={500} 
//             priority
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-br from-pink-50 via-white to-blue-50 min-h-screen flex items-center justify-center px-6 md:px-24 py-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className={`space-y-8 transition-all duration-700 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
          {/* Greeting and Name */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
              Hello, I'm <span className="text-pink-500">Deborah</span>
            </h1>

            {/* Animated Job Title */}
            <div className="h-16 flex items-center">
              <div className="relative">
                <span className="text-3xl md:text-4xl font-bold text-gray-700">
                  I'm a{' '}
                  <span className="bg-gradient-to-r from-pink-500 to-blue-600 bg-clip-text text-transparent transition-all duration-500">
                    {jobTitles[currentTitleIndex]}
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
