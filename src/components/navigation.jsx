import { useState } from "react";
import { FaUser, FaProjectDiagram, FaAward, FaEnvelope, FaBriefcase, FaCogs } from "react-icons/fa";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="flex items-center justify-center w-full px-4 mt-5">
      <nav className="relative flex items-center justify-between w-full max-w-6xl px-6 py-3 text-white rounded-full bg-blue-950">
        
        {/* Logo + Name */}
        <div className="flex items-center space-x-3">
          <img
            src="mcs-logo.png"
            alt="MCS Logo"
            className="object-cover w-10 h-10 rounded-full"
          />
          <h1 className="text-lg font-bold font-heading">Mark</h1>
        </div>
        
        {/* Desktop Links */}
        <ul className="hidden space-x-6 text-sm md:flex font-body">
          <li><a href="#about" className="flex items-center space-x-2 hover:text-orange-500"><FaUser /> <span>About</span></a></li>
          <li><a href="#services" className="flex items-center space-x-2 hover:text-orange-500"><FaCogs /> <span>Services</span></a></li>
          <li><a href="#experience" className="flex items-center space-x-2 hover:text-orange-500"><FaBriefcase /> <span>Experience</span></a></li>
          <li><a href="#projects" className="flex items-center space-x-2 hover:text-orange-500"><FaProjectDiagram /> <span>Projects</span></a></li>
          <li><a href="#accomplishments" className="flex items-center space-x-2 hover:text-orange-500"><FaAward /> <span>Accomplishments</span></a></li>
          <li><a href="#contact" className="flex items-center space-x-2 hover:text-orange-500"><FaEnvelope /> <span>Contact</span></a></li>
        </ul>
        
        {/* CTA Button (Desktop only) */}
        <button className="items-center hidden px-4 py-2 space-x-2 font-semibold transition bg-orange-500 rounded-full cursor-pointer md:flex font-heading hover:bg-orange-600">
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
          <div className="absolute right-0 z-50 w-64 mt-2 rounded-lg shadow-xl top-full bg-blue-950 md:hidden">
            <ul className="flex flex-col px-4 py-4 space-y-2 text-sm font-body">
              <li><a href="#about" className="flex items-center px-2 py-2 space-x-2 transition rounded hover:text-orange-500 hover:bg-blue-900"><FaUser /> <span>About</span></a></li>
              <li><a href="#services" className="flex items-center px-2 py-2 space-x-2 transition rounded hover:text-orange-500 hover:bg-blue-900"><FaCogs /> <span>Services</span></a></li>
              <li><a href="#projects" className="flex items-center px-2 py-2 space-x-2 transition rounded hover:text-orange-500 hover:bg-blue-900"><FaProjectDiagram /> <span>Projects</span></a></li>
              <li><a href="#accomplishments" className="flex items-center px-2 py-2 space-x-2 transition rounded hover:text-orange-500 hover:bg-blue-900"><FaAward /> <span>Accomplishments</span></a></li>
              <li><a href="#contact" className="flex items-center px-2 py-2 space-x-2 transition rounded hover:text-orange-500 hover:bg-blue-900"><FaEnvelope /> <span>Contact</span></a></li>
              <li className="pt-2 border-t border-blue-800">
                <button className="flex items-center justify-center w-full px-4 py-2 space-x-2 font-semibold transition bg-orange-500 rounded-full cursor-pointer font-heading hover:bg-orange-600">
                  <FaBriefcase /> <span>Contact Me</span>
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}