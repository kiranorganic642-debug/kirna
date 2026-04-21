import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag, CreditCard, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();
  const shipping = cartCount > 0 ? (cartTotal > 500 ? 0 : 50) : 0;
  const tax = cartTotal * 0.05; // 5% GST
  const total = cartTotal + shipping + tax;

  if (cart.length === 0) {
    return (
      <div className="container py-20 text-center">
        <div className="bg-primary-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShoppingBag className="w-10 h-10 text-primary-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Looks like you haven't added anything to your cart yet. 
          Explore our organic products and start shopping!
        </p>
        <Link to="/shop" className="btn-primary inline-flex items-center gap-2">
          <ArrowLeft className="w-5 h-5" /> Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart ({cartCount} items)</h1>
          <p className="text-gray-600 mt-2">Review your selection — we pack each order with care for a premium unboxing experience.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            { icon: <ShieldCheck className="w-5 h-5" />, title: 'Secure Checkout', desc: 'Protected data and safe processing.' },
            { icon: <Truck className="w-5 h-5" />, title: 'Careful Packing', desc: 'Bubble wrap + sturdy outer box.' },
            { icon: <RefreshCw className="w-5 h-5" />, title: 'Easy Returns', desc: '7-day return support on eligible items.' }
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

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-grow space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center gap-6">
                <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0 bg-gray-50 flex items-center justify-center p-2">
                  <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                </div>
                <div className="flex-grow text-center sm:text-left">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{item.category}</p>
                  <div className="text-primary-600 font-bold">₹{item.price}</div>
                </div>
                <div className="flex items-center gap-4 bg-gray-50 rounded-xl p-2 border border-gray-100">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1 hover:bg-white rounded-md transition-colors text-gray-600"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center font-bold text-gray-900">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 hover:bg-white rounded-md transition-colors text-gray-600"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-right shrink-0">
                  <div className="font-bold text-gray-900 mb-2">₹{item.price * item.quantity}</div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-600 p-2 hover:bg-red-50 rounded-full transition-all"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}

            <div className="pt-4">
              <Link to="/shop" className="text-primary-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                <ArrowLeft className="w-5 h-5" /> Continue Shopping
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <aside className="w-full lg:w-96 shrink-0">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-medium text-gray-900">₹{cartTotal}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className={shipping === 0 ? "text-green-600 font-bold" : "font-medium text-gray-900"}>
                    {shipping === 0 ? 'FREE' : `₹${shipping}`}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>GST (5%)</span>
                  <span className="font-medium text-gray-900">₹{tax.toFixed(2)}</span>
                </div>
                {shipping > 0 && (
                  <p className="text-[10px] text-primary-600 bg-primary-50 p-2 rounded-lg">
                    Add ₹{500 - cartTotal} more for FREE shipping!
                  </p>
                )}
                <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-primary-600">₹{total.toFixed(2)}</span>
                </div>
              </div>

              <Link to="/checkout" className="w-full btn-primary py-4 flex items-center justify-center gap-2 mb-4">
                <CreditCard className="w-5 h-5" /> Proceed to Checkout
              </Link>
              
              <div className="space-y-4 mt-8">
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <div className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center">🛡️</div>
                  <p>Secure SSL Encrypted Payment</p>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <div className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center">🔄</div>
                  <p>7 Days Easy Return Policy</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Cart;
