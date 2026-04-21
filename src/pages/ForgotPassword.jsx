import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight, ShieldCheck, Key, ArrowLeft } from 'lucide-react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [step, setStep] = useState(1); // 1: Email, 2: OTP, 3: New Password

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
    setStep(2);
    // Simulate sending OTP
    console.log(`[AUTH] OTP sent to ${email}: 123456`);
  };

  const handleOtpChange = (index, value) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
    
    // Auto-focus next input
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otp.join('') === '123456') {
      setStep(3);
    } else {
      alert('Invalid OTP! Please try 123456');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100">
        <div className="text-center">
          <div className="w-20 h-20 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <Key className="w-10 h-10 text-primary-600" />
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
            {step === 1 ? 'Forgot Password?' : step === 2 ? 'Verify OTP' : 'Set New Password'}
          </h2>
          <p className="text-gray-500">
            {step === 1 
              ? "No worries! Enter your email and we'll send you reset instructions." 
              : step === 2 
                ? `Enter the 6-digit code sent to ${email}`
                : "Create a strong password to secure your account."}
          </p>
        </div>

        {step === 1 && (
          <form className="mt-8 space-y-6" onSubmit={handleEmailSubmit}>
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
            <button type="submit" className="w-full btn-primary py-4 text-lg shadow-xl shadow-primary-100 flex items-center justify-center gap-2">
              Send Reset Code <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        )}

        {step === 2 && (
          <form className="mt-8 space-y-8" onSubmit={handleOtpSubmit}>
            <div className="flex justify-between gap-2">
              {otp.map((digit, i) => (
                <input
                  key={i}
                  id={`otp-${i}`}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleOtpChange(i, e.target.value)}
                  className="w-12 h-14 text-center text-2xl font-black rounded-xl border-2 border-gray-100 focus:border-primary-500 focus:ring-0 outline-none transition-all bg-gray-50"
                />
              ))}
            </div>
            <button type="submit" className="w-full btn-primary py-4 text-lg shadow-xl shadow-primary-100 flex items-center justify-center gap-2">
              Verify Code <ShieldCheck className="w-5 h-5" />
            </button>
            <div className="text-center">
              <p className="text-sm text-gray-500">Didn't receive code? <button type="button" className="text-primary-600 font-bold">Resend</button></p>
            </div>
          </form>
        )}

        {step === 3 && (
          <form className="mt-8 space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Password Reset Successful!'); window.location.href='/login'; }}>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">New Password</label>
                <input type="password" required className="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none bg-gray-50" placeholder="••••••••" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">Confirm Password</label>
                <input type="password" required className="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none bg-gray-50" placeholder="••••••••" />
              </div>
            </div>
            <button type="submit" className="w-full btn-primary py-4 text-lg shadow-xl shadow-primary-100">
              Reset Password
            </button>
          </form>
        )}

        <div className="text-center mt-8">
          <Link to="/login" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-primary-600 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
