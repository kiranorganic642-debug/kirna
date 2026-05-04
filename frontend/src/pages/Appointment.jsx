import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle2, MapPin, ShieldCheck, HeartPulse, FileText, Send } from 'lucide-react';
import { useAppointments } from '../context/AppointmentProvider';
import { Link } from 'react-router-dom';
import DoctorPhoto from '../assets/Doctor photo.jpeg';

const Appointment = () => {
  const { addAppointment } = useAppointments();
  const [formData, setFormData] = useState({
    patientName: '',
    phoneNumber: '',
    email: '',
    date: '',
    timeSlot: '',
    problem: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastBookedId, setLastBookedId] = useState(null);
  const [errors, setErrors] = useState({});

  const timeSlots = ['10 AM', '11 AM', '1 PM', '4 PM'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.patientName.trim()) newErrors.patientName = 'Patient name is required';
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNumber.trim().replace(/\D/g, '').slice(-10))) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.date) newErrors.date = 'Please select a date';
    if (!formData.timeSlot) newErrors.timeSlot = 'Please select a time slot';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendWhatsAppToDoctor = (data) => {
    const doctorPhone = '919830000000'; // Replace with actual doctor's WhatsApp number
    const message = `*New Appointment Request*%0A%0A*Patient:* ${data.patientName}%0A*Phone:* ${data.phoneNumber}%0A*Date:* ${data.date}%0A*Time:* ${data.timeSlot}%0A*Problem:* ${data.problem || 'Not specified'}`;
    window.open(`https://wa.me/${doctorPhone}?text=${message}`, '_blank');
  };

  const simulateSMSToPatient = (data) => {
    // In a real app, you would call an SMS API here (like Twilio, MSG91, etc.)
    console.log(`Sending SMS to ${data.phoneNumber}: Your appointment with Dr. Kiran Pandey is booked for ${data.date} at ${data.timeSlot}.`);
    // For demo purposes, we'll show an alert or just let the success screen handle it
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newApp = addAppointment(formData);
      setLastBookedId(newApp.id);
      
      // Removed automatic WhatsApp to doctor for high volume handling
      // Instead, we'll use a Doctor Dashboard for management
      simulateSMSToPatient(formData);

      setIsSubmitted(true);
      setFormData({
        patientName: '',
        phoneNumber: '',
        email: '',
        date: '',
        timeSlot: '',
        problem: ''
      });
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl w-full bg-white rounded-[2.5rem] shadow-2xl shadow-primary-100 p-8 md:p-12 text-center animate-in zoom-in duration-500 border border-primary-50">
          <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-white shadow-lg">
            <CheckCircle2 className="w-12 h-12 text-green-500" />
          </div>
          
          <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Appointment Booked!</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-md mx-auto leading-relaxed">
            Your request has been received. Our team will review it and confirm your slot shortly.
          </p>

          <div className="bg-gray-50 rounded-3xl p-6 mb-10 text-left border border-gray-100">
            <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary-600" />
              Next Steps
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white shrink-0">
                  <CheckCircle2 className="w-3 h-3" />
                </div>
                Wait for a confirmation SMS or Call.
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white shrink-0">
                  <CheckCircle2 className="w-3 h-3" />
                </div>
                Check your status in "My Appointments" anytime.
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white shrink-0">
                  <FileText className="w-3 h-3" />
                </div>
                Your appointment is logged in our system.
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link 
              to="/my-appointments"
              className="flex items-center justify-center gap-2 py-4 px-6 bg-primary-600 text-white rounded-2xl font-bold hover:bg-primary-700 transition-all shadow-xl shadow-primary-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileText className="w-5 h-5" />
              View Appointment Letter
            </Link>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="flex items-center justify-center gap-2 py-4 px-6 bg-white text-gray-700 border-2 border-gray-100 rounded-2xl font-bold hover:bg-gray-50 transition-all hover:border-gray-200"
            >
              Book Another
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Book an Appointment</h1>
              <p className="text-lg text-gray-600">Premium consultation experience with clear guidance, privacy, and follow-up care.</p>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-24 h-24 bg-primary-100 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg border-2 border-white">
                  <img src={DoctorPhoto} alt="Dr. Kiran Pandey" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Dr. Kiran Pandey</h2>
                  <p className="text-primary-600 font-semibold">Neuro Pain Specialist | Kidney Care Expert | Herbal Medicine  </p>
                  <p className="text-gray-500 text-sm">Kiran Health Plus</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-2xl">
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Experience</p>
                  <p className="text-lg font-bold text-gray-900">12+ Years</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-2xl">
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Clinic</p>
                  <p className="text-lg font-bold text-gray-900">Kiran Health Plus</p>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary-50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Personalized Care</h4>
                    <p className="text-sm text-gray-500">Clear diagnosis guidance and practical next steps.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary-50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Expert Consultation</h4>
                    <p className="text-sm text-gray-500">12+ years of trusted clinical experience.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary-50 rounded-lg">
                    <ShieldCheck className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Private & Confidential</h4>
                    <p className="text-sm text-gray-500">Your health details are handled respectfully.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Clinic Details</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Address</div>
                    <div className="text-sm text-gray-500">660 Sarat Bose Road, Kolkata - 700065</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Timings</div>
                    <div className="text-sm text-gray-500">Mon–Sat: 11:00 AM – 04:00 PM</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center shrink-0">
                    <HeartPulse className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">What to bring</div>
                    <div className="text-sm text-gray-500">Previous reports, current medicines list, and symptoms timeline.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
            <div className="bg-primary-600 p-6 text-white">
              <h3 className="text-xl font-bold">Patient Details</h3>
              <p className="text-primary-100 text-sm">Fill the form and we’ll call you to confirm the slot.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Patient Name *</label>
                <div className="relative">
                  <input
                    type="text"
                    name="patientName"
                    value={formData.patientName}
                    onChange={handleChange}
                    placeholder="Enter full name"
                    className={`w-full pl-11 pr-4 py-3 bg-gray-50 border ${errors.patientName ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all`}
                  />
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
                {errors.patientName && <p className="text-red-500 text-xs mt-1 font-medium">{errors.patientName}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number *</label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="Your number"
                      className={`w-full pl-11 pr-4 py-3 bg-gray-50 border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all`}
                    />
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                  {errors.phoneNumber && <p className="text-red-500 text-xs mt-1 font-medium">{errors.phoneNumber}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Optional"
                      className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                    />
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Appointment Date *</label>
                  <div className="relative">
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className={`w-full pl-11 pr-4 py-3 bg-gray-50 border ${errors.date ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all`}
                    />
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                  {errors.date && <p className="text-red-500 text-xs mt-1 font-medium">{errors.date}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Time Slot *</label>
                  <div className="relative">
                    <select
                      name="timeSlot"
                      value={formData.timeSlot}
                      onChange={handleChange}
                      className={`w-full pl-11 pr-10 py-3 bg-gray-50 border ${errors.timeSlot ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 appearance-none transition-all cursor-pointer`}
                    >
                      <option value="">Select Time</option>
                      {timeSlots.map(slot => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                  {errors.timeSlot && <p className="text-red-500 text-xs mt-1 font-medium">{errors.timeSlot}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Problem / Description</label>
                <div className="relative">
                  <textarea
                    name="problem"
                    value={formData.problem}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Briefly describe your health concern..."
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
                  ></textarea>
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-primary-600 text-white rounded-xl font-bold text-lg hover:bg-primary-700 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-lg shadow-primary-200 mt-4"
              >
                Book Appointment
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-600 leading-relaxed">We keep your details private and only use them to confirm your appointment.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-600 leading-relaxed">You’ll receive a confirmation call for date and time slot within working hours.</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
