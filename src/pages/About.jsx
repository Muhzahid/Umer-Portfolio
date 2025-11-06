import React from "react";
import { LuPhone } from "react-icons/lu";
import profileImage from "../assets/umer.png";
import { LuMail } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";

export default function About() {

  return (
    <section
      id="about"
      className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-16"
    >
      {/* Section Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-red-700 mb-12">
        About Me
      </h2>

      {/* Container */}
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
          <p className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose">
            Hi! I am a <span className="font-semibold">Python Developer</span> with
            <span className="font-semibold"> 1.5 years of professional experience </span>
            building scalable backend applications, REST APIs, and data-driven solutions.
            I am passionate about writing clean, efficient code and solving real-world problems.
            I have worked extensively with{" "}
            <span className="font-semibold">Python, Django, Flask, SQL, and REST APIs</span>.
            I also have experience in automation, cloud technologies, and version control with Git.
            I strive to continuously improve my skills and contribute to meaningful projects.
          </p>
          <p className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose">
            Outside coding, I enjoy exploring machine learning, contributing to open-source projects,
            and staying up-to-date with the latest technology trends. My goal is to deliver
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
