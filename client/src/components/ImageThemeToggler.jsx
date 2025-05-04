// src/components/ImageThemeToggler.js
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ImageThemeToggler = ({ 
  lightImageSrc, 
  darkImageSrc, 
  altText = "Theme toggle image",
  className = "h-10 w-10" // Default size to match your existing logo
}) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <button
      onClick={toggleTheme}
      className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
      aria-label="Toggle theme with image"
    >
      <img 
        src={theme === 'dark' ? lightImageSrc : darkImageSrc} 
        alt={altText}
        className={className}
      />
    </button>
  );
};

export default ImageThemeToggler;