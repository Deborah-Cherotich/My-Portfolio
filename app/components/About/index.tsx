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
                  I'm <span className="font-semibold text-pink-600">Deborah Barasa</span>, a passionate fullstack developer dedicated to building innovative digital solutions. My journey combines technical expertise with creative problem-solving.
                </p>

                <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                  I specialize in creating <span className="font-semibold text-blue-600">scalable applications</span> that deliver exceptional user experiences. Through continuous learning and hands-on projects, I've mastered modern development practices.
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