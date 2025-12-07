import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Customer Service Representative",
      company: "Equifax (Call Center)",
      period: "2021 – 2023",
      location: "Remote",
      description: "Handled customer inquiries, resolved account issues, and provided professional support with empathy and accuracy.",
      highlights: [
        "Resolved 50+ customer inquiries daily",
        "Maintained 95% customer satisfaction rating",
        "Trained new team members on best practices"
      ]
    },
    {
      id: 2,
      role: "IT Intern",
      company: "Power Serve Innovation",
      period: "2023 – Present",
      location: "Hybrid",
      description: "Supported technical operations, troubleshooting, and system documentation. Assisted in deploying scalable IT solutions and workflow improvements.",
      highlights: [
        "Deployed automation tools reducing manual tasks by 30%",
        "Documented technical processes for team efficiency",
        "Provided technical support across multiple departments"
      ]
    }
  ];

  return (
    <section id="experience" className=" px-8 py-20">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Heading */}
        <div className="text-center space-y-4">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-blue-950">
            Experience
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          <p className="font-body text-lg md:text-xl text-gray-700">
            My professional journey and accomplishments
          </p>
        </div>

        {/* Timeline */}
        <div className="relative space-y-8">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 via-orange-400 to-orange-300 transform md:-translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-16 h-16 bg-blue-950 text-white flex items-center justify-center rounded-full shadow-lg transform md:-translate-x-1/2 z-10 border-4 border-white">
                <FaBriefcase className="text-2xl text-orange-500" />
              </div>

              {/* Content card */}
              <div className={`ml-24 md:ml-0 md:w-5/12 ${
                index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
              }`}>
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border-l-4 border-orange-500 group hover:scale-105">
                  {/* Role and Company */}
                  <div className="space-y-2 mb-4">
                    <h3 className="font-heading text-2xl text-blue-950 font-bold group-hover:text-orange-500 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="font-body text-lg text-gray-800 font-semibold">
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
                  <p className="font-body text-gray-600 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2">
                    <h4 className="font-heading text-sm font-bold text-blue-950 uppercase tracking-wide">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm text-gray-700">
                          <span className="text-orange-500 mt-1">▸</span>
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
        <div className="text-center pt-8">
          <p className="font-body text-gray-600 mb-4">
            Want to know more about my experience?
          </p>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center space-x-2 bg-blue-950 text-white px-8 py-3 rounded-full font-heading font-semibold hover:bg-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <FaBriefcase />
            <span>Download Full Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}