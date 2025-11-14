import React from "react";
import { FileDown, Eye } from "lucide-react";

const Resume = () => {
  return (
    <section
      id="resume"
      className="w-full dark:bg-white dark:text-gray-900 bg-gray-900 flex flex-col justify-center items-center text-center px-4 sm:px-6 py-12"
    >
      {/* Title */}
      <h1 className="text-3xl text-white dark:text-black sm:text-4xl md:text-4xl font-extrabold mb-4   ">
        My Resume
      </h1>

      {/* Description */}
      <p className="text-gray-400 max-w-md sm:max-w-xl mb-8 text-sm sm:text-base">
        Download my latest resume or view it online to learn more about my skills, experience, and projects.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        <a
          download={"Usmonjonov-Biloliddin-FlowCV-Resume-20250916.pdf"}
          href="/public/My Portifolio.pdf"
          className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white font-medium rounded-2xl shadow-lg hover:bg-green-700 hover:scale-105 transform transition-all duration-300 w-full sm:w-auto"
        >
          <FileDown size={20} />
          Download
        </a>

        <a
          href="/public/My Portifolio.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-2xl shadow-lg hover:bg-blue-700 hover:scale-105 transform transition-all duration-300 w-full sm:w-auto"
        >
          <Eye size={20} />
          View
        </a>
      </div>
    </section>
  );
};

export default Resume;
