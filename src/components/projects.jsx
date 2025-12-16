import { useState } from "react";
import { FaCode, FaPalette, FaTimes } from "react-icons/fa";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Convert YouTube URLs to embed format
  const getYouTubeEmbedUrl = (url) => {
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1].split('?')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('v=')[1].split('&')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url; // Already in embed format or not a YouTube URL
  };

  const technicalProjects = [
    {
      id: "tech-1",
      title: "Liliryo Pos System",
      description: "A custom-built POS system for a website that sells crochet crafts.",
      fullDescription: "Liliyo is a point‑of‑sale and inventory management system I developed specifically for my girlfriend's crochet business. The platform was designed to handle the unique needs of selling handmade creative works and crafts, offering a clean interface for product listings, order tracking, and customer management.",
      videoUrl: "https://youtu.be/70-WDoZFsY0?si=TUYpvalORiE5lv4M",
      thumbnail: "/liliryo-thumbnail.png",
      tags: ["HTML", "CSS", "Javascript", "Tailwind Css"]
    },
    {
      id: "tech-2",
      title: "WorkIt - AI-Powered Workout Generator",
      description: "A platform where users can generate personalized workout by answering a simple form.",
      fullDescription: "WorkIt is a React-based web application that helps users create customized workout routines tailored to their fitness preferences. By filling out a simple form, users can specify their fitness level, available equipment, workout duration, and target muscle groups. The app then automatically generates a structured workout plan that matches their input, making fitness planning more accessible and efficient.",
      videoUrl: "https://youtu.be/sHh3EjkJcWU?si=qpzQTd4tGrVh5GBG",
      thumbnail: "/Workit-thumbnail.png",
      tags: ["React", "Tailwind Css", "HF API"]
    },
    {
      id: "tech-3",
      title: "Kitchen Buddy — AI‑Powered Recipe Assistant",
      description: "Kitchen Buddy reduces the stress of meal planning, encourages experimentation in the kitchen, and helps minimize food waste by suggesting recipes based on what's already on hand.",
      fullDescription: "Kitchen Buddy is a smart cooking assistant that transforms free‑text ingredient input into structured recipes and meal suggestions. Built with natural language processing, it helps users make the most of what they already have in their pantry by generating clear, step‑by‑step cooking instructions.",
      videoUrl: "https://youtu.be/WjKKTlRYOM0?si=nTvZeVi2xW7kuz2C",
      thumbnail: "/Kitchen-Buddy-thumbnail.png",
      tags: ["React", "Tailwind CSS", "Web Design", "Llama Api"]
    },
    {
      id: "tech-4",
      title: "Hotel Booking Tracker",
      description: "Excel Based Tracker used to track guest bookings while acting as a sales tracker while providing descriptive monthly summary.",
      fullDescription: "Hotel Booking Tracker is a streamlined sales and booking management system designed to help hospitality businesses monitor reservations, calculate revenues, and maintain accurate records of guest stays. Built in MS Excel, it combines structured data entry with automated formulas to reduce errors and improve efficiency.",
      videoUrl: "https://youtu.be/dckgzpphbx4",
      thumbnail: "/hotel-book-tracker-thumbnail.png",
      tags: ["Microsoft Excel",]
    },
    {
      id: "tech-5",
      title: "QR code generator",
      description: "Simple Qr code generator with download feature using javascript.",
      fullDescription: "Simple web-based tool that allows users to generate QR codes instantly. Built with HTML for structure, CSS for styling, and JavaScript for functionality, it takes user input (like text, URLs, or other data) and converts it into a scannable QR code. Additional feature includes the ability to download the generated qr code image.",
      videoUrl: "https://youtu.be/Js0lOuulTvg?si=_SGT4ALfzgsttmzA",
      thumbnail: "/Qr-Code-Gen-thumbnail.png",
      tags: ["HTML","Css","Javascript"]
    },
    {
      id: "tech-6",
      title: "KeepTrack - Todo List Webapp",
      description: "Simple Webapp that can store tasks realtime",
      fullDescription: "Keeptrack is a responsive web application designed to help users monitor and manage tasks or services in real time. Built with a clean, mobile‑friendly interface, it leverages Firebase Realtime Database to ensure instant synchronization across devices.",
      videoUrl: " https://youtu.be/e3-KsCfMwDg?si=JXXexJ7tvykMX7TK",
      thumbnail: "/keeptrack-thumbnail.png",
      tags: ["HTML","Css","Javascript","Firebase"]
    },
    {
      id: "tech-7",
      title: "Starred email to Googlesheet log - Automation workflow",
      description: "A simple automation that takes starred emails from Gmail, uses AI to classify them, and logs the details into Google Sheets.",
      fullDescription: "  This automation streamlines productivity by connecting Gmail, AI classification, and Google Sheets into a single workflow. Starred emails are automatically processed by AI, which classifies their content (e.g., task, client request, follow‑up) and extracts structured details. The results are then logged into a Google Sheet, creating a live task tracker without manual input.",
      videoUrl: "https://youtu.be/rlZHarPa7-w?si=LFoJWduawJEvQjiE", 
      thumbnail: "/gmail-gsheet-thumbnail.png",
      tags: ["Zapier","Google Sheets","Gmail"]
    },{
      id: "tech-8",
      title: "Service Request Tracker - Google Tools System",
      description: "Collects submissions from Google Forms into Google Sheets, letting employees track and update request statuses easily.",
      fullDescription: "A service request tracker that can record submissions from google form and automatically apply it to google sheets, it allows employees to track concerns while updating each of the requests' status.",
      videoUrl: "https://youtu.be/hj-mLJ05BYk?si=dLF_IXfoytK6Uzc0", 
      thumbnail: "/service-tracker-gtools-thumbnail.png",
      tags: ["Zapier","Google Sheets","Gmail"]
    }
   
  ];

  const creativeProjects = [
    {
      id: "create-1",
      title: "Ad Campaign Design",
      description: "Promotional graphics created for PSI's marketing team, focusing on branding and clarity.",  
      fullDescription: "Add full description here...",
      imageUrl: "your-image-url.jpg",
      tags: ["Graphic Design", "Marketing", "Branding"]
    },
    {
      id: "create-2",
      title: "Branding & Logo Design",
      description: "Minimalist logos and branding assets designed to give businesses a professional identity.",
      fullDescription: "Add full description here...",
      imageUrl: "your-image-url.jpg",
      tags: ["Logo Design", "Branding", "Identity"]
    },
    {
      id: "create-3",
      title: "Social Media Graphics",
      description: "Eye-catching posts and banners optimized for engagement and consistency across platforms.",
      fullDescription: "Add full description here...",
      imageUrl: "your-image-url.jpg",
      tags: ["Social Media", "Graphics", "Content"]
    }
  ];

  const ProjectCard = ({ project, color, isCreative }) => (
    <div
      onClick={() => setSelectedProject(project)}
      className={`relative bg-white border-2 ${color} rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer group overflow-hidden`}
    >
      {/* Preview Badge */}
      <div className="absolute px-3 py-1 text-xs font-bold text-white bg-orange-500 rounded-full top-4 right-4 animate-pulse">
        PREVIEW
      </div>
      
      {/* Thumbnail */}
      <div className="relative h-40 mb-4 overflow-hidden transition-transform duration-300 rounded-lg group-hover:scale-105">
        {/* Background Image */}
        {(project.thumbnail || project.imageUrl) ? (
          <img 
            src={isCreative ? project.imageUrl : project.thumbnail} 
            alt={project.title}
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100"></div>
        )}
        
        {/* Dark overlay */}
        <div className="absolute inset-0 transition-colors duration-300 bg-black/20 group-hover:bg-black/40"></div>
        
        {/* Play/View icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative z-10 p-4 transition-all duration-300 rounded-full bg-white/90 group-hover:bg-orange-500 group-hover:scale-110">
            {isCreative ? (
              <svg className="w-8 h-8 transition-colors text-blue-950 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"/>
              </svg>
            ) : (
              <svg className="w-8 h-8 transition-colors text-blue-950 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
              </svg>
            )}
          </div>
        </div>
        
        {/* Label */}
        <div className="absolute px-2 py-1 text-xs text-white rounded bottom-2 right-2 bg-black/60">
          {isCreative ? "Click to view" : "Click to watch"}
        </div>
      </div>
      
      <h4 className="mb-3 text-xl font-bold transition-colors font-heading text-blue-950 group-hover:text-orange-500">
        {project.title}
      </h4>
      <p className="mb-4 text-sm text-gray-600 font-body line-clamp-2">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs text-gray-700 bg-gray-100 rounded-full font-body"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <button className="flex items-center space-x-2 text-sm font-semibold text-orange-500 transition-transform group-hover:translate-x-2">
          <span>View Full Details</span>
          <span>→</span>
        </button>
        <span className="text-xs text-gray-400 font-body">
          {isCreative ? "+ Gallery" : "+ Video Demo"}
        </span>
      </div>
    </div>
  );

  return (
    <section id="projects" className="flex items-center justify-center min-h-screen px-8 py-20 bg-gray-50 ">
      <div className="w-full space-y-16 max-w-7xl">
        
        {/* Heading */}
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-bold font-heading md:text-5xl text-blue-950">
            Projects
          </h2>
          <div className="w-20 h-1 mx-auto bg-orange-500"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 font-body md:text-xl">
            A showcase of my technical builds and creative designs.
          </p>
        </div>
        
        {/* Technical Projects */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-lg bg-blue-950">
              <FaCode className="text-2xl text-orange-500" />
            </div>
            <h3 className="text-3xl font-bold font-heading text-blue-950">Technical Projects</h3>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {technicalProjects.map((project) => (
              <ProjectCard key={project.id} project={project} color="border-blue-200 hover:border-blue-500" isCreative={false} />
            ))}
          </div>
        </div>
        
        {/* Creative Projects */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-lg bg-blue-950">
              <FaPalette className="text-2xl text-orange-500" />
            </div>
            <h3 className="text-3xl font-bold font-heading text-blue-950">Creative Projects</h3>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {creativeProjects.map((project) => (
              <ProjectCard key={project.id} project={project} color="border-purple-200 hover:border-purple-500" isCreative={true} />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 flex items-center justify-between p-6 bg-white border-b-2 border-gray-200 rounded-t-2xl">
              <h3 className="text-3xl font-bold font-heading text-blue-950">
                {selectedProject.title}
              </h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-500 transition-colors hover:text-red-500"
              >
                <FaTimes className="text-2xl" />
              </button>
            </div>
          
            <div className="p-6 space-y-6">
             
              {selectedProject.videoUrl ? (
                // Video Player for Technical Projects
                <div className="overflow-hidden bg-gray-100 rounded-xl aspect-video">
                  {selectedProject.videoUrl.includes('youtube.com') || selectedProject.videoUrl.includes('youtu.be') ? (
                    // YouTube embed
                    <iframe
                      className="w-full h-full"
                      src={getYouTubeEmbedUrl(selectedProject.videoUrl)}
                      title={selectedProject.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    // Regular video
                    <video
                      controls
                      poster={selectedProject.thumbnail}
                      className="object-cover w-full h-full"
                      src={selectedProject.videoUrl}
                    >
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              ) : (
                // Image Gallery for Creative Projects
                <div className="overflow-hidden bg-gray-100 rounded-xl">
                  <img
                    src={selectedProject.imageUrl || "placeholder-image.jpg"}
                    alt={selectedProject.title}
                    className="object-cover w-full h-auto"
                  />
                  {/* You can add an image gallery here with multiple images */}
                </div>
              )}
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 font-semibold text-orange-600 bg-orange-100 rounded-full font-body"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Description */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold font-heading text-blue-950">About This Project</h4>
                <p className="leading-relaxed text-gray-700 font-body">
                  {selectedProject.fullDescription}
                </p>
              </div>
              
              {/* Additional details can be added here */}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}