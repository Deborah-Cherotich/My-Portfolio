// import React from 'react';
// import Image from 'next/image'; 

// const About = () => {
//   return (
//     <section id="about" className="py-8 bg-white" style={{ fontFamily: "'Nunito', sans-serif" }}>
//       <div className="container mx-auto px-4">
        
//         {/* Section Title */}
//         <div className="text-center mb-24">
//           <h2 className="text-5xl font-bold text-black-500">About Me</h2>
//           <p className="text-black-500 text-2xl mt-2">
//             A motivated Fullstack Developer with a passion for learning and growth.
//           </p>
//           <div className="mt-2 h-1 w-16 bg-pink-500 mx-auto"></div>
//         </div>

//         <div className="flex flex-col md:flex-row items-center md:space-x-16">
//           {/* Image Section */}
//           <div className="md:w-1/2 relative mb-8 md:mb-0">
//             <div className="absolute -inset-4 border-4 border-pink-500 rounded-lg"></div>
//             <Image
//               src="/images/laptop.webp"
//               alt="About Me"
//               className="relative rounded-lg shadow-lg w-full h-auto"
//               width={630} 
//               height={630} 
//             />
//           </div>

//           {/* Text Content */}
//           <div className="md:w-1/2 flex flex-col items-center md:items-start space-y-6">
//             <h3 className="text-4xl font-bold text-blue-900 text-center md:text-left">
//               Passionate About Technology & Continuous Learning
//             </h3>
//             <p className="text-black-500 text-xl text-center md:text-left leading-relaxed">
//               Hello, I&apos;m Deborah, a Passionate and motivated entry-level Fullstack Developer with a strong enthusiasm for coding and problem solving. 
//               Although early in my software development journey, I&apos;m committed to building a strong foundation through self-learning and hands-on projects. With my skills, 
//               I am eager to contribute, grow, and tackle real-world challenges.
//             </p>

//             <p className="text-black-500 text-xl text-center md:text-left leading-relaxed">
//               I&apos;ve been refining my skills through personal projects, online courses, community involvement, and open-source contributions.
//               My goal is to build scalable web and mobile applications that offer meaningful user experiences. I&apos;m excited to keep learning and
//               growing in this field while collaborating with other developers to create impactful solutions.
//             </p>

//             <a href="#contact" className="inline-block bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition duration-300 shadow-md">
//               Contact Me
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


// import React from 'react';
// import Image from 'next/image'; 

// const About = () => {
//   return (
//     <section id="about" className="py-16 bg-gradient-to-br from-pink-50 to-blue-50" style={{ fontFamily: "'Nunito', sans-serif" }}>
//       <div className="container mx-auto px-4">
        
//         {/* Section Title */}
//         <div className="text-center mb-16">
//           <div className="inline-block relative">
//             <h2 className="text-5xl font-bold text-pink-600 relative z-10">About Me 🦋</h2>
//             <div className="absolute -bottom-2 left-0 w-full h-3 bg-pink-200 rounded-full z-0"></div>
//           </div>
//           <p className="text-gray-600 text-xl mt-4 max-w-2xl mx-auto">
//             A passionate Fullstack Developer who loves creating digital magic ✨
//           </p>
//           <div className="flex justify-center space-x-2 mt-4">
//             <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce"></div>
//             <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
//             <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
//           </div>
//         </div>

//         <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-12">
//           {/* Image Section - Moved down */}
//           <div className="lg:w-2/5 relative mb-10 lg:mb-0 lg:mt-8">
//             <div className="relative group">
//               {/* Decorative elements */}
//               <div className="absolute -top-4 -left-4 w-10 h-10 bg-yellow-300 rounded-full opacity-70 group-hover:scale-110 transition-transform"></div>
//               <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-blue-300 rounded-full opacity-70 group-hover:scale-110 transition-transform"></div>
              
//               {/* Main image with cute frame */}
//               <div className="relative z-10 transform group-hover:-translate-y-2 transition-all duration-300">
//                 <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
//                 <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
//                   <Image
//                     src="/images/laptop.webp"
//                     alt="Deborah - Fullstack Developer"
//                     className="w-full h-auto transform group-hover:scale-105 transition duration-500"
//                     width={600}
//                     height={600}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Text Content */}
//           <div className="lg:w-3/5 flex flex-col items-center lg:items-start space-y-8">
//             <div className="relative">
//               <h3 className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-600 text-center lg:text-left">
//                 Passionate About Technology & Continuous Learning 🌟
//               </h3>
//               <div className="hidden lg:block absolute -right-8 top-2 text-2xl">👩‍💻</div>
//             </div>
            
