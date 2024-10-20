import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 75 },
    { name: "Node.js", level: 75 },
    { name: "HTML/CSS", level: 95 },
    { name: "SQL", level: 70 },
    { name: "Git", level: 85 },
    { name: "RESTful APIs", level: 80 }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <div className="flex justify-between mb-2">
                <span className="font-semibold dark:text-white">{skill.name}</span>
                <span className="text-gray-600 dark:text-gray-300">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;