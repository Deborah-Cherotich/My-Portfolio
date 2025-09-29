// import React from 'react';
// import { FaExternalLinkAlt } from 'react-icons/fa';
// import Image from 'next/image';

// const Projects = () => {
//   const projectItems = [
//     {
//       title : 'Investika',
//       description : 'Investika is a mobile application aimed at teaching youth about investment and risk management through interactive questions focused on various types of investment risks.',
//       link : 'https://github.com/Deborah-Cherotich/Vivosparks-Mobile',
//       image:'/images/investika app.png',
//       style: { width: '200px', height: '300px' }

//     },
//     {
//       title: 'Apex Simulation',
//       description : 'Apex is an e-learning platform with scenario-based simulations to train teachers of visually impaired students in assistive technologies, enhancing my technical skills and understanding of real-world educational challenges.',
//       link : 'https://drive.google.com/drive/u/0/folders/1eYN6gWE5XIApgCSv_E_OUOFtkVsxT0dB',
//       image :'/images/Apex.webp',
//     },
//     {
//       title : 'Read It',
//       description : 'Built an interactive web page for children to explore and enjoy a variety of books tailored to their interests, thoughtfully integrated with relaxing music to provide a calming and immersive reading experience.',
//       link : 'https://read-it-storybooks.vercel.app/',
//       image : '/images/readit.jpg',
//     },
//     {
//       title: 'School',
//       description: 'A school management system built with Django enables admins to track teachers, students, and courses, with data accessed and updated via JSON APIs.',
//       link: 'https://github.com/Deborah-Cherotich/Django-class',
//       image: '/images/school.jpeg', 
//     },
//     {
//       title: 'Weather Forecast',
//       description: 'A weather forecasting application built using React.js leveraging Weather API crafted to provide users with real-time weather updates by inputting a city name.',
//       link: 'https://github.com/Deborah-Cherotich/React-Weather-app',
//       image: '/images/weather.webp', 
//     },
//     {
//       title: 'Enwallet',
//       description: 'An app developed using Android Studio to help professionals track their cash flow effectively.',
//       link: 'https://github.com/Deborah-Cherotich/EnwalletApp',
//       image: '/images/wallet.jpeg', 
//     },
//   ];

//   return (
//     <section id="projects" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">My Projects</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
//           {projectItems.map((project, idx) => (
//             <div key={idx} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 h-[400px] w-full">
//               <Image
//                 src={project.image}
//                 alt={project.title}
//                 width={600} 
//                 height={300} 
//                 className="object-cover rounded-md mb-6 h-[200px] w-full"
//               />
//               <a
//                 href={project.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-2xl font-bold text-gray-800 hover:text-blue-500 transition-colors duration-300 flex items-center mb-4"
//               >
//                 {project.title} <FaExternalLinkAlt className="ml-2" />
//               </a>
//               <p className="text-black-500 mb-4">{project.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;


import React from 'react';
import { FaExternalLinkAlt, FaGithub, FaPlay, FaDownload, FaMobile } from 'react-icons/fa';
import Image from 'next/image';

