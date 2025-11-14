import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const links = [
    { name: "Home", to: "home", duration: 500 },
    { name: "About", to: "about", duration: 500 },
    { name: "Resume", to: "resume", duration: 900 },
    { name: "Portfolio", to: "Portfolio", duration: 700 },
    { name: "Skills", to: "skills", duration: 1100 },
    { name: "Contact", to: "contact", duration: 1300 },
  ];

  return (
    <nav className=" w-full top-0 py-2  bg-gray-900 dark:bg-white text-white dark:text-black shadow-md transition-colors duration-300 z-50">
      <div className="max-w-9xl  mx-auto flex justify-between items-center p-3 px-4 sm:px-6 md:px-12">
        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex justify-center items-center text-white font-bold text-sm sm:text-base">
            B
          </div>
          <h1 className="text-lg sm:text-2xl font-bold text-green-500">Biloliddin</h1>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex flex-1 justify-center space-x-4 sm:space-x-6 text-sm sm:text-base">
          {links.map((link) => (
            <li key={link.to} className="cursor-pointer hover:text-green-400 dark:hover:text-green-600 transition-colors">
              <Link to={link.to} smooth={true} duration={link.duration}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Dark Mode / Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-green-500 text-white p-1 sm:p-2 rounded flex items-center justify-center hover:bg-green-600 dark:hover:bg-green-500 transition-all"
          >
            {darkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white dark:text-black focus:outline-none p-1"
          >
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 sm:gap-6 bg-gray-900 dark:bg-white text-white dark:text-black py-4 sm:py-6 transition-all duration-300">
          {links.map((link) => (
            <li key={link.to} className="cursor-pointer hover:text-green-400 dark:hover:text-green-600 transition-colors text-sm sm:text-base">
              <Link
                to={link.to}
                smooth={true}
                duration={link.duration}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
