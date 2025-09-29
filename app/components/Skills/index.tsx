// import React from 'react';
// import { FaLaptopCode, FaMobileAlt, FaServer, FaCloud, FaDatabase, FaProductHunt, FaPaintBrush, FaSearch } from 'react-icons/fa';

// const Skills = () => {
//   const courses = [
//     {
//       category: 'Frontend Development',
//       icon: <FaLaptopCode size={40} className="text-blue-600" />,
//       topics: [
//         'Implementing Dom Manipulation in JavaScript',
//         'Consuming Restful APIs using fetch and Axios',
//         'Multi-Device Layout Optimization',
//       ],
//       progressLabel: 'Proficient',
//       progressValue: '90%', 
//     },
//     {
//       category: 'Mobile Development',
//       icon: <FaMobileAlt size={40} className="text-green-500" />,
//       topics: [
//         'Manipulating Layouts in Code',
//         'Event-Driven Programming Concepts',
//         'Network Integration with Retrofit',
//         'Using Room for Database Management',
//       ],
//       progressLabel: 'Intermediate',
//       progressValue: '75%', 
//     },
//     {
//       category: 'Backend Development',
//       icon: <FaServer size={40} className="text-purple-600" />,
//       topics: [
//         'Web Development with Django',
//         'Implementing RESTful APIs with Django Rest Framework',
//       ],
//       progressLabel: 'Proficient',
//       progressValue: '85%', 
//     },
//     {
//       category: 'Cloud Infrastructure',
//       icon: <FaCloud size={40} className="text-indigo-500" />,
//       topics: ['Containerization with Docker'],
//       progressLabel: 'Intermediate',
//       progressValue: '70%', 
//     },
//     {
//       category: 'Data and Software Architecture',
//       icon: <FaDatabase size={40} className="text-yellow-600" />,
//       topics: [
//         'Data Collection Methodologies',
//         'SQL Essentials & Joins',
//         'System Architecture Models',
//         'Database Design and Modeling',
//       ],
//       progressLabel: 'Proficient',
//       progressValue: '85%', 
//     },
//     {
//       category: 'Product Management',
//       icon: <FaProductHunt size={40} className="text-pink-500" />,
//       topics: [
//         'Customer Persona Development',
//         'Product Lifecycle Management',
//         'Data-Driven Decision Making',
//         'Product Market Fit Analysis & Strategies',
//       ],
//       progressLabel: 'Intermediate',
//       progressValue: '75%', 
//     },
//     {
//       category: 'UX/UI Design',
//       icon: <FaPaintBrush size={40} className="text-teal-500" />,
//       topics: [
//         'Visual Design Principles Understanding',
//         'Interactive prototypes to test and validate design ideas',
//         'Adobe Illustrator, Adobe Photoshop, and Figjam as Graphic Design Software',
//         'Color Psychology and Mood Boards',
//       ],
//       progressLabel: 'Advanced',
//       progressValue: '95%', 
//     },
//     {
//       category: 'UX Research',
//       icon: <FaSearch size={40} className="text-red-500" />,
//       topics: [
//         'Research Methodologies',
//         'Planning and conducting Usability Testing',
//         'Human-Centered Design Processes',
//         'User Research Analysis and Synthesis',
//       ],
//       progressLabel: 'Proficient',
//       progressValue: '85%', 
//     },
//   ];

//   return (
//     <section id="courses" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <h2 className="text-5xl font-bold text-center text-black-500 mb-16">Skills</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
//           {courses.map((course, idx) => (
//             <div key={idx} className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
//               <div className="flex items-center mb-6">
//                 {course.icon}
//                 <h3 className="text-2xl font-bold ml-4 text-black-500">{course.category}</h3>
//               </div>
//               <ul className="text-black-500 mb-6 list-disc ml-8">
//                 {course.topics.map((topic, index) => (
//                   <li key={index} className="text-lg mb-2">{topic}</li>
//                 ))}
//               </ul>
//               <div className="relative pt-1">
//                 <div className="overflow-hidden h-3 mb-4 text-xs flex rounded bg-gray-200">
//                   <div
//                     style={{ width: course.progressValue }}
//                     className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-pink-500 to-purple-500"
//                   ></div>
//                 </div>
//                 <span className="font-bold text-black-500 text-lg">{course.progressLabel}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;


import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaServer, FaCloud, FaDatabase, FaProductHunt, FaPaintBrush, FaSearch } from 'react-icons/fa';

