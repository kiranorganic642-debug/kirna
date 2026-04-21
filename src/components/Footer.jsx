import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin, ShieldCheck, Truck, Headphones } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-12 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: <ShieldCheck className="w-5 h-5" />, title: 'Authentic Quality', desc: 'Focused on purity, consistency, and safety.' },
              { icon: <Truck className="w-5 h-5" />, title: 'Reliable Delivery', desc: 'Carefully packed and dispatched fast.' },
              { icon: <Headphones className="w-5 h-5" />, title: 'Friendly Support', desc: 'Quick help for orders and product guidance.' }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/">
              <Logo />
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              Experience the wisdom of Ayurveda with Kiran's. Established in 2015, we are dedicated to providing 
              natural, effective, and affordable health solutions from our headquarters in Kolkata.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1EvPwMUKoz/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white shadow-sm border border-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/kiransorganic?igsh=MWJkbmcwZWd3NHRoeA==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white shadow-sm border border-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/shop" className="text-gray-600 hover:text-primary-600 transition-colors">Shop All Products</Link></li>
              <li><Link to="/appointment" className="text-gray-600 hover:text-primary-600 transition-colors">Book Appointment</Link></li>
              <li><Link to="/my-appointments" className="text-gray-600 hover:text-primary-600 transition-colors">My Appointments</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-primary-600 transition-colors">Our Story</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-primary-600 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-gray-900 font-bold mb-6">Customer Service</h4>
            <ul className="space-y-4">
              <li><Link to="/faq" className="text-gray-600 hover:text-primary-600 transition-colors">FAQs</Link></li>
              <li><Link to="/returns" className="text-gray-600 hover:text-primary-600 transition-colors">Returns & Refunds</Link></li>
              <li><Link to="/track-order" className="text-gray-600 hover:text-primary-600 transition-colors">Track Order</Link></li>
              <li><Link to="/my-account" className="text-gray-600 hover:text-primary-600 transition-colors">My Account</Link></li>
              <li><Link to="/wishlist" className="text-gray-600 hover:text-primary-600 transition-colors">Wishlist</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-gray-900 font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-600">
                <MapPin className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                <span>92 subhas nagar road dumdum can't. Kolkata 65. Swarnadeep Complex 700065</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600">
                <Phone className="w-5 h-5 text-primary-600 shrink-0" />
                <span>+91 8044564653</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600">
                <Mail className="w-5 h-5 text-primary-600 shrink-0" />
                <span>kiransorganic999@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Kiran Health Plus. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy" className="hover:text-primary-600">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary-600">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
