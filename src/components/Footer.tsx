import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <a href="#home" className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Sudharshan B
            </a>
            <p className="mt-2 text-gray-400 max-w-md text-sm sm:text-base px-4 md:px-0">
              AI & Data Science professional building intelligent solutions for real-world problems.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-3 sm:space-x-4 mb-4">
              <a 
                href="https://github.com/sudharshan-b" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={18} className="sm:hidden" />
                <Github size={20} className="hidden sm:block" />
              </a>
              <a 
                href="https://linkedin.com/in/sudharshan-b" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} className="sm:hidden" />
                <Linkedin size={20} className="hidden sm:block" />
              </a>
              <a 
                href="mailto:sudharshan.b@example.com" 
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="Email Contact"
              >
                <Mail size={18} className="sm:hidden" />
                <Mail size={20} className="hidden sm:block" />
              </a>
            </div>
            
            <p className="text-gray-500 text-xs sm:text-sm">
              &copy; {currentYear} Sudharshan B. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;