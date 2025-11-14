import React, { useRef, useEffect, useState } from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const projects = [
  {
    title: "Kindergarten Finder",
    description: "Interactive Kindergarten Finder UI built with React and Tailwind",
    img: "/public/Skrinshot 2025-11-14 193729.png",
    link: "https://forkindergarten.netlify.app/",
  },
  {
    title: "Movie Website",
    description: "Modern and interactive Movie web site UI built with React.js.",
    img: "/public/Skrinshot 2025-10-06 212317.png",
    link: "https://website-movie-eight.vercel.app/",
  },
  {
    title: "SEOM Project",
    description: "Sanitary-Epidemiological Safety Center  UI built with React.js.",
    img: "/public/image copy 3.png",
    link: "https://seomproject.netlify.app/",
  },
   {
    title: "Myloud Project",
    description: "MyCloud Hosting Admin Panel UI built with React & Tailwind",
    img: "/public/Skrinshot 2025-11-14 195632.png",
    link: "https://mycloudadmin.netlify.app/",
  },
  {
    title: "YouTube Clone",
    description: "Modern and interactive Youtube Clone UI built with React.js",
    img: "/public/image copy 4.png",
    link: "https://youtubecloneproject22.netlify.app/",
  },
  
];

const Portifolio = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  // Swiper navigation update
  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <div
      id="Portfolio"
      className="w-full  flex flex-col justify-center items-center text-white dark:text-black bg-gray-800 dark:bg-white py-12 px-4 sm:px-6 gap-3"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold mb-1">Portfolio</h1>
        <p className="text-gray-300 dark:text-gray-700 text-sm sm:text-base">
          Here are some of my recent projects. You can swipe, use arrows, or watch it autoplay.
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-end gap-2 sm:gap-4 w-full max-w-7xl">
        <button
          ref={prevRef}
          className="bg-green-500 hover:bg-green-600 text-white p-2 sm:p-3 rounded transition-all"
        >
          <FaArrowLeftLong />
        </button>
        <button
          ref={nextRef}
          className="bg-green-500 hover:bg-green-600 text-white p-2 sm:p-3 rounded transition-all"
        >
          <FaArrowRightLong />
        </button>
      </div>

      {/* Swiper */}
      {swiperReady && (
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          spaceBetween={15}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            480: { slidesPerView: 1, spaceBetween: 15 },
            640: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
            1280: { slidesPerView: 4, spaceBetween: 20 },
          }}
          className="w-full max-w-7xl mt-6"
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-900 dark:bg-gray-100 transition-all duration-700 border border-gray-700 dark:border-gray-300 rounded-lg p-4   flex flex-col gap-1 hover:border-green-500 cursor-pointer shadow-lg hover:shadow-2xl">
                <img
                  className="w-[100%] h-[150px] object-cover rounded"
                  src={project.img}
                  alt={project.title}
                />
                <div className="text-[12px] text-gray-400 dark:text-gray-600">Built Through Code</div>
                <div className="text-lg font-semibold text-white dark:text-gray-900">{project.title}</div>
                <p className="text-sm sm:text-[15px] text-gray-300 dark:text-gray-700">{project.description}</p>
                <button onClick={() => window.open(project.link, "_blank")} className="border-2 border-green-500 text-white px-2 py-2 w-full sm:w-[150px] rounded-md cursor-pointer hover:bg-green-500 dark:text-black dark:hover:bg-green-600 transition-colors duration-300 flex items-center justify-center gap-2 mt-2">
                  View Project <FaArrowRightLong />
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Portifolio;
