import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Aman Kumar Gupta" className="rounded-full w-48 h-48 object-cover mx-auto shadow-lg" />
          </div>
          <div className="md:w-2/3 md:pl-12">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Hello! I'm Aman Kumar Gupta, a passionate web developer and designer with a keen eye for creating beautiful, functional, and user-friendly websites. With a strong foundation in both front-end and back-end technologies, I strive to build seamless digital experiences that leave a lasting impression.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              My journey in web development started with a curiosity for how things work on the internet, and it has since evolved into a full-fledged career. I love tackling complex problems and turning them into simple, elegant solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities like hiking and photography. I believe in continuous learning and always push myself to stay updated with the latest trends in web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;