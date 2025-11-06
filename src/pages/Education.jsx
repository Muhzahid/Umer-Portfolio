import React from "react";

export default function Education() {
  return (
    <section
      id="education"
      className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-16"
    >
      {/* Section Heading */}
       <h2 className="text-4xl md:text-5xl font-bold text-red-700 mb-12">
        Education
      </h2>

      {/* Timeline Container */}
      <div className="max-w-4xl w-full">
        <ul className="border-l-2 border-red-700 ml-4 space-y-8">
          {/* Education Item 1 */}
          <li className="relative pl-6">
            <span className="absolute -left-3 top-0 w-6 h-6 bg-red-700 rounded-full shadow"></span>
            <p className="text-gray-800 font-semibold text-lg">
              Bachelor of Science in Computer Science
            </p>
            <p className="text-gray-600 text-sm">University of Agriculture Pashwar | 2020 - 2024</p>
            <p className="text-gray-700 mt-1">
              Focused on Python development, data structures, algorithms, and web development.
              Completed several projects and participated in coding competitions.
            </p>
          </li>

          {/* Education Item 2 */}
          <li className="relative pl-6">
            <span className="absolute -left-3 top-0 w-6 h-6 bg-red-700 rounded-full shadow"></span>
            <p className="text-gray-800 font-semibold text-lg">
              Pre-Engineering
            </p>
            <p className="text-gray-600 text-sm">GPGC TIMERGARA ,Lower Dir | 2018 - 2020</p>
            <p className="text-gray-700 mt-1">
              Focused on Physics, Chemistry, and Mathematics. Graduated with distinction, excelling in analytical and problem-solving subjects.            </p>
          </li>

          {/* Education Item 3 - Certification */}
          <li className="relative pl-6">
            <span className="absolute -left-3 top-0 w-6 h-6 bg-red-700 rounded-full shadow"></span>
            <p className="text-gray-800 font-semibold text-lg">
              Python & Django Certification
            </p>
            <p className="text-gray-600 text-sm">Coursera / Udemy | 2024</p>
            <p className="text-gray-700 mt-1">
              Completed a professional course on Python programming and Django framework,
              building real-world projects and REST APIs.
            </p>
          </li>

           {/* CyberScurity Item 3 - Certification */}
          <li className="relative pl-6">
            <span className="absolute -left-3 top-0 w-6 h-6 bg-red-700 rounded-full shadow"></span>
            <p className="text-gray-800 font-semibold text-lg">
              CyberScurity Certification
            </p>
            <p className="text-gray-600 text-sm">NVTTC / GOOGLE | 2023</p>
            <p className="text-gray-700 mt-1">
             Completed a professional course in Cybersecurity, covering ethical hacking, network security, and vulnerability assessment. Gained hands-on experience with penetration testing tools, secure coding practices, and system protection techniques.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
