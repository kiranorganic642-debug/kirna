import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  User, Package, Heart, MapPin, Settings, 
  LogOut, ChevronRight, Shield, CreditCard,
  Bell, HelpCircle, Calendar, Plus, Trash2, Edit2,
  Users, ShoppingBag, LayoutDashboard, Database
} from 'lucide-react';
import { useOrders } from '../context/OrderProvider';
import { useWishlist } from '../context/WishlistProvider';
import { useAppointments } from '../context/AppointmentProvider';
import { useAuth } from '../context/AuthProvider';
import { allProducts } from '../utils/products';

const Profile = () => {
  const { orders } = useOrders();
  const { wishlist } = useWishlist();
  const { appointments } = useAppointments();
  const { user, logout, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const [addresses, setAddresses] = useState([]);

  const removeAddress = (id) => {
    setAddresses(addresses.filter(addr => addr.id !== id));
  };

  const menuItems = [
    { 
      id: 'overview',
      icon: <LayoutDashboard className="w-5 h-5" />, 
      label: isAdmin ? 'Admin Dashboard' : 'Overview', 
      desc: isAdmin ? 'System statistics and overview' : 'Account summary and activity',
      link: null
    },
    ...(isAdmin ? [
      { 
        id: 'admin-orders',
        icon: <Package className="w-5 h-5" />, 
        label: 'Manage Orders', 
        desc: 'View and update all orders', 
        link: '/admin/orders',
        count: orders.length
      },
      { 
        id: 'admin-products',
        icon: <ShoppingBag className="w-5 h-5" />, 
        label: 'Manage Products', 
        desc: 'Add or edit inventory', 
        link: '/admin/products',
        count: allProducts.length
      },
      { 
        id: 'admin-users',
        icon: <Users className="w-5 h-5" />, 
        label: 'Manage Users', 
        desc: 'System user management', 
        link: '/admin/users'
      },
      { 
        id: 'doctor-panel',
        icon: <Shield className="w-5 h-5" />, 
        label: 'Doctor Panel', 
        desc: 'Manage health consultations', 
        link: '/doctor-dashboard'
      }
    ] : [
      { 
        id: 'orders',
        icon: <Package className="w-5 h-5" />, 
        label: 'My Orders', 
        desc: 'Track and manage purchases', 
        link: '/my-orders',
        count: orders.length
      },
      { 
        id: 'wishlist',
        icon: <Heart className="w-5 h-5" />, 
        label: 'Wishlist', 
        desc: 'Your saved health items', 
        link: '/wishlist',
        count: wishlist.length
      },
      { 
        id: 'addresses',
        icon: <MapPin className="w-5 h-5" />, 
        label: 'Addresses', 
        desc: 'Manage delivery locations', 
        link: null,
        count: addresses.length
      }
    ])
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Navigation */}
          <aside className="lg:w-80 shrink-0">
            <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 sticky top-24">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-primary-50 rounded-[2rem] flex items-center justify-center text-primary-600 border-4 border-white shadow-lg mx-auto mb-4 overflow-hidden">
                  <User className="w-12 h-12" />
                </div>
                <h2 className="text-xl font-black text-gray-900 flex items-center justify-center gap-2">
                  {user?.name || 'User'}
                  {isAdmin && (
                    <span className="bg-primary-100 text-primary-600 text-[10px] font-black uppercase px-2 py-0.5 rounded-full border border-primary-200">
                      Admin
                    </span>
                  )}
                </h2>
                <p className="text-sm text-gray-500 font-medium">{user?.email || 'Email not available'}</p>
              </div>

              <nav className="space-y-2">
                {menuItems.map((item) => (
                  item.link ? (
                    <Link 
                      key={item.id} 
                      to={item.link}
                      className="flex items-center gap-4 p-4 rounded-2xl hover:bg-primary-50 hover:text-primary-600 transition-all group font-bold text-gray-600"
                    >
                      <span className="p-2 bg-gray-50 rounded-xl group-hover:bg-white transition-all">{item.icon}</span>
                      {item.label}
                    </Link>
                  ) : (
                    <button 
                      key={item.id} 
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all group font-bold ${activeTab === item.id ? 'bg-primary-600 text-white shadow-xl shadow-primary-100' : 'hover:bg-primary-50 hover:text-primary-600 text-gray-600'}`}
                    >
                      <span className={`p-2 rounded-xl transition-all ${activeTab === item.id ? 'bg-primary-500' : 'bg-gray-50 group-hover:bg-white'}`}>{item.icon}</span>
                      {item.label}
                    </button>
                  )
                ))}
                <div className="pt-4 border-t border-gray-100 mt-4">
                  <button 
                    onClick={handleLogout}
                    className="w-full flex items-center gap-4 p-4 rounded-2xl text-red-500 hover:bg-red-50 transition-all font-bold group"
                  >
                    <span className="p-2 bg-red-50 rounded-xl group-hover:bg-white transition-all"><LogOut className="w-5 h-5" /></span>
                    Logout
                  </button>
                </div>
              </nav>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-grow">
            {activeTab === 'overview' && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="bg-primary-900 rounded-[3rem] p-10 text-white relative overflow-hidden shadow-2xl shadow-primary-200">
                  <div className="relative z-10">
                    <h1 className="text-4xl font-black mb-2 tracking-tight">
                      {isAdmin ? 'System Dashboard' : `Welcome back, ${user?.name?.split(' ')[0] || 'User'}!`}
                    </h1>
                    <p className="text-primary-200 font-medium">
                      {isAdmin 
                        ? `You have ${orders.length} total orders to manage and system-wide overview.`
                        : `You have ${orders.length} active orders and ${appointments.length} upcoming appointments.`}
                    </p>
                    <div className="flex gap-4 mt-8">
                      {isAdmin ? (
                        <>
                          <Link to="/admin/orders" className="px-6 py-3 bg-white text-primary-900 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-primary-50 transition-all">Manage Orders</Link>
                          <Link to="/admin/products" className="px-6 py-3 bg-primary-800 text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-primary-700 transition-all border border-primary-700">Add Product</Link>
                        </>
                      ) : (
                        <>
                          <Link to="/shop" className="px-6 py-3 bg-white text-primary-900 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-primary-50 transition-all">Shop Now</Link>
                          <Link to="/appointment" className="px-6 py-3 bg-primary-800 text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-primary-700 transition-all border border-primary-700">Book Consult</Link>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-primary-800 rounded-full blur-3xl opacity-50" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {isAdmin ? (
                    <>
                      <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Total Sales</p>
                        <p className="text-3xl font-black text-gray-900">₹{orders.reduce((acc, o) => acc + o.total, 0).toFixed(0)}</p>
                      </div>
                      <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Total Orders</p>
                        <p className="text-3xl font-black text-gray-900">{orders.length}</p>
                      </div>
                      <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Products</p>
                        <p className="text-3xl font-black text-gray-900">{allProducts.length}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Total Spent</p>
                        <p className="text-3xl font-black text-gray-900">₹{orders.reduce((acc, o) => acc + o.total, 0).toFixed(0)}</p>
                      </div>
                      <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Orders</p>
                        <p className="text-3xl font-black text-gray-900">{orders.length}</p>
                      </div>
                      <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Wishlist</p>
                        <p className="text-3xl font-black text-gray-900">{wishlist.length}</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'addresses' && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-black text-gray-900 tracking-tight">Saved Addresses</h2>
                  <button className="flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition-all shadow-lg shadow-primary-100">
                    <Plus className="w-5 h-5" /> Add New
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {addresses.length > 0 ? (
                    addresses.map((addr) => (
                      <div key={addr.id} className={`bg-white p-8 rounded-[2.5rem] border-2 transition-all relative group ${addr.isDefault ? 'border-primary-600 shadow-xl shadow-primary-50' : 'border-gray-100'}`}>
                        {addr.isDefault && (
                          <span className="absolute top-6 right-8 px-3 py-1 bg-primary-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full">Default</span>
                        )}
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400">
                            <MapPin className="w-5 h-5" />
                          </div>
                          <h3 className="font-black text-gray-900 text-lg">{addr.type}</h3>
                        </div>
                        <div className="space-y-1 mb-8">
                          <p className="font-bold text-gray-800">{addr.name}</p>
                          <p className="text-gray-500 font-medium">{addr.street}</p>
                          <p className="text-gray-500 font-medium">{addr.city} - {addr.pin}</p>
                        </div>
                        <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                          <button className="text-xs font-black text-primary-600 uppercase tracking-widest flex items-center gap-2 hover:opacity-70 transition-all">
                            <Edit2 className="w-3.5 h-3.5" /> Edit
                          </button>
                          <button 
                            onClick={() => removeAddress(addr.id)}
                            className="text-xs font-black text-red-500 uppercase tracking-widest flex items-center gap-2 hover:opacity-70 transition-all"
                          >
                            <Trash2 className="w-3.5 h-3.5" /> Remove
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-full bg-white p-12 rounded-[2.5rem] border-2 border-dashed border-gray-100 text-center">
                      <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 mx-auto mb-4">
                        <MapPin className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">No Addresses Found</h3>
                      <p className="text-gray-500 font-medium mb-6">You haven't added any delivery addresses yet.</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Profile;
