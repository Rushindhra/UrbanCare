// src/services/api.js
import axios from 'axios';

// Create base API instance with proper configuration
const api = axios.create({
  // Use proxy setup in vite.config.js instead of hardcoded base URL
  baseURL: '',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding the auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling errors
api.interceptors.response.use(
  (response) => {
    return response.data; // Return data directly for cleaner usage
  },
  (error) => {
    console.error('API Error:', error);
    
    // Handle token expiration or unauthorized access
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    
    return Promise.reject(error);
  }
);

// Service Provider API calls
export const serviceProviderApi = {
  // Get all baby care providers
  getBabyCareProviders: async () => {
    try {
      // Return mock data for development if API is not available
      if (process.env.NODE_ENV === 'development' && process.env.VITE_USE_MOCK_DATA === 'true') {
        return mockProviders.babyCareMock;
      }
      
      const response = await api.get('/api/v1/BabyService');
      return response;
    } catch (error) {
      console.error('Error fetching baby care providers:', error);
      // Return empty array instead of throwing to prevent UI crashes
      return [];
    }
  },
  
  // Get all pet care providers
  getPetCareProviders: async () => {
    try {
      // Return mock data for development if API is not available
      if (process.env.NODE_ENV === 'development' && process.env.VITE_USE_MOCK_DATA === 'true') {
        return mockProviders.petCareMock;
      }
      
      const response = await api.get('/api/v1/pet');
      return response;
    } catch (error) {
      console.error('Error fetching pet care providers:', error);
      return [];
    }
  },
  
  // Get all senior care providers
  getSeniorCareProviders: async () => {
    try {
      // Return mock data for development if API is not available
      if (process.env.NODE_ENV === 'development' && process.env.VITE_USE_MOCK_DATA === 'true') {
        return mockProviders.seniorCareMock;
      }
      
      const response = await api.get('/api/v1/senior');
      return response;
    } catch (error) {
      console.error('Error fetching senior care providers:', error);
      return [];
    }
  },
  
  // Get single provider by ID and service type
  getProviderById: async (serviceType, providerId) => {
    let endpoint = '';
    if (serviceType === 'baby-care') {
      endpoint = `/api/v1/BabyService/${providerId}`;
    } else if (serviceType === 'pet-care') {
      endpoint = `/api/v1/pet/${providerId}`;
    } else if (serviceType === 'senior-care') {
      endpoint = `/api/v1/senior/${providerId}`;
    } else {
      throw new Error('Invalid service type');
    }
    
    try {
      // Return mock data for development if API is not available
      if (process.env.NODE_ENV === 'development' && process.env.VITE_USE_MOCK_DATA === 'true') {
        const mockData = getMockProviderById(serviceType, providerId);
        if (mockData) return mockData;
      }
      
      const response = await api.get(endpoint);
      return response;
    } catch (error) {
      console.error(`Error fetching ${serviceType} provider:`, error);
      throw error;
    }
  }
};

// Booking API calls
export const bookingApi = {
  // Create a new booking
  createBooking: async (bookingData) => {
    try {
      const response = await api.post('/api/v1/booking', bookingData);
      return response;
    } catch (error) {
      console.error('Error creating booking:', error);
      throw error;
    }
  },
  
  // Get user's bookings
  getUserBookings: async () => {
    try {
      const response = await api.get('/api/v1/booking/user');
      return response;
    } catch (error) {
      console.error('Error fetching user bookings:', error);
      throw error;
    }
  },
  
  // Cancel a booking
  cancelBooking: async (bookingId) => {
    try {
      const response = await api.put(`/api/v1/booking/${bookingId}/cancel`);
      return response;
    } catch (error) {
      console.error('Error cancelling booking:', error);
      throw error;
    }
  }
};

// Mock data for development when API is unavailable
const mockProviders = {
  seniorCareMock: [
    {
      _id: "sen1",
      name: "Dr. Anita Sharma",
      specialist: "Geriatric Care",
      experienceInYears: 15,
      gender: "Female",
      location: "Mumbai",
      chargesPerHour: 800,
      rating: 4.9,
      isAvailable: true,
      availableTimings: ["9:00 AM - 12:00 PM", "4:00 PM - 8:00 PM"]
    },
    {
      _id: "sen2",
      name: "Rajesh Kumar",
      specialist: "Physiotherapy for Elderly",
      experienceInYears: 10,
      gender: "Male",
      location: "Delhi",
      chargesPerHour: 600,
      rating: 4.7,
      isAvailable: true,
      availableTimings: ["8:00 AM - 1:00 PM", "5:00 PM - 9:00 PM"]
    }
  ],
  babyCareMock: [
    {
      _id: "bab1",
      name: "Meena Patel",
      specialist: "Infant Care",
      experienceInYears: 8,
      gender: "Female",
      location: "Bangalore",
      chargesPerHour: 500,
      rating: 4.8,
      isAvailable: true,
      availableTimings: ["9:00 AM - 6:00 PM"]
    },
    {
      _id: "bab2",
      name: "Priya Singh",
      specialist: "Pediatric Nurse",
      experienceInYears: 5,
      gender: "Female",
      location: "Hyderabad",
      chargesPerHour: 450,
      rating: 4.6,
      isAvailable: false,
      availableTimings: ["10:00 AM - 7:00 PM"]
    }
  ],
  petCareMock: [
    {
      _id: "pet1",
      name: "Rahul Verma",
      specialist: "Dog Training",
      experienceInYears: 7,
      gender: "Male",
      location: "Chennai",
      chargesPerHour: 400,
      rating: 4.5,
      isAvailable: true,
      availableTimings: ["8:00 AM - 12:00 PM", "3:00 PM - 7:00 PM"]
    },
    {
      _id: "pet2",
      name: "Sunita Roy",
      specialist: "Veterinary Assistant",
      experienceInYears: 4,
      gender: "Female",
      location: "Pune",
      chargesPerHour: 350,
      rating: 4.3,
      isAvailable: true,
      availableTimings: ["9:00 AM - 5:00 PM"]
    }
  ]
};

// Helper function to get mock provider by ID
const getMockProviderById = (serviceType, providerId) => {
  let providers;
  if (serviceType === 'baby-care') {
    providers = mockProviders.babyCareMock;
  } else if (serviceType === 'pet-care') {
    providers = mockProviders.petCareMock;
  } else if (serviceType === 'senior-care') {
    providers = mockProviders.seniorCareMock;
  } else {
    return null;
  }
  
  return providers.find(provider => provider._id === providerId);
};

export default api;