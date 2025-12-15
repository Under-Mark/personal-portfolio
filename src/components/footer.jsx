import { FaLinkedin, FaGithub, FaFacebook, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, link: "https://linkedin.com/in/yourprofile", name: "LinkedIn" },
    { icon: <FaGithub />, link: "https://github.com/yourprofile", name: "GitHub" },
    { icon: <FaFacebook />, link: "https://facebook.com/yourprofile", name: "Facebook" }
  ];

  return (
    <footer className="text-white bg-blue-950">
      {/* Main Footer Content */}
      <div className="max-w-6xl px-8 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="mcs-logo.png"
                alt="MCS Logo"
                className="object-cover w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold font-heading">Mark Sarmiento</h3>
                <p className="text-sm text-orange-400 font-body">Virtual Assistant</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-300 font-body">
              Helping businesses streamline operations with technical precision and empathetic service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-bold font-heading">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors font-body hover:text-orange-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-lg font-bold font-heading">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-3 text-gray-300">
                <FaEnvelope className="text-orange-400" />
                <a href="mailto:marksarmientowork@gmail.com" className="transition-colors hover:text-orange-400 font-body">
                  marksarmientowork@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <FaPhone className="text-orange-400" />
                <a href="https://wa.me/639750859003?text=Hi%20Mark,%20I%20would%20like%20to%20hire%20you!" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-orange-400 font-body">
                  +63 975 085 9003
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <FaMapMarkerAlt className="text-orange-400" />
                <span className="font-body">Angono, Calabarzon, PH</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <h5 className="mb-3 text-sm font-bold font-heading">Follow Me</h5>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 transition-colors rounded-lg bg-white/10 hover:bg-orange-500"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="flex flex-col items-center justify-between max-w-6xl px-8 py-6 mx-auto space-y-4 md:flex-row md:space-y-0">
          <p className="text-sm text-center text-gray-400 font-body md:text-left">
            © {new Date().getFullYear()} Mark Christopher B. Sarmiento. All rights reserved.
          </p>
          
          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-sm text-gray-400 transition-colors hover:text-orange-400 font-body"
          >
            <span>Back to Top</span>
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
