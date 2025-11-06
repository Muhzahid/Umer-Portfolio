import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-red-800 text-white py-8 mt-16">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Logo / Name */}
        <h2 className="text-2xl font-bold mb-4 md:mb-0">Umer’s Portfolio</h2>

        {/* Social Icons */}
        <div className="flex space-x-6 text-xl">
          <a
            href="https://github.com/umerhakim99"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/umerhakim99"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/umerhakim99?s=11"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="mailto:umercs123@gmail.com"
            className="hover:text-gray-200 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-white/30 my-6 mx-6"></div>

      {/* Copyright */}
      <p className="text-center text-sm text-gray-200">
        © {new Date().getFullYear()} Umer’s Portfolio. All rights reserved.
      </p>
    </footer>
  );
}
