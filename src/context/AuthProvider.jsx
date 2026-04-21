import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

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

  const [registeredUsers, setRegisteredUsers] = useState(() => {
    const saved = localStorage.getItem('registeredUsers');
    return saved ? JSON.parse(saved) : [];
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on load
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    const savedRegisteredUsers = localStorage.getItem('registeredUsers');
    if (savedRegisteredUsers) {
      setRegisteredUsers(JSON.parse(savedRegisteredUsers));
    }
    setLoading(false);
  }, []);

  const register = (userData) => {
    const isFirstUser = registeredUsers.length === 0;
    
    // Check if user already exists
    if (registeredUsers.find(u => u.email === userData.email)) {
      throw new Error('User with this email already exists.');
    }

    const newUser = {
      ...userData,
      id: Date.now(),
      role: isFirstUser ? 'Admin' : 'User', // First user is Admin, others are Users
      token: 'fake-jwt-token'
    };

    const updatedUsers = [...registeredUsers, newUser];
    setRegisteredUsers(updatedUsers);
    localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));
    
    // Auto login after registration
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    return newUser;
  };

  const login = (email, password) => {
    const foundUser = registeredUsers.find(u => u.email === email && u.password === password);
    
    if (!foundUser) {
      throw new Error('Invalid email or password');
    }

    setUser(foundUser);
    localStorage.setItem('user', JSON.stringify(foundUser));
    return foundUser;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const isAdmin = user?.role === 'Admin';
  const hasAdmin = registeredUsers.some(u => u.role === 'Admin');

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAdmin, hasAdmin, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
