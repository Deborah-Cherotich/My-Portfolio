import React from 'react';
import Image from 'next/image'; 

const About = () => {
  return (
    <section id="about" className="py-8 bg-white" style={{ fontFamily: "'Nunito', sans-serif" }}>
      <div className="container mx-auto px-4">
        
        {/* Section Title */}
        <div className="text-center mb-24">
          <h2 className="text-5xl font-bold text-black-500">About Me</h2>
          <p className="text-black-500 text-2xl mt-2">
            A motivated Fullstack Developer with a passion for learning and growth.
          </p>
          <div className="mt-2 h-1 w-16 bg-pink-500 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:space-x-16">
          {/* Image Section */}
          <div className="md:w-1/2 relative mb-8 md:mb-0">
            <div className="absolute -inset-4 border-4 border-pink-500 rounded-lg"></div>
            <Image
              src="/images/laptop.webp"
              alt="About Me"
              className="relative rounded-lg shadow-lg w-full h-auto"
              width={630} 
              height={630} 
            />
          </div>

          {/* Text Content */}
          <div className="md:w-1/2 flex flex-col items-center md:items-start space-y-6">
            <h3 className="text-4xl font-bold text-blue-900 text-center md:text-left">
              Passionate About Technology & Continuous Learning
            </h3>
            <p className="text-black-500 text-xl text-center md:text-left leading-relaxed">
              Hello, I&apos;m Deborah, a Passionate and motivated entry-level Fullstack Developer with a strong enthusiasm for coding and problem solving. 
              Although early in my software development journey, I&apos;m committed to building a strong foundation through self-learning and hands-on projects. With my skills, 
              I am eager to contribute, grow, and tackle real-world challenges.
            </p>

            <p className="text-black-500 text-xl text-center md:text-left leading-relaxed">
              I&apos;ve been refining my skills through personal projects, online courses, community involvement, and open-source contributions.
              My goal is to build scalable web and mobile applications that offer meaningful user experiences. I&apos;m excited to keep learning and
              growing in this field while collaborating with other developers to create impactful solutions.
            </p>

            <a href="#contact" className="inline-block bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition duration-300 shadow-md">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
