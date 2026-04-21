import React from 'react';
import { useOrders } from '../context/OrderProvider';
import { Package, Truck, CheckCircle2, XCircle, ChevronRight, ShoppingBag, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const MyOrders = () => {
  const { orders } = useOrders();

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered': return 'bg-green-100 text-green-700 border-green-200';
      case 'Processing': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Shipped': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'Cancelled': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  if (orders.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 bg-gray-50">
        <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-gray-100 text-center max-w-md w-full">
          <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-8">
            <Package className="w-12 h-12 text-gray-300" />
          </div>
          <h2 className="text-3xl font-black text-gray-900 mb-4">No Orders Yet</h2>
          <p className="text-gray-500 mb-10 text-lg">Looks like you haven't made your first purchase. Explore our organic products!</p>
          <Link 
            to="/shop"
            className="inline-block w-full py-5 bg-primary-600 text-white rounded-2xl font-bold hover:bg-primary-700 transition-all shadow-xl shadow-primary-200"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="text-4xl font-black text-gray-900 tracking-tight">My Orders</h1>
            <p className="text-gray-600 mt-2">Track your purchases and view order history</p>
          </div>
          <Link to="/shop" className="px-6 py-3 bg-white border border-gray-200 rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition-all shadow-sm">
            Shop More
          </Link>
        </div>

        <div className="space-y-8">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              {/* Order Header */}
              <div className="bg-gray-50/50 px-8 py-6 border-b border-gray-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-6">
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Order ID</p>
                    <p className="font-black text-gray-900">#{order.id}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Date</p>
                    <p className="font-bold text-gray-700">{new Date(order.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Total</p>
                    <p className="font-black text-primary-600">₹{order.total.toFixed(2)}</p>
                  </div>
                </div>
                <div className={`px-4 py-1.5 rounded-full border text-xs font-black uppercase tracking-wider ${getStatusColor(order.status)}`}>
                  {order.status}
                </div>
              </div>

              {/* Order Items */}
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-6">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="flex gap-6 items-center">
                        <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center p-3 shrink-0 border border-gray-100">
                          <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-bold text-gray-900 leading-tight mb-1">{item.name}</h4>
                          <p className="text-sm text-gray-500">Quantity: <span className="font-bold text-gray-700">{item.quantity}</span></p>
                          <p className="text-primary-600 font-bold mt-1">₹{item.price}</p>
                        </div>
                        <Link to={`/product/${item.id}`} className="p-2 text-gray-400 hover:text-primary-600 transition-colors">
                          <ChevronRight className="w-6 h-6" />
                        </Link>
                      </div>
                    ))}
                  </div>

                  {/* Delivery Info */}
                  <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100">
                    <h5 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Truck className="w-5 h-5 text-primary-600" />
                      Delivery Address
                    </h5>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p className="font-bold text-gray-900">{order.customer.fullName}</p>
                      <p>{order.customer.address}</p>
                      <p>{order.customer.city}, {order.customer.pinCode}</p>
                      <p className="pt-2 flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5" />
                        Status: <span className="font-bold text-gray-900">{order.status}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
