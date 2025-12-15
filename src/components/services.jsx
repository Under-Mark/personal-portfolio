import { FaCode, FaTasks, FaHeadset, FaPalette, FaRocket, FaDatabase, FaRobot, FaEnvelope, FaCalendarAlt, FaFileAlt, FaComments, FaLifeRing, FaUsers, FaPaintBrush, FaVideo, FaMobileAlt } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      id: 1,
      icon: <FaCode />,
      title: "Full-Stack Development",
      description: "Custom web applications and systems built with modern technologies to solve your business needs.",
      features: [
        "Custom web applications & systems",
        "E-commerce & POS solutions",
        "Database design & API development",
        "AI-powered features & integrations",
        "Responsive, scalable architecture"
      ],
      color: "blue",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      id: 2,
      icon: <FaTasks />,
      title: "Virtual Assistant & Admin Support",
      description: "Streamline your operations with professional administrative support and task management.",
      features: [
        "Email & calendar management",
        "Data entry & database organization",
        "Google Workspace administration",
        "Document preparation & formatting",
        "Task automation & workflow optimization"
      ],
      color: "green",
      gradient: "from-green-500 to-green-700"
    },
    {
      id: 3,
      icon: <FaHeadset />,
      title: "Customer Support & Service",
      description: "Deliver exceptional customer experiences with professional, empathetic support solutions.",
      features: [
        "Professional customer service (chat, email, phone)",
        "Technical support & troubleshooting",
        "CRM management & client communication",
        "Issue resolution & conflict management",
        "95% customer satisfaction track record ✨"
      ],
      color: "orange",
      gradient: "from-orange-500 to-orange-700"
    },
    {
      id: 4,
      icon: <FaPalette />,
      title: "Creative & Design Services",
      description: "Bring your brand to life with stunning visuals and engaging multimedia content.",
      features: [
        "Brand identity & logo design",
        "Marketing materials & ad campaigns",
        "Social media graphics & content",
        "Video editing & production",
        "UI/UX design for web & mobile"
      ],
      color: "purple",
      gradient: "from-purple-500 to-purple-700"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        border: "border-blue-200 hover:border-blue-500",
        text: "text-blue-600",
        bg: "bg-blue-50",
        iconBg: "bg-blue-100",
        button: "bg-blue-950 hover:bg-blue-800"
      },
      green: {
        border: "border-green-200 hover:border-green-500",
        text: "text-green-600",
        bg: "bg-green-50",
        iconBg: "bg-green-100",
        button: "bg-green-600 hover:bg-green-700"
      },
      orange: {
        border: "border-orange-200 hover:border-orange-500",
        text: "text-orange-600",
        bg: "bg-orange-50",
        iconBg: "bg-orange-100",
        button: "bg-orange-500 hover:bg-orange-600"
      },
      purple: {
        border: "border-purple-200 hover:border-purple-500",
        text: "text-purple-600",
        bg: "bg-purple-50",
        iconBg: "bg-purple-100",
        button: "bg-purple-600 hover:bg-purple-700"
      }
    };
    return colors[color];
  };

  return (
    <section id="services" className="px-8 py-20 bg-white">
      <div className="mx-auto space-y-16 max-w-7xl">
        
        {/* Heading */}
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-bold md:text-5xl font-heading text-blue-950">
            Services Offered
          </h2>
          <div className="w-20 h-1 mx-auto bg-orange-500"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 md:text-xl font-body">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service) => {
            const colorClasses = getColorClasses(service.color);
            return (
              <div
                key={service.id}
                className={`bg-white border-2 ${colorClasses.border} rounded-xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group`}
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${colorClasses.iconBg} ${colorClasses.text} text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="mb-3 text-2xl font-bold transition-colors font-heading text-blue-950 group-hover:text-orange-500">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mb-6 leading-relaxed text-gray-600 font-body">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="mb-6 space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3 text-sm text-gray-700">
                      <span className={`mt-1 ${colorClasses.text} font-bold`}>✓</span>
                      <span className="font-body">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a 
                  href="#contact"
                  className={`block text-center w-full ${colorClasses.button} text-white px-6 py-3 rounded-lg font-semibold font-heading transition-all duration-300 shadow-md hover:shadow-lg`}
                >
                  Get Started
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}