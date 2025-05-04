import React, { useState, useEffect } from 'react';

const BookingForm = () => {
  // In a real app, we would get these from URL params
  // For demo, we'll use a prop or state
  const [serviceType, setServiceType] = useState('baby-care');
  
  const [providers, setProviders] = useState([]);
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  
  // Simulating user authentication
  const user = {
    username: 'Ramu',
    email: 'ramu@example.com',
    _id: '123456789'
  };
  
  const [formData, setFormData] = useState({
    name: user?.username || '',
    email: user?.email || '',
    phone: '',
    date: '',
    time: '',
    notes: '',
  });

  // Format the service type for display and API endpoint
  const getServiceTypeEndpoint = () => {
    switch (serviceType) {
      case 'home-services':
        return 'home-services';
      case 'pet-care':
        return 'petCare';
      case 'senior-care':
        return 'seniorCare';
      default:
        return serviceType;
    }
  };

  const formatServiceType = (type) => {
    switch (type) {
      case 'home-services':
        return 'home-services';
      case 'pet-care':
        return 'Pet Care';
      case 'senior-care':
        return 'Senior Care';
      default:
        return type.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    }
  };

  // Mock data based on provided backend structure
  const mockData = {
    'home-services': [
      {
        _id: '680671bc8558dfef791effaf',
        name: 'Radha Rani',
        age: 45,
        gender: 'Female',
        experienceInYears: 10,
        rating: 4.9,
        chargesPerHour: 300,
        availableTimings: ['9:00 AM - 1:00 PM', '2:00 PM - 6:00 PM'],
        location: 'Banjara Hills, Hyderabad',
        isAvailable: true,
        specialist: 'Cooking'
      },
      {
        _id: '680671e98558dfef791effb0',
        name: 'Jyothi',
        age: 38,
        gender: 'Female',
        experienceInYears: 6,
        rating: 4.6,
        chargesPerHour: 250,
        availableTimings: ['10:00 AM - 5:00 PM'],
        location: 'Miyapur, Hyderabad',
        isAvailable: true,
        specialist: 'Cleaning'
      },
      {
        _id: '6806721f8558dfef791effb1',
        name: 'Anjali',
        age: 32,
        gender: 'Female',
        experienceInYears: 5,
        rating: 4.7,
        chargesPerHour: 350,
        availableTimings: ['8:00 PM - 8:00 AM'],
        location: 'Begumpet, Hyderabad',
        isAvailable: false,
        specialist: 'Washing clothes'
      }
    ],
    'petCare': [
      {
        _id: '6806784e8558dfef791effb5',
        name: 'Ravi Kumar',
        age: 35,
        gender: 'Male',
        experienceInYears: 7,
        specialist: 'Pet Grooming',
        petTypesHandled: 'Dogs',
        rating: 4.8,
        chargesPerHour: 400,
        availableTimings: ['9:00 AM - 12:00 PM', '4:00 PM - 7:00 PM'],
        location: 'Kondapur, Hyderabad',
        isAvailable: true
      },
      {
        _id: '68067dc08558dfef791effb6',
        name: 'Sneha Reddy',
        age: 29,
        gender: 'Female',
        experienceInYears: 5,
        specialist: 'Pet Walking',
        petTypesHandled: 'Dogs',
        rating: 4.6,
        chargesPerHour: 300,
        availableTimings: ['6:00 AM - 9:00 AM', '5:00 PM - 7:00 PM'],
        location: 'Madhapur, Hyderabad',
        isAvailable: true
      }
    ],
    'seniorCare': [
      {
        _id: '68067e408558dfef791effba',
        name: 'Lakshmi',
        age: 45,
        gender: 'Female',
        experienceInYears: 12,
        specialist: 'Elderly Home Care',
        rating: 4.9,
        chargesPerHour: 350,
        availableTimings: ['9:00 AM - 5:00 PM'],
        location: 'Kukatpally, Hyderabad',
        isAvailable: true
      },
      {
        _id: '68067e608558dfef791effbb',
        name: 'Ramesh',
        age: 50,
        gender: 'Male',
        experienceInYears: 15,
        specialist: 'Physiotherapy',
        rating: 4.8,
        chargesPerHour: 400,
        availableTimings: ['10:00 AM - 6:00 PM'],
        location: 'Secunderabad, Hyderabad',
        isAvailable: true
      }
    ]
  };

  // Simulate fetching data from API
  useEffect(() => {
    const fetchProviders = async () => {
      try {
        setLoading(true);
        const endpoint = getServiceTypeEndpoint();
        
        // In a real app, we would fetch from the API
        // For demo, we'll use mock data
        setTimeout(() => {
          setProviders(mockData[endpoint] || []);
          setLoading(false);
        }, 1000);
      } catch (err) {
        console.error("Error fetching providers:", err);
        setError('Failed to load service providers. Please try again.');
        setLoading(false);
      }
    };
    
    fetchProviders();
  }, [serviceType]);

  // Update form data when user changes
//   useEffect(() => {
//     if (user) {
//       setFormData(prev => ({
//         ...prev,
//         name: user.username || '',
//         email: user.email || ''
//       }));
//     }
//   }, [user]);

  const handleServiceTypeChange = (e) => {
    setServiceType(e.target.value);
    setSelectedProvider(null);
    setShowBookingForm(false);
    setBookingSuccess(false);
    setError('');
  };

  const handleProviderSelect = (provider) => {
    setSelectedProvider(provider);
    setShowBookingForm(true);
    // In a real app we would scroll to the form
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!selectedProvider) {
      setError('Please select a service provider');
      return;
    }
    
    // Simulate booking process
    setLoading(true);
    
    setTimeout(() => {
      setBookingSuccess(true);
      setShowBookingForm(false);
      setLoading(false);
      
      // Reset form fields except user info
      setFormData(prev => ({
        ...prev,
        phone: '',
        date: '',
        time: '',
        notes: ''
      }));
    }, 1500);
  };

  // Reset the booking process
  const handleNewBooking = () => {
    setBookingSuccess(false);
    setSelectedProvider(null);
    setShowBookingForm(false);
    setError('');
  };

  // Get appropriate specialist label based on service type
  const getSpecialistLabel = () => {
    switch (serviceType) {
      case 'pet-care':
        return 'Specialty';
      case 'baby-care':
        return 'Specialization';
      case 'senior-care':
        return 'Specialization';
      default:
        return 'Specialization';
    }
  };

  // Show additional info based on service type
  const renderAdditionalInfo = (provider) => {
    if (serviceType === 'pet-care' && provider.petTypesHandled) {
      return <p className="text-gray-600 dark:text-gray-400">Handles: {provider.petTypesHandled}</p>;
    }
    return null;
  };

  if (loading && providers.length === 0) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Book Care Services</h2>
      
      {/* Service Type Selector */}
      <div className="mb-6">
        <label htmlFor="serviceType" className="block text-sm font-medium mb-2">
          Select Service Type
        </label>
        <select
          id="serviceType"
          value={serviceType}
          onChange={handleServiceTypeChange}
          className="w-full md:w-64 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700"
        >
          <option value="baby-care">Baby Care</option>
          <option value="pet-care">Pet Care</option>
          <option value="senior-care">Senior Care</option>
        </select>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-100 dark:bg-red-900 p-4 rounded-lg mb-6">
          <h3 className="text-red-800 dark:text-red-200 font-medium">Error</h3>
          <p className="text-red-700 dark:text-red-300">{error}</p>
        </div>
      )}

      {/* Success Message */}
      {bookingSuccess && (
        <div className="bg-green-100 dark:bg-green-900 p-4 rounded-lg mb-6">
          <h3 className="text-green-800 dark:text-green-200 font-medium">Booking Successful!</h3>
          <p className="text-green-700 dark:text-green-300">
            Your booking with {selectedProvider?.name} has been confirmed.
          </p>
          <button
            onClick={handleNewBooking}
            className="mt-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Make another booking
          </button>
        </div>
      )}

      {/* Service Providers List */}
      {!bookingSuccess && providers.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">
            Available {formatServiceType(serviceType)} Providers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {providers.map(provider => (
              <div 
                key={provider._id}
                className={`border dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow ${
                  selectedProvider?._id === provider._id 
                    ? 'ring-2 ring-blue-500 shadow-md' 
                    : ''
                }`}
              >
                <div className="p-4">
                  <h4 className="text-lg font-medium mb-1">{provider.name}</h4>
                  <div className="flex items-center mb-2">
                    <span className="text-yellow-500 mr-1">★</span>
                    <span>{provider.rating} ({provider.experienceInYears} years exp.)</span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-1">
                    <span className="font-semibold">{getSpecialistLabel()}:</span> {provider.specialist}
                  </p>
                  {renderAdditionalInfo(provider)}
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-1">
                    <span className="font-semibold">Location:</span> {provider.location}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    <span className="font-semibold">Rate:</span> ₹{provider.chargesPerHour}/hour
                  </p>
                  
                  <div className="mb-3">
                    <h5 className="font-medium mb-1">Available Timings:</h5>
                    <ul className="text-sm text-gray-600 dark:text-gray-400">
                      {provider.availableTimings.map((timing, index) => (
                        <li key={index}>{timing}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <button
                    onClick={() => handleProviderSelect(provider)}
                    disabled={!provider.isAvailable}
                    className={`w-full px-4 py-2 text-sm font-medium rounded-md ${
                      provider.isAvailable
                        ? 'bg-blue-500 hover:bg-blue-600 text-white'
                        : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {provider.isAvailable ? 'Book Now' : 'Currently Unavailable'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* No providers message */}
      {!loading && providers.length === 0 && (
        <div className="bg-yellow-100 dark:bg-yellow-900 p-4 rounded-lg mb-6">
          <h3 className="text-yellow-800 dark:text-yellow-200 font-medium">No Providers Available</h3>
          <p className="text-yellow-700 dark:text-yellow-300">
            There are currently no {formatServiceType(serviceType)} providers available. Please try another service or check back later.
          </p>
        </div>
      )}

      {/* Booking Form */}
      {showBookingForm && selectedProvider && !bookingSuccess && (
        <div className="mt-8 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border dark:border-gray-700">
          <h3 className="text-lg font-medium mb-4">
            Book Appointment with {selectedProvider.name}
          </h3>
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700"
                />
              </div>
              
              <div>
                <label htmlFor="date" className="block text-sm font-medium mb-1">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700"
                />
              </div>
              
              <div>
                <label htmlFor="time" className="block text-sm font-medium mb-1">
                  Time
                </label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700"
                >
                  <option value="">Select a time slot</option>
                  {selectedProvider.availableTimings.map((timing, index) => (
                    <option key={index} value={timing}>
                      {timing}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="mb-4">
              <label htmlFor="notes" className="block text-sm font-medium mb-1">
                Special Notes or Requirements
              </label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700"
              ></textarea>
            </div>
            
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setShowBookingForm(false)}
                className="mr-3 px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md shadow-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Confirm Booking
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default BookingForm;