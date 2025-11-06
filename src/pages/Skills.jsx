import React from "react";
import {
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaLinux,
  FaCogs,
  FaGithub,
  FaProjectDiagram,
  FaLaptopCode,
} from "react-icons/fa";
import {
  SiDjango,
  SiFlask,
  SiPostgresql,
  SiJavascript,
  SiJinja,
  SiOpenai,
  SiPostman,
  SiN8N,
} from "react-icons/si";
import { MdOutlineSecurity } from "react-icons/md";
import { RiRobot2Line } from "react-icons/ri";

const Skills = () => {
  const skills = [
    { name: "Python", icon: <FaPython className="text-yellow-500" /> },
    { name: "Django", icon: <SiDjango className="text-green-700" /> },
    { name: "Flask", icon: <SiFlask className="text-gray-700" /> },
    { name: "REST APIs", icon: <SiOpenai className="text-blue-600" /> },
    { name: "SQL", icon: <FaDatabase className="text-indigo-600" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "Automation", icon: <FaCogs className="text-red-500" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "Jinja", icon: <SiJinja className="text-pink-600" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    { name: "Linux", icon: <FaLinux className="text-black" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
    { name: "Cyber Security", icon: <MdOutlineSecurity className="text-red-700" /> },
    { name: "N8N", icon: <SiN8N className="text-red-700" /> },
    { name: "Machine Learning", icon: <RiRobot2Line className="text-purple-600" /> },
    { name: "Data Structure", icon: <FaDatabase className="text-teal-600" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-600" /> },
    { name: "APIs", icon: <FaProjectDiagram className="text-blue-600" /> },
    { name: "Code Testing & Debugging", icon: <FaLaptopCode className="text-green-600" /> },
  ];

  return (
    <section
      id="skills"
      className="bg-white flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 py-16"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-700 mb-10 text-center">
        Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 w-full max-w-6xl">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 sm:p-5 text-center hover:-translate-y-1"
          >
            <div className="text-3xl sm:text-4xl">{skill.icon}</div>
            <p className="mt-2 text-sm sm:text-base font-medium text-gray-800">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
