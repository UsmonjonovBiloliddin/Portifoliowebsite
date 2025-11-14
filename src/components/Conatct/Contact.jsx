import React from "react";
import { Github, Instagram, MessageCircle, Send } from "lucide-react";

const Contact = () => {
  const handleEmailClick = () => {
    // Bosilganda default email client ochiladi
    window.location.href = "mailto:usmonjonovbiloliddin40@gmail.com";
  };

  return (
    <section
      id="contact"
      className="w-full flex justify-center items-center bg-gray-800 dark:bg-gray-100 py-16 px-4 sm:px-6"
    >
      <div className="max-w-6xl w-full justify-center bg-gray-900 dark:bg-white shadow-2xl rounded-2xl p-6 sm:p-10 border border-gray-700 dark:border-gray-200 flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Contact Info */}
        <div className="flex flex-col justify-center gap-4 md:gap-6 text-center ">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white dark:text-gray-900 mb-2">
            Contact Me
          </h2>
          <p className="text-gray-300 dark:text-gray-700 text-sm sm:text-base">
            Connect with me via my social profiles:
          </p>

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-6 mt-4">
            <a
              href="https://github.com/UsmonjonovBiloliddin?tab=overview&from=2025-11-01&to=2025-11-14"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 dark:text-gray-700 hover:text-green-400 dark:hover:text-green-600 transition-all"
            >
              <Github size={24} /> GitHub
            </a>
            <a
              href="https://www.instagram.com/biloliddin_usmonjonov06/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 dark:text-gray-700 hover:text-pink-500 dark:hover:text-pink-700 transition-all"
            >
              <Instagram size={24} /> Instagram
            </a>
            <a
              href="https://t.me/Biloliddinusmonjonov"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 dark:text-gray-700 hover:text-blue-400 dark:hover:text-blue-600 transition-all"
            >
              <MessageCircle size={24} /> Telegram
            </a>
          </div>
        </div>

        {/* Email Button */}
        
      </div>
    </section>
  );
};

export default Contact;
