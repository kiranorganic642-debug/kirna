import React from 'react';
import { useAppointments } from '../context/AppointmentProvider';
import { Calendar, Clock, User, Phone, CheckCircle2, XCircle, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const MyAppointments = () => {
  const { appointments, cancelAppointment } = useAppointments();

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-700 border-green-200';
      case 'pending': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'cancelled': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  if (appointments.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center max-w-md w-full">
          <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <Calendar className="w-10 h-10 text-gray-300" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">No Appointments Found</h2>
          <p className="text-gray-500 mb-8">You haven't booked any appointments yet. Your health is our priority.</p>
          <Link 
            to="/appointment"
            className="inline-block w-full py-4 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition-all shadow-lg shadow-primary-200"
          >
            Book Your First Appointment
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Appointments</h1>
            <p className="text-gray-600">Track and manage your upcoming consultations</p>
          </div>
          <Link 
            to="/appointment"
            className="px-6 py-3 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition-all shadow-md text-center"
          >
            + New Appointment
          </Link>
        </div>

        <div className="space-y-6">
          {appointments.sort((a, b) => new Date(b.bookedAt) - new Date(a.bookedAt)).map((app) => (
            <div key={app.id} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600">
                      <User className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{app.patientName}</h3>
                      <p className="text-sm text-gray-500 flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5" /> {app.phoneNumber}
                      </p>
                    </div>
                  </div>
                  <div className={`px-4 py-1.5 rounded-full border text-sm font-bold uppercase tracking-wider ${getStatusColor(app.status)}`}>
                    {app.status}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                      <Calendar className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-tight">Date</p>
                      <p className="text-gray-900 font-semibold">{new Date(app.date).toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' })}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                      <Clock className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-tight">Time Slot</p>
                      <p className="text-gray-900 font-semibold">{app.timeSlot}</p>
                    </div>
                  </div>
                </div>

                {app.problem && (
                  <div className="mb-8 p-4 bg-primary-50/50 rounded-2xl border border-primary-100">
                    <p className="text-xs text-primary-700 font-bold uppercase tracking-tight mb-1">Reason for Visit</p>
                    <p className="text-gray-700">{app.problem}</p>
                  </div>
                )}

                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => {
                      // Generate and "download" appointment letter logic
                      alert(`Appointment Letter for ${app.patientName}\nDate: ${app.date}\nTime: ${app.timeSlot}\n\nThis is your official appointment letter. Please present this at the clinic.`);
                    }}
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-white border-2 border-primary-600 text-primary-600 rounded-xl font-bold hover:bg-primary-50 transition-all"
                  >
                    <FileText className="w-5 h-5" />
                    View Letter
                  </button>
                  {app.status !== 'cancelled' && (
                    <button 
                      onClick={() => cancelAppointment(app.id)}
                      className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-red-50 text-red-600 rounded-xl font-bold hover:bg-red-100 transition-all border border-red-100"
                    >
                      <XCircle className="w-5 h-5" />
                      Cancel
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyAppointments;
