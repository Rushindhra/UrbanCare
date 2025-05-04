// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme'; // Keep this import and remove the duplicate
import ServiceCard from '../components/ServiceCard';

const services = [
  {
    title: 'Senior Care',
    description: 'Professional and compassionate care services for elderly loved ones, including companionship, meal preparation, and medical assistance.',
    imagePath: 'https://sonnethill.com/wp-content/uploads/2020/03/elderly-care-facilities.jpeg',
    imageAlt: 'Elderly care professional helping senior citizen',
    link: '/senior-care'
  },
  {
    title: 'Pet Care',
    description: 'Reliable pet sitting, dog walking, and pet healthcare services to keep your furry friends happy and healthy.',
    imagePath: 'https://diamondpet.storage.googleapis.com/wp-content/uploads/2019/04/08164936/pembroke-welsh-corgi-dog-walking-on-leash-with-owner-041323.jpg',
    imageAlt: 'Dog walker with pet on leash',
    link: '/pet-care'
  },
  {
    title: 'Baby Care',
    description: 'Experienced and certified babysitters and nannies to provide loving care for your little ones.',
    imagePath: 'https://teddyydiaper.in/wp-content/uploads/2023/01/Essentials-of-Postnatal-Care-for-the-Mother-and-Baby.jpg',
    imageAlt: 'Professional nanny caring for a baby',
    link: '/baby-care'
  }
];

// REMOVED: The duplicate useTheme hook definition

const Home = () => {
  // We're using the imported useTheme hook from ../hooks/useTheme
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Care Services at Your Fingertips</h1>
        <p className="text-xl mb-8 max-w-2xl text-gray-700 dark:text-gray-300">
          UrbanCare connects you with verified professionals for senior care, pet care, and babysitting services.
        </p>
        <a href="#services" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md shadow-md transition-colors duration-300">
          Explore Services
        </a>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16" id="services">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            We provide high-quality care services tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 md:p-12 text-center shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            Book your first care service today and experience the Urban Care difference.
          </p>
          <Link to="/senior-care" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md shadow-md transition-colors duration-300">
            Browse Services
          </Link>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Getting care has never been easier
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
            <h3 className="text-xl font-semibold mb-2">Choose a Service</h3>
            <p className="text-gray-600 dark:text-gray-400">Browse through our range of professional care services.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
            <h3 className="text-xl font-semibold mb-2">Select a Professional</h3>
            <p className="text-gray-600 dark:text-gray-400">Choose from our vetted, experienced care professionals.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
            <h3 className="text-xl font-semibold mb-2">Book and Relax</h3>
            <p className="text-gray-600 dark:text-gray-400">Schedule the service and enjoy peace of mind.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            See what makes our service special
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <span className="font-bold">R</span>
              </div>
              <div className="ml-3">
                <h4 className="font-semibold">Ravi Menon</h4>
                <div className="flex text-yellow-400">
                  <span>★★★★★</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400">"The pet sitter was amazing with my dog. Will definitely use again!"</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <span className="font-bold">S</span>
              </div>
              <div className="ml-3">
                <h4 className="font-semibold">Shreya Patel</h4>
                <div className="flex text-yellow-400">
                  <span>★★★★★</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400">"Found a wonderful babysitter for my twins. She's now a regular part of our family."</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <span className="font-bold">A</span>
              </div>
              <div className="ml-3">
                <h4 className="font-semibold">Arun Kumar</h4>
                <div className="flex text-yellow-400">
                  <span>★★★★★</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400">"The senior care service for my father has been exceptional. Highly recommended!"</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;