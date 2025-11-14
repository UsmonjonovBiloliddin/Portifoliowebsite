import React from "react";
import { Github, Linkedin, Mail, Instagram, Send } from "lucide-react"; 

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 dark:from-gray-100 dark:via-white dark:to-gray-100 text-gray-300 dark:text-gray-700 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left side: Name & tagline */}
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-2xl font-bold text-green-400 dark:text-green-600">
            Biloliddin Usmonjonov
          </h2>
          <p className="text-sm text-gray-400 dark:text-gray-600">
            Frontend Developer • Building modern & creative web experiences
          </p>
        </div>

        {/* Center: Quick Links */}
        <div className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-green-400 dark:hover:text-green-600 transition-colors">About</a>
          <a href="#projects" className="hover:text-green-400 dark:hover:text-green-600 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-green-400 dark:hover:text-green-600 transition-colors">Contact</a>
        </div>

        {/* Right side: Social links */}
        <div className="flex gap-6">
          <a 
            href="https://github.com/Biloliddinusmonjonov" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-green-400 dark:hover:text-green-600 transition-colors"
          >
            <Github size={22} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-400 dark:hover:text-blue-600 transition-colors"
          >
            <Linkedin size={22} />
          </a>
          <a 
            href="https://t.me/username" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-sky-400 dark:hover:text-sky-600 transition-colors"
          >
            <Send size={22} />
          </a>
          <a 
            href="https://www.instagram.com/biloliddin_usmonjonov06/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-pink-400 dark:hover:text-pink-600 transition-colors"
          >
            <Instagram size={22} />
          </a>
          <a 
            href="usmonjonovbiloliddin40@gmail.com"
            className="hover:text-red-400 dark:hover:text-red-600 transition-colors"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>

      {/* Bottom info */}
      <div className="mt-8 text-center text-xs text-gray-500 dark:text-gray-600">
        © {new Date().getFullYear()} Biloliddin. All Rights Reserved • Based in Uzbekistan
      </div>
    </footer>
  );
};

export default Footer;