const Projects = () => {
  const projectItems = [
    {
      title: 'Campus Assignment Portal',
      description: 'A platform that allows students to organize, track, and submit assignments efficiently with deadline reminders and progress tracking.',
      link: 'https://campus-assignment-portal.vercel.app',
      image: '/images/assignment-portal.png',
      type: '🌐 Web Platform',
      tech: ['PHP', 'MySQL', 'XAMPP', 'phpMyAdmin'],
      emoji: '📝',
      hasApk: false
    },
    {
      title: 'Talanta Web Platform',
      description: 'A career guidance website enabling students to explore career paths, access resources, and get personalized career recommendations.',
      link: 'https://github.com/Deborah-Cherotich/Talanta-Admin',
      image: '/images/talanta-platform.png',
      type: '💼 Career Platform',
      tech: ['Java', 'Vaadin', 'Spring Boot'],
      emoji: '🎯',
      hasApk: false
    },
    {
      title: 'Investika',
      description: 'A mobile app teaching youth about investment and risk management through interactive questions focused on various investment risks.',
      link: 'https://github.com/Deborah-Cherotich/Vivosparks-Mobile',
      apkLink: 'https://github.com/Deborah-Cherotich/Vivosparks-Mobile/releases/download/v1.0/investika.apk',
      image: '/images/investika app.png',
      type: '📱 Mobile App',
      tech: ['Android', 'Java'],
      emoji: '💰',
      hasApk: true
    },
    {
      title: 'Apex Simulation',
      description: 'An e-learning platform with scenario-based simulations to train teachers of visually impaired students in assistive technologies.',
      link: 'https://drive.google.com/drive/u/0/folders/1eYN6gWE5XIApgCSv_E_OUOFtkVsxT0dB',
      image: '/images/Apex.webp',
      type: '💻 Web Platform',
      tech: ['React', 'Node.js'],
      emoji: '👁️',
      hasApk: false
    },
    {
      title: 'Read It',
      description: 'An interactive web page for children to explore books with relaxing music for a calming and immersive reading experience.',
      link: 'https://read-it-storybooks.vercel.app/',
      image: '/images/readit.jpg',
      type: '🌐 Web App',
      tech: ['React', 'CSS3'],
      emoji: '📚',
      hasApk: false
    },
    {
      title: 'School Management',
      description: 'A school management system built with Django enabling admins to track teachers, students, and courses via JSON APIs.',
      link: 'https://github.com/Deborah-Cherotich/Django-class',
      image: '/images/school.jpeg',
      type: '⚙️ Backend System',
      tech: ['Django', 'Python'],
      emoji: '🏫',
      hasApk: false
    },
    {
      title: 'Digital Campaign App',
      description: 'A mobile application that enabled users to run awareness campaigns by posting videos, photos, and banners to engage audiences.',
      apkLink: 'https://expo.dev/accounts/milabee2/projects/sizemug/builds/a68dc224-5295-4651-8f8d-f4e42415c657',
      image: '/images/campaign-app.png',
      type: '📱 Mobile App',
      tech: ['React Native', 'Expo'],
      emoji: '📢',
      hasApk: true
    },
    {
      title: 'Enwallet',
      description: 'An Android app developed to help professionals track their cash flow effectively and manage finances.',
      link: 'https://github.com/Deborah-Cherotich/EnwalletApp',
      apkLink: 'https://github.com/Deborah-Cherotich/EnwalletApp/releases/download/v1.0/enwallet.apk',
      image: '/images/wallet.jpeg',
      type: '📱 Mobile App',
      tech: ['Android', 'Java'],
      emoji: '💳',
      hasApk: true
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50" style={{ fontFamily: "'Nunito', sans-serif" }}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-5xl font-bold text-pink-600 relative z-10">My Creative Projects 🎨</h2>
            <div className="absolute -bottom-2 left-0 w-full h-3 bg-pink-200 rounded-full z-0"></div>
          </div>
          <p className="text-gray-600 mt-4 text-xl max-w-2xl mx-auto">
            Here are some of the projects I've built with passion and creativity! Each one tells a unique story ✨
          </p>
          <div className="flex justify-center space-x-2 mt-4">
            <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectItems.map((project, idx) => (
            <div 
              key={idx} 
              className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-pink-100 overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-sm font-semibold text-gray-700 px-3 py-1 rounded-full">
                    {project.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4 text-2xl">
                  {project.emoji}
                </div>
                {project.hasApk && (
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                      <FaMobile className="mr-1" size={10} />
                      APK Available
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Title and Link */}
                <a
                  href={project.link || project.apkLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/title flex items-center justify-between mb-3"
                >
                  <h3 className="text-xl font-bold text-gray-800 group-hover/title:text-pink-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <FaExternalLinkAlt className="text-gray-400 group-hover/title:text-pink-500 transition-colors duration-300" />
                </a>

                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIdx) => (
                    <span 
                      key={techIdx}
                      className="bg-gradient-to-r from-pink-100 to-purple-100 text-pink-600 text-xs font-medium px-3 py-1 rounded-full border border-pink-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {/* Code/Live Demo Button */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/code flex-1 inline-flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-xl hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                      {project.type.includes('Web') || project.type.includes('Platform') || project.link.includes('vercel.app') ? (
                        <>
                          <FaPlay className="mr-2" />
                          Live Demo
                          <FaExternalLinkAlt className="ml-2 transform group-hover/code:translate-x-1 transition-transform duration-300" size={12} />
                        </>
                      ) : (
                        <>
                          <FaGithub className="mr-2" />
                          Code
                          <FaPlay className="ml-2 transform group-hover/code:translate-x-1 transition-transform duration-300" size={12} />
                        </>
                      )}
                    </a>
                  )}

                  {/* Download APK Button - Only for mobile apps with APK */}
                  {project.hasApk && (
                    <a
                      href={project.apkLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center ${
                        project.link ? 'px-4 flex-none' : 'flex-1'
                      } bg-gradient-to-r from-green-500 to-teal-500 text-white py-3 rounded-xl hover:from-green-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1`}
                    >
                      <FaDownload className={`${project.link ? 'mr-0' : 'mr-2'} group-hover:animate-bounce`} />
                      {!project.link && 'Download APK'}
                    </a>
                  )}

                  {/* Full width download button for apps without code link */}
                  {!project.link && project.hasApk && (
                    <a
                      href={project.apkLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-500 text-white py-3 rounded-xl hover:from-green-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                      <FaDownload className="mr-2 group-hover:animate-bounce" />
                      Download APK
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 text-gray-600">
            <div className="w-8 h-1 bg-pink-300 rounded-full"></div>
            <span className="text-lg">More amazing projects coming soon! 🚀</span>
            <div className="w-8 h-1 bg-pink-300 rounded-full"></div>
          </div>
          <div className="mt-4 text-sm text-gray-500 flex flex-col items-center space-y-2">
            <span className="inline-flex items-center">
              <FaMobile className="mr-2 text-green-500" />
              Mobile apps include APK downloads for testing
            </span>
            <span className="inline-flex items-center text-xs">
              🛠️ Built with diverse tech stacks: PHP, Java, React, Python & more!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;