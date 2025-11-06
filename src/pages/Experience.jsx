import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Python Developer at CodeLounge",
      date: "Jul 2024 - Present",
      description:
        "Developed backend applications and REST APIs using Node.js and Express.js, automated workflows with N8N, and collaborated with frontend teams to build seamless integrations. Improved API response times by optimizing queries and middleware. Implemented secure authentication, error handling, and scalable architecture using MongoDB and JWT. Worked closely with cross-functional teams in an Agile environment to deliver high-quality web solutions on time.",
    },
    {
      title: "Junior Python Developer at Vibroxa Studio",
      date: "Jan 2024 - Jun 2024",
      description:
        "Assisted in database design, created automation scripts using Python basics, and improved application performance through optimized queries and task automation.",
    },
  ];

  return (
    <section
      id="experience"
      className="bg-gray-50 py-16 px-6 flex flex-col items-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-red-700 mb-12 text-center">
        Experience
      </h2>

      {/* Timeline Container */}
      <div className="relative w-full max-w-7xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute top-0 bottom-0 left-[-10px] md:left-1/2 md:-translate-x-1/2 w-[3px] bg-red-700 rounded-full"></div>

        {/* Experience Items */}
        <ul className="space-y-12 relative z-10">
          {experiences.map((exp, index) => (
            <li
              key={index}
              className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${index % 2 === 0
                  ? "md:justify-start md:pl-0 md:pr-16"
                  : "md:justify-end md:pl-16 md:pr-0"
                }`}
            >
              {/* Dot on Line */}
              <span className="absolute left-[-20px] top-[50%] md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-red-700 shadow-md"></span>

              {/* Card */}
              <div
                className={`bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 w-full md:w-[45%] ${index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                  }`}
              >
                <p className="text-gray-900 font-semibold text-lg mb-1">
                  {exp.title}
                </p>
                <p className="text-gray-500 text-sm mb-3 italic">
                  {exp.date}
                </p>
                <p className="text-gray-700 leading-relaxed text-justify">
                  {exp.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
