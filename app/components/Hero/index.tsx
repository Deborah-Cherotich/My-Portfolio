"use client";
import React, { useEffect, useState } from 'react';
import { FaLinkedinIn, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa'; 
import Image from 'next/image';

const jobTitles = [
  "A Frontend Developer.",
  "A Backend Developer.",
  "An Android Developer.",
  "A Product Manager.",
  "A UI/UX Designer.",
  "A Data Engineer.",
  "A Machine Learning Engineer."
];

const Hero = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
    }, 5000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <section className="bg-pink-50 min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-24 py-8 mb-40">
      <div className="md:w-1/2 space-y-6">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Hello, I&apos;m Deborah <br />
            <span className="text-5xl md:text-5xl text-blue-900 transition-opacity duration-500">
              {jobTitles[currentTitleIndex]}
            </span>
          </h1>
          <p className="text-black-500 text-lg md:text-2xl">
            I specialize in building responsive web and mobile applications that are scalable and efficient with a focus on delivering quality work that exceeds expectations.
          </p>
        </div>

        <div className="flex space-x-6 mt-6 justify-center md:justify-start">
          <a href="https://x.com/che_deborah" className="text-gray-800 hover:text-pink-500 transition duration-300">
            <FaTwitter size={24} /> 
          </a>
          <a href="https://www.linkedin.com/in/deborah-cherotich-1603342b7/" className="text-gray-800 hover:text-pink-500 transition duration-300">
            <FaLinkedinIn size={24} /> 
          </a>
          <a href="mailto:cherotichdeborahb@gmail.com" className="text-gray-800 hover:text-pink-500 transition duration-300">
            <FaEnvelope size={24} /> 
          </a>
          <a href="https://github.com/Deborah-Cherotich" className="text-gray-800 hover:text-pink-500 transition duration-300">
            <FaGithub size={24} /> 
          </a>
        </div>

        <a 
          href="/images/Deborah%20Cherotich%20Resume.pdf"
          download="Deborah Cherotich Resume.pdf" 
          className="inline-block bg-pink-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-pink-600 transition duration-300 self-center md:self-start"
        >
          Download CV
        </a>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <Image 
          src="/images/debz.jpg" 
          alt="Deborah Cherotich" 
          className="rounded-2xl w-full max-w-[400px] h-[50]" 
          width={600} 
          height={600} 
        />
      </div>
    </section>
  );
};

export default Hero;