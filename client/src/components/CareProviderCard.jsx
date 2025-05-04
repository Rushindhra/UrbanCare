import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext'; // Import the auth context
import { Link } from 'react-router-dom';

const CareProviderCard = () => {
  const { user } = useAuth(); // Get user from auth context
  const [specialists, setSpecialists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSpecialist, setSelectedSpecialist] = useState('');
  const [providers, setProviders] = useState([]);
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  // Fetch available specialist types on component mount
  useEffect(() => {
    // These are hardcoded specialist types for baby care
    // You can replace this with an API call if you have an endpoint that returns all specialists
    const specialistTypes = [
      "Making Baby Sleep Fast",
      "Playing with Kids",
      "Night-Time Care",
      "Bathing the Baby",
      "Daycare Support for Working Parents"
    ];
    setSpecialists(specialistTypes);
    setLoading(false);
  }, []);

  // Fetch providers when a specialist is selected
  useEffect(() => {
    if (selectedSpecialist) {
      fetchProviders(selectedSpecialist);
    }
  }, [selectedSpecialist]);

  const fetchProviders = async (specialist) => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/v1/BabyService/${specialist}`);
      if (response.data) {
        setProviders(response.data);
      } else {
        setProviders([]);
      }
      setError(null);
    } catch (err) {
      console.error('Error fetching providers:', err);
      setError('Failed to fetch providers. Please try again.');
      setProviders([]);
    } finally {
      setLoading(false);
    }
  };

  const selectProvider = (provider) => {
    if (!user) {
      // If no user is logged in, show login prompt
      setShowLoginPrompt(true);
    } else {
      setSelectedProvider(provider);
      setShowLoginPrompt(false);
    }
  };

  const handleBooking = async (e) => {
    e.preventDefault();
    
    if (!selectedProvider || !bookingDate || !bookingTime) {
      alert('Please fill in all booking details');
      return;
    }

    try {
      // Here you would implement the actual booking logic
      // For now, we'll just show a success message
      alert(`Booking successful!\nProvider: ${selectedProvider.name}\nDate: ${bookingDate}\nTime: ${bookingTime}`);
      
      // Reset form
      setSelectedProvider(null);
      setBookingDate('');
      setBookingTime('');
    } catch (err) {
      console.error('Booking error:', err);
      alert('Failed to book. Please try again.');
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Select Service Type</h3>
        <div className="flex flex-wrap gap-3">
          {specialists.map((specialist, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-md border ${
                selectedSpecialist === specialist
                  ? 'bg-purple-600 text-white border-purple-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600'
              }`}
              onClick={() => setSelectedSpecialist(specialist)}
            >
              {specialist}
            </button>
          ))}
        </div>
      </div>

      {loading && <div className="text-center py-4">Loading...</div>}
      
      {error && <div className="text-red-600 py-4">{error}</div>}
      
      {selectedSpecialist && providers.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Available Providers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {providers.map((provider, index) => (
              <div 
                key={index}
                className={`p-4 rounded-lg border cursor-pointer transition-all ${
                  selectedProvider && selectedProvider.name === provider.name
                    ? 'border-purple-600 bg-purple-50 dark:bg-purple-900'
                    : 'border-gray-200 bg-white hover:border-purple-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-purple-700'
                }`}
                onClick={() => selectProvider(provider)}
              >
                <h4 className="font-bold text-lg mb-1">{provider.name}</h4>
                <p className="text-gray-500 text-sm mb-2">{provider.specialist}</p>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-500 mr-1">★</span>
                  <span>{provider.rating}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <span className="font-medium">Experience:</span> {provider.experienceInYears} years
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <span className="font-medium">Location:</span> {provider.location}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <span className="font-medium">Price:</span> ₹{provider.price}/hour
                </p>
                <div className="mt-2">
                  <p className="font-medium mb-1">Available Times:</p>
                  <div className="flex flex-wrap gap-2">
                    {provider.availableTimings.map((time, i) => (
                      <span key={i} className="bg-gray-100 dark:bg-gray-700 px-2 py-1 text-xs rounded">
                        {time}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Login Prompt */}
      {showLoginPrompt && (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700 mb-8">
          <div className="text-center">
            <svg className="w-12 h-12 text-yellow-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
            </svg>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Authentication Required</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Please log in or create an account to book this service.
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/login"
                className="bg-purple-600 text-white py-2 px-6 rounded-md hover:bg-purple-700 transition-colors"
              >
                Log In
              </Link>
              <Link
                to="/signup"
                className="bg-white text-purple-600 border border-purple-600 py-2 px-6 rounded-md hover:bg-purple-50 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Booking Form - Only shown when user is logged in and a provider is selected */}
      {user && selectedProvider && (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Book {selectedProvider.name}</h3>
          <form onSubmit={handleBooking}>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Date</label>
              <input
                type="date"
                className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                value={bookingDate}
                onChange={(e) => setBookingDate(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Time</label>
              <select
                className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                value={bookingTime}
                onChange={(e) => setBookingTime(e.target.value)}
                required
              >
                <option value="">Select a time</option>
                {selectedProvider.availableTimings.map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
            >
              Book Now
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CareProviderCard;