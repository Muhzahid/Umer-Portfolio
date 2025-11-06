import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// 🔹 Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Skills = lazy(() => import("./pages/Skills"));
const Experience = lazy(() => import("./pages/Experience"));
const Education = lazy(() => import("./pages/Education"));

// 🔹 Spinner component (you can style it freely)
const Spinner = () => (
  <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-50 to-red-50">
    <div className="w-16 h-16 border-4 border-red-700 border-t-transparent rounded-full animate-spin"></div>
  </div>

);

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-[75px]">
        {/* Wrap all routes with Suspense to show spinner while loading */}
        <Suspense fallback={<Spinner />}>
          <Home />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Education />
          <Footer />
        </Suspense>
      </div>
    </>
  );
}

export default App;