const Skills = () => {
  const courses = [
    {
      category: 'Frontend Development',
      icon: <FaLaptopCode className="text-blue-500 group-hover:text-white transition-colors duration-300" />,
      topics: [
        'Implementing Dom Manipulation in JavaScript',
        'Consuming Restful APIs using fetch and Axios',
        'Multi-Device Layout Optimization',
      ],
      progressLabel: 'Proficient',
      progressValue: 90,
      emoji: '🎨'
    },
    {
      category: 'Mobile Development',
      icon: <FaMobileAlt className="text-green-500 group-hover:text-white transition-colors duration-300" />,
      topics: [
        'Manipulating Layouts in Code',
        'Event-Driven Programming Concepts',
        'Network Integration with Retrofit',
        'Using Room for Database Management',
      ],
      progressLabel: 'Intermediate',
      progressValue: 75,
      emoji: '📱'
    },
    {
      category: 'Backend Development',
      icon: <FaServer className="text-purple-500 group-hover:text-white transition-colors duration-300" />,
      topics: [
        'Web Development with Django',
        'Implementing RESTful APIs with Django Rest Framework',
      ],
      progressLabel: 'Proficient',
      progressValue: 85,
      emoji: '⚙️'
    },
    {
      category: 'Cloud Infrastructure',
      icon: <FaCloud className="text-indigo-500 group-hover:text-white transition-colors duration-300" />,
      topics: ['Containerization with Docker'],
      progressLabel: 'Intermediate',
      progressValue: 70,
      emoji: '☁️'
    },
    {
      category: 'Data and Software Architecture',
      icon: <FaDatabase className="text-yellow-500 group-hover:text-white transition-colors duration-300" />,
      topics: [
        'Data Collection Methodologies',
        'SQL Essentials & Joins',
        'System Architecture Models',
        'Database Design and Modeling',
      ],
      progressLabel: 'Proficient',
      progressValue: 85,
      emoji: '🏗️'
    },
    {
      category: 'Product Management',
      icon: <FaProductHunt className="text-pink-500 group-hover:text-white transition-colors duration-300" />,
      topics: [
        'Customer Persona Development',
        'Product Lifecycle Management',
        'Data-Driven Decision Making',
        'Product Market Fit Analysis & Strategies',
      ],
      progressLabel: 'Intermediate',
      progressValue: 75,
      emoji: '📊'
    },
    {
      category: 'UX/UI Design',
      icon: <FaPaintBrush className="text-teal-500 group-hover:text-white transition-colors duration-300" />,
      topics: [
        'Visual Design Principles Understanding',
        'Interactive prototypes to test and validate design ideas',
        'Adobe Illustrator, Adobe Photoshop, and Figjam as Graphic Design Software',
        'Color Psychology and Mood Boards',
      ],
      progressLabel: 'Advanced',
      progressValue: 95,
      emoji: '✨'
    },
    {
      category: 'UX Research',
      icon: <FaSearch className="text-red-400 group-hover:text-white transition-colors duration-300" />,
      topics: [
        'Research Methodologies',
        'Planning and conducting Usability Testing',
        'Human-Centered Design Processes',
        'User Research Analysis and Synthesis',
      ],
      progressLabel: 'Proficient',
      progressValue: 85,
      emoji: '🔍'
    },
  ];

  const getProgressColor = (value: number) => {
    if (value >= 90) return 'from-green-400 to-teal-500';
    if (value >= 80) return 'from-blue-400 to-purple-500';
    if (value >= 70) return 'from-pink-400 to-purple-500';
    return 'from-yellow-400 to-orange-500';
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50" style={{ fontFamily: "'Nunito', sans-serif" }}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-5xl font-bold text-pink-600 relative z-10">My Skills & Expertise 🛠️</h2>
            <div className="absolute -bottom-2 left-0 w-full h-3 bg-pink-200 rounded-full z-0"></div>
          </div>
          <p className="text-gray-600 mt-4 text-xl max-w-2xl mx-auto">
            Here's what I can bring to your project! Each skill comes with hands-on experience and passion 💫
          </p>
          <div className="flex justify-center space-x-2 mt-4">
            <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <div 
              key={idx} 
              className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-500"
            >
              {/* Header with Icon and Title */}
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl group-hover:bg-white/20 transition-colors duration-300">
                  <div className="text-4xl">
                    {course.icon}
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300">
                    {course.category}
                  </h3>
                  <span className="text-2xl">{course.emoji}</span>
                </div>
              </div>

              {/* Topics List */}
              <ul className="text-gray-600 mb-6 space-y-3 group-hover:text-white/90 transition-colors duration-300">
                {course.topics.map((topic, index) => (
                  <li key={index} className="flex items-start text-lg">
                    <span className="text-pink-500 group-hover:text-white mr-2 mt-1">•</span>
                    {topic}
                  </li>
                ))}
              </ul>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700 group-hover:text-white transition-colors duration-300">
                    {course.progressLabel}
                  </span>
                  <span className="text-sm font-bold text-gray-600 group-hover:text-white transition-colors duration-300">
                    {course.progressValue}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 group-hover:bg-white/30 transition-colors duration-300">
                  <div 
                    className={`h-3 rounded-full bg-gradient-to-r ${getProgressColor(course.progressValue)} transition-all duration-1000 ease-out group-hover:shadow-lg`}
                    style={{ width: `${course.progressValue}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 text-gray-600">
            <div className="w-8 h-1 bg-pink-300 rounded-full"></div>
            <span className="text-lg">Always learning and growing! 🌱</span>
            <div className="w-8 h-1 bg-pink-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;