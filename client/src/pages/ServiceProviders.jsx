// src/components/ServiceProviders.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { serviceProviderApi } from '../services/api';

const ServiceProviders = () => {
  const { serviceType } = useParams();
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProviders();
  }, [serviceType]);

  const fetchProviders = async () => {
    try {
      setLoading(true);
      let data = [];
      
      // Select the appropriate API call based on service type
      if (serviceType === 'baby-care') {
        data = await serviceProviderApi.getBabyCareProviders();
      } else if (serviceType === 'pet-care') {
        data = await serviceProviderApi.getPetCareProviders();
      } else if (serviceType === 'senior-care') {
        data = await serviceProviderApi.getSeniorCareProviders();
      }
      
      setProviders(data || []);
      setLoading(false);
    } catch (err) {
      console.error(`Error fetching ${serviceType} providers:`, err);
      setError(`Failed to load ${serviceType.replace('-', ' ')} providers. Please try again later.`);
      setLoading(false);
    }
  };

  const handleBooking = (providerId) => {
    navigate(`/booking/${serviceType}/${providerId}`);
  };

  // Get placeholder image for provider
  const getProviderImage = (provider) => {
    const gender = provider.gender || 'Unknown';
    
    if (serviceType === 'baby-care') {
      return gender === 'Male' 
        ? 'https://via.placeholder.com/300x300?text=Male+Babysitter' 
        : 'https://via.placeholder.com/300x300?text=Female+Babysitter';
    } else if (serviceType === 'pet-care') {
      return gender === 'Male' 
        ? 'https://via.placeholder.com/300x300?text=Male+Pet+Caretaker' 
        : 'https://via.placeholder.com/300x300?text=Female+Pet+Caretaker';
    } else {
      return gender === 'Male' 
        ? 'https://via.placeholder.com/300x300?text=Male+Senior+Caretaker' 
        : 'https://via.placeholder.com/300x300?text=Female+Senior+Caretaker';
    }
  };

  // Format service type for display
  const formatServiceType = (type) => {
    return type.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center p-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6" role="alert">
        <p>{error}</p>
        <button 
          onClick={fetchProviders} 
          className="mt-2 text-sm font-medium text-red-800 hover:text-red-900"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        {formatServiceType(serviceType)} Providers
      </h2>
      
      {providers.length === 0 ? (
        <div className="bg-yellow-100 dark:bg-yellow-900 p-4 rounded-lg mb-6">
          <h3 className="text-yellow-800 dark:text-yellow-200 font-medium">No Providers Available</h3>
          <p className="text-yellow-700 dark:text-yellow-300">
            There are currently no {serviceType.replace('-', ' ')} providers available. Please check back later.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {providers.map(provider => (
            <div key={provider._id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col h-full">
              {/* Provider Image */}
              <div className="h-48 bg-gray-200 dark:bg-gray-700">
                <img
                  src={getProviderImage(provider)}
                  alt={`${provider.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Provider Details */}
              <div className="p-4 flex-grow">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">{provider.name}</h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                    {provider.rating} ★
                  </span>
                </div>
                
                <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  <p><span className="font-medium">Specialization:</span> {provider.specialist}</p>
                  <p><span className="font-medium">Experience:</span> {provider.experienceInYears} years</p>
                  <p><span className="font-medium">Location:</span> {provider.location}</p>
                  <p><span className="font-medium">Charges:</span> ₹{provider.chargesPerHour}/hour</p>
                </div>
                
                {/* Availability Badge */}
                <div className="mt-3">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    provider.isAvailable 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  }`}>
                    {provider.isAvailable ? 'Available' : 'Unavailable'}
                  </span>
                </div>
                
                {/* Available Timings */}
                <div className="mt-3">
                  <h4 className="font-medium text-sm mb-1">Available Timings:</h4>
                  <ul className="text-xs text-gray-600 dark:text-gray-400">
                    {provider.availableTimings && provider.availableTimings.map((timing, index) => (
                      <li key={index}>{timing}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Book Now Button */}
              <div className="px-4 pb-4">
                <button
                  onClick={() => handleBooking(provider._id)}
                  disabled={!provider.isAvailable}
                  className={`w-full py-2 px-4 rounded-md text-sm font-medium text-white transition-colors duration-300 ${
                    provider.isAvailable 
                      ? 'bg-indigo-600 hover:bg-indigo-700' 
                      : 'bg-gray-400 cursor-not-allowed'
                  }`}
                >
                  {provider.isAvailable ? 'Book Now' : 'Unavailable'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceProviders;