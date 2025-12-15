import { useState } from "react";
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaGithub, 
  FaFacebook, 
  FaPaperPlane,
  FaWhatsapp // ✅ Added WhatsApp icon
} from "react-icons/fa";
import emailjs from "@emailjs/browser"; // ✅ modern EmailJS SDK

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      "service_gyvx1tv",       // ✅ Your Service ID
      "template_ew57hn7",      // ✅ Your Template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message
      },
      "I_iGPLapYQlTVZ9RA"      // ✅ Your Public Key
    )
    .then(() => {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    })
    .catch((err) => {
      console.error("FAILED...", err);
      alert("Oops! Something went wrong. Please try again.");
    })
    .finally(() => setLoading(false));
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-xl" />,
      title: "Email",
      value: "marksarmientowork@gmail.com",
      link: "mailto:marksarmientowork@gmail.com"
    },
    {
      icon: <FaPhone className="text-xl" />,
      title: "Phone",
      value: "+63 975 085 9003",
      link: "https://wa.me/639750859003?text=Hi%20Mark,%20I%20would%20like%20to%20hire%20you!"
    },
    {
      icon: <FaMapMarkerAlt className="text-xl" />,
      title: "Location",
      value: "Angono, Calabarzon, PH",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin className="text-xl" />,
      name: "LinkedIn",
      link: "https://linkedin.com/in/yourprofile"
    },
    {
      icon: <FaGithub className="text-xl" />,
      name: "GitHub",
      link: "https://github.com/yourprofile"
    },
    {
      icon: <FaFacebook className="text-xl" />,
      name: "Facebook",
      link: "https://www.facebook.com/markchristopher.sarmiento.1/"
    }
  ];

  return (
    <section id="contact" className="flex items-center justify-center min-h-screen px-8 py-20 bg-gray-50">
      <div className="w-full max-w-5xl space-y-12">
        
        {/* Heading */}
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-bold font-heading md:text-5xl text-blue-950">
            Contact Me
          </h2>
          <div className="w-20 h-1 mx-auto bg-orange-500"></div>
          <p className="text-lg text-gray-700 font-body">
            Let's discuss how I can help your business
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="p-8 bg-white border-2 border-gray-200 rounded-lg">
              <h3 className="mb-6 text-2xl font-bold font-heading text-blue-950">
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 text-orange-500 rounded-lg bg-blue-950">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="mb-1 text-sm font-bold text-gray-900 font-heading">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-600 transition-colors font-body hover:text-orange-500"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 font-body">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8 mt-8 border-t-2 border-gray-200">
                <h4 className="mb-4 text-sm font-bold text-gray-900 font-heading">
                  CONNECT WITH ME
                </h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 text-white transition-colors rounded-lg bg-blue-950 hover:bg-orange-500"
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="pt-6">
                <a
                  href="https://wa.me/639750859003?text=Hi%20Mark,%20I%20would%20like%20to%20hire%20you!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full px-6 py-3 space-x-2 font-semibold text-white transition-colors bg-green-500 rounded-lg font-heading hover:bg-green-600"
                >
                  <FaWhatsapp className="text-xl" /> {/* ✅ WhatsApp logo */}
                  <span>Contact Me on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 bg-white border-2 border-gray-200 rounded-lg">
            <h3 className="mb-6 text-2xl font-bold text-center font-heading text-blue-950">
              Send Email
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-700 font-body">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 transition-colors border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none font-body"
                  placeholder="Your name"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-700 font-body">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 transition-colors border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none font-body"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-700 font-body">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 transition-colors border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none font-body"
                  placeholder="How can I help?"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-700 font-body">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 transition-colors border-2 border-gray-200 rounded-lg resize-none focus:border-orange-500 focus:outline-none font-body"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center w-full px-6 py-3 space-x-2 font-semibold text-white transition-colors rounded-lg bg-blue-950 font-heading hover:bg-orange-500"
              >
                {loading ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FaPaperPlane />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
