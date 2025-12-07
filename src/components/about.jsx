import { FaCode, FaComments, FaPalette, FaGoogle, FaRobot, FaHeadset, FaChartLine, FaKeyboard, FaPencilRuler, FaPython, FaReact, FaGitAlt, FaHtml5, FaJs, FaFire } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-white flex items-center justify-center px-8 py-20">
      <div className="max-w-6xl w-full space-y-16">
        
        {/* Heading */}
        <div className="text-center space-y-4">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-blue-950">
            About Me
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
        </div>
        
        {/* Intro */}
        <div className="max-w-4xl mx-auto">
          <p className="font-body text-lg md:text-xl text-gray-700 leading-relaxed text-center">
            I'm <span className="font-semibold text-blue-950">Mark Christopher B. Sarmiento</span>, 
            a client-focused Virtual Assistant with a background in IT, customer service, and sales. 
            I specialize in communication, task management, and leveraging AI tools to deliver efficient and reliable support.
          </p>
        </div>
        
        {/* Skills Grid */}
       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          
          {/* Technical & Digital */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-orange-500 transition-all duration-300">
            <div className="flex items-center space-x-3 mb-6 pb-4 border-b-2 border-gray-100">
              <div className="bg-blue-950 p-3 rounded-lg">
                <FaCode className="text-white text-xl" />
              </div>
              <h3 className="font-heading text-2xl text-blue-950 font-bold">Technical & Digital</h3>
            </div>
            <ul className="space-y-3 text-gray-700 font-body">
              <li className="flex items-start space-x-3">
                <span className="text-orange-500 mt-1">•</span>
                <span>Software Development</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-orange-500 mt-1">•</span>
                <span>Google Workspace Use</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-orange-500 mt-1">•</span>
                <span>AI Tools Integration</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-orange-500 mt-1">•</span>
                <span>Troubleshooting Skills</span>
              </li>
            </ul>
          </div>
          
          {/* Programming Skills */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-orange-500 transition-all duration-300">
            <div className="flex items-center space-x-3 mb-6 pb-4 border-b-2 border-gray-100">
              <div className="bg-blue-950 p-3 rounded-lg">
                <FaCode className="text-white text-xl" />
              </div>
              <h3 className="font-heading text-2xl text-blue-950 font-bold">Programming</h3>
            </div>
            <ul className="space-y-3 text-gray-700 font-body">
              <li className="flex items-start space-x-3">
                <span className="text-orange-500 mt-1">•</span>
                <span>Python</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-orange-500 mt-1">•</span>
                <span>JavaScript</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-orange-500 mt-1">•</span>
                <span>React</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-orange-500 mt-1">•</span>
                <span>HTML & CSS</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-orange-500 mt-1">•</span>
                <span>Firebase</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-orange-500 mt-1">•</span>
                <span>Git Version Control</span>
              </li>
            </ul>
          </div>
          
          {/* Communication & Support */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-orange-500 transition-all duration-300">
            <div className="flex items-center space-x-3 mb-6 pb-4 border-b-2 border-gray-100">
              <div className="bg-blue-950 p-3 rounded-lg">
                <FaComments className="text-white text-xl" />
              </div>
              <h3 className="font-heading text-2xl text-blue-950 font-bold">Communication & Support</h3>
            </div>
            <ul className="space-y-3 text-gray-700 font-body">
              <li className="flex items-start space-x-3">
                <span className="text-orange-500 mt-1">•</span>
                <span>Customer Service</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-orange-500 mt-1">•</span>
                <span>Professional Communication</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-orange-500 mt-1">•</span>
                <span>Sales Skills</span>
              </li>
            </ul>
          </div>
          
          {/* Creative & Admin */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-orange-500 transition-all duration-300">
            <div className="flex items-center space-x-3 mb-6 pb-4 border-b-2 border-gray-100">
              <div className="bg-blue-950 p-3 rounded-lg">
                <FaPalette className="text-white text-xl" />
              </div>
              <h3 className="font-heading text-2xl text-blue-950 font-bold">Creative & Admin</h3>
            </div>
            <ul className="space-y-3 text-gray-700 font-body">
              <li className="flex items-start space-x-3">
                <span className="text-orange-500 mt-1">•</span>
                <span>Data Entry</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-orange-500 mt-1">•</span>
                <span>Graphic Design</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Closing Statement */}
        <div className="max-w-4xl mx-auto text-center pt-8">
          <p className="font-body text-lg text-gray-700 leading-relaxed">
            I combine technical precision with empathetic service, helping businesses streamline operations 
            while delivering professional, branded solutions.
          </p>
        </div>
      </div>
    </section>
  );
}