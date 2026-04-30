import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShoppingBag, Truck, ShieldCheck, Clock, CheckCircle2, Leaf, Sparkles, Droplet, Handshake, Cloud } from 'lucide-react';
import Logo from '../components/Logo';
import { motion as Motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { useProducts } from '../context/ProductProvider';

import SliderImage from '../assets/banner/slider.webp';
import DishImage from '../assets/banner/dish.webp';
import LeafSix from '../assets/banner/leaf-six.webp';

// Using CORS-friendly high-quality leaf images
const LeafOne = 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=100&auto=format&fit=crop';
const LeafTwo = 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=100&auto=format&fit=crop';
const categories = [
  { id: 1, name: 'Herbal Products', icon: '🌿', link: '/shop?search=Herbal' },
  { id: 2, name: 'Digestive Health', icon: '💧', link: '/shop?search=Digestive' },
  { id: 3, name: 'Immunity Boosters', icon: '🛡️', link: '/shop?search=Immunity' },
  { id: 4, name: 'Stress Support', icon: '🧘', link: '/shop?search=Stress' },
  { id: 5, name: 'Skin & Hair Care', icon: '💆', link: '/shop?search=Skin' },
  { id: 6, name: 'Detox & Rejuvenation', icon: '✨', link: '/shop?search=Detox' },
  { id: 7, name: 'Heart Health', icon: '❤️', link: '/shop?search=Heart' },
  { id: 8, name: 'Diabetes Care', icon: '🍬', link: '/shop?search=Diabetes' },
];

const blogPosts = [
  { id: 1, title: '5 Ancient Herbs for Daily Immunity', date: 'May 12, 2026', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop', excerpt: 'Discover how Ashwagandha and Turmeric can transform your health...' },
  { id: 2, title: 'Understanding PCOS: An Ayurvedic Approach', date: 'May 10, 2026', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920&auto=format&fit=crop', excerpt: 'Balance your hormones naturally with these simple lifestyle changes...' },
  { id: 3, title: 'The Secret to Glowing Skin from Within', date: 'May 08, 2026', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop', excerpt: 'True beauty starts with a healthy gut. Learn how to detox properly...' },
];

const Home = () => {
  const { addToCart } = useCart();
  const { products } = useProducts();
  const featuredProducts = products.slice(0, 8);

  return (
    <div className="overflow-hidden bg-beige leaf-texture">
      {/* 2. Hero Section */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-[#f9f8f3]">
        {/* Floating Animated Leaves in Background */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <img src={LeafSix} alt="" className="absolute top-[10%] left-[2%] w-16 opacity-70 animate-float-leaf" style={{ animationDelay: '0s' }} />
          <img src={LeafSix} alt="" className="absolute top-[45%] left-[40%] w-20 opacity-60 animate-float-leaf" style={{ animationDelay: '2s' }} />
          <img src={LeafSix} alt="" className="absolute bottom-[15%] left-[10%] w-18 opacity-70 animate-float-leaf" style={{ animationDelay: '4s' }} />
          <img src={LeafSix} alt="" className="absolute top-[25%] right-[5%] w-14 opacity-60 animate-float-leaf" style={{ animationDelay: '1s' }} />
          <img src={LeafSix} alt="" className="absolute bottom-[25%] right-[25%] w-20 opacity-70 animate-float-leaf" style={{ animationDelay: '3.5s' }} />
          <img src={LeafSix} alt="" className="absolute top-[5%] right-[40%] w-12 opacity-50 animate-float-leaf" />
        </div>

        <div className="container relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            {/* Left Content */}
            <div className="max-w-xl animate-fade-in">
              <Motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <h1 className="text-6xl lg:text-8xl font-bold text-[#4a4a44] leading-[1.1] mb-8 tracking-tight uppercase">
                  EMBRACE <br />
                  AYURVEDA’S NATURAL <br />
                  HEALING.
                </h1>
                <p className="text-xl text-[#666666] mb-12 leading-relaxed max-w-lg font-medium">
                  Unlock the secrets of Ayurveda for a balanced and healthy life. Embrace 
                  nature's healing with pure herbal remedies, rejuvenating therapies, and time-tested traditions.
                </p>
                <div className="flex">
                  <Link to="/shop" className="bg-[#a9c52f] text-white px-12 py-4 rounded-full font-bold text-sm flex items-center gap-3 hover:bg-[#98b32a] transition-all shadow-xl hover:scale-105 active:scale-95 group">
                    <Leaf className="w-5 h-5 fill-current" />
                    Explore more
                  </Link>
                </div>
              </Motion.div>
            </div>

            {/* Right Image with Decorative Rings and Slider Image underneath */}
            <div className="relative flex justify-center items-center">
              <Motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                className="relative w-full max-w-[600px] aspect-square flex items-center justify-center"
              >
                {/* slider.webp positioned smaller and underneath dish.webp */}
                <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40">
                   <img src={SliderImage} alt="" className="w-[85%] h-[85%] object-contain rounded-full" />
                </div>

                {/* Decorative Semicircles */}
                <div className="absolute inset-0 rounded-full border-[20px] border-[#a9c52f] border-r-transparent border-b-transparent -rotate-12 opacity-90 z-10" />
                <div className="absolute inset-[8%] rounded-full border-[20px] border-[#1b4332] border-l-transparent border-t-transparent rotate-12 opacity-90 z-10" />
                
                {/* Central Dish Image - Rotating */}
                <div className="relative z-20 w-[72%] aspect-square">
                  <img 
                    src={DishImage} 
                    alt="Ayurvedic Herbs" 
                    className="w-full h-full object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] animate-spin-slow rounded-full"
                  />
                </div>

                {/* Extra Floating Leaves */}
                <img src={LeafSix} alt="" className="absolute top-0 left-[10%] w-20 animate-float-leaf z-30" style={{ animationDelay: '1.5s' }} />
                <img src={LeafSix} alt="" className="absolute bottom-[5%] right-[5%] w-24 animate-float-leaf z-30" style={{ animationDelay: '0.5s' }} />
              </Motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Categories Section - Circle Icons */}
      <section className="py-24 section-alternate-1">
        <div className="container text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-primary-700 mb-6">Categories</h2>
          <p className="text-gray-500 text-xl italic max-w-2xl mx-auto">Discover natural healing with herbs, wellness, therapy, and care.</p>
        </div>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {categories.map((cat) => (
              <Link 
                key={cat.id} 
                to={cat.link}
                className="group flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-white premium-shadow flex items-center justify-center text-4xl lg:text-5xl mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500 group-hover:-translate-y-2 border border-primary-50">
                  {cat.icon}
                </div>
                <h3 className="font-bold text-primary-700 text-xs uppercase tracking-widest group-hover:text-primary-600 transition-colors px-2 leading-tight">
                  {cat.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Banner Section (Offer) */}
      <section className="py-20 bg-primary-700 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <img src="https://www.transparenttextures.com/patterns/pinstriped-suit.png" alt="pattern" className="w-full h-full object-repeat" />
        </div>
        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Exclusive offers on pure <br /> Ayurvedic herbal products.
              </h2>
              <p className="text-primary-100 text-xl mb-10 max-w-xl mx-auto lg:mx-0 font-light">
                Limited-time offers on Ayurvedic products for natural wellness savings!
              </p>
              <Link to="/shop" className="inline-block px-10 py-4 bg-accent-200 text-white font-bold rounded-full uppercase tracking-widest hover:bg-accent-300 transition-all shadow-xl">
                Shop Deals
              </Link>
            </div>
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop" 
                alt="Ayurvedic Deal" 
                className="rounded-[3rem] premium-shadow border-8 border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Shop Section (Grid) */}
      <section className="py-24 section-alternate-2">
        <div className="container text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-primary-700 mb-6">Shop</h2>
          <p className="text-gray-500 text-xl italic max-w-2xl mx-auto">Shop authentic Ayurvedic products for holistic wellness today!</p>
        </div>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-[2rem] overflow-hidden group hover:shadow-2xl transition-all duration-700 border border-gray-100 relative">
                <div className="relative aspect-square bg-white p-8 flex items-center justify-center overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute top-4 right-4 bg-primary-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    {product.rating ? `${product.rating.toFixed(1)} ★` : '5.0 ★'}
                  </div>
                </div>
                <div className="p-8 border-t border-gray-50">
                  <h3 className="font-bold text-primary-700 text-lg mb-2 line-clamp-1">
                    <Link to={`/product/${product.id}`}>{product.name}</Link>
                  </h3>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xl font-bold text-primary-600">₹{product.price}</span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-gray-400 line-through">₹{product.originalPrice}</span>
                    )}
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      <span>Sold: {product.sold || 50}</span>
                      <span>Remaining: {product.stock ? product.stock - (product.sold || 0) : 270}</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-primary-500" style={{ width: product.stock && product.sold ? `${((product.sold / product.stock) * 100).toFixed(0)}%` : '15%' }} />
                    </div>
                    <p className="text-[11px] text-primary-600 font-bold italic">Delivery by Tomorrow</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. "What we do" Section */}
      <section className="py-28 section-alternate-1">
        <div className="container">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <h2 className="text-5xl lg:text-6xl font-bold text-primary-700 mb-10">What we do</h2>
            <p className="text-xl text-gray-600 leading-relaxed font-light">
              At our Ayurvedic Medicine Center, we offer holistic healing through natural remedies and time-tested therapies. 
              Our range of authentic herbal products supports immunity, digestion, skincare, and overall well-being.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { icon: <Leaf className="w-10 h-10 text-primary-600 group-hover:text-white" />, title: 'Herbal Remedies', desc: 'We provide authentic Ayurvedic products made from pure herbs and natural ingredients.' },
              { icon: <Sparkles className="w-10 h-10 text-primary-600 group-hover:text-white" />, title: 'Rejuvenation Therapies', desc: 'Experience Panchakarma, herbal detox, and revitalizing therapies for complete wellness.' },
              { icon: <Droplet className="w-10 h-10 text-primary-600 group-hover:text-white" />, title: 'Ayurvedic Skincare', desc: 'Natural skincare solutions using herbal oils, face packs, scrubs, and nourishing treatments.' },
              { icon: <Handshake className="w-10 h-10 text-primary-600 group-hover:text-white" />, title: 'Personalized Care', desc: 'Our expert practitioners offer personalized wellness plans based on Ayurvedic principles.' },
              { icon: <ShieldCheck className="w-10 h-10 text-primary-600 group-hover:text-white" />, title: 'Immunity Solutions', desc: 'Strengthen your immunity and overall health with time-tested Ayurvedic formulations.' },
              { icon: <Cloud className="w-10 h-10 text-primary-600 group-hover:text-white" />, title: 'Stress Relief', desc: 'Holistic remedies, meditation, and Ayurvedic therapies for stress and relaxation.' }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="w-20 h-20 flex-shrink-0 bg-white rounded-2xl premium-shadow flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-all duration-500 group-hover:-rotate-6">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary-700 mb-3 group-hover:text-primary-600 transition-colors">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Categories Section */}
      <section className="py-24 section-alternate-1">
        <div className="container text-center mb-16">
          <span className="text-primary-600 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Our Solutions</span>
          <h2 className="text-5xl lg:text-6xl font-bold text-primary-700 mb-6">Shop by Concern</h2>
          <div className="w-24 h-1.5 bg-primary-500 mx-auto rounded-full" />
        </div>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {categories.map((cat) => (
              <Link 
                key={cat.id} 
                to={cat.link}
                className="bg-beige/50 backdrop-blur-sm p-10 rounded-[2.5rem] hover:bg-white premium-shadow transition-all duration-500 group text-center border border-transparent hover:border-primary-100"
              >
                <div className={`w-24 h-24 ${cat.color} rounded-3xl flex items-center justify-center text-5xl mx-auto mb-8 group-hover:scale-110 transition-transform shadow-inner`}>
                  {cat.icon}
                </div>
                <h3 className="font-bold text-primary-700 text-sm uppercase tracking-wider">{cat.name}</h3>
                <p className="text-[10px] text-gray-400 mt-2 font-bold uppercase tracking-widest">{cat.count}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. About Section (Image + Text Split) */}
      <section className="py-28 section-alternate-2 overflow-hidden">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="flex-1">
              <div className="relative">
                <div className="absolute -inset-6 bg-primary-200/30 rounded-[4rem] -rotate-3" />
                <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920&auto=format&fit=crop" 
                  alt="Our Heritage" 
                  className="relative z-10 w-full rounded-[3.5rem] premium-shadow"
                />
                <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[2rem] premium-shadow z-20 hidden md:block">
                  <div className="text-4xl font-bold text-primary-600 mb-1">10+</div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Years of Trust</div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <span className="text-primary-600 font-bold uppercase tracking-[0.2em] text-xs mb-6 block">Our Heritage</span>
              <h2 className="text-5xl lg:text-6xl font-bold text-primary-700 mb-10 leading-tight">Authentic Ayurveda <br /> Since 2015</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
                At Kiran Health Plus, we believe in the purity of nature. Our journey started with a simple goal: 
                to make traditional Ayurvedic wisdom accessible to everyone in its most effective form.
              </p>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed font-light">
                Every product we create is a result of years of research, hand-picked ingredients, and a commitment 
                to 100% natural formulations without any side effects.
              </p>
              <Link to="/about" className="btn-primary inline-flex items-center gap-4">
                Discover Our Story <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Services / Features Cards */}
      <section className="py-24 section-alternate-1">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { icon: <ShieldCheck className="w-12 h-12" />, title: 'ISO Certified', desc: 'Highest quality standards in every bottle.' },
              { icon: <Truck className="w-12 h-12" />, title: 'Fast Delivery', desc: 'Secure pan-India shipping within 3-5 days.' },
              { icon: <Clock className="w-12 h-12" />, title: '24/7 Support', desc: 'Our experts are always here to help you.' },
              { icon: <CheckCircle2 className="w-12 h-12" />, title: '100% Natural', desc: 'Pure herbal extracts with zero chemicals.' }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center p-12 rounded-[3rem] bg-beige/30 border border-transparent hover:border-primary-100 hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="text-primary-600 mb-8 bg-white p-6 rounded-2xl premium-shadow">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-primary-700 mb-4">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Testimonials Section */}
      <section className="py-24 section-alternate-2">
        <div className="container text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-primary-700 mb-6">Testimonials</h2>
          <p className="text-xl text-gray-500 italic">What our clients say about us.</p>
        </div>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: 'Rajesh K.', role: 'Verified Buyer', text: 'Kiran\'s Liver Care has significantly improved my digestion. Highly recommended!' },
              { name: 'Sneha M.', role: 'Happy Mother', text: 'Natural solutions that actually work. My go-to brand for health teas.' },
              { name: 'Vikram S.', role: 'Fitness Trainer', text: 'Pure ingredients and authentic Ayurvedic wisdom. Five stars for the quality.' }
            ].map((t, i) => (
              <div key={i} className="bg-white p-12 rounded-[2rem] premium-shadow border border-gray-100 flex flex-col items-center text-center">
                <div className="flex text-primary-500 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-gray-600 italic mb-8 text-lg leading-relaxed">"{t.text}"</p>
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg">{t.name[0]}</div>
                <h4 className="font-bold text-primary-700 text-lg">{t.name}</h4>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Newsletter Section */}
      <section className="py-24 section-alternate-1">
        <div className="container">
          <div className="bg-primary-600 rounded-[3rem] p-16 lg:p-24 text-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8">Newsletter</h2>
              <p className="text-primary-100 mb-12 text-xl leading-relaxed">Subscribe to receive exclusive Ayurvedic tips, new product launches, and special offers directly in your inbox.</p>
              <form className="flex flex-col sm:flex-row gap-6">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-10 py-6 rounded-full border-none focus:ring-4 focus:ring-primary-500/30 transition-all font-medium bg-white text-gray-800"
                  required
                />
                <button type="submit" className="px-14 py-6 bg-accent-200 text-white font-bold rounded-full uppercase tracking-widest hover:bg-accent-300 transition-all shadow-2xl active:scale-95 whitespace-nowrap">
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
