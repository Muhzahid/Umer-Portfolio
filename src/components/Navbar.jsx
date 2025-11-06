import React, { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">

          <h1 className="text-xl font-bold text-red-800 tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
            UMER
          </h1>

        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {["Home", "About", "Projects", "Skills", "Experience", "Education"].map(
            (item) => (
              <li key={item} className="relative group">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="font-medium text-gray-800 hover:text-red-800 transition-all duration-300"
                >
                  {item}
                </a>
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-800 transition-all duration-300 group-hover:w-full"></span>
              </li>
            )
          )}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl text-red-800 focus:outline-none transition-transform duration-300 hover:scale-110"
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl transform transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden z-50`}
      >
        <div className="flex flex-col h-full items-center justify-center space-y-8 text-lg font-semibold">
          {["Home", "About", "Projects", "Skills", "Experience", "Education"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={closeMenu}
                className="text-red-800 hover:text-red-600 transition-all duration-300"
              >
                {item}
              </a>
            )
          )}
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
        ></div>
      )}
    </nav>
  );
}
