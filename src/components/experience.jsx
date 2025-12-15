import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Customer Service Representative",
      company: "Equifax (Call Center - Foundever)",
      period: "Nov 2022 – Feb 2025",
      location: "Onsite",
      description: "Handled customer inquiries, resolved account issues, and provided professional support with empathy and accuracy.",
      highlights: [
        "Resolved 40+ customer inquiries daily",
        "Maintained 95% customer satisfaction rating",
        "Was part of the fraud prevention team"
      ],
      companyImageUrl: "foundever-logo.webp", 
      personalImageUrl: "exp-foundever-pic.jpg" 
    },
    {
      id: 2,
      role: "IT Intern",
      company: "Power Serve Innovation",
      period: "Sept 2025 – Dec 2025",
      location: "Onsite",
      description: "Supported technical operations, troubleshooting, and system documentation. Assisted in deploying scalable IT solutions and workflow improvements.",
      highlights: [
        "Deployed automation tools reducing manual tasks by 30%",
        "Documented technical processes for team efficiency",
        "Provided technical support across multiple departments"
      ],
      companyImageUrl: "psi-logo.png", // Company logo/banner
      personalImageUrl: "exp-psi-pic.jpg" // Your photo at this job
    }
  ];

  return (
    <section id="experience" className="px-8 py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Heading */}
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-bold font-heading md:text-5xl text-blue-950">
            Experience
          </h2>
          <div className="w-20 h-1 mx-auto bg-orange-500"></div>
          <p className="text-lg text-gray-700 font-body md:text-xl">
            My professional journey and accomplishments
          </p>
        </div>

        {/* Timeline */}
        <div className="relative space-y-12">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 hidden w-1 transform -translate-x-1/2 md:block left-1/2 bg-gradient-to-b from-orange-500 via-orange-400 to-orange-300"></div>

          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`relative flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute z-10 items-center justify-center hidden w-16 h-16 text-white transform -translate-x-1/2 border-4 border-white rounded-full shadow-lg md:flex left-1/2 bg-blue-950">
                <FaBriefcase className="text-2xl text-orange-500" />
              </div>

              {/* Content card */}
              <div className={`w-full md:w-5/12 ${
                index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
              }`}>
                <div className="overflow-hidden transition-all duration-300 bg-white shadow-lg rounded-xl hover:shadow-2xl group hover:scale-105">
                  
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={exp.companyImageUrl} 
                      alt={`${exp.company} logo`}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent"></div>
                    
                    {/* Company badge on image */}
                    <div className="absolute flex items-center px-4 py-2 space-x-2 text-white rounded-full bottom-4 left-4 bg-orange-500/90">
                      <FaBriefcase />
                      <span className="text-sm font-semibold">{exp.company.split('(')[0].trim()}</span>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-6 border-l-4 border-orange-500">
                    {/* Role and Company */}
                    <div className="mb-4 space-y-2">
                      <h3 className="text-2xl font-bold transition-colors font-heading text-blue-950 group-hover:text-orange-500">
                        {exp.role}
                      </h3>
                      <p className="text-lg font-semibold text-gray-800 font-body">
                        {exp.company}
                      </p>
                    </div>

                    {/* Period and Location */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <FaCalendarAlt className="text-orange-500" />
                        <span className="font-body">{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <FaMapMarkerAlt className="text-orange-500" />
                        <span className="font-body">{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mb-4 leading-relaxed text-gray-600 font-body">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-bold tracking-wide uppercase font-heading text-blue-950">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm text-gray-700">
                            <span className="mt-1 text-orange-500">▸</span>
                            <span className="font-body">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Personal Photo Section */}
                    <div className="pt-6 mt-6 border-t border-gray-200">
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <img 
                            src={exp.personalImageUrl} 
                            alt={`Me at ${exp.company}`}
                            className="object-cover w-20 h-20 border-4 border-orange-500 rounded-full shadow-lg"
                          />
                          {/* Optional verified badge */}
                          <div className="absolute bottom-0 right-0 flex items-center justify-center w-6 h-6 bg-green-500 border-2 border-white rounded-full">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-800 font-heading">During my time here</p>
                          <p className="text-xs text-gray-600 font-body">{exp.period}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="pt-8 text-center">
          <p className="mb-4 text-gray-600 font-body">
            Want to know more about my experience?
          </p>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center px-8 py-3 space-x-2 font-semibold text-white transition-all duration-300 rounded-full shadow-lg bg-blue-950 font-heading hover:bg-orange-500 hover:shadow-xl"
          >
            <FaBriefcase />
            <span>Download Full Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}