import React from "react";
import { LuPhone, LuMail } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import profileImage from "../assets/umer.png";
import DownloadCV from "../components/DownloadCV";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-16"
    >
      {/* Section Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-red-700 mb-0 tracking-wide">
        About Me
      </h2>

      {/* CV Download Button */}
      <div className="mb-10">
        <DownloadCV />
      </div>

      {/* Main Container */}
      <div className="flex flex-col md:flex-row items-center justify-center max-w-7xl gap-12 w-full h-full">
        {/* Profile Image Section */}
        <div className="w-full md:w-1/2 h-[400px] md:h-[600px] relative overflow-hidden shadow-2xl">
          <img
            src={profileImage}
            alt="Profile"
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* About Content */}
        <div className="flex-1 space-y-6 text-center md:text-left sm:px-6 md:px-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            Hi! I am a <span className="font-semibold text-red-700">Python Developer</span> with{" "}
            <span className="font-semibold text-red-700">1.5 years of professional experience</span>{" "}
            building scalable backend applications, REST APIs, and data-driven solutions.
            I’m passionate about writing clean, efficient code and solving real-world problems.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">
            I’ve worked extensively with{" "}
            <span className="font-semibold text-red-700">Python, Django, Flask, SQL, and REST APIs</span>.
            I also have experience with automation, cloud technologies, and version control using Git.
            I strive to continuously improve and contribute to impactful software projects.
          </p>

          <p className="text-gray-800 text-lg leading-relaxed">
            Outside coding, I explore machine learning, contribute to open-source projects,
            and stay up-to-date with the latest technology trends. My goal is to deliver
            impactful software solutions and grow as a professional developer.
          </p>

          {/* Skills Section */}
          <div className="space-y-4">
            {/* Phone */}
            <div className="flex items-center gap-3">
              <LuPhone className="text-red-600 text-2xl" />
              <p className="text-gray-800 font-medium">+92 3469460341</p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <LuMail className="text-red-600 text-2xl" />
              <p className="text-gray-800 font-medium">umercs123@gmail.com</p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3">
              <IoLocationOutline className="text-red-600 text-2xl" />
              <p className="text-gray-800 font-medium">Lahore,Punjab Pakistan</p>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
