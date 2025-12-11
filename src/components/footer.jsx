import { FaLinkedin, FaGithub, FaFacebook, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
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
    <footer className="bg-blue-950 text-white">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="mcs-logo.png"
                alt="MCS Logo"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-heading text-xl font-bold">Mark Sarmiento</h3>
                <p className="text-orange-400 text-sm font-body">Virtual Assistant</p>
              </div>
            </div>
            <p className="font-body text-gray-300 text-sm leading-relaxed">
              Helping businesses streamline operations with technical precision and empathetic service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-body text-gray-300 hover:text-orange-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-3 text-gray-300">
                <FaEnvelope className="text-orange-400" />
                <a href="mailto:mark.sarmiento@email.com" className="hover:text-orange-400 transition-colors font-body">
                  mark.sarmiento@email.com
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <FaPhone className="text-orange-400" />
                <a href="tel:+63123456789" className="hover:text-orange-400 transition-colors font-body">
                  +63 123 456 7890
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <FaMapMarkerAlt className="text-orange-400" />
                <span className="font-body">Angono, Calabarzon, PH</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <h5 className="font-heading text-sm font-bold mb-3">Follow Me</h5>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 p-3 rounded-lg hover:bg-orange-500 transition-colors"
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
        <div className="max-w-6xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="font-body text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Mark Christopher B. Sarmiento. All rights reserved.
          </p>
          
          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-gray-400 hover:text-orange-400 transition-colors font-body text-sm"
          >
            <span>Back to Top</span>
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}