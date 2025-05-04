import React from 'react';
import BookingForm from '../pages/BookingForm';

const PetCare = () => {
  const services = [
    {
      title: 'Pet Sitting',
      description: 'In-home pet care while you are away, including feeding, walking, medication, and plenty of love and attention.'
    },
    {
      title: 'Dog Walking',
      description: 'Regular exercise and bathroom breaks for your dog, with flexible scheduling options for busy pet owners.'
    },
    {
      title: 'Pet Grooming',
      description: 'Professional bathing, brushing, nail trimming, and other grooming services for your furry friends.'
    },
    {
      title: 'Pet Transportation',
      description: 'Safe and comfortable transportation to vet appointments, grooming sessions, or other destinations.'
    },
    {
      title: 'Medication Administration',
      description: 'Proper administration of prescribed medications according to your veterinarians instructions.'
    },
    {
      title: 'Overnight Pet Care',
      description: 'Extended supervision for pets requiring special attention or companionship through the night.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg text-white mb-12">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Pet Care Services</h1>
          <p className="text-lg md:text-xl mb-6">
            Professional and loving care for your furry family members when you can't be there.
          </p>
          <a 
            href="#booking" 
            className="inline-block bg-white text-teal-600 font-medium px-6 py-3 rounded-md shadow-md hover:bg-gray-100 transition-colors duration-300"
          >
            Book Now
          </a>
        </div>
      </div>

      {/* Services Section */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">Our Pet Care Services</h2>
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
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">Why Pet Owners Trust Us</h2>
        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-teal-100 dark:bg-teal-900 w-16 h-16 rounded-full flex items-center justify-center text-teal-600 dark:text-teal-300 mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Insured & Bonded</h3>
              <p className="text-gray-600 dark:text-gray-300">All of our pet care professionals are fully insured and bonded for your peace of mind.</p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 dark:bg-teal-900 w-16 h-16 rounded-full flex items-center justify-center text-teal-600 dark:text-teal-300 mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600 dark:text-gray-300">Book regular visits or one-time care with convenient scheduling options.</p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 dark:bg-teal-900 w-16 h-16 rounded-full flex items-center justify-center text-teal-600 dark:text-teal-300 mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-6 0 4 4 0 016 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Experienced Staff</h3>
              <p className="text-gray-600 dark:text-gray-300">Our pet care team has years of experience handling all types of pets with love and expertise.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">What Pet Parents Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-gray-300 mr-4"></div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">Sarah J.</h4>
                <p className="text-gray-500 dark:text-gray-400">Dog Owner</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 italic">"The team has been walking my two golden retrievers for over a year now. They are always on time, professional, and my dogs absolutely adore them!"</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-gray-300 mr-4"></div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">Michael T.</h4>
                <p className="text-gray-500 dark:text-gray-400">Cat Owner</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 italic">"I was nervous about leaving my elderly cat while on vacation, but the pet sitting service was amazing. I received daily updates and photos, and came home to a happy, healthy pet."</p>
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
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">What areas do you serve?</h3>
            <p className="text-gray-600 dark:text-gray-300">We currently provide pet care services throughout the greater metropolitan area, including all surrounding suburbs within a 25-mile radius of downtown.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">How do I schedule a meet-and-greet with a pet sitter?</h3>
            <p className="text-gray-600 dark:text-gray-300">After booking a service, we'll arrange a complimentary meet-and-greet session where you and your pet can get acquainted with your assigned care provider before the actual service begins.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">What happens in case of an emergency?</h3>
            <p className="text-gray-600 dark:text-gray-300">All of our pet care professionals are trained in pet first aid and CPR. In case of an emergency, we will immediately contact you and your designated emergency veterinarian if necessary.</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-teal-50 dark:bg-teal-900 p-8 rounded-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">Questions or Special Requests?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">We're happy to help with custom pet care solutions for your furry family members.</p>
          <a 
            href="/contact" 
            className="inline-block bg-teal-600 text-white font-medium px-6 py-3 rounded-md shadow-md hover:bg-teal-700 transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default PetCare;