import { useState } from "react";
import { FaCode, FaPalette, FaTimes } from "react-icons/fa";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const technicalProjects = [
    {
      id: 1,
      title: "POS & Inventory System",
      description: "A custom-built POS system with weekly sales summaries, date tracking, and automation.",
      fullDescription: "Add full description here...",
      videoUrl: "your-video-url.mp4", // Replace with actual video URL
      tags: ["Python", "Firebase", "React"]
    },
    {
      id: 2,
      title: "MLBB Overlay Tracker",
      description: "A two-overlay architecture for tracking spells and cooldowns in real-time.",
      fullDescription: "Add full description here...",
      videoUrl: "your-video-url.mp4",
      tags: ["JavaScript", "Real-time", "Gaming"]
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Responsive React + Tailwind portfolio showcasing skills, resume, and projects.",
      fullDescription: "Add full description here...",
      videoUrl: "your-video-url.mp4",
      tags: ["React", "Tailwind CSS", "Web Design"]
    }
  ];

  const creativeProjects = [
    {
      id: 4,
      title: "Ad Campaign Design",
      description: "Promotional graphics created for PSI's marketing team, focusing on branding and clarity.",
      fullDescription: "Add full description here...",
      videoUrl: "your-video-url.mp4",
      tags: ["Graphic Design", "Marketing", "Branding"]
    },
    {
      id: 5,
      title: "Branding & Logo Design",
      description: "Minimalist logos and branding assets designed to give businesses a professional identity.",
      fullDescription: "Add full description here...",
      videoUrl: "your-video-url.mp4",
      tags: ["Logo Design", "Branding", "Identity"]
    },
    {
      id: 6,
      title: "Social Media Graphics",
      description: "Eye-catching posts and banners optimized for engagement and consistency across platforms.",
      fullDescription: "Add full description here...",
      videoUrl: "your-video-url.mp4",
      tags: ["Social Media", "Graphics", "Content"]
    }
  ];

  const ProjectCard = ({ project, color, isCreative }) => (
    <div
      onClick={() => setSelectedProject(project)}
      className={`relative bg-white border-2 ${color} rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer group overflow-hidden`}
    >
      {/* Preview Badge */}
      <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
        PREVIEW
      </div>
      
      {/* Thumbnail placeholder */}
      <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg h-40 mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
        
        {isCreative ? (
          // Image icon for creative projects
          <>
            <div className="relative z-10 bg-white/90 rounded-full p-4 group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-300">
              <svg className="w-8 h-8 text-blue-950 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"/>
              </svg>
            </div>
            <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
              Click to view
            </div>
          </>
        ) : (
          // Play icon for technical projects
          <>
            <div className="relative z-10 bg-white/90 rounded-full p-4 group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-300">
              <svg className="w-8 h-8 text-blue-950 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
              </svg>
            </div>
            <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
              Click to watch
            </div>
          </>
        )}
      </div>
      
      <h4 className="font-heading text-xl font-bold text-blue-950 mb-3 group-hover:text-orange-500 transition-colors">
        {project.title}
      </h4>
      <p className="text-gray-600 font-body text-sm mb-4 line-clamp-2">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-body"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <button className="text-orange-500 font-semibold text-sm flex items-center space-x-2 group-hover:translate-x-2 transition-transform">
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
    <section id="projects" className="min-h-screen bg-gray-50 flex items-center justify-center px-8 py-20 ">
      <div className="max-w-7xl w-full space-y-16">
        
        {/* Heading */}
        <div className="text-center space-y-4">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-blue-950">
            Projects
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          <p className="font-body text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            A showcase of my technical builds and creative designs.
          </p>
        </div>
        
        {/* Technical Projects */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-950 p-3 rounded-lg">
              <FaCode className="text-orange-500 text-2xl" />
            </div>
            <h3 className="font-heading text-3xl text-blue-950 font-bold">Technical Projects</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalProjects.map((project) => (
              <ProjectCard key={project.id} project={project} color="border-blue-200 hover:border-blue-500" isCreative={false} />
            ))}
          </div>
        </div>
        
        {/* Creative Projects */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-950 p-3 rounded-lg">
              <FaPalette className="text-orange-500 text-2xl" />
            </div>
            <h3 className="font-heading text-3xl text-blue-950 font-bold">Creative Projects</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {creativeProjects.map((project) => (
              <ProjectCard key={project.id} project={project} color="border-purple-200 hover:border-purple-500" isCreative={true} />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b-2 border-gray-200 p-6 flex justify-between items-center rounded-t-2xl">
              <h3 className="font-heading text-3xl font-bold text-blue-950">
                {selectedProject.title}
              </h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-500 hover:text-red-500 transition-colors"
              >
                <FaTimes className="text-2xl" />
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Media Display - Video for Technical, Images for Creative */}
              {selectedProject.id <= 3 ? (
                // Video for Technical Projects
                <div className="bg-gray-100 rounded-xl overflow-hidden aspect-video">
                  <video
                    controls
                    className="w-full h-full object-cover"
                    src={selectedProject.videoUrl}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                // Image Gallery for Creative Projects
                <div className="bg-gray-100 rounded-xl overflow-hidden">
                  <img
                    src={selectedProject.imageUrl || "placeholder-image.jpg"}
                    alt={selectedProject.title}
                    className="w-full h-auto object-cover"
                  />
                  {/* You can add an image gallery here with multiple images */}
                </div>
              )}
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-body font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Description */}
              <div className="space-y-4">
                <h4 className="font-heading text-xl font-bold text-blue-950">About This Project</h4>
                <p className="font-body text-gray-700 leading-relaxed">
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