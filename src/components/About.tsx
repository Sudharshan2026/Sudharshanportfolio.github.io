import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg">
                I'm an aspiring AI & Data Science professional with a passion for developing intelligent solutions 
                that solve real-world problems. Currently pursuing my B.Tech in AI & Data Science at 
                Sri Sairam Engineering College, I specialize in Natural Language Processing (NLP), 
                Large Language Models (LLMs), and machine learning applications.
              </p>
              
              <p className="text-base sm:text-lg">
                My journey in AI began with a fascination for how machines can learn and adapt. This curiosity 
                has evolved into expertise in building AI-powered applications that enhance human capabilities 
                and automate complex tasks. I'm particularly interested in the intersection of AI with everyday 
                applications and how these technologies can be made accessible to everyone.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Education</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-2"></span>
                      <div>
                        <p className="font-medium text-sm sm:text-base">B.Tech in AI & Data Science</p>
                        <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Sri Sairam Engineering College</p>
                        <p className="text-gray-500 dark:text-gray-500 text-xs sm:text-sm">2021 - 2025</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Interests</h3>
                  <ul className="space-y-2 sm:space-y-3">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-purple-600 rounded-full mt-1.5 mr-2"></span>
                      <span className="text-sm sm:text-base">Natural Language Processing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-purple-600 rounded-full mt-1.5 mr-2"></span>
                      <span className="text-sm sm:text-base">Large Language Models</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-purple-600 rounded-full mt-1.5 mr-2"></span>
                      <span className="text-sm sm:text-base">Retrieval Augmented Generation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-purple-600 rounded-full mt-1.5 mr-2"></span>
                      <span className="text-sm sm:text-base">AI Automation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;