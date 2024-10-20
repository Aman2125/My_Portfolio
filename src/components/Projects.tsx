import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A fully responsive online store built with React, Node.js, and MongoDB',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    github: 'https://github.com/Aman2125/E-Commerce',
    live: 'https://ecommerce-platform-demo.netlify.app'
  },
  {
    id: 2,
    title: 'Journal and To-do app',
    description: 'A productivity app with drag-and-drop functionality using React DnD and Redux',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    github: 'https://github.com/Aman2125/Todo-and-Journal',
    live: 'https://task-management-demo.netlify.app'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A real-time weather application using OpenWeatherMap API and Chart.js',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    github: 'https://github.com/yourusername/weather-dashboard',
    live: 'https://weather-dashboard-demo.netlify.app'
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:text-blue-600 transition-colors">
                    <Github size={20} className="mr-1" />
                    GitHub
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center text-green-500 hover:text-green-600 transition-colors">
                    <ExternalLink size={20} className="mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;