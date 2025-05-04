import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// Now we can use relative URLs with the proxy
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const userData = JSON.parse(localStorage.getItem('user'));
          if (userData) {
            setUser(userData);
          }
        }
      } catch (error) {
        console.error("Auth verification failed:", error);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      } finally {
        setLoading(false);
      }
    };
    checkAuthStatus();
  }, []);

  const login = async (email, password) => {
    try {
      // Using relative URL with the proxy
      const response = await axios.post('/api/v1/auth/login', { email, password });
      
      if (response.data.success) {
        setUser(response.data.user);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('token', response.data.token || 'true');
        return { success: true };
      }
      return { success: false, message: response.data.message || "Login failed" };
    } catch (error) {
      console.error("Login error:", error.response?.data?.message || error.message);
      return {
        success: false,
        message: error.response?.data?.message || "Login failed"
      };
    }
  };

  const signup = async (username, email, password) => {
    try {
      // Using relative URL with the proxy
      const response = await axios.post('/api/v1/auth/signup', { username, email, password });
      
      if (response.data.success) {
        return { success: true };
      }
      return { success: false, message: response.data.message || "Signup failed" };
    } catch (error) {
      console.error("Signup error:", error.response?.data?.message || error.message);
      return {
        success: false,
        message: error.response?.data?.message || "Signup failed"
      };
    }
  };

  const logout = async () => {
    try {
      // Using relative URL with the proxy
      await axios.post('/api/v1/auth/logout');
      setUser(null);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      return { success: true };
    } catch (error) {
      console.error("Logout error:", error);
      // Even if the backend logout fails, clear local storage and state
      setUser(null);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      return { success: true };
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);