import React from "react";
import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <div className="w-full  min-h-[606px] bg-gray-900 dark:bg-white text-white dark:text-black flex flex-col md:flex-row items-center justify-center p-6 md:p-12 gap-8 md:gap-16">
      
      {/* Text */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <h1 className="text-2xl sm:text-4xl md:text-3xl font-bold">
          <Typewriter
            words={["Hello, I’m Biloliddin – Frontend Developer."]}
            cursor
            cursorStyle="|"
            typeSpeed={70}
          />
        </h1>
        <h2 className="text-[20px] sm:text-xl md:text-2xl font-semibold text-gray-300 dark:text-gray-700">
          <Typewriter
            words={["I create dynamic, responsive web apps and love bringing ideas to life in the browser."]}
            cursor
            cursorStyle="|"
            typeSpeed={70}
          />
        </h2> 
        <Link to={"contact"} smooth={true} duration={1300}>
         <button  className="mt-4 bg-green-500 text-white px-6 py-2 rounded-md cursor-pointer hover:bg-green-600 dark:hover:bg-green-500 transition-colors duration-300">
          Contact Me
        </button>
        </Link>

      </div>

      {/* Image */}
      <div className="flex-1 flex justify-center items-center">
        <img
          src="/public/Skrinshot 2025-09-16 231706.png"
          alt="Programmer"
          className="w-64 sm:w-80 md:w-96 rounded-full shadow-2xl border-4 border-green-500"
        />
      </div>
    </div>
  );
}
