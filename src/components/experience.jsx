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
      ]
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
      ]
    }
  ];

  return (
    <section id="experience" className="px-8 py-20 bg-gray-100 ">
      <div className="max-w-5xl mx-auto space-y-12">
        
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
        <div className="relative space-y-8">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 w-1 transform left-8 md:left-1/2 bg-gradient-to-b from-orange-500 via-orange-400 to-orange-300 md:-translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute z-10 flex items-center justify-center w-16 h-16 text-white transform border-4 border-white rounded-full shadow-lg left-8 md:left-1/2 bg-blue-950 md:-translate-x-1/2">
                <FaBriefcase className="text-2xl text-orange-500" />
              </div>

              {/* Content card */}
              <div className={`ml-24 md:ml-0 md:w-5/12 ${
                index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
              }`}>
                <div className="p-6 transition-all duration-300 bg-white border-l-4 border-orange-500 shadow-lg rounded-xl hover:shadow-2xl group hover:scale-105">
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