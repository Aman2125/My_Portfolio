import React from 'react';
import { BookOpen } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    
    {
      degree: "BTech in Information Technology",
      institution: "Rajiv Gandhi Institute Of Petroleum Technology",
      year: "2022 - 2026",
      description: "Focused on Programming Fundamentals and Database Management"
    },
    {
      degree: "High school",
      institution: "Little Flower House , Varanasi",
      year: "2019 - 2021",
      description: "Passing percentage 94"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Education</h2>
        <div className="max-w-3xl mx-auto">
          {educationData.map((edu, index) => (
            <div key={index} className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <BookOpen size={24} className="text-blue-500 mr-2" />
                <h3 className="text-xl font-semibold dark:text-white">{edu.degree}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{edu.institution}</p>
              <p className="text-gray-500 dark:text-gray-400 mb-2">{edu.year}</p>
              <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;