import React from 'react';
import CareProviderCard from '../components/CareProviderCard'
const BabyCare = () => {
  const services = [
    {
      title: 'Babysitting',
      description: 'Reliable and experienced babysitters to care for your children at home when you need to step out.'
    },
    {
      title: 'Nanny Services',
      description: 'Long-term childcare solutions with professional nannies trained in early childhood development.'
    },
    {
      title: 'Infant Care',
      description: 'Specialized care for newborns and infants, including feeding, changing, and sleep scheduling.'
    },
    {
      title: 'Educational Activities',
      description: 'Age-appropriate educational activities and games to stimulate cognitive development.'
    },
    {
      title: 'Overnight Care',
      description: 'Extended supervision for children requiring special attention or companionship through the night.'
    },
    {
      title: 'Special Needs Care',
      description: 'Specialized care for children with additional needs, provided by trained and experienced caregivers.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-400 to-purple-500 rounded-lg text-white mb-12">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Baby Care Services</h1>
          <p className="text-lg md:text-xl mb-6">
            Professional and loving care for your little ones, delivered by experienced and vetted caregivers.
          </p>
          <a 
            href="#booking" 
            className="inline-block bg-white text-purple-600 font-medium px-6 py-3 rounded-md shadow-md hover:bg-gray-100 transition-colors duration-300"
          >
            Book Now
          </a>
        </div>
      </div>

      {/* Services Section */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">Our Baby Care Services</h2>
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
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">Why Parents Trust Us</h2>
        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-pink-100 dark:bg-pink-900 w-16 h-16 rounded-full flex items-center justify-center text-pink-600 dark:text-pink-300 mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Vetted Caregivers</h3>
              <p className="text-gray-600 dark:text-gray-300">All our caregivers undergo rigorous background checks and training for your peace of mind.</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 dark:bg-pink-900 w-16 h-16 rounded-full flex items-center justify-center text-pink-600 dark:text-pink-300 mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600 dark:text-gray-300">Book regular appointments or last-minute care with convenient scheduling options.</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 dark:bg-pink-900 w-16 h-16 rounded-full flex items-center justify-center text-pink-600 dark:text-pink-300 mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-6 0 4 4 0 016 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Experienced Staff</h3>
              <p className="text-gray-600 dark:text-gray-300">Our baby care team has years of experience and specialized training in early childhood development.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">What Parents Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-gray-300 mr-4"></div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">Amanda R.</h4>
                <p className="text-gray-500 dark:text-gray-400">Mother of two</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 italic">"The babysitter was amazing with my children. They were engaged, happy, and didn't want her to leave! I felt completely comfortable leaving them in her care."</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-gray-300 mr-4"></div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">James L.</h4>
                <p className="text-gray-500 dark:text-gray-400">Father of an infant</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 italic">"As new parents, we were nervous about leaving our baby, but our caregiver was incredibly experienced and put us at ease. We received updates throughout the evening."</p>
          </div>
        </div>
      </div>

      {/* Booking Form */}
      <div id="booking" className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">Book a Service</h2>
        <CareProviderCard/>
      </div>

      {/* FAQ Section */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">How are your babysitters screened?</h3>
            <p className="text-gray-600 dark:text-gray-300">All our babysitters undergo comprehensive background checks, in-person interviews, and reference verification. Many have formal training in early childhood education or development.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">How far in advance should I book?</h3>
            <p className="text-gray-600 dark:text-gray-300">We recommend booking at least 48 hours in advance, but we understand that needs can arise suddenly and we do our best to accommodate last-minute requests.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">What ages do you provide care for?</h3>
            <p className="text-gray-600 dark:text-gray-300">We provide care for children of all ages, from newborns to teenagers, with caregivers specifically matched to your child's age and needs.</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-pink-50 dark:bg-pink-900 p-8 rounded-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">Questions or Special Requests?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">We're happy to help with custom childcare solutions for your family.</p>
          <a 
            href="/contact" 
            className="inline-block bg-purple-600 text-white font-medium px-6 py-3 rounded-md shadow-md hover:bg-purple-700 transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default BabyCare;