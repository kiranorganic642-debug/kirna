import React, { useState, useMemo, useEffect } from 'react';
import { Search, SlidersHorizontal, Star, ShoppingBag, X, ChevronDown, LayoutGrid, List, ShieldCheck, Truck, RefreshCw, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistProvider';
import { useProducts } from '../context/ProductProvider';
import { useAuth } from '../context/AuthProvider';
import { Link, useLocation } from 'react-router-dom';

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
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.category.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
        const matchesPrice = product.price <= priceRange;
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
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Shop Our Products</h1>
            <p className="text-gray-600">Pure, organic, and handpicked just for you — crafted for everyday wellness.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="relative flex-grow md:w-80">
              <input 
                type="text" 
                placeholder="Search products..." 
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 text-gray-600"
            >
              <SlidersHorizontal className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            { icon: <ShieldCheck className="w-5 h-5" />, title: 'Quality First', desc: 'Carefully selected, clean ingredients.' },
            { icon: <Truck className="w-5 h-5" />, title: 'Fast Dispatch', desc: 'Packed safely for doorstep delivery.' },
            { icon: <RefreshCw className="w-5 h-5" />, title: 'Easy Support', desc: 'Quick help for orders & guidance.' }
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

        <div className="flex gap-8">
          {/* Desktop Sidebar Filters */}
          <aside className="hidden lg:block w-64 shrink-0 space-y-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                      selectedCategory === cat 
                        ? 'bg-primary-600 text-white font-medium shadow-md' 
                        : 'text-gray-600 hover:bg-primary-50 hover:text-primary-600'
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
                  max="10000" 
                  value={priceRange}
                  onChange={(e) => setPriceRange(parseInt(e.target.value))}
                />
                <div className="flex items-center justify-between text-sm text-gray-600 font-medium">
                  <span>₹0</span>
                  <span>₹{priceRange}</span>
                </div>
              </div>
            </div>

            {!user && (
               <div className="bg-primary-900 rounded-2xl p-6 text-white overflow-hidden relative">
                 <div className="relative z-10">
                   <h4 className="font-bold text-xl mb-2">Special Offer!</h4>
                   <p className="text-primary-200 text-sm mb-4">Get 10% extra discount on your first order.</p>
                   <Link to="/register" className="text-white font-bold underline decoration-primary-400 decoration-2 underline-offset-4">Sign Up Now</Link>
                 </div>
                 <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-32 h-32 bg-primary-800 rounded-full blur-2xl" />
               </div>
             )}
          </aside>

          {/* Product Grid Area */}
          <div className="flex-grow">
            {/* Toolbar */}
            <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="text-sm text-gray-600 font-medium">
                Showing <span className="text-gray-900">{filteredProducts.length}</span> results
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 border border-gray-100 rounded-lg p-1 bg-gray-50">
                  <button 
                    onClick={() => setViewMode('grid')}
                    className={`p-1.5 rounded-md transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm text-primary-600' : 'text-gray-400 hover:text-gray-600'}`}
                  >
                    <LayoutGrid className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => setViewMode('list')}
                    className={`p-1.5 rounded-md transition-all ${viewMode === 'list' ? 'bg-white shadow-sm text-primary-600' : 'text-gray-400 hover:text-gray-600'}`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
                <div className="relative group">
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white border border-gray-200 rounded-lg pl-4 pr-10 py-2 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 cursor-pointer"
                  >
                    {sortOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className={viewMode === 'grid' 
                ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8"
                : "flex flex-col gap-6"
              }>
                {filteredProducts.map((product) => (
                  <div 
                    key={product.id} 
                    className={`bg-white rounded-2xl border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300 ${
                      viewMode === 'list' ? 'flex flex-col sm:flex-row items-center p-4 gap-6' : ''
                    }`}
                  >
                    <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-full sm:w-48 h-48 rounded-xl' : 'aspect-square bg-gray-50 flex items-center justify-center p-4'}`}>
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                      />
                      <button 
                        onClick={() => toggleWishlist(product)}
                        className={`absolute top-4 left-4 p-2 rounded-full shadow-sm border transition-all ${
                          isInWishlist(product.id) 
                            ? 'bg-red-500 text-white border-red-500' 
                            : 'bg-white/90 text-gray-400 border-gray-100 hover:text-red-500'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
                      </button>
                      {product.originalPrice > product.price && (
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-xs font-bold text-primary-600">
                          {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                        </div>
                      )}
                    </div>
                    <div className={`p-6 ${viewMode === 'list' ? 'flex-grow py-0' : ''}`}>
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
            ) : (
              <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
                <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-500 mb-8">Try adjusting your search or filters to find what you're looking for.</p>
                <button 
                  onClick={() => {setSearchQuery(''); setSelectedCategory('All');}}
                  className="btn-primary"
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
