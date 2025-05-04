import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext'; // Import auth context

const HomeServices = () => {
  const { user } = useAuth(); // Get user from auth context
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(''); // Changed from 'All' to empty string
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');

  // Fetch providers based on the selected category (or all if empty category is selected)
  useEffect(() => {
    const fetchProviders = async () => {
      try {
        setLoading(true);
        
        // If empty category is selected, fetch all providers
        const endpoint = selectedCategory === '' 
          ? '/api/v1/homeService/Washroom Cleaning' 
          : `/api/v1/homeService/${selectedCategory}`;
          
        const response = await axios.get(endpoint);
        console.log(`Successfully fetched ${selectedCategory === '' ? 'all' : selectedCategory} providers:`, response.data);
        
        if (Array.isArray(response.data)) {
          setProviders(response.data);
        } else if (response.data.message && response.data.category) {
          // Handle the case where no providers were found for the category
          setProviders([]);
        }
        
        setError(null);
      } catch (err) {
        console.error(`Error fetching providers:`, err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProviders();
  }, [selectedCategory]);

  // We've consolidated the fetching logic into a single useEffect hook above

  const services = [
    {
      title: 'Cooking',
      description: 'Professional chefs specializing in various cuisines to prepare delicious and healthy meals for you and your family.'
    },
    {
      title: 'Room Cleaning',
      description: 'Thorough cleaning services for bedrooms, living rooms, and all interior spaces, leaving your home spotless.'
    },
    {
      title: 'Cloth Washing & Ironing',
      description: 'Expert laundry services including washing, drying, and pressing your clothes with care and attention to detail.'
    },
    {
      title: 'Washroom Cleaning',
      description: 'Specialized sanitation services for bathrooms, ensuring hygiene and cleanliness for your family.'
    },
    {
      title: 'Dishwashing',
      description: 'Efficient dishwashing services that ensure your kitchen utensils and dishes are thoroughly cleaned and sanitized.'
    },
    {
      title: 'Home Organization',
      description: 'Professional organizers to help declutter and arrange your living spaces for maximum functionality and comfort.'
    },
    {
      title: 'Gardening Services',
      description: 'Expert gardeners to maintain and beautify your outdoor spaces, from lawn care to plant maintenance and landscaping.'
    }
  ];

  // Filter categories for the dropdown - extract unique categories from providers and add an empty option
  const categories = ['', ...new Set(providers.map(provider => provider.category))];
  
  // The API now handles the filtering, so we can use providers directly
  const filteredProviders = providers;

  // Handle provider selection
  const selectProvider = (provider) => {
    if (!user) {
      // If no user is logged in, show login prompt
      setShowLoginPrompt(true);
    } else {
      setSelectedProvider(provider);
      setShowLoginPrompt(false);
    }
  };

  // Handle booking submission
  const handleBooking = async (e) => {
    e.preventDefault();
    
    if (!selectedProvider || !bookingDate || !bookingTime) {
      alert('Please fill in all booking details');
      return;
    }

    try {
      // Here you would implement the actual booking logic
      // Format data according to your backend expectations
      const bookingData = {
        providerId: selectedProvider._id,
        userId: user._id, // Assuming user object has an _id
        date: bookingDate,
        time: bookingTime
      };
      
      // Call your booking API endpoint (you'll need to implement this)
      // const response = await axios.post('/api/v1/bookings', bookingData);
      
      // For now, just show a success message
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

  // Helper function to handle price display
  const getPrice = (provider) => {
    return provider.chargesPerHour || provider.price || 'Price not available';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white mb-12">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Home Services</h1>
          <p className="text-lg md:text-xl mb-6">
            Professional household services that make your daily life easier - from cooking to cleaning, all delivered by vetted experts.
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
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">Our Home Services</h2>
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
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">Why Choose Our Home Services</h2>
        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-800 w-16 h-16 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-300 mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Verified Professionals</h3>
              <p className="text-gray-600 dark:text-gray-300">All our service providers undergo rigorous background checks and skill assessments.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-800 w-16 h-16 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-300 mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600 dark:text-gray-300">Book services for regular appointments or on-demand as needed.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-800 w-16 h-16 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-300 mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Time-Saving</h3>
              <p className="text-gray-600 dark:text-gray-300">Reclaim your valuable time by letting our experts handle household tasks efficiently.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Providers Section */}
      <div id="booking" className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">Available Home Service Providers</h2>
        
        {/* Category Filter */}
        <div className="mb-6">
          <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Filter by Category:
          </label>
          <select
            id="category-filter"
            className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-md px-4 py-2"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.slice(1).map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>
        
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">Loading service providers...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-500">Error loading providers: {error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProviders.map(provider => (
              <div 
                key={provider._id}
                className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border ${
                  selectedProvider && selectedProvider._id === provider._id
                    ? 'border-purple-600'
                    : 'border-gray-200 dark:border-gray-700'
                } hover:shadow-lg transition-shadow duration-300 cursor-pointer`}
                onClick={() => selectProvider(provider)}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{provider.name}</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">{provider.specialist}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${provider.isAvailable ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {provider.isAvailable ? 'Available' : 'Unavailable'}
                  </span>
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(provider.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600 dark:text-gray-300">{provider.rating}</span>
                </div>
                
                <div className="mb-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-medium">Category:</span> {provider.category}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-medium">Location:</span> {provider.location}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-medium">Rate:</span> ₹{getPrice(provider)}/hour
                  </p>
                </div>
                
                <div className="mb-4">
                  <p className="font-medium text-gray-900 dark:text-white mb-2">Available Timings:</p>
                  <div className="flex flex-wrap gap-2">
                    {provider.availableTimings && provider.availableTimings.map((timing, index) => (
                      <span 
                        key={index}
                        className="bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm"
                      >
                        {timing}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredProviders.length === 0 && !loading && !error && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-300">No providers found for this category. Please try another category.</p>
          </div>
        )}
      </div>

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
              <a
                href="/login"
                className="bg-purple-600 text-white py-2 px-6 rounded-md hover:bg-purple-700 transition-colors"
              >
                Log In
              </a>
              <a
                href="/signup"
                className="bg-white text-purple-600 border border-purple-600 py-2 px-6 rounded-md hover:bg-purple-50 transition-colors"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Booking Form - Only shown when user is logged in and a provider is selected */}
      {user && selectedProvider && (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700 mb-8">
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
                {selectedProvider.availableTimings && selectedProvider.availableTimings.map((time, index) => (
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

      {/* Testimonials */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-purple-500 mr-4"></div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">Priya Singh</h4>
                <p className="text-gray-500 dark:text-gray-400">Working professional</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 italic">"The home chef service has been a game changer for my family. Delicious, healthy meals without the hassle of cooking after a long workday."</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-purple-500 mr-4"></div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">Rahul Mehta</h4>
                <p className="text-gray-500 dark:text-gray-400">Busy parent</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 italic">"The weekly cleaning service has transformed our home environment. Professional, thorough and reliable - exactly what we needed."</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">What areas do you provide home services in?</h3>
            <p className="text-gray-600 dark:text-gray-300">We currently provide services in major cities including Delhi, Mumbai, Bangalore, Chennai, and Hyderabad, with plans to expand to more locations soon.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Do I need to provide cleaning supplies or cooking ingredients?</h3>
            <p className="text-gray-600 dark:text-gray-300">For cleaning services, our professionals bring their own supplies unless you have specific preferences. For cooking services, you can either provide ingredients or have the chef purchase them (with additional charges).</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">How do I select a specific service provider?</h3>
            <p className="text-gray-600 dark:text-gray-300">You can browse through our available providers, view their ratings, specialties, and prices, and select the one that best fits your needs. You can also request a specific provider for recurring services.</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">Have Special Requirements?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">We're happy to accommodate custom requests for your home service needs.</p>
          <a 
            href="/contact" 
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-md shadow-md transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;