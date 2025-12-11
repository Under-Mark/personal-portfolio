import { FaCode, FaComments, FaPalette, FaGoogle, FaRobot, FaHeadset, FaChartLine, FaKeyboard, FaPencilRuler, FaPython, FaReact, FaGitAlt, FaHtml5, FaJs, FaFire } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="flex items-center justify-center min-h-screen px-8 py-20 bg-gray-50">
      <div className="w-full max-w-6xl space-y-16">
        
        {/* Heading */}
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-bold font-heading md:text-5xl text-blue-950">
            About Me
          </h2>
          <div className="w-20 h-1 mx-auto bg-orange-500"></div>
        </div>
        
        {/* Intro */}
        <div className="max-w-4xl mx-auto">
          <p className="text-lg leading-relaxed text-center text-gray-700 font-body md:text-xl">
            I'm <span className="font-semibold text-blue-950">Mark Christopher B. Sarmiento</span>, 
            a client-focused Virtual Assistant with a background in IT, customer service, and sales. 
            I specialize in communication, task management, and leveraging AI tools to deliver efficient and reliable support.
          </p>
        </div>
        
        {/* Skills Grid */}
       
        <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2">
          
          {/* Technical & Digital */}
          <div className="p-8 transition-all duration-300 bg-white border-2 border-gray-200 rounded-lg hover:border-orange-500">
            <div className="flex items-center pb-4 mb-6 space-x-3 border-b-2 border-gray-100">
              <div className="p-3 rounded-lg bg-blue-950">
                <FaCode className="text-xl text-white" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-blue-950">Technical & Digital</h3>
            </div>
            <ul className="space-y-3 text-gray-700 font-body">
              <li className="flex items-start space-x-3">
                <span className="mt-1 text-orange-500">•</span>
                <span>Software Development</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="mt-1 text-orange-500">•</span>
                <span>Google Workspace Use</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="mt-1 text-orange-500">•</span>
                <span>AI Tools Integration</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="mt-1 text-orange-500">•</span>
                <span>Troubleshooting Skills</span>
              </li>
            </ul>
          </div>
          
          {/* Programming Skills */}
          <div className="p-8 transition-all duration-300 bg-white border-2 border-gray-200 rounded-lg hover:border-orange-500">
            <div className="flex items-center pb-4 mb-6 space-x-3 border-b-2 border-gray-100">
              <div className="p-3 rounded-lg bg-blue-950">
                <FaCode className="text-xl text-white" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-blue-950">Programming</h3>
            </div>
            <ul className="space-y-3 text-gray-700 font-body">
              <li className="flex items-start space-x-3">
                <span className="mt-1 text-orange-500">•</span>
                <span>Python</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="mt-1 text-orange-500">•</span>
                <span>JavaScript</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="mt-1 text-orange-500">•</span>
                <span>React</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="mt-1 text-orange-500">•</span>
                <span>HTML & CSS</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="mt-1 text-orange-500">•</span>
                <span>Firebase</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="mt-1 text-orange-500">•</span>
                <span>Git Version Control</span>
              </li>
            </ul>
          </div>
          
          {/* Communication & Support */}
          <div className="p-8 transition-all duration-300 bg-white border-2 border-gray-200 rounded-lg hover:border-orange-500">
            <div className="flex items-center pb-4 mb-6 space-x-3 border-b-2 border-gray-100">
              <div className="p-3 rounded-lg bg-blue-950">
                <FaComments className="text-xl text-white" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-blue-950">Communication & Support</h3>
            </div>
            <ul className="space-y-3 text-gray-700 font-body">
              <li className="flex items-start space-x-3">
                <span className="mt-1 text-orange-500">•</span>
                <span>Customer Service Experience</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="mt-1 text-orange-500">•</span>
                <span>Professional Communication</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="mt-1 text-orange-500">•</span>
                <span>Sales Skills</span>
              </li>
            </ul>
          </div>
          
          {/* Creative & Admin */}
          <div className="p-8 transition-all duration-300 bg-white border-2 border-gray-200 rounded-lg hover:border-orange-500">
            <div className="flex items-center pb-4 mb-6 space-x-3 border-b-2 border-gray-100">
              <div className="p-3 rounded-lg bg-blue-950">
                <FaPalette className="text-xl text-white" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-blue-950">Creative & Admin</h3>
            </div>
            <ul className="space-y-3 text-gray-700 font-body">
              <li className="flex items-start space-x-3">
                <span className="mt-1 text-orange-500">•</span>
                <span>Data Entry</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="mt-1 text-orange-500">•</span>
                <span>Graphic Design</span>
              </li> 
              <li className="flex items-start space-x-3">
                <span className="mt-1 text-orange-500">•</span>
                <span>Video Editing</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Closing Statement */}
        <div className="max-w-4xl pt-8 mx-auto text-center">
          <p className="text-lg leading-relaxed text-gray-700 font-body">
            I combine technical precision with empathetic service, helping businesses streamline operations 
            while delivering professional, branded solutions.
          </p>
        </div>
      </div>
    </section>
  );
}