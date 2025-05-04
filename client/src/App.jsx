import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Layouts and shared components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import ThemeToggle from './components/ThemeToggle';

// Page components
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import BabyCare from './pages/BabyCare';
import PetCare from './pages/PetCare';
import SeniorCare from './pages/SeniorCare';
import BookingForm from './pages/BookingForm';
import ServiceProviders from './pages/ServiceProviders';
import BookingsList from './pages/BookingsList';
import HomeServices from './pages/HomeServices';
// Context providers
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                {/* Public routes */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                
                {/* Service Routes */}
                <Route path="/baby-care" element={<BabyCare />} />
                <Route path="/pet-care" element={<PetCare />} />
                <Route path="/senior-care" element={<SeniorCare />} />
                <Route path="/home-services" element={<HomeServices />} />
                {/* Protected routes */}
                <Route path="/profile" element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                } />
                <Route path="/services/:serviceType" element={<ServiceProviders />} />
<Route path="/booking/:serviceType/:providerName" element={<BookingForm />} />
<Route path="/bookings" element={<BookingsList />} />
                
                {/* Fallback route */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;