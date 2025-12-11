import { FaDownload, FaBriefcase } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-8 py-16">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Intro */}
        <div className="space-y-6 animate-fadeInUp">
          {/* Greeting */}
          <h2 className="font-heading text-3xl text-blue-950 font-semibold">
            Hello there,
          </h2>

          {/* Opening Statement with Name Highlighted */}
          <h1 className="font-heading text-6xl font-bold text-blue-950 leading-tight">
            I’m <span className="underline text-orange-500">Mark Christopher B. Sarmiento</span>
          </h1>
          <div className="w-24 h-1 bg-orange-500 mt-2"></div>

          <p className="font-body text-lg text-gray-700 max-w-md">
            Your future Virtual Assistant — I build scalable systems and creative solutions.
          </p>

          {/* Buttons with Icons */}
          <div className="flex space-x-4">
            <a
              href="/mcs-resume.pdf"
              download
              className="flex items-center space-x-2 bg-blue-950 text-white px-6 py-3 rounded-md font-heading font-semibold hover:bg-blue-900 transition"
            >
              <FaDownload /> <span>Download Resume</span>
            </a>
            <button className="flex items-center space-x-2 bg-orange-500 text-white px-6 py-3 rounded-md font-heading font-semibold hover:bg-orange-600 transition shadow-md">
              <FaBriefcase /> <span>Hire Me</span>
            </button>
          </div>
        </div>

        {/* Right: Photo with Background */}
        <div className="flex justify-center animate-fadeInUp delay-200">
          <div className="bg-blue-50 p-4 rounded-lg shadow-xl">
            <img
              src="nibba.png"
              alt="Mark's portrait"
              className="w-80 h-auto object-cover rounded-lg transform hover:scale-105 transition"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
