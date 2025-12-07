import { useState } from "react";
import { FaHome, FaUser, FaProjectDiagram, FaAward, FaEnvelope, FaBriefcase } from "react-icons/fa";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="w-full flex justify-center mt-5 items-center px-4">
      <nav className="max-w-6xl w-full bg-blue-950 rounded-full px-6 py-3 flex items-center justify-between text-white relative">
        
        {/* Logo + Name */}
        <div className="flex items-center space-x-3">
          <img
            src="mcs-logo.png"
            alt="MCS Logo"
            className="h-10 w-10 rounded-full object-cover"
          />
          <h1 className="font-heading text-lg font-bold">Mark</h1>
        </div>
        
        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 font-body text-sm">
          <li><a href="#home" className="flex items-center space-x-2 hover:text-orange-500"><FaHome /> <span>Home</span></a></li>
          <li><a href="#about" className="flex items-center space-x-2 hover:text-orange-500"><FaUser /> <span>About</span></a></li>
          <li><a href="#projects" className="flex items-center space-x-2 hover:text-orange-500"><FaProjectDiagram /> <span>Projects</span></a></li>
          <li><a href="#accomplishments" className="flex items-center space-x-2 hover:text-orange-500"><FaAward /> <span>Accomplishments</span></a></li>
          <li><a href="#contact" className="flex items-center space-x-2 hover:text-orange-500"><FaEnvelope /> <span>Contact</span></a></li>
        </ul>
        
        {/* CTA Button (Desktop only) */}
        <button className="hidden md:flex items-center space-x-2 bg-orange-500 px-4 py-2 rounded-full font-heading font-semibold hover:bg-orange-600 transition cursor-pointer">
          <FaBriefcase /> <span>Hire Me</span>
        </button>
        
        {/* Mobile Hamburger */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Mobile Menu - Improved positioning */}
        {isOpen && (
          <div className="absolute top-full right-0 mt-2 w-64 bg-blue-950 rounded-lg shadow-xl md:hidden z-50">
            <ul className="flex flex-col space-y-2 py-4 px-4 font-body text-sm">
              <li><a href="#home" className="flex items-center space-x-2 hover:text-orange-500 py-2 px-2 rounded hover:bg-blue-900 transition"><FaHome /> <span>Home</span></a></li>
              <li><a href="#about" className="flex items-center space-x-2 hover:text-orange-500 py-2 px-2 rounded hover:bg-blue-900 transition"><FaUser /> <span>About</span></a></li>
              <li><a href="#projects" className="flex items-center space-x-2 hover:text-orange-500 py-2 px-2 rounded hover:bg-blue-900 transition"><FaProjectDiagram /> <span>Projects</span></a></li>
              <li><a href="#accomplishments" className="flex items-center space-x-2 hover:text-orange-500 py-2 px-2 rounded hover:bg-blue-900 transition"><FaAward /> <span>Accomplishments</span></a></li>
              <li><a href="#contact" className="flex items-center space-x-2 hover:text-orange-500 py-2 px-2 rounded hover:bg-blue-900 transition"><FaEnvelope /> <span>Contact</span></a></li>
              <li className="pt-2 border-t border-blue-800">
                <button className="w-full flex items-center justify-center space-x-2 bg-orange-500 px-4 py-2 rounded-full font-heading font-semibold hover:bg-orange-600 transition cursor-pointer">
                  <FaBriefcase /> <span>Hire Me</span>
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}