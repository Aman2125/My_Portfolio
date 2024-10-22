import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { name, email, message });
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Get in Touch</h2>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">Contact Information</h3>
            <div className="flex items-center mb-4">
              <Mail size={20} className="text-blue-500 mr-2" />
              <span className="dark:text-gray-300">aman.gupta@example.com</span>
            </div>
            <div className="flex items-center mb-4">
              <Phone size={20} className="text-blue-500 mr-2" />
              <span className="dark:text-gray-300">+1 (123) 456-7890</span>
            </div>
            <div className="flex items-center">
              <MapPin size={20} className="text-blue-500 mr-2" />
              <span className="dark:text-gray-300">New York, NY, USA</span>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="md:w-1/2">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                rows={4}
                required
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;