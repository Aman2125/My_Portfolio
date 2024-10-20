import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-800 dark:text-white animate-fade-in">Aman Kumar Gupta</h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in-delay">Web Developer & Designer</p>
        <a href="#projects" className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 animate-fade-in-delay-2 transform hover:scale-105">
          View My Work
        </a>
      </div>
      <div className="absolute bottom-8 animate-bounce">
        <ChevronDown size={32} className="text-gray-600 dark:text-gray-300" />
      </div>
    </section>
  );
};

export default Hero;