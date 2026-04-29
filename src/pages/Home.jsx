import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShoppingBag, Truck, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import Logo from '../components/Logo';
import { motion as Motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { useProducts } from '../context/ProductProvider';

import HeroImage from '../assets/hero.png';
import GlowVeda from '../assets/Product/Organic Glow Veda products.png';
import BrahmiTea from '../assets/Product/Brahmi tea memory boost with nature.png';
import PCOSGreenJuice from '../assets/Product/Organic green juice for PCOS.png';
import SeaBuckthornJuice from '../assets/Product/Organic Sea Buckthorn Juice.png';
import PostPregnancySpray from '../assets/Product/Organic Post Pregnancy Spray.png';

const categories = [
  { id: 1, name: 'Herbal Juices', icon: '🥤', count: '10+ Products', color: 'bg-teal-50 text-teal-600' },
  { id: 2, name: 'Health Teas', icon: '☕', count: '15+ Products', color: 'bg-green-50 text-green-600' },
  { id: 3, name: 'Nutrition & Atta', icon: '🌾', count: '10+ Products', color: 'bg-orange-50 text-orange-600' },
  { id: 4, name: 'Wellness & Detox', icon: '💨', count: '10+ Products', color: 'bg-blue-50 text-blue-600' },
  { id: 5, name: 'Care Oils', icon: '🛢️', count: '5+ Products', color: 'bg-amber-50 text-amber-600' },
  { id: 6, name: 'All', icon: '✨', count: '50+ Products', color: 'bg-red-50 text-red-600' },
];

const testimonials = [
  { id: 1, name: 'Rajesh Mukherjee', role: 'Kolkata Customer', text: 'Kiran\'s Liver Care syrup has been a lifesaver for my chronic acidity. Truly authentic Ayurvedic medicine.', rating: 5 },
  { id: 2, name: 'Suman Singh', role: 'Health Enthusiast', text: 'The purity of their Aloe Vera juice is unmatched. I\'ve tried many brands but Kiran Health Plus is the best.', rating: 5 },
  { id: 3, name: 'Amit Sharma', role: 'Fitness Trainer', text: 'I recommend Kiran\'s Ashwagandha to all my trainees. Natural energy and stress relief without side effects.', rating: 5 },
];

const Home = () => {
  const { addToCart } = useCart();
  const { products } = useProducts();
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-primary-950 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-full h-full opacity-20">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-accent-500 rounded-full blur-[100px]" />
        </div>
        
        <div className="container relative z-10 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <Motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-center lg:text-left"
            >
              <Motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-primary-100 text-sm font-bold tracking-widest uppercase mb-8"
              >
                <Logo iconOnly={true} className="w-8 h-8" />
                Pure Ayurvedic Wisdom Since 2015
              </Motion.div>
              
              <h1 className="text-5xl lg:text-8xl font-black text-white leading-[1.1] mb-8">
                Natural Glow <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
                  Glow Veda
                </span>
              </h1>
              
              <p className="text-xl text-primary-100/80 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Unlock the power of 24 Ayurvedic herbs with <span className="text-white font-bold">Kiran's Glow Veda</span>. 
                Our flagship elixir for radiant skin and holistic wellness, crafted in Kolkata since 2015.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                <Link to="/shop" className="group relative px-10 py-5 bg-white text-primary-950 font-black text-lg rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-white/10">
                  <span className="relative z-10 flex items-center gap-3">
                    Explore Products
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </span>
                </Link>
                <Link to="/about" className="px-10 py-5 bg-transparent border-2 border-white/20 text-white font-bold text-lg rounded-2xl hover:bg-white/5 transition-all">
                  Our Heritage
                </Link>
              </div>
              
              <div className="mt-16 pt-12 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-12">
                <div>
                  <p className="text-4xl font-black text-white">50k+</p>
                  <p className="text-sm text-primary-300 font-bold uppercase tracking-widest">Happy Lives</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-white">100+</p>
                  <p className="text-sm text-primary-300 font-bold uppercase tracking-widest">Pure Formulations</p>
                </div>
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                  <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-primary-900 bg-gray-300 flex items-center justify-center text-[10px] font-bold text-primary-900">
                        U{i}
                      </div>
                    ))}
                  </div>
                  <div className="text-left">
                    <div className="flex text-accent-400">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                    </div>
                    <p className="text-[10px] text-white font-bold">4.9/5 Average Rating</p>
                  </div>
                </div>
              </div>
            </Motion.div>
            
            <Motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex-1 relative"
            >
              <div className="relative z-10 bg-gradient-to-br from-primary-800 to-primary-950 p-2 rounded-[3rem] shadow-2xl shadow-black/50 overflow-hidden group">
                <img 
                  src={GlowVeda} 
                  alt="Kiran's Glow Veda" 
                  className="w-full aspect-[4/5] object-cover rounded-[2.5rem] opacity-90 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-transparent to-transparent opacity-60" />
                
                <Motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent-500 rounded-2xl flex items-center justify-center shadow-lg shadow-accent-500/30">
                      <ShieldCheck className="text-white w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-white font-black">Glow Veda Elixir</p>
                      <p className="text-primary-200 text-sm">Ayurvedic Skin Radiance</p>
                    </div>
                  </div>
                </Motion.div>
              </div>
              
              {/* Floating Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent-500 rounded-full blur-3xl opacity-20 animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-500 rounded-full blur-3xl opacity-20 animate-pulse" />
            </Motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <ShieldCheck className="w-8 h-8" />, title: 'Certified Organic', desc: '100% Pure & Certified' },
              { icon: <Truck className="w-8 h-8" />, title: 'Free Shipping', desc: 'Orders above ₹500' },
              { icon: <Clock className="w-8 h-8" />, title: 'Fast Delivery', desc: 'Within 24-48 Hours' },
              { icon: <CheckCircle2 className="w-8 h-8" />, title: 'Best Quality', desc: 'Handpicked with Care' },
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-4 p-6 rounded-2xl border border-gray-100 hover:border-primary-100 hover:bg-primary-50 transition-all duration-300">
                <div className="text-primary-600">{feature.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-500">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sea Buckthorn Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary-100 rounded-[3rem] -rotate-3" />
                <img 
                  src={SeaBuckthornJuice} 
                  alt="Sea Buckthorn Juice" 
                  className="relative z-10 w-full rounded-[2.5rem] shadow-2xl"
                />
              </div>
            </div>
            <div className="flex-1 order-1 lg:order-2">
              <span className="text-primary-600 font-bold tracking-widest uppercase mb-4 block">Himalayan Superfood</span>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
                Organic Sea Buckthorn <br />
                <span className="text-primary-600">The Wonder Berry</span>
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Boost your immunity and energy levels with our pure Sea Buckthorn juice. 
                Rich in Omega 3, 6, 7, and 9, it's nature's most powerful source of vitamins and antioxidants.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-green-100 p-1 rounded-full text-green-600">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <p className="font-bold text-gray-800">Rich in Vitamin C</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-green-100 p-1 rounded-full text-green-600">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <p className="font-bold text-gray-800">Immunity Booster</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-green-100 p-1 rounded-full text-green-600">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <p className="font-bold text-gray-800">Skin Radiance</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-green-100 p-1 rounded-full text-green-600">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <p className="font-bold text-gray-800">100% Organic</p>
                </div>
              </div>
              <Link to="/shop" className="inline-flex items-center gap-3 px-8 py-4 bg-primary-950 text-white font-bold rounded-2xl hover:bg-black transition-all">
                Try It Today
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Shop by Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Explore our wide range of organic products categories curated just for you.</p>
        </div>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((cat) => (
              <Link 
                key={cat.id} 
                to={`/shop?category=${encodeURIComponent(cat.name)}`}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group text-center"
              >
                <div className={`w-16 h-16 ${cat.color} rounded-full flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  {cat.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{cat.name}</h3>
                <p className="text-xs text-gray-500">{cat.count}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="container flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Featured Products</h2>
            <p className="text-gray-600">Our most loved organic essentials</p>
          </div>
          <Link to="/shop" className="text-primary-600 font-bold flex items-center gap-1 hover:gap-2 transition-all">
            View All <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden aspect-square bg-gray-50 flex items-center justify-center p-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-xs font-bold text-primary-600">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs text-primary-600 font-bold uppercase tracking-wider mb-2">{product.category}</div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    <Link to={`/product/${product.id}`}>{product.name}</Link>
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold text-gray-900">₹{product.price}</span>
                      <span className="text-sm text-gray-400 line-through">₹{product.originalPrice}</span>
                    </div>
                    <button 
                      onClick={() => addToCart(product)}
                      className="p-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors"
                    >
                      <ShoppingBag className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Banner */}
      <section className="py-20 container">
        <div className="bg-primary-900 rounded-[2rem] overflow-hidden relative">
          <div className="absolute inset-0 bg-primary-800 opacity-20" />
          <div className="relative z-10 px-8 py-16 md:p-16 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <span className="text-primary-400 font-bold tracking-widest uppercase mb-4 block">Special Wellness Offer</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Get Flat 20% Off on All <br /> Ayurvedic Health Teas
              </h2>
              <p className="text-primary-100 text-lg mb-8">
                Use Code: <span className="bg-white/10 px-4 py-2 rounded-lg font-mono text-white">TEAVEDA20</span>
              </p>
              <Link to="/shop?category=Health Teas" className="btn-primary bg-white text-primary-900 hover:bg-primary-50 border-none inline-flex items-center gap-2">
                Shop Health Teas <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="hidden lg:block">
              <img src={BrahmiTea} alt="Health Tea Offer" className="w-64 h-64 rounded-2xl shadow-2xl rotate-3" />
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Banner Section */}
      <section className="py-20 bg-primary-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-accent-500 rounded-full blur-[150px]" />
        </div>
        <div className="container relative z-10">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[3rem] p-8 lg:p-16 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-block px-4 py-2 bg-accent-500/20 text-accent-400 rounded-full text-sm font-bold tracking-widest uppercase mb-6">
                New Launch
              </span>
              <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Post Pregnancy <br />
                <span className="text-accent-400">Care & Comfort</span>
              </h2>
              <p className="text-xl text-primary-100/70 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Specially formulated for new mothers. Our Post Pregnancy Spray helps in natural recovery and provides the soothing care you deserve.
              </p>
              <Link to="/shop" className="inline-flex items-center gap-3 px-10 py-5 bg-accent-500 text-white font-black text-lg rounded-2xl hover:bg-accent-600 transition-all hover:scale-105">
                Shop Now
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
            <div className="flex-1 relative">
              <div className="relative group">
                <div className="absolute inset-0 bg-accent-500 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <img 
                  src={PostPregnancySpray} 
                  alt="Post Pregnancy Spray" 
                  className="relative z-10 w-full max-w-md mx-auto rounded-[2rem] shadow-2xl transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600">Real stories from real people who trust Kiran Health Plus</p>
        </div>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">"{t.text}"</p>
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-sm text-primary-600">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="bg-primary-50 rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 border border-primary-100">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Newsletter</h2>
              <p className="text-gray-600">Subscribe to get latest updates, offers and health tips directly to your inbox.</p>
            </div>
            <form className="w-full max-w-md flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                required
              />
              <button type="submit" className="btn-primary py-4">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
