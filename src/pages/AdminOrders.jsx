import React, { useState, useEffect } from 'react';
import { useOrders } from '../context/OrderProvider';
import { 
  Package, Truck, CheckCircle2, XCircle, Search, 
  Filter, Download, MessageSquare, MoreVertical,
  LayoutDashboard, ShoppingBag, Clock, Users, IndianRupee,
  ChevronRight, AlertCircle, Eye, Trash2, Bell, BellRing
} from 'lucide-react';

const AdminOrders = () => {
  const { orders, updateOrderStatus } = useOrders();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [newOrderAlert, setNewOrderAlert] = useState(false);
  const [prevOrderCount, setPrevOrderCount] = useState(orders.length);

  useEffect(() => {
    if (orders.length > prevOrderCount) {
      setNewOrderAlert(true);
      // Auto hide after 5 seconds
      const timer = setTimeout(() => setNewOrderAlert(false), 5000);
      setPrevOrderCount(orders.length);
      return () => clearTimeout(timer);
    }
  }, [orders.length, prevOrderCount]);

  const stats = {
    total: orders.length,
    pending: orders.filter(o => o.status === 'Processing').length,
    shipped: orders.filter(o => o.status === 'Shipped').length,
    revenue: orders.reduce((acc, o) => acc + o.total, 0)
  };

  // Simple Analytics Calculation
  const monthlyRevenue = [12000, 15000, 8000, 22000, 18000, stats.revenue];
  const maxRevenue = Math.max(...monthlyRevenue);

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.customer.fullName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         order.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Delivered': return 'bg-green-100 text-green-700';
      case 'Processing': return 'bg-blue-100 text-blue-700';
      case 'Shipped': return 'bg-purple-100 text-purple-700';
      case 'Cancelled': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <ShoppingBag className="w-8 h-8 text-primary-600" />
                {newOrderAlert && (
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                )}
              </div>
              <div>
                <h1 className="text-2xl font-black text-gray-900 flex items-center gap-3 tracking-tight">
                  Admin Dashboard
                </h1>
                <p className="text-sm text-gray-500 mt-1 font-medium">Sales analytics and order fulfillment center.</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {newOrderAlert && (
                <div className="bg-red-50 text-red-600 px-4 py-2 rounded-xl text-xs font-black flex items-center gap-2 animate-bounce border border-red-100">
                  <BellRing className="w-4 h-4" /> NEW ORDER RECEIVED!
                </div>
              )}
              <button 
                onClick={() => {
                  const csv = [
                    ['Order ID', 'Customer', 'Date', 'Total', 'Status'],
                    ...filteredOrders.map(o => [o.id, o.customer.fullName, o.createdAt, o.total, o.status])
                  ].map(row => row.join(',')).join('\n');
                  const blob = new Blob([csv], { type: 'text/csv' });
                  const url = window.URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.setAttribute('hidden', '');
                  a.setAttribute('href', url);
                  a.setAttribute('download', `orders_${new Date().toLocaleDateString()}.csv`);
                  document.body.appendChild(a);
                  a.click();
                  document.body.removeChild(a);
                }}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 transition-all shadow-sm"
              >
                <Download className="w-4 h-4" /> Export Data
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Analytics Summary */}
        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 mb-8 overflow-hidden relative">
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-black text-gray-900 tracking-tight flex items-center gap-2">
                <LayoutDashboard className="w-5 h-5 text-primary-600" />
                Monthly Sales Analytics
              </h3>
              <select className="bg-gray-50 border-none rounded-xl text-xs font-black uppercase tracking-widest px-4 py-2 outline-none">
                <option>Last 6 Months</option>
                <option>Year 2024</option>
              </select>
            </div>
            <div className="flex items-end gap-4 h-48">
              {monthlyRevenue.map((val, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-3 group">
                  <div 
                    className="w-full bg-primary-50 rounded-t-xl group-hover:bg-primary-600 transition-all relative"
                    style={{ height: `${(val / maxRevenue) * 100}%` }}
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      ₹{val.toLocaleString()}
                    </div>
                  </div>
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">Month {i+1}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Orders', value: stats.total, icon: <Package className="w-5 h-5" />, color: 'bg-blue-600' },
            { label: 'Pending', value: stats.pending, icon: <Clock className="w-5 h-5" />, color: 'bg-yellow-500' },
            { label: 'In Transit', value: stats.shipped, icon: <Truck className="w-5 h-5" />, color: 'bg-purple-600' },
            { label: 'Total Revenue', value: `₹${stats.revenue.toFixed(0)}`, icon: <IndianRupee className="w-5 h-5" />, color: 'bg-green-600' }
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

        {/* Filters */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search by Order ID or Customer Name..." 
              className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none transition-all font-medium"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative min-w-[200px]">
            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <select 
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none appearance-none cursor-pointer font-bold text-gray-700"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="Processing">Processing</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50/50 border-b border-gray-100">
                <tr>
                  <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Order Info</th>
                  <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Customer</th>
                  <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Amount</th>
                  <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Status</th>
                  <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredOrders.length > 0 ? filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50/30 transition-colors group">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600">
                          <Package className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-black text-gray-900">#{order.id}</p>
                          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">
                            {new Date(order.createdAt).toLocaleDateString()} at {new Date(order.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div>
                        <p className="font-bold text-gray-900">{order.customer.fullName}</p>
                        <p className="text-xs text-gray-500 font-medium">{order.customer.phone}</p>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <p className="font-black text-primary-600">₹{order.total.toFixed(2)}</p>
                      <p className="text-[10px] text-gray-400 font-bold uppercase">{order.items.length} items</p>
                    </td>
                    <td className="px-8 py-6">
                      <select 
                        className={`px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider border-none outline-none cursor-pointer ${getStatusStyle(order.status)}`}
                        value={order.status}
                        onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                      >
                        <option value="Processing">Processing</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </td>
                    <td className="px-8 py-6">
                      <button 
                        onClick={() => alert(`Customer Details:\nName: ${order.customer.fullName}\nEmail: ${order.customer.email}\nPhone: ${order.customer.phone}\nAddress: ${order.customer.address}, ${order.customer.city} - ${order.customer.pinCode}`)}
                        className="p-2 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all"
                        title="View Details"
                      >
                        <Eye className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan="5" className="px-8 py-20 text-center">
                      <div className="flex flex-col items-center justify-center max-w-xs mx-auto">
                        <ShoppingBag className="w-12 h-12 text-gray-200 mb-4" />
                        <h3 className="text-lg font-bold text-gray-900">No Orders Found</h3>
                        <p className="text-sm text-gray-500 mt-2">Adjust your filters or wait for new customer purchases.</p>
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

export default AdminOrders;
