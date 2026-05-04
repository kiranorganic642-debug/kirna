import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthProvider';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError('');
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-2">Welcome Back</h2>
          <p className="text-gray-500">Sign in to your account</p>
        </div>
        
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm font-medium">
            {error}
          </div>
        )}
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">Email Address</label>
              <div className="relative">
                <input 
                  type="email" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none transition-all bg-gray-50"
                  placeholder="name@example.com"
                />
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-gray-700 block">Password</label>
                <Link to="/forgot-password" className="text-primary-600 hover:text-primary-700 font-bold text-xs transition-colors">Forgot password?</Link>
              </div>
              <div className="relative">
                <input 
                  type="password" 
                  required 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none transition-all bg-gray-50"
                  placeholder="••••••••"
                />
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <input type="checkbox" className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500" />
            <label className="ml-2 block text-sm text-gray-700">Remember me for 30 days</label>
          </div>

          <button type="submit" className="w-full btn-primary py-4 text-lg shadow-xl shadow-primary-100 flex items-center justify-center gap-2">
            Sign In <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        <p className="text-center text-sm text-gray-500">
          Don't have an account? {' '}
          <Link to="/register" className="font-bold text-primary-600 hover:text-primary-700 transition-colors underline underline-offset-4">
            Sign up for free
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
