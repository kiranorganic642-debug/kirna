import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const API_URL = 'http://localhost:5000/api';

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [loading, setLoading] = useState(true);
  const [adminExists, setAdminExists] = useState(false);
  const [dbConnected, setDbConnected] = useState(true);

  const checkAdminStatus = async () => {
    try {
      const response = await axios.get(`${API_URL}/auth/check-admin`);
      setAdminExists(response.data.adminExists);
      setDbConnected(response.data.dbConnected !== false);
    } catch (error) {
      console.error("Error checking admin status:", error);
      setDbConnected(false);
    }
  };

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    checkAdminStatus();
    setLoading(false);
  }, []);

  const register = async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/auth/signup`, userData);
      const data = response.data;
      
      setUser(data);
      localStorage.setItem('user', JSON.stringify(data));
      localStorage.setItem('token', data.token);
      localStorage.setItem('role', data.role);
      
      // Refresh admin status after registration
      checkAdminStatus();
      
      return data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Registration failed');
    }
  };

  const login = async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, { email, password });
      const data = response.data;

      setUser(data);
      localStorage.setItem('user', JSON.stringify(data));
      localStorage.setItem('token', data.token);
      localStorage.setItem('role', data.role);
      
      checkAdminStatus();
      
      return data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Invalid email or password');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    checkAdminStatus();
  };

  const isAdmin = user?.role === 'admin';

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAdmin, loading, adminExists, dbConnected, checkAdminStatus }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
