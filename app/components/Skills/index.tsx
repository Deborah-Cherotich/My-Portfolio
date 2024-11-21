import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaServer, FaCloud, FaDatabase, FaProductHunt, FaPaintBrush, FaSearch } from 'react-icons/fa';

const Skills = () => {
  const courses = [
    {
      category: 'Frontend Development',
      icon: <FaLaptopCode size={40} className="text-blue-600" />,
      topics: [
        'Implementing Dom Manipulation in JavaScript',
        'Consuming Restful APIs using fetch and Axios',
        'Multi-Device Layout Optimization',
      ],
      progressLabel: 'Proficient',
      progressValue: '90%', 
    },
    {
      category: 'Mobile Development',
      icon: <FaMobileAlt size={40} className="text-green-500" />,
      topics: [
        'Manipulating Layouts in Code',
        'Event-Driven Programming Concepts',
        'Network Integration with Retrofit',
        'Using Room for Database Management',
      ],
      progressLabel: 'Intermediate',
      progressValue: '75%', 
    },
    {
      category: 'Backend Development',
      icon: <FaServer size={40} className="text-purple-600" />,
      topics: [
        'Web Development with Django',
        'Implementing RESTful APIs with Django Rest Framework',
      ],
      progressLabel: 'Proficient',
      progressValue: '85%', 
    },
    {
      category: 'Cloud Infrastructure',
      icon: <FaCloud size={40} className="text-indigo-500" />,
      topics: ['Containerization with Docker'],
      progressLabel: 'Intermediate',
      progressValue: '70%', 
    },
    {
      category: 'Data and Software Architecture',
      icon: <FaDatabase size={40} className="text-yellow-600" />,
      topics: [
        'Data Collection Methodologies',
        'SQL Essentials & Joins',
        'System Architecture Models',
        'Database Design and Modeling',
      ],
      progressLabel: 'Proficient',
      progressValue: '85%', 
    },
    {
      category: 'Product Management',
      icon: <FaProductHunt size={40} className="text-pink-500" />,
      topics: [
        'Customer Persona Development',
        'Product Lifecycle Management',
        'Data-Driven Decision Making',
        'Product Market Fit Analysis & Strategies',
      ],
      progressLabel: 'Intermediate',
      progressValue: '75%', 
    },
    {
      category: 'UX/UI Design',
      icon: <FaPaintBrush size={40} className="text-teal-500" />,
      topics: [
        'Visual Design Principles Understanding',
        'Interactive prototypes to test and validate design ideas',
        'Adobe Illustrator, Adobe Photoshop, and Figjam as Graphic Design Software',
        'Color Psychology and Mood Boards',
      ],
      progressLabel: 'Advanced',
      progressValue: '95%', 
    },
    {
      category: 'UX Research',
      icon: <FaSearch size={40} className="text-red-500" />,
      topics: [
        'Research Methodologies',
        'Planning and conducting Usability Testing',
        'Human-Centered Design Processes',
        'User Research Analysis and Synthesis',
      ],
      progressLabel: 'Proficient',
      progressValue: '85%', 
    },
  ];

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-black-500 mb-16">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {courses.map((course, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                {course.icon}
                <h3 className="text-2xl font-bold ml-4 text-black-500">{course.category}</h3>
              </div>
              <ul className="text-black-500 mb-6 list-disc ml-8">
                {course.topics.map((topic, index) => (
                  <li key={index} className="text-lg mb-2">{topic}</li>
                ))}
              </ul>
              <div className="relative pt-1">
                <div className="overflow-hidden h-3 mb-4 text-xs flex rounded bg-gray-200">
                  <div
                    style={{ width: course.progressValue }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-pink-500 to-purple-500"
                  ></div>
                </div>
                <span className="font-bold text-black-500 text-lg">{course.progressLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
