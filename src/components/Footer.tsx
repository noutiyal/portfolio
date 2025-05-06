
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300">
            &copy; {currentYear} Gopal Noutiyal. All rights reserved.
          </p>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
