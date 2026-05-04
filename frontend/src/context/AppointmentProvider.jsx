import React, { createContext, useContext, useState, useEffect } from 'react';

const AppointmentContext = createContext();

export const useAppointments = () => {
  const context = useContext(AppointmentContext);
  if (!context) {
    throw new Error('useAppointments must be used within an AppointmentProvider');
  }
  return context;
};

export const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState(() => {
    const saved = localStorage.getItem('appointments');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments));
  }, [appointments]);

  const addAppointment = (appointment) => {
    const newAppointment = {
      ...appointment,
      id: Date.now(),
      status: 'pending', // default status
      bookedAt: new Date().toISOString(),
    };
    setAppointments(prev => [...prev, newAppointment]);
    return newAppointment;
  };

  const cancelAppointment = (id) => {
    setAppointments(prev => prev.filter(app => app.id !== id));
  };

  const updateAppointmentStatus = (id, newStatus) => {
    setAppointments(prev => prev.map(app => 
      app.id === id ? { ...app, status: newStatus } : app
    ));
  };

  return (
    <AppointmentContext.Provider value={{ appointments, addAppointment, cancelAppointment, updateAppointmentStatus }}>
      {children}
    </AppointmentContext.Provider>
  );
};
