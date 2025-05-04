import React from 'react';
import { Link } from 'react-router-dom';
import BookingForm from '../pages/BookingForm';

const SeniorCare = () => {
  const services = [
    {
      title: 'Companionship',
      description: 'Friendly conversation, emotional support, and social engagement for seniors who may experience loneliness.'
    },
    {
      title: 'Personal Care',
      description: 'Assistance with bathing, grooming, dressing, medication reminders, and other daily personal care needs.'
    },
    {
      title: 'Meal Preparation',
      description: 'Nutritious meal planning and preparation according to dietary requirements and preferences.'
    },
    {
      title: 'Light Housekeeping',
      description: 'Help with maintaining a clean and safe environment, including laundry and household chores.'
    },
    {
      title: 'Transportation',
      description: 'Safe transportation to medical appointments, shopping, social events, and other outings.'
    },
    {
      title: 'Medication Management',
      description: 'Reminders to take medications on schedule and assistance with organizing prescriptions.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg text-white mb-12">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Senior care Services</h1>
          <p className="text-lg md:text-xl mb-6">
            Professional and compassionate care for your elderly loved ones when they need assistance.
          </p>
          <a 
            href="#booking" 
            className="inline-block bg-white text-indigo-600 font-medium px-6 py-3 rounded-md shadow-md hover:bg-gray-100 transition-colors duration-300"
          >
            Book Now
          </a>
        </div>
      </div>

      {/* Services Section */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">Our Senior Care Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">Why Families Trust Us</h2>
        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-indigo-100 dark:bg-indigo-900 w-16 h-16 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-300 mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Insured & Bonded</h3>
              <p className="text-gray-600 dark:text-gray-300">All of our caregivers are fully insured and bonded for your peace of mind.</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 dark:bg-indigo-900 w-16 h-16 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-300 mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600 dark:text-gray-300">Book regular visits or one-time care with convenient scheduling options.</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 dark:bg-indigo-900 w-16 h-16 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-300 mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-6 0 4 4 0 016 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Experienced Staff</h3>
              <p className="text-gray-600 dark:text-gray-300">Our care team has years of experience providing compassionate care to seniors.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">What Families Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-gray-300 mr-4"></div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">David T.</h4>
                <p className="text-gray-500 dark:text-gray-400">Son of client</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 italic">"The caregiver has been a blessing for my mother. She's not just professional but truly compassionate. Mom looks forward to her visits!"</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-gray-300 mr-4"></div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">Jennifer W.</h4>
                <p className="text-gray-500 dark:text-gray-400">Daughter of client</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 italic">"As someone living far from my elderly parents, this senior care service gives me peace of mind knowing they're in good hands."</p>
          </div>
        </div>
      </div>

      {/* Booking Form */}
      <div id="booking" className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">Book a Service</h2>
        <BookingForm />
      </div>

      {/* FAQ Section */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">How are your caregivers screened?</h3>
            <p className="text-gray-600 dark:text-gray-300">All our caregivers undergo rigorous background checks, reference verification, and interviews. They are certified, trained professionals with experience in senior care.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">What if we need to change our schedule?</h3>
            <p className="text-gray-600 dark:text-gray-300">We understand that needs can change. We offer flexible scheduling and can accommodate changes with 24-hour notice when possible.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Do you provide specialized care for conditions like dementia?</h3>
            <p className="text-gray-600 dark:text-gray-300">Yes, many of our caregivers have specialized training in dementia care, Parkinson's care, and other conditions common among seniors.</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-indigo-50 dark:bg-indigo-900 p-8 rounded-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">Questions or Special Requests?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">We're happy to help with custom care solutions for your elderly loved ones.</p>
          <a 
            href="/contact" 
            className="inline-block bg-indigo-600 text-white font-medium px-6 py-3 rounded-md shadow-md hover:bg-indigo-700 transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default SeniorCare;