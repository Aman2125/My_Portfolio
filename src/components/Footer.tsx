import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">&copy; 2024 Aman Kumar Gupta. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;