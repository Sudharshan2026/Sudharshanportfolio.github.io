import React from 'react';

interface Achievement {
  title: string;
  description: string;
  date: string;
  category: 'competition' | 'academic' | 'project';
}

const Achievements: React.FC = () => {
  const achievements: Achievement[] = [
    {
      title: "Hack A Tank 2.0 - 2nd Place",
      description: "Secured 2nd place in a national-level hackathon by developing an AI-powered solution for automated document processing and information extraction.",
      date: "March 2024",
      category: "competition"
    },
    {
      title: "AIRO 4.0 Symposium Organizer",
      description: "Led the organization of AIRO 4.0, a technical symposium focused on artificial intelligence and robotics, managing a team of 15 volunteers.",
      date: "February 2024",
      category: "academic"
    },
    {
      title: "600+ Competitive Coding Problems Solved",
      description: "Solved over 600 problems across platforms like LeetCode, HackerRank, and CodeChef, demonstrating strong algorithmic thinking and problem-solving skills.",
      date: "2022 - Present",
      category: "project"
    },
    {
      title: "Department Academic Excellence Award",
      description: "Received recognition for outstanding academic performance in AI & Data Science coursework, maintaining a GPA in the top 5% of the class.",
      date: "December 2023",
      category: "academic"
    },
    {
      title: "Open Source Contributor",
      description: "Contributed to open-source AI projects, including documentation improvements and bug fixes for popular libraries in the machine learning ecosystem.",
      date: "2023 - Present",
      category: "project"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'competition':
        return 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300';
      case 'academic':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300';
      case 'project':
        return 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300';
      default:
        return 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300';
    }
  };

  return (
    <section id="achievements" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8">
          My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Achievements</span>
        </h2>
        
        <p className="text-center text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8 md:mb-12 px-2">
          A collection of my notable accomplishments, awards, and recognitions in the field of AI and Data Science.
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 sm:space-y-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-4 sm:p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <div className="md:w-24 flex-shrink-0 mb-2 md:mb-0">
                    <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{achievement.date}</span>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                      <h3 className="text-base sm:text-xl font-bold">{achievement.title}</h3>
                      <span className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium inline-block sm:inline ${getCategoryColor(achievement.category)}`}>
                        {achievement.category.charAt(0).toUpperCase() + achievement.category.slice(1)}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 sm:mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
              These achievements represent my commitment to excellence and continuous growth in the field of AI and Data Science.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;