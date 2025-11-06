import React from "react";

const DownloadCV = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Umer_CV.pdf"; // File in public folder
    link.download = "Umer_CV.pdf"; // File name when downloaded
    link.click();
  };

  return (
    <div className="flex justify-center mt-10">
    <button
  onClick={handleDownload}
  className="bg-gradient-to-r from-red-700 to-pink-700 hover:from-red-800 hover:to-pink-800 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
>
  <i className="bi bi-download text-lg"></i>
  Download CV
</button>
    </div>
  );
};

export default DownloadCV;
