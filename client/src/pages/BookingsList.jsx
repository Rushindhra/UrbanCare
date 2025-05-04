import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { bookingApi } from '../services/api';
import { useAuth } from '../context/AuthContext';

const BookingsList = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(location.state?.message || '');

  // Fetch bookings when component mounts or user changes
  useEffect(() => {
    if (user) {
      fetchUserBookings();
    } else {
      // Redirect to login if not authenticated
      navigate('/login', { state: { from: location.pathname } });
    }
    
    // Clear success message after 5 seconds
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [user, navigate, location.pathname, successMessage]);

  const fetchUserBookings = async () => {
    try {
      setLoading(true);
      const data = await bookingApi.getUserBookings();
      setBookings(data || []);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching bookings:', err);
      setError('Failed to load your bookings. Please try again later.');
      setLoading(false);
    }
  };

  const handleCancelBooking = async (bookingId) => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      try {
        await bookingApi.cancelBooking(bookingId);
        // Refresh bookings list
        fetchUserBookings();
        setSuccessMessage('Booking cancelled successfully');
      } catch (err) {
        console.error('Error cancelling booking:', err);
        setError('Failed to cancel booking. Please try again.');
      }
    }
  };

  // Format service type for display
  const formatServiceType = (type) => {
    return type.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  // Format date for display
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center p-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Your Bookings</h2>
      
      {/* Success Message */}
      {successMessage && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6" role="alert">
          <p>{successMessage}</p>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6" role="alert">
          <p>{error}</p>
        </div>
      )}

      {bookings.length === 0 ? (
        <div className="bg-gray-50 border border-gray-200 text-gray-700 px-4 py-10 rounded text-center">
          <p className="text-lg">You don't have any bookings yet.</p>
          <button 
            onClick={() => navigate('/services')}
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Book a Service
          </button>
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {bookings.map((booking) => (
              <li key={booking.id} className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col sm:flex-row sm:items-center">
                    <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 truncate">
                      {formatServiceType(booking.serviceType)}
                    </p>
                    <p className="sm:ml-2 flex-shrink-0 text-xs text-gray-500 dark:text-gray-400">
                      #{booking.id.substring(0, 8)}
                    </p>
                  </div>
                  <div className="ml-2 flex-shrink-0 flex">
                    <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${booking.status === 'confirmed' ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100' : 
                      booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100' : 
                      booking.status === 'cancelled' ? 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100' : 
                      'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'}`}
                    >
                      {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                    </p>
                  </div>
                </div>

                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      {formatDate(booking.appointmentDate)}
                    </p>
                    <p className="mt-2 sm:mt-0 sm:ml-6 flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3.586l2.707 2.707a1 1 0 01-1.414 1.414l-3-3A1 1 0 019 10V6a1 1 0 011-1z" clipRule="evenodd" />
                      </svg>
                      {booking.timeSlot}
                    </p>
                  </div>

                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    {booking.status !== 'cancelled' && (
                      <button
                        onClick={() => handleCancelBooking(booking.id)}
                        className="ml-4 inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dark:bg-red-800 dark:text-red-100 dark:hover:bg-red-700"
                      >
                        Cancel
                      </button>
                    )}
                    <button
                      onClick={() => navigate(`/bookings/${booking.id}`)}
                      className="ml-2 inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-800 dark:text-indigo-100 dark:hover:bg-indigo-700"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BookingsList;