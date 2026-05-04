import React from 'react';
import { 
  Users, Search, Filter, Mail, Phone, 
  MapPin, Calendar, MoreVertical, Edit, 
  Trash2, ShieldCheck, UserPlus, UserMinus
} from 'lucide-react';

const AdminUsers = () => {
  // Mock data for users
  const users = [
    { id: 1, name: 'Alex Johnson', email: 'alex.j@example.com', phone: '+91 98765 43210', role: 'Customer', orders: 5, joined: '2024-04-10' },
    { id: 2, name: 'Dr. Kiran Pandey', email: 'drkiran@kiranhealth.plus', phone: '+91 98300 00000', role: 'Admin', orders: 0, joined: '2015-01-01' },
    { id: 3, name: 'Priya Sharma', email: 'priya.s@gmail.com', phone: '+91 91234 56789', role: 'Customer', orders: 12, joined: '2023-11-20' },
    { id: 4, name: 'Rahul Verma', email: 'rahulv@yahoo.com', phone: '+91 88888 77777', role: 'Customer', orders: 2, joined: '2024-02-15' },
  ];

  const getRoleStyle = (role) => {
    switch (role) {
      case 'Admin': return 'bg-purple-100 text-purple-700 border-purple-200';
      default: return 'bg-blue-100 text-blue-700 border-blue-200';
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-black text-gray-900 flex items-center gap-3 tracking-tight">
                <Users className="w-6 h-6 text-primary-600" />
                User Management
              </h1>
              <p className="text-sm text-gray-500 mt-1 font-medium">Manage customer accounts and administrative access.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          {[
            { label: 'Total Users', value: users.length, icon: <Users className="w-5 h-5" />, color: 'bg-blue-600' },
            { label: 'Active Customers', value: users.filter(u => u.role === 'Customer').length, icon: <Users className="w-5 h-5" />, color: 'bg-green-600' },
            { label: 'Administrators', value: users.filter(u => u.role === 'Admin').length, icon: <ShieldCheck className="w-5 h-5" />, color: 'bg-purple-600' }
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-5">
              <div className={`w-12 h-12 ${stat.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                {stat.icon}
              </div>
              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{stat.label}</p>
                <p className="text-2xl font-black text-gray-900">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* User Table */}
        <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50/50 border-b border-gray-100">
                <tr>
                  <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">User Details</th>
                  <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Contact</th>
                  <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Stats</th>
                  <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Joined</th>
                  <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50/30 transition-colors group">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 font-bold">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-gray-900">{user.name}</p>
                          <span className={`px-2 py-0.5 rounded-full border text-[8px] font-black uppercase tracking-widest ${getRoleStyle(user.role)}`}>
                            {user.role}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="space-y-1">
                        <p className="text-xs text-gray-600 flex items-center gap-2 font-medium">
                          <Mail className="w-3 h-3" /> {user.email}
                        </p>
                        <p className="text-xs text-gray-600 flex items-center gap-2 font-medium">
                          <Phone className="w-3 h-3" /> {user.phone}
                        </p>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div>
                        <p className="font-black text-gray-900">{user.orders} Orders</p>
                        <p className="text-[10px] text-gray-400 font-bold uppercase">Activity Level: {user.orders > 10 ? 'High' : 'Normal'}</p>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-sm font-bold text-gray-700">
                      {new Date(user.joined).toLocaleDateString()}
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all">
                          <Edit className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
