import { FaGraduationCap, FaCertificate, FaDownload } from "react-icons/fa";

export default function Accomplishments() {
  const accomplishments = [
    {
      id: 1,
      type: "Diploma",
      title: "Bachelor's Diploma",
      institution: "Your College / University",
      year: "Expected 2026",
      icon: <FaGraduationCap className="text-xl text-white" />,
      description: "Completion of undergraduate studies in IT/Computer Science.",
      imageUrl: "/images/diploma.jpg"
    },
    {
      id: 2,
      type: "Certificate",
      title: "Customer Service Excellence",
      institution: "Equifax Call Center",
      year: "2022",
      icon: <FaCertificate className="text-xl text-white" />,
      description: "Awarded as rank 4 customer service representative.",
      imageUrl: "foundever-certificate.jpg"
    },
    {
      id: 3,
      type: "Certificate",
      title: "Technical Internship Completion",
      institution: "Power Serve Innovation",
      year: "2023",
      icon: <FaCertificate className="text-xl text-white" />,
      description: "Awarded for successful completion of IT internship.",
      imageUrl: "/intern-certificate.jpg"
    }
  ];

  const handleDownload = (imageUrl, title) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `${title.replace(/\s+/g, '_')}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="accomplishments" className="px-8 py-20 bg-white">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Heading */}
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-bold font-heading md:text-5xl text-blue-950">
            Accomplishments
          </h2>
          <div className="w-20 h-1 mx-auto bg-orange-500"></div>
          <p className="text-lg text-gray-700 font-body md:text-xl">
            Diplomas and certificates that validate my skills and achievements.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {accomplishments.map((acc) => (
            <div key={acc.id} className="p-8 transition-all duration-300 bg-white border-2 border-gray-200 rounded-lg shadow-lg hover:border-orange-500">
              <div className="flex items-center pb-4 mb-6 space-x-3 border-b-2 border-gray-100">
                <div className="p-3 rounded-lg bg-blue-950">
                  {acc.icon}
                </div>
                <h3 className="text-xl font-bold font-heading text-blue-950">{acc.type}</h3>
              </div>
              
              <h4 className="text-lg font-semibold font-heading text-blue-950">{acc.title}</h4>
              <p className="text-gray-700 font-body">{acc.institution}</p>
              <p className="mb-4 text-sm text-gray-500 font-body">{acc.year}</p>
              <p className="mb-4 text-gray-600 font-body">{acc.description}</p>
              
              {/* Certificate/Diploma Image */}
              <div className="relative overflow-hidden transition border border-gray-200 rounded-lg shadow-md group hover:shadow-lg">
                <img 
                  src={acc.imageUrl} 
                  alt={acc.title} 
                  className="object-cover w-full h-48"
                />
                
                {/* Download Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 bg-black/50 group-hover:opacity-100">
                  <button
                    onClick={() => handleDownload(acc.imageUrl, acc.title)}
                    className="flex items-center px-4 py-2 space-x-2 font-semibold text-white transition-all duration-300 transform bg-orange-500 rounded-lg hover:bg-orange-600 hover:scale-105"
                  >
                    <FaDownload />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}