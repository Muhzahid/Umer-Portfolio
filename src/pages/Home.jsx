import React from "react";
import portfolioImage from "../assets/umer.png"; // Make sure this image exists
import bgImage from "../assets/bg.png";

export default function Home() {
  return (
  <section
  id="home"
  className="min-h-screen flex flex-col items-center justify-center text-gray-800 px-6 py-12 bg-cover bg-center"
  style={{ backgroundImage: `url(${bgImage})` }} // make sure bgImage is imported
>
  {/* Image Section */}
  <div className="flex justify-center mb-8 border-2 border-red-700 rounded-full">
    <img
      src={portfolioImage}
      alt="Portfolio"
      className="rounded-full shadow-2xl w-48 h-48 md:w-64 md:h-64 object-cover hover:scale-105 transition-transform duration-300"
    />
  </div>

  {/* Text / Description Section */}
  <div className="text-center max-w-2xl bg-red-800 p-4 rounded-lg">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
      Umer Hakim
    </h1>
    <p className="text-lg md:text-xl text-white">
      Hi! I am a <span className="font-semibold">Python Engineer </span>  
      passionate about building efficient and scalable applications. This is my portfolio
      homepage where you can explore my projects, learn about my skills, and connect
      with me. Everything here is styled beautifully using Tailwind CSS.
    </p>
  </div>
</section>

  );
}
