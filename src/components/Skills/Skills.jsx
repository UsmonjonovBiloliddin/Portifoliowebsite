import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiAntdesign,
  SiMui,
  SiGit,
  SiGithub,
  SiNetlify,
  SiVercel,
  SiFirebase,
  SiSass,
  SiTypescript,
  SiNextdotjs,
  SiVite,
  SiPostman,
  SiTrello,
  SiDocker,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React", icon: <SiReact className="text-cyan-400" /> },
  { name: "Redux Toolkit", icon: <SiRedux className="text-purple-500" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Ant Design", icon: <SiAntdesign className="text-red-500" /> },
  { name: "Material UI", icon: <SiMui className="text-blue-400" /> },
  { name: "Git", icon: <SiGit className="text-orange-600" /> },
  { name: "GitHub", icon: <SiGithub className="text-gray-900 dark:text-gray-100" /> },
  { name: "Netlify", icon: <SiNetlify className="text-teal-400" /> },
  { name: "Vercel", icon: <SiVercel className="text-gray-900 dark:text-gray-100" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  { name: "Sass", icon: <SiSass className="text-pink-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-900 dark:text-gray-100" /> },
  { name: "Vite", icon: <SiVite className="text-purple-500" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
  { name: "Trello", icon: <SiTrello className="text-blue-400" /> },
  { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
];

export default function Skills() {
  return (
    <div id="skills"
      className="py-15 w-full flex flex-col items-center justify-center 
                 bg-gray-900 text-white 
                 dark:bg-gray-100 dark:text-gray-900 
                 transition-colors duration-500"
    >
      <h2 className="text-3xl font-bold mb-10 text-white dark:text-gray-900">
        My <span className="">Skills</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 px-15 w-full ">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.08, rotate: 1 }}
            className="flex items-center gap-3 h-[65px] px-5 rounded-lg shadow-md cursor-pointer
                       bg-gray-800 text-white 
                       dark:bg-white dark:text-gray-900 
                       hover:shadow-2xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600
                       hover:text-white
                       transition-all duration-500"
          >
            <span className="text-2xl">{skill.icon}</span>
            <p className="font-medium text-base">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
