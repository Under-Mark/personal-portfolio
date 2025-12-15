import { FaDownload, FaBriefcase } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="flex items-center justify-center min-h-screen px-8 py-16 bg-white">
      <div className="grid items-center w-full max-w-6xl grid-cols-1 gap-12 md:grid-cols-2">
        
        {/* Left: Intro */}
        <div className="space-y-6 animate-fadeInUp">
          {/* Greeting */}
          <h2 className="text-3xl font-semibold font-heading text-blue-950">
            Hello there,
          </h2>

          {/* Opening Statement with Name Highlighted */}
          <h1 className="text-6xl font-bold leading-tight font-heading text-blue-950">
            I’m <span className="text-orange-500 underline">Mark Christopher B. Sarmiento</span>
          </h1>
          <div className="w-24 h-1 mt-2 bg-orange-500"></div>

          <p className="max-w-md text-lg text-gray-700 font-body">
            Your future Virtual Assistant — I build scalable systems and creative solutions.
          </p>

          {/* Buttons with Icons */}
          <div className="flex space-x-4">
            {/* Resume Download */}
            <a
              href="/mcs-resume.pdf"
              download
              className="flex items-center px-6 py-3 space-x-2 font-semibold text-white transition rounded-md bg-blue-950 font-heading hover:bg-blue-900"
            >
              <FaDownload /> <span>Download Resume</span>
            </a>

            {/* Hire Me via WhatsApp */}
            <a
              href="https://wa.me/639750859003?text=Hi%20Mark,%20I%20would%20like%20to%20hire%20you!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 space-x-2 font-semibold text-white transition bg-orange-500 rounded-md shadow-md font-heading hover:bg-orange-600"
            >
              <FaBriefcase /> <span>Hire Me</span>
            </a>
          </div>
        </div>

        {/* Right: Photo with Background */}
        <div className="flex justify-center delay-200 animate-fadeInUp">
          <div className="p-4 rounded-lg shadow-xl bg-blue-50">
            <img
              src="nibba.png"
              alt="Mark's portrait"
              className="object-cover h-auto transition transform rounded-lg w-80 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
