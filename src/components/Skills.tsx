import React from 'react';

interface Skill {
  category: string;
  items: string[];
}

interface Certification {
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    {
      category: "Programming Languages",
      items: ["Python", "C", "C++", "JavaScript", "TypeScript", "SQL"]
    },
    {
      category: "Frameworks & Libraries",
      items: ["LangChain", "Streamlit", "FastAPI", "React", "TensorFlow", "PyTorch", "Pandas", "NumPy"]
    },
    {
      category: "AI & ML Techniques",
      items: ["Natural Language Processing", "Retrieval Augmented Generation", "Machine Learning", "Deep Learning", "Computer Vision", "Data Analysis"]
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "Docker", "Ollama", "Hugging Face", "OpenAI", "Jupyter", "VS Code", "Google Colab"]
    }
  ];

  const certifications: Certification[] = [
    {
      title: "AI-900: Microsoft Azure AI Fundamentals",
      issuer: "Microsoft",
      date: "June 2023",
      link: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/"
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Coursera (Stanford University)",
      date: "August 2023",
      link: "https://www.coursera.org/specializations/machine-learning-introduction"
    },
    {
      title: "Introduction to Large Language Models",
      issuer: "Udemy",
      date: "January 2024"
    },
    {
      title: "Python for Data Science and Machine Learning",
      issuer: "NPTEL",
      date: "December 2022"
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8">
          Skills & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Certifications</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Technical Skills</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="space-y-3 sm:space-y-4">
                    <h4 className="text-base sm:text-lg font-medium text-blue-600 dark:text-blue-400">
                      {skillGroup.category}
                    </h4>
                    
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex} 
                          className="px-2 sm:px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs sm:text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 sm:mt-8">
                <h4 className="text-base sm:text-lg font-medium text-blue-600 dark:text-blue-400 mb-3 sm:mb-4">
                  Skill Proficiency
                </h4>
                
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <div className="flex justify-between mb-1 text-sm sm:text-base">
                      <span>Python & Data Science</span>
                      <span>90%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 sm:h-2.5">
                      <div className="bg-blue-600 h-2 sm:h-2.5 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1 text-sm sm:text-base">
                      <span>Natural Language Processing</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 sm:h-2.5">
                      <div className="bg-blue-600 h-2 sm:h-2.5 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1 text-sm sm:text-base">
                      <span>Machine Learning</span>
                      <span>80%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 sm:h-2.5">
                      <div className="bg-blue-600 h-2 sm:h-2.5 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1 text-sm sm:text-base">
                      <span>Web Development</span>
                      <span>75%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 sm:h-2.5">
                      <div className="bg-blue-600 h-2 sm:h-2.5 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Certifications</h3>
              
              <div className="space-y-4 sm:space-y-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-3 sm:pl-4 py-1">
                    <h4 className="font-medium text-sm sm:text-base">
                      {cert.link ? (
                        <a 
                          href={cert.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {cert.title}
                        </a>
                      ) : (
                        cert.title
                      )}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">{cert.issuer}</p>
                    <p className="text-gray-500 dark:text-gray-500 text-xs sm:text-sm">{cert.date}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-medium mb-2 text-sm sm:text-base">Continuous Learning</h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  I'm constantly expanding my knowledge through online courses, 
                  technical documentation, and hands-on projects. Currently learning 
                  advanced RAG techniques and multimodal AI applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;