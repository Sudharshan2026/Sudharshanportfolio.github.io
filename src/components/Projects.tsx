import React, { useState } from 'react';
import { Github, ExternalLink, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubLink: string;
  demoLink?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "AI-Q: Flashcard Generator",
      description: "An AI-powered application that automatically generates flashcards from educational content, helping students study more efficiently.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      techStack: ["Python", "LangChain", "OpenAI", "Streamlit", "NLP"],
      githubLink: "https://github.com/sudharshan-b/ai-q-flashcard-generator",
      demoLink: "https://ai-q-demo.example.com"
    },
    {
      id: 2,
      title: "Career Catalyst",
      description: "A career counseling chatbot that provides personalized guidance based on skills, interests, and market trends.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      techStack: ["Python", "FastAPI", "LLM", "React", "Tailwind CSS"],
      githubLink: "https://github.com/sudharshan-b/career-catalyst"
    },
    {
      id: 3,
      title: "ATS Resume Checker",
      description: "An application that analyzes resumes against job descriptions to improve ATS compatibility and provide optimization suggestions.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      techStack: ["Python", "NLP", "Streamlit", "Machine Learning"],
      githubLink: "https://github.com/sudharshan-b/ats-resume-checker"
    },
    {
      id: 4,
      title: "RAG-powered Knowledge Base",
      description: "A retrieval-augmented generation system that provides accurate answers from a custom knowledge base with citations.",
      image: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80",
      techStack: ["Python", "LangChain", "Vector DB", "Ollama", "FastAPI"],
      githubLink: "https://github.com/sudharshan-b/rag-knowledge-base"
    }
  ];

  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const openProjectModal = (project: Project) => {
    setActiveProject(project);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setActiveProject(null);
    // Re-enable body scrolling when modal is closed
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8">
          My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
        </h2>
        
        <p className="text-center text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8 md:mb-12 px-2">
          Here are some of my recent projects that showcase my skills in AI, machine learning, and data science.
          Each project demonstrates different aspects of my technical abilities and problem-solving approach.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="h-40 sm:h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm sm:text-base line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs sm:text-sm">
                      +{project.techStack.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <Github size={18} />
                    </a>
                    {project.demoLink && (
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        aria-label={`Live demo for ${project.title}`}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                  
                  <button 
                    onClick={() => openProjectModal(project)}
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm sm:text-base"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Project Modal - Optimized for mobile */}
      {activeProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4 md:p-6 touch-none">
          <div 
            className="bg-white dark:bg-gray-900 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex justify-between items-center p-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl sm:text-2xl font-bold truncate pr-2">{activeProject.title}</h3>
              <button 
                onClick={closeProjectModal}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 flex-shrink-0"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-4 sm:p-6">
              <div className="h-48 sm:h-64 overflow-hidden rounded-lg mb-6">
                <img 
                  src={activeProject.image} 
                  alt={activeProject.title} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm sm:text-base">{activeProject.description}</p>
              
              <div className="mb-6">
                <h4 className="text-base sm:text-lg font-semibold mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.techStack.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:space-x-4">
                <a 
                  href={activeProject.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                >
                  <Github size={18} />
                  <span>View on GitHub</span>
                </a>
                {activeProject.demoLink && (
                  <a 
                    href={activeProject.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;