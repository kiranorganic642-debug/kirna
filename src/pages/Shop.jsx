import React, { useState, useMemo, useEffect } from 'react';
import { Search, SlidersHorizontal, Star, ShoppingBag, X, ChevronDown, LayoutGrid, List, ShieldCheck, Truck, RefreshCw, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistProvider';
import { useProducts } from '../context/ProductProvider';
import { useAuth } from '../context/AuthProvider';
import { Link, useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

import { categories } from '../utils/products';

const sortOptions = ['Newest', 'Price: Low to High', 'Price: High to Low', 'Best Rating'];

const Shop = () => {
  const { products } = useProducts();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { user, hasAdmin } = useAuth();
  const location = useLocation();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Newest');
  const [priceRange, setPriceRange] = useState(10000); // Increased default price range
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid');

  // Get search and category query from URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const search = params.get('search');
    const category = params.get('category');
    
    // Reset states if params are missing to avoid persistent filters
    setSearchQuery(search || '');
    
    if (category && categories.includes(category)) {
      setSelectedCategory(category);
    } else {
      setSelectedCategory('All');
    }
  }, [location.search, categories]);

  const filteredProducts = useMemo(() => {
    return products
      .filter(product => {
        if (!product || !product.name) return false;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            (product.category && product.category.toLowerCase().includes(searchQuery.toLowerCase()));
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
        const matchesPrice = (product.price || 0) <= priceRange;
        return matchesSearch && matchesCategory && matchesPrice;
      })
      .sort((a, b) => {
        if (sortBy === 'Price: Low to High') return a.price - b.price;
        if (sortBy === 'Price: High to Low') return b.price - a.price;
        if (sortBy === 'Best Rating') return b.rating - a.rating;
        return 0; // Newest (default)
      });
  }, [searchQuery, selectedCategory, sortBy, priceRange]);

  return (
    <div className="bg-beige min-h-screen py-12 font-sans">
      <div className="container">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-primary-600 font-bold text-[10px] uppercase tracking-widest mb-4 block">Wellness Solutions</span>
            <h1 className="text-5xl lg:text-6xl font-bold text-primary-700 mb-4">Ayurvedic Shop</h1>
            <p className="text-gray-500 font-medium italic">Rooted in heritage, hand-crafted for your modern wellness journey.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
            <div className="relative flex-grow md:w-96">
              <input 
                type="text" 
                placeholder="Search solutions (e.g. Liver, Kidney)..." 
                className="w-full pl-14 pr-4 py-4 bg-white border border-gray-100 rounded-full focus:outline-none focus:ring-4 focus:ring-primary-50 transition-all shadow-sm font-medium text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-primary-600 w-5 h-5" />
            </div>
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-4 bg-white border border-gray-100 rounded-full hover:bg-gray-50 text-primary-600 shadow-sm transition-all"
            >
              <SlidersHorizontal className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {[
            { icon: <ShieldCheck className="w-6 h-6" />, title: 'Pure Formulations', desc: '100% natural and lab tested.' },
            { icon: <Truck className="w-6 h-6" />, title: 'Premium Shipping', desc: 'Securely delivered to your doorstep.' },
            { icon: <RefreshCw className="w-6 h-6" />, title: 'Expert Guidance', desc: 'Consult our doctors anytime.' }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-[2rem] border border-gray-50 p-6 flex items-center gap-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-primary-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-primary-50">
                {item.icon}
              </div>
              <div>
                <div className="font-bold text-xs uppercase tracking-widest text-primary-700 mb-1">{item.title}</div>
                <div className="text-xs text-gray-500 font-medium">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-12">
          {/* Desktop Sidebar Filters */}
          <aside className="hidden lg:block w-72 shrink-0 space-y-12">
            <div>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Health Categories</h3>
              <div className="space-y-3">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-6 py-3.5 rounded-2xl transition-all text-sm font-bold tracking-tight ${
                      selectedCategory === cat 
                        ? 'bg-primary-600 text-white shadow-xl shadow-primary-50' 
                        : 'text-gray-500 hover:bg-white hover:text-primary-600 hover:shadow-sm'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Price Limit (₹)</h3>
              <div className="space-y-6 px-2">
                <input 
                  type="range" 
                  className="w-full accent-primary-600 h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer" 
                  min="0" 
                  max="10000" 
                  value={priceRange}
                  onChange={(e) => setPriceRange(parseInt(e.target.value))}
                />
                <div className="flex items-center justify-between text-xs font-bold text-primary-600 uppercase tracking-widest">
                  <span>₹0</span>
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full">₹{priceRange}</span>
                </div>
              </div>
            </div>

            {!user && (
               <div className="bg-primary-600 rounded-[2.5rem] p-8 text-white overflow-hidden relative shadow-2xl shadow-primary-50">
                 <div className="relative z-10">
                   <h4 className="font-bold text-2xl mb-3">Join Veda</h4>
                   <p className="text-primary-50/80 text-sm mb-6 leading-relaxed">Get 10% extra discount on your first Ayurvedic order.</p>
                   <Link to="/register" className="inline-block bg-white text-primary-600 px-6 py-3 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-primary-50 transition-all">Sign Up Now</Link>
                 </div>
                 <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
               </div>
             )}
          </aside>

          {/* Product Grid Area */}
          <div className="flex-grow">
            {/* Toolbar */}
            <div className="bg-white p-5 rounded-[2rem] border border-gray-50 shadow-sm flex flex-wrap items-center justify-between gap-6 mb-12">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Found <span className="text-primary-600 font-bold">{filteredProducts.length}</span> Solutions
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 bg-beige p-1.5 rounded-2xl">
                  <button 
                    onClick={() => setViewMode('grid')}
                    className={`p-2.5 rounded-xl transition-all ${viewMode === 'grid' ? 'bg-white shadow-md text-primary-600' : 'text-gray-400 hover:text-gray-600'}`}
                  >
                    <LayoutGrid className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => setViewMode('list')}
                    className={`p-2.5 rounded-xl transition-all ${viewMode === 'list' ? 'bg-white shadow-md text-primary-600' : 'text-gray-400 hover:text-gray-600'}`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
                <div className="relative group">
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-beige border-none rounded-2xl pl-6 pr-12 py-3.5 text-xs font-bold text-primary-600 uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-primary-50 cursor-pointer"
                  >
                    {sortOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-600 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className={viewMode === 'grid' 
                ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10"
                : "flex flex-col gap-8"
              }>
                {filteredProducts.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    viewMode={viewMode} 
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-24 bg-white rounded-[3rem] border border-dashed border-gray-200">
                <Search className="w-20 h-20 text-gray-200 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-primary-700 mb-3">No solutions found</h3>
                <p className="text-gray-500 font-medium italic mb-10 max-w-sm mx-auto">Try adjusting your filters or search keywords to find what you're looking for.</p>
                <button 
                  onClick={() => {setSearchQuery(''); setSelectedCategory('All');}}
                  className="px-10 py-4 bg-primary-600 text-white rounded-full font-bold text-xs uppercase tracking-widest shadow-xl shadow-primary-50"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsSidebarOpen(false)} />
          <aside className="absolute top-0 right-0 h-full w-80 bg-white p-8 overflow-y-auto animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Filters</h2>
              <button onClick={() => setIsSidebarOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedCategory === cat 
                          ? 'bg-primary-600 text-white shadow-md' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Price Range</h3>
                <div className="space-y-4">
                  <input 
                    type="range" 
                    className="w-full accent-primary-600" 
                    min="0" 
                    max="2000" 
                    value={priceRange}
                    onChange={(e) => setPriceRange(parseInt(e.target.value))}
                  />
                  <div className="flex items-center justify-between text-sm text-gray-600 font-medium">
                    <span>₹0</span>
                    <span>₹{priceRange}</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setIsSidebarOpen(false)}
                className="w-full btn-primary py-4"
              >
                Show {filteredProducts.length} Results
              </button>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
};

export default Shop;
