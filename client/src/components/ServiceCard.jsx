// src/components/ServiceCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, imagePath, imageAlt, link }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
      <div className="h-48 overflow-hidden">
        {/* Use placeholder images if actual images are not available */}
        <img 
          src={imagePath || `/api/placeholder/400/300?text=${title}`} 
          alt={imageAlt || title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `/api/placeholder/400/300?text=${title}`;
          }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        <Link 
          to={link} 
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-md transition-colors duration-300"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;