//             <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-pink-100 transform hover:shadow-xl transition-all duration-300">
//               <p className="text-gray-700 text-xl leading-relaxed">
//                 Hello! I'm <span className="font-semibold text-pink-600">Deborah</span>, a passionate fullstack developer with a strong enthusiasm for coding and creative problem-solving. While I'm early in my professional journey, I'm deeply committed to building a solid foundation through self-learning, hands-on projects, and open-source contributions. I love creating scalable web and mobile applications that offer meaningful user experiences, and I'm excited to collaborate with other developers to build impactful solutions. I believe in continuous growth and can't wait to tackle real-world challenges! 🚀
//               </p>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4 mt-2">
//               <a href="#contact" className="group relative inline-flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
//                 <span className="font-semibold text-lg">Contact Me 💌</span>
//                 <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
//               </a>
              
//               <a href="#projects" className="group inline-flex items-center justify-center border-2 border-pink-400 text-pink-600 px-8 py-4 rounded-full hover:bg-pink-50 transition-all duration-300 shadow-md">
//                 <span className="font-semibold text-lg">See My Work 🎨</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React from 'react';
import Image from 'next/image'; 

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-blue-50/30" style={{ fontFamily: "'Nunito', sans-serif" }}>
      <div className="container mx-auto px-4">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-block relative mb-6">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 relative z-10">About Me</h2>
            <div className="absolute -bottom-3 left-0 w-full h-2 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full z-0"></div>
          </div>
          <p className="text-gray-600 text-xl md:text-2xl mt-6 max-w-3xl mx-auto leading-relaxed">
            Passionate Fullstack Developer crafting digital solutions that make an impact
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image Section - Tilted Left */}
          <div className="relative lg:order-2">
            <div className="relative group">
              {/* Tilted image container - opposite direction */}
              <div className="relative z-10 transform group-hover:-translate-y-2 transition-all duration-500 -rotate-3 group-hover:-rotate-6">
                <div className="absolute -inset-8 bg-gradient-to-br from-pink-400/20 to-blue-400/20 rounded-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 rotate-3"></div>
                <div className="relative rounded-2xl overflow-hidden border-8 border-white shadow-2xl">
                  <Image
                    src="/images/laptop.webp"
                    alt="Deborah Barasa - Fullstack Developer at work"
                    className="w-full h-auto transform group-hover:scale-105 transition duration-700"
                    width={700}
                    height={700}
                  />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-8 -right-8 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-400/20 rounded-full blur-lg group-hover:scale-125 transition-transform duration-500"></div>
            </div>
          </div>

          {/* Text Content - Reduced */}
          <div className="space-y-8 lg:order-1">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                Crafting Digital <span className="bg-gradient-to-r from-pink-500 to-blue-600 bg-clip-text text-transparent">Experiences</span>
              </h3>
              
              <div className="space-y-6">
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                  I&apos;m <span className="font-semibold text-pink-600">Deborah Barasa</span>, a passionate fullstack developer dedicated to building innovative digital solutions. My journey combines technical expertise with creative problem-solving.
                </p>
                
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                  I specialize in creating <span className="font-semibold text-blue-600">scalable applications</span> that deliver exceptional user experiences. Through continuous learning and hands-on projects, I&apos;ve mastered modern development practices.
                </p>
              </div>
            </div>

            {/* Key Focus Areas - Simplified */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { icon: "💻", text: "Fullstack" },
                { icon: "📱", text: "Mobile" },
                { icon: "🎨", text: "UI/UX" },
                { icon: "🚀", text: "Scalable" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white/50 rounded-xl p-3 border border-gray-100 hover:border-pink-200 transition-colors duration-300">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-gray-700 font-medium text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a href="#contact" className="group inline-flex items-center justify-center bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-3 rounded-xl hover:from-pink-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold">
                <span>Get In Touch</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
              
              <a href="#projects" className="group inline-flex items-center justify-center border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl hover:border-pink-400 hover:text-pink-600 hover:bg-pink-50 transition-all duration-300 font-semibold">
                <span>View Work</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;