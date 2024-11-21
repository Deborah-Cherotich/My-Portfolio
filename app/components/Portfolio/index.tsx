import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

const Projects = () => {
  const projectItems = [
    {
      title : 'Investika',
      description : 'Investika is a mobile application aimed at teaching youth about investment and risk management through interactive questions focused on various types of investment risks.',
      link : 'https://github.com/Deborah-Cherotich/Vivosparks-Mobile',
      image:'/images/investika app.png',
      style: { width: '200px', height: '300px' }

    },
    {
      title: 'Apex Simulation',
      description : 'Apex is an e-learning platform with scenario-based simulations to train teachers of visually impaired students in assistive technologies, enhancing my technical skills and understanding of real-world educational challenges.',
      link : 'https://drive.google.com/drive/u/0/folders/1eYN6gWE5XIApgCSv_E_OUOFtkVsxT0dB',
      image :'/images/Apex.webp',
    },
    {
      title : 'Read It',
      description : 'Built an interactive web page for children to explore and enjoy a variety of books tailored to their interests, thoughtfully integrated with relaxing music to provide a calming and immersive reading experience.',
      link : 'https://read-it-storybooks.vercel.app/',
      image : '/images/readit.jpg',
    },
    {
      title: 'School',
      description: 'A school management system built with Django enables admins to track teachers, students, and courses, with data accessed and updated via JSON APIs.',
      link: 'https://github.com/Deborah-Cherotich/Django-class',
      image: '/images/school.jpeg', 
    },
    {
      title: 'Weather Forecast',
      description: 'A weather forecasting application built using React.js leveraging Weather API crafted to provide users with real-time weather updates by inputting a city name.',
      link: 'https://github.com/Deborah-Cherotich/React-Weather-app',
      image: '/images/weather.webp', 
    },
    {
      title: 'Enwallet',
      description: 'An app developed using Android Studio to help professionals track their cash flow effectively.',
      link: 'https://github.com/Deborah-Cherotich/EnwalletApp',
      image: '/images/wallet.jpeg', 
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projectItems.map((project, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 h-[400px] w-full">
              <Image
                src={project.image}
                alt={project.title}
                width={600} 
                height={300} 
                className="object-cover rounded-md mb-6 h-[200px] w-full"
              />
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold text-gray-800 hover:text-blue-500 transition-colors duration-300 flex items-center mb-4"
              >
                {project.title} <FaExternalLinkAlt className="ml-2" />
              </a>
              <p className="text-black-500 mb-4">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;