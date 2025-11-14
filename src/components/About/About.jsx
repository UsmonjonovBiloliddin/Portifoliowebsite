import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="w-full flex justify-center items-center bg-gray-800 dark:bg-gray-100 py-16 px-4 sm:px-6"
    >
      <div
        className="w-full max-w-5xl flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12
        bg-gray-900 dark:bg-white shadow-2xl rounded-2xl p-6 sm:p-10
        border border-gray-700 dark:border-gray-200"
      >
        {/* Image */}
        <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg border-4 border-green-500 flex-shrink-0">
          <img
            src="/public/images//eyJpbWFnZUlkIjoiYXZhdGFyLzRXemhya0RpekMxX1pFNU8tRTBqUy5qcGVnIiwidHJhbnNmb3JtYXRpb25zIjp7ImNyb3AiOnsieVBjdCI6MC4yMzgyMTA0ODc0MjkyMzc1LCJ4UGN0IjowLCJ3aWR0aFBjdCI6MSwiaGVpZ2h0UGN0IjowLjU2MDkzNzV9LCJ3aWR0aCI6NjA.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex-1 text-center md:text-left space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white dark:text-gray-900">
            About Me
          </h1>
          <div className="space-y-2 text-gray-300 dark:text-gray-700 text-sm sm:text-base md:text-lg">
            <p><span className="font-semibold text-green-400">Name:</span> Biloliddin</p>
            <p><span className="font-semibold text-green-400">Surname:</span> Usmonjonov</p>
            <p><span className="font-semibold text-green-400">Age:</span> 19</p>
            <p><span className="font-semibold text-green-400">Experience:</span> 2 years as strong Junior Frontend Developer</p>
            <p><span className="font-semibold text-green-400">Location:</span> Fergana, Uzbekistan</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
