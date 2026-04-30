import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin, ShieldCheck, Truck, Headphones } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-primary-600 text-white font-sans">
      <div className="container mx-auto px-4 py-20">
        {/* Trust Indicators Bar */}
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-10 mb-20 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <ShieldCheck className="w-8 h-8" />, title: 'Ayurvedic Excellence', desc: 'Ancient formulations tested for modern safety standards.' },
              { icon: <Truck className="w-8 h-8" />, title: 'Safe Packaging', desc: 'Securely packed with love to ensure product integrity.' },
              { icon: <Headphones className="w-8 h-8" />, title: 'Expert Support', desc: 'Consult our Ayurvedic specialists for any guidance.' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-white/10 text-accent-400 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="font-black text-xs uppercase tracking-widest mb-2">{item.title}</div>
                  <div className="text-sm text-primary-100/60 leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Brand Column */}
          <div className="space-y-8">
            <Link to="/" className="inline-block bg-white p-4 rounded-2xl shadow-xl">
              <Logo />
            </Link>
            <p className="text-primary-100/70 text-sm leading-relaxed font-medium italic">
              "Dedicated to bringing the purest form of Ayurvedic healing to every household. 
              Our journey since 2015 is rooted in the belief that nature holds the key to holistic wellness."
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1EvPwMUKoz/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-accent-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/kiransorganic?igsh=MWJkbmcwZWd3NHRoeA==" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-accent-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Health Solutions */}
          <div>
            <h4 className="text-accent-400 font-black text-xs uppercase tracking-[0.2em] mb-8">Health Solutions</h4>
            <ul className="space-y-5">
              <li><Link to="/shop?search=Liver" className="text-primary-100/70 hover:text-white transition-colors text-sm font-medium">Liver & Detox Care</Link></li>
              <li><Link to="/shop?search=Kidney" className="text-primary-100/70 hover:text-white transition-colors text-sm font-medium">Kidney Wellness</Link></li>
              <li><Link to="/shop?search=PCOS" className="text-primary-100/70 hover:text-white transition-colors text-sm font-medium">Hormonal Balance</Link></li>
              <li><Link to="/shop?search=Diabetes" className="text-primary-100/70 hover:text-white transition-colors text-sm font-medium">Diabetes Management</Link></li>
              <li><Link to="/shop?search=Stamina" className="text-primary-100/70 hover:text-white transition-colors text-sm font-medium">Energy & Vitality</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-accent-400 font-black text-xs uppercase tracking-[0.2em] mb-8">Customer Care</h4>
            <ul className="space-y-5">
              <li><Link to="/appointment" className="text-primary-100/70 hover:text-white transition-colors text-sm font-medium">Free Consultation</Link></li>
              <li><Link to="/about" className="text-primary-100/70 hover:text-white transition-colors text-sm font-medium">Our Heritage</Link></li>
              <li><Link to="/contact" className="text-primary-100/70 hover:text-white transition-colors text-sm font-medium">Contact Us</Link></li>
              <li><Link to="/track-order" className="text-primary-100/70 hover:text-white transition-colors text-sm font-medium">Track Order</Link></li>
              <li><Link to="/faq" className="text-primary-100/70 hover:text-white transition-colors text-sm font-medium">Shipping Policy</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-accent-400 font-black text-xs uppercase tracking-[0.2em] mb-8">Our Headquarters</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4 text-primary-100/70">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-accent-400" />
                </div>
                <span className="text-sm leading-relaxed">92 Subhas Nagar Road, Dumdum Cantt. Kolkata 700065, West Bengal</span>
              </li>
              <li className="flex items-center space-x-4 text-primary-100/70">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-accent-400" />
                </div>
                <span className="text-sm">+91 8044564653</span>
              </li>
              <li className="flex items-center space-x-4 text-primary-100/70">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-accent-400" />
                </div>
                <span className="text-sm">support@kiranhealth.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-widest text-primary-100/40">
          <p>© {new Date().getFullYear()} Kiran Health Plus. Handcrafted in India.</p>
          <div className="mt-6 md:mt-0 flex space-x-8">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
