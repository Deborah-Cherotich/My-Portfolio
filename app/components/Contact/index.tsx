// import React from 'react';

// function Contact() {
//   return (
//     <section id="contact" className="bg-gray-50 py-16">
//       <div className="container mx-auto text-center">
//         <h2 className="text-4xl font-bold text-gray-800 mb-4">Stay In Touch</h2>
//         <p className="text-black mb-6 text-2xl">
//           Stay updated on my latest projects, blog posts, or portfolio updates by subscribing to my newsletter. Don&apos;t miss out on new content.
//         </p>
//         {/* Email Subscription Form */}
//         <form className="flex justify-center max-w-md mx-auto">
//           <input
//             type="email"
//             placeholder="Enter your email address"
//             className="px-4 py-3 rounded-l-full w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
//           />
//           <button type="submit" className="bg-pink-500 text-white px-6 py-3 rounded-r-full hover:bg-pink-600 transition-colors">
//             Subscribe
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default Contact;

import React from 'react';
import { FaPaperPlane, FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt, FaHeart, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Contact() {
  const contactInfo = {
    email: "cherotichdeborah02@gmail.com",
    phone: [
      { number: "+254700870092", type: "whatsapp", label: "WhatsApp" },
      { number: "+254798797984", type: "call", label: "Phone Call" }
    ],
    location: "Nairobi, Kenya",
    github: "https://github.com/Deborah-Cherotich",
    twitter: "https://x.com/che_deborah",
    linkedin: "https://www.linkedin.com/in/deborah-barasa-29071b351/"
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50" style={{ fontFamily: "'Nunito', sans-serif" }}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-5xl font-bold text-pink-600 relative z-10">Let&apos;s Connect! 💌</h2>
            <div className="absolute -bottom-2 left-0 w-full h-3 bg-pink-200 rounded-full z-0"></div>
          </div>
          <p className="text-gray-600 mt-4 text-xl max-w-2xl mx-auto">
            Let&apos;s create something amazing together! I&apos;m always open to discussing new opportunities and creative ideas.
          </p>
          <div className="flex justify-center space-x-2 mt-4">
            <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-6">
              Get In Touch 📞
            </h3>
            
            {/* Contact Methods */}
            <div className="space-y-6">
              {/* Email */}
              <a 
                href={`mailto:${contactInfo.email}`}
                className="flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block group"
              >
                <div className="p-3 bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl group-hover:from-pink-200 group-hover:to-purple-200 transition-all duration-300">
                  <FaEnvelope className="text-2xl text-pink-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email Me</h4>
                  <p className="text-gray-600">{contactInfo.email}</p>
                </div>
              </a>

              {/* Phone Numbers */}
              {contactInfo.phone.map((phone, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <div className={`p-3 rounded-2xl ${
                    phone.type === 'whatsapp' 
                      ? 'bg-gradient-to-r from-green-100 to-teal-100 group-hover:from-green-200 group-hover:to-teal-200'
                      : 'bg-gradient-to-r from-blue-100 to-indigo-100 group-hover:from-blue-200 group-hover:to-indigo-200'
                  } transition-all duration-300`}>
                    {phone.type === 'whatsapp' ? (
                      <FaWhatsapp className="text-2xl text-green-500" />
                    ) : (
                      <FaPhone className="text-2xl text-blue-500" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{phone.label}</h4>
                    <p className="text-gray-600">{phone.number}</p>
                  </div>
                </div>
              ))}

              {/* Location */}
              <div className="flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl group-hover:from-purple-200 group-hover:to-pink-200 transition-all duration-300">
                  <FaMapMarkerAlt className="text-2xl text-purple-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Location</h4>
                  <p className="text-gray-600">{contactInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Follow My Journey 🌟</h4>
              <div className="flex flex-wrap gap-3">
                {/* GitHub */}
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                >
                  <FaGithub className="text-xl" />
                  <span>GitHub</span>
                </a>

                {/* LinkedIn */}
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                >
                  <FaLinkedin className="text-xl" />
                  <span>LinkedIn</span>
                </a>

                {/* Twitter */}
                <a
                  href={contactInfo.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                >
                  <FaTwitter className="text-xl" />
                  <span>Twitter</span>
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-pink-100">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl mb-4">
                <FaHeart className="text-3xl text-pink-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Join My Newsletter! ✨</h3>
              <p className="text-gray-600">
                Stay updated on my latest projects, blog posts, and portfolio updates. Don&apos;t miss out on new content and opportunities!
              </p>
            </div>

            {/* Subscription Form */}
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="✨ Your beautiful email address..."
                  className="w-full px-6 py-4 bg-white border-2 border-pink-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 text-lg"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="group w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 rounded-2xl hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span className="font-semibold text-lg">Subscribe Now</span>
                <FaPaperPlane className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500 flex items-center justify-center">
                <FaHeart className="text-pink-400 mr-2 animate-pulse" />
                No spam, just pure awesomeness! Pinky promise 🤞
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 text-gray-600">
            <div className="w-8 h-1 bg-pink-300 rounded-full"></div>
            <span className="text-lg">Let&apos;s build something incredible together! 🚀</span>
            <div className="w-8 h-1 bg-pink-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;