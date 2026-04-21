import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthProvider';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const { register, hasAdmin } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setError('');
      register(formData);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
            {!hasAdmin ? 'Admin Setup' : 'Create Account'}
          </h2>
          <p className="text-gray-500">
            {!hasAdmin 
              ? 'Create the first admin account to manage the platform' 
              : 'Join us to start your organic wellness journey'}
          </p>
        </div>
        
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm font-medium">
            {error}
          </div>
        )}
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">Full Name</label>
              <div className="relative">
                <input 
                  type="text" 
                  required 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none transition-all bg-gray-50"
                  placeholder="John Doe"
                />
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">Email Address</label>
              <div className="relative">
                <input 
                  type="email" 
                  required 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none transition-all bg-gray-50"
                  placeholder="name@example.com"
                />
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">Password</label>
              <div className="relative">
                <input 
                  type="password" 
                  required 
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none transition-all bg-gray-50"
                  placeholder="••••••••"
                />
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start">
              <input type="checkbox" required className="mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500" />
              <label className="ml-2 block text-sm text-gray-700 leading-relaxed">
                I agree to the <Link to="/terms" className="text-primary-600 font-bold hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-primary-600 font-bold hover:underline">Privacy Policy</Link>
              </label>
            </div>
          </div>

          <button type="submit" className="w-full btn-primary py-4 text-lg shadow-xl shadow-primary-100 flex items-center justify-center gap-2">
            {!hasAdmin ? 'Create Admin Account' : 'Sign Up'} <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        <div className="pt-6 border-t border-gray-100 flex items-center justify-center gap-2 text-xs text-gray-500">
          <ShieldCheck className="w-4 h-4 text-primary-600" />
          {!hasAdmin ? 'System Setup: Only one admin account can be created.' : 'Your data is encrypted and secure'}
        </div>

        <p className="text-center text-sm text-gray-500">
          Already have an account? {' '}
          <Link to="/login" className="font-bold text-primary-600 hover:text-primary-700 transition-colors underline underline-offset-4">Sign in here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
