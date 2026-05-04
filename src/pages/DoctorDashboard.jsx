import React, { useState } from 'react';
import { useAppointments } from '../context/AppointmentProvider';
import { 
  Calendar, Clock, User, Phone, CheckCircle2, XCircle, 
  Search, Filter, Download, MessageCircle, MoreVertical,
  ChevronRight, LayoutDashboard, Users, CalendarDays, AlertCircle
} from 'lucide-react';
import DoctorPhoto from '../assets/Doctor photo.jpeg';

const DoctorDashboard = () => {
  const { appointments, updateAppointmentStatus } = useAppointments();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('');

  const stats = {
    total: appointments.length,
    pending: appointments.filter(a => a.status === 'pending').length,
    confirmed: appointments.filter(a => a.status === 'confirmed').length,
    today: appointments.filter(a => a.date === new Date().toISOString().split('T')[0]).length
  };

  const filteredAppointments = appointments.filter(app => {
    const matchesSearch = app.patientName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         app.phoneNumber.includes(searchTerm);
    const matchesStatus = statusFilter === 'all' || app.status === statusFilter;
    const matchesDate = !dateFilter || app.date === dateFilter;
    return matchesSearch && matchesStatus && matchesDate;
  }).sort((a, b) => new Date(b.bookedAt) - new Date(a.bookedAt));

  const getStatusStyle = (status) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-700';
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      case 'cancelled': return 'bg-red-100 text-red-700';
      case 'completed': return 'bg-blue-100 text-blue-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const handleWhatsApp = (app) => {
    const message = `Hello ${app.patientName}, this is regarding your appointment at Kiran Health Plus for ${app.date} at ${app.timeSlot}.`;
    window.open(`https://wa.me/91${app.phoneNumber.replace(/\D/g, '').slice(-10)}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Dashboard Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-primary-100 shadow-sm">
                <img src={DoctorPhoto} alt="Dr. Kiran Pandey" className="w-full h-full object-cover" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <LayoutDashboard className="w-6 h-6 text-primary-600" />
                  Doctor's Dashboard
                </h1>
                <p className="text-sm text-gray-500 mt-1">Manage and track all patient appointments in one place.</p>
              </div>
            </div>
            <button 
              onClick={() => {
                const csv = [
                  ['Patient Name', 'Phone', 'Date', 'Time', 'Status', 'Problem'],
                  ...filteredAppointments.map(a => [a.patientName, a.phoneNumber, a.date, a.timeSlot, a.status, a.problem])
                ].map(row => row.join(',')).join('\n');
                const blob = new Blob([csv], { type: 'text/csv' });
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.setAttribute('hidden', '');
                a.setAttribute('href', url);
                a.setAttribute('download', `appointments_${new Date().toLocaleDateString()}.csv`);
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
              }}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 transition-all shadow-sm"
            >
              <Download className="w-4 h-4" /> Export CSV
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Requests', value: stats.total, icon: <Users className="w-5 h-5" />, color: 'bg-blue-500' },
            { label: 'Pending Review', value: stats.pending, icon: <AlertCircle className="w-5 h-5" />, color: 'bg-yellow-500' },
            { label: 'Confirmed Today', value: stats.today, icon: <CalendarDays className="w-5 h-5" />, color: 'bg-green-500' },
            { label: 'Total Confirmed', value: stats.confirmed, icon: <CheckCircle2 className="w-5 h-5" />, color: 'bg-primary-600' }
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-5">
              <div className={`w-12 h-12 ${stat.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                {stat.icon}
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">{stat.label}</p>
                <p className="text-2xl font-black text-gray-900">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Filters and Search */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative md:col-span-2">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search by patient name or phone..." 
                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <select 
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none appearance-none cursor-pointer"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="date" 
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none cursor-pointer"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Appointments List */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Patient Details</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Appointment Info</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredAppointments.length > 0 ? filteredAppointments.map((app) => (
                  <tr key={app.id} className="hover:bg-gray-50/50 transition-colors group">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 font-bold">
                          {app.patientName.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-gray-900">{app.patientName}</p>
                          <p className="text-xs text-gray-500 flex items-center gap-1">
                            <Phone className="w-3 h-3" /> {app.phoneNumber}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{new Date(app.date).toLocaleDateString('en-GB')}</p>
                        <p className="text-xs text-gray-500 flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {app.timeSlot}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <select 
                        className={`px-3 py-1.5 rounded-full text-xs font-bold border-none outline-none cursor-pointer ${getStatusStyle(app.status)}`}
                        value={app.status}
                        onChange={(e) => updateAppointmentStatus(app.id, e.target.value)}
                      >
                        <option value="pending">Pending</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => handleWhatsApp(app)}
                          className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors title='Message Patient'"
                        >
                          <MessageCircle className="w-5 h-5" />
                        </button>
                        <div className="relative group/menu">
                          <button className="p-2 text-gray-400 hover:bg-gray-100 rounded-lg transition-colors">
                            <MoreVertical className="w-5 h-5" />
                          </button>
                          {/* Quick actions dropdown could go here */}
                        </div>
                      </div>
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan="4" className="px-6 py-12 text-center">
                      <div className="flex flex-col items-center justify-center">
                        <Calendar className="w-12 h-12 text-gray-200 mb-4" />
                        <p className="text-gray-500 font-medium">No appointments found matching your filters.</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
