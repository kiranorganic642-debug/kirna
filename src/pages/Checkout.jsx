import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useOrders } from '../context/OrderProvider';
import { CreditCard, Truck, ShieldCheck, ArrowLeft, CheckCircle2, RefreshCw, ShoppingBag } from 'lucide-react';

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const { addOrder } = useOrders();
  const [isOrdered, setIsOrdered] = useState(false);
  const [lastOrder, setLastOrder] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    fullName: '',
    address: '',
    city: '',
    pinCode: '',
    paymentMethod: 'COD'
  });

  const shipping = cartTotal > 500 ? 0 : 50;
  const tax = cartTotal * 0.05;
  const total = cartTotal + shipping + tax;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const processOrder = () => {
    const orderData = {
      items: [...cart],
      total: total,
      subtotal: cartTotal,
      shipping: shipping,
      tax: tax,
      customer: formData
    };

    const newOrder = addOrder(orderData);
    setLastOrder(newOrder);
    setIsOrdered(true);
    clearCart();
    setIsProcessing(false);
    setShowPaymentModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.paymentMethod === 'COD') {
      setIsProcessing(true);
      setTimeout(() => processOrder(), 1500);
    } else {
      setShowPaymentModal(true);
    }
  };

  const simulatePayment = () => {
    setIsProcessing(true);
    // Simulate 2 second payment processing
    setTimeout(() => {
      processOrder();
    }, 2000);
  };

  if (isOrdered) {
    return (
      <div className="container py-20 text-center animate-in zoom-in duration-500">
        <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-100 border-4 border-white">
          <CheckCircle2 className="w-12 h-12 text-green-600" />
        </div>
        <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Order Confirmed!</h2>
        <p className="text-gray-600 mb-10 max-w-md mx-auto text-lg">
          Success! Your order <span className="font-bold text-primary-600">#{lastOrder?.id}</span> is being prepared with care.
        </p>
        
        <div className="bg-gray-50 rounded-3xl p-8 max-w-lg mx-auto mb-10 border border-gray-100 text-left">
          <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-primary-600" />
            Order Summary
          </h4>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Items:</span>
              <span className="font-bold text-gray-900">{lastOrder?.items.length}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Payment:</span>
              <span className="font-bold text-gray-900 uppercase">{lastOrder?.customer.paymentMethod}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Total Amount:</span>
              <span className="font-bold text-primary-600 text-lg">₹{lastOrder?.total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Delivery to:</span>
              <span className="font-bold text-gray-900 text-right">{lastOrder?.customer.fullName}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/my-orders" className="btn-primary px-8 py-4 text-lg">Track My Order</Link>
          <Link to="/shop" className="btn-secondary px-8 py-4 text-lg">Continue Shopping</Link>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="container py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
        <Link to="/shop" className="btn-primary">Back to Shop</Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Checkout Form */}
          <div className="flex-grow">
            <Link to="/cart" className="text-primary-600 font-bold flex items-center gap-2 mb-8 hover:gap-3 transition-all">
              <ArrowLeft className="w-5 h-5" /> Back to Cart
            </Link>
            
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
              <p className="text-gray-600 mt-2">Confirm your details — your order is prepared with premium-grade packing for safe delivery.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {[
                { icon: <ShieldCheck className="w-5 h-5" />, title: 'Trusted Store', desc: 'Quality-focused wellness products.' },
                { icon: <Truck className="w-5 h-5" />, title: 'Fast Dispatch', desc: 'Quick packing and shipping updates.' },
                { icon: <RefreshCw className="w-5 h-5" />, title: 'Easy Returns', desc: 'Simple support for eligible returns.' }
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{item.title}</div>
                    <div className="text-sm text-gray-500">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none" 
                      placeholder="your@email.com" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none" 
                      placeholder="Enter phone number" 
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                  Shipping Address
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none" 
                      placeholder="Enter full name" 
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
                    <input 
                      type="text" 
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none" 
                      placeholder="Enter street address" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                    <input 
                      type="text" 
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none" 
                      placeholder="Enter city" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">PIN Code</label>
                    <input 
                      type="text" 
                      name="pinCode"
                      value={formData.pinCode}
                      onChange={handleChange}
                      required 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none" 
                      placeholder="Enter PIN code" 
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
                  Payment Method
                </h3>
                <div className="space-y-4">
                  <label className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all cursor-pointer ${formData.paymentMethod === 'COD' ? 'border-primary-600 bg-primary-50 shadow-md shadow-primary-50' : 'border-gray-100 hover:border-primary-100'}`}>
                    <input 
                      type="radio" 
                      name="paymentMethod" 
                      value="COD"
                      checked={formData.paymentMethod === 'COD'}
                      onChange={handleChange}
                      className="w-5 h-5 text-primary-600 focus:ring-primary-500" 
                    />
                    <div className="flex-grow">
                      <div className="font-black text-gray-900 uppercase text-xs tracking-widest">Cash on Delivery (COD)</div>
                      <div className="text-sm text-gray-500 font-medium">Pay when your order is delivered</div>
                    </div>
                    <Truck className="text-primary-600 w-6 h-6" />
                  </label>

                  <label className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all cursor-pointer ${formData.paymentMethod === 'UPI' ? 'border-primary-600 bg-primary-50 shadow-md shadow-primary-50' : 'border-gray-100 hover:border-primary-100'}`}>
                    <input 
                      type="radio" 
                      name="paymentMethod" 
                      value="UPI"
                      checked={formData.paymentMethod === 'UPI'}
                      onChange={handleChange}
                      className="w-5 h-5 text-primary-600 focus:ring-primary-500" 
                    />
                    <div className="flex-grow">
                      <div className="font-black text-gray-900 uppercase text-xs tracking-widest">UPI / PhonePe / GooglePay</div>
                      <div className="text-sm text-gray-500 font-medium">Instant payment using any UPI app</div>
                    </div>
                    <CheckCircle2 className="text-primary-600 w-6 h-6" />
                  </label>

                  <label className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all cursor-pointer ${formData.paymentMethod === 'CARD' ? 'border-primary-600 bg-primary-50 shadow-md shadow-primary-50' : 'border-gray-100 hover:border-primary-100'}`}>
                    <input 
                      type="radio" 
                      name="paymentMethod" 
                      value="CARD"
                      checked={formData.paymentMethod === 'CARD'}
                      onChange={handleChange}
                      className="w-5 h-5 text-primary-600 focus:ring-primary-500" 
                    />
                    <div className="flex-grow">
                      <div className="font-black text-gray-900 uppercase text-xs tracking-widest">Credit / Debit Card</div>
                      <div className="text-sm text-gray-500 font-medium">Securely pay with Visa, Mastercard, etc.</div>
                    </div>
                    <CreditCard className="text-primary-600 w-6 h-6" />
                  </label>
                </div>
              </div>

              <button type="submit" disabled={isProcessing} className={`w-full btn-primary py-5 text-xl shadow-xl shadow-primary-200 flex items-center justify-center gap-3 ${isProcessing ? 'opacity-70 cursor-not-allowed' : ''}`}>
                {isProcessing ? (
                  <>
                    <RefreshCw className="w-6 h-6 animate-spin" /> Processing...
                  </>
                ) : (
                  <>Place Order - ₹{total.toFixed(2)}</>
                )}
              </button>
            </form>
          </div>

          {/* Order Summary Sidebar */}
          <aside className="w-full lg:w-96 shrink-0">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">In Your Cart</h2>
              <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto pr-2">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-gray-50 flex items-center justify-center p-2">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-grow">
                      <div className="font-bold text-gray-900 text-sm line-clamp-1">{item.name}</div>
                      <div className="text-xs text-gray-500">Qty: {item.quantity}</div>
                      <div className="text-primary-600 font-bold text-sm">₹{item.price * item.quantity}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-100 pt-6 space-y-4">
                <div className="flex justify-between text-gray-600 text-sm">
                  <span>Subtotal</span>
                  <span className="font-medium text-gray-900">₹{cartTotal}</span>
                </div>
                <div className="flex justify-between text-gray-600 text-sm">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
                </div>
                <div className="flex justify-between text-gray-600 text-sm">
                  <span>GST (5%)</span>
                  <span>₹{tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-primary-600">₹{total.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gray-50 rounded-xl flex items-start gap-3">
                <ShieldCheck className="text-primary-600 w-5 h-5 shrink-0 mt-0.5" />
                <p className="text-[10px] text-gray-500 leading-relaxed">
                  Your personal data will be used to process your order, support your experience throughout this website, 
                  and for other purposes described in our privacy policy.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Payment Simulation Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-gray-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-md rounded-[2.5rem] p-10 shadow-2xl animate-in zoom-in duration-300">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6">
                {formData.paymentMethod === 'UPI' ? <CheckCircle2 className="w-10 h-10 text-primary-600" /> : <CreditCard className="w-10 h-10 text-primary-600" />}
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-2">Secure Payment Gateway</h3>
              <p className="text-gray-500 font-medium">Amount to pay: <span className="text-primary-600 font-black">₹{total.toFixed(2)}</span></p>
            </div>
            
            <div className="space-y-6 mb-10">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Simulated {formData.paymentMethod} Payment</p>
                {formData.paymentMethod === 'UPI' ? (
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white border-4 border-primary-100 rounded-2xl mx-auto mb-4 flex items-center justify-center font-black text-gray-200 text-xs uppercase">QR CODE SCAN</div>
                    <p className="text-sm font-bold text-gray-700">Scan this QR to pay using any UPI app</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <input type="text" placeholder="Card Number (XXXX XXXX XXXX XXXX)" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none" />
                    <div className="flex gap-4">
                      <input type="text" placeholder="MM/YY" className="flex-1 px-4 py-3 rounded-xl border border-gray-200 outline-none" />
                      <input type="password" placeholder="CVV" className="flex-1 px-4 py-3 rounded-xl border border-gray-200 outline-none" />
                    </div>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-400 font-bold justify-center">
                <ShieldCheck className="w-4 h-4 text-green-500" /> 256-bit SSL Secure Payment
              </div>
            </div>

            <div className="flex gap-4">
              <button 
                onClick={() => setShowPaymentModal(false)}
                className="flex-1 py-4 bg-gray-50 text-gray-500 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-gray-100 transition-all"
              >
                Cancel
              </button>
              <button 
                onClick={simulatePayment}
                disabled={isProcessing}
                className="flex-1 btn-primary py-4 text-sm font-black uppercase tracking-widest shadow-xl shadow-primary-100 flex items-center justify-center gap-2"
              >
                {isProcessing ? <RefreshCw className="w-4 h-4 animate-spin" /> : 'Pay Now'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
