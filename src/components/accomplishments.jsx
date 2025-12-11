import { FaGraduationCap, FaCertificate } from "react-icons/fa";

export default function Accomplishments() {
  const accomplishments = [
    {
      id: 1,
      type: "Diploma",
      title: "Bachelor’s Diploma",
      institution: "Your College / University",
      year: "Expected 2026",
      icon: <FaGraduationCap className="text-white text-xl" />,
      description: "Completion of undergraduate studies in IT/Computer Science.",
      imageUrl: "/images/diploma.jpg" // <-- add your diploma image here
    },
    {
      id: 2,
      type: "Certificate",
      title: "Customer Service Excellence",
      institution: "Equifax Call Center",
      year: "2022",
      icon: <FaCertificate className="text-white text-xl" />,
      description: "Recognizing outstanding performance in customer service.",
      imageUrl: "/images/equifax-certificate.jpg" // <-- add certificate image
    },
    {
      id: 3,
      type: "Certificate",
      title: "Technical Internship Completion",
      institution: "Power Serve Innovation",
      year: "2023",
      icon: <FaCertificate className="text-white text-xl" />,
      description: "Awarded for successful completion of IT internship.",
      imageUrl: "/images/psi-certificate.jpg" // <-- add certificate image
    }
  ];

  return (
    <section id="accomplishments" className="bg-white px-8 py-20">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Heading */}
        <div className="text-center space-y-4">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-blue-950">
            Accomplishments
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          <p className="font-body text-lg md:text-xl text-gray-700">
            Diplomas and certificates that validate my skills and achievements.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {accomplishments.map((acc) => (
            <div key={acc.id} className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-orange-500 transition-all duration-300 shadow-lg">
              <div className="flex items-center space-x-3 mb-6 pb-4 border-b-2 border-gray-100">
                <div className="bg-blue-950 p-3 rounded-lg">
                  {acc.icon}
                </div>
                <h3 className="font-heading text-xl text-blue-950 font-bold">{acc.type}</h3>
              </div>
              <h4 className="font-heading text-lg text-blue-950 font-semibold">{acc.title}</h4>
              <p className="font-body text-gray-700">{acc.institution}</p>
              <p className="font-body text-gray-500 text-sm mb-4">{acc.year}</p>
              <p className="font-body text-gray-600 mb-4">{acc.description}</p>
              
              {/* Certificate/Diploma Image */}
              <div className="rounded-lg overflow-hidden border border-gray-200 shadow-md hover:shadow-lg transition">
                <img 
                  src={acc.imageUrl} 
                  alt={acc.title} 
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
