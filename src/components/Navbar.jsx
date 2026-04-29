import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, User, Heart, LogOut, Settings, Shield, ChevronDown, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistProvider';
import { useAuth } from '../context/AuthProvider';
import { categories, categoryProducts } from '../utils/products';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cartCount } = useCart();
  const { wishlist } = useWishlist();
  const { user, logout, isAdmin, hasAdmin } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">Home</Link>
            
            {/* Products Mega Menu */}
            <div className="relative group py-2">
              <Link to="/shop" className="text-gray-600 hover:text-primary-600 font-medium transition-colors flex items-center gap-1">
                Products <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
              </Link>
              
              <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-[800px] bg-white border border-gray-100 rounded-[2rem] shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 p-8 overflow-hidden">
                <div className="grid grid-cols-3 gap-10 relative z-10">
                  {Object.entries(categoryProducts).map(([category, products]) => (
                    <div key={category} className="space-y-4">
                      <Link 
                        to={`/shop?category=${encodeURIComponent(category)}`}
                        className="flex items-center gap-2 mb-2 group/cat"
                      >
                        <div className="w-1.5 h-6 bg-primary-600 rounded-full group-hover/cat:scale-y-125 transition-transform"></div>
                        <h3 className="text-gray-900 font-black text-sm uppercase tracking-wider group-hover/cat:text-primary-600 transition-colors">
                          {category}
                        </h3>
                      </Link>
                      <ul className="space-y-2 ml-3">
                        {products.map((product) => (
                          <li key={product}>
                            <Link 
                              to={`/shop?search=${encodeURIComponent(product)}`}
                              className="text-gray-500 hover:text-primary-600 text-sm font-medium transition-all hover:translate-x-1 block"
                            >
                              {product}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                
                {/* Footer of Mega Menu */}
                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between relative z-10">
                  <p className="text-sm text-gray-400 font-medium">Discover our full range of organic wellness products.</p>
                  <Link 
                    to="/shop" 
                    onClick={() => {}}
                    className="flex items-center gap-2 px-6 py-2 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition-all shadow-lg shadow-primary-200 text-sm"
                  >
                    View All Products
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Decorative Background Element */}
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary-50 rounded-full blur-3xl opacity-50 -z-0"></div>
              </div>
            </div>

            <div className="relative group">
              <Link to="/appointment" className="text-gray-600 hover:text-primary-600 font-medium transition-colors flex items-center gap-1">
                Appointment
              </Link>
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 p-2">
                <Link to="/appointment" className="block px-4 py-2 text-sm text-gray-600 hover:bg-primary-50 hover:text-primary-600 rounded-lg">Book Appointment</Link>
                <Link to="/my-appointments" className="block px-4 py-2 text-sm text-gray-600 hover:bg-primary-50 hover:text-primary-600 rounded-lg">My Appointments</Link>
                {isAdmin && (
                  <>
                    <div className="border-t border-gray-100 my-1"></div>
                    <p className="px-4 py-1 text-[10px] font-black text-gray-400 uppercase tracking-widest">Admin Panels</p>
                    <Link to="/doctor-dashboard" className="block px-4 py-2 text-sm text-primary-600 font-bold hover:bg-primary-50 rounded-lg">Doctor Panel</Link>
                    <Link to="/admin/orders" className="block px-4 py-2 text-sm text-primary-600 font-bold hover:bg-primary-50 rounded-lg">Manage Orders</Link>
                    <Link to="/admin/products" className="block px-4 py-2 text-sm text-primary-600 font-bold hover:bg-primary-50 rounded-lg">Manage Products</Link>
                    <Link to="/admin/users" className="block px-4 py-2 text-sm text-primary-600 font-bold hover:bg-primary-50 rounded-lg">Manage Users</Link>
                  </>
                )}
              </div>
            </div>
            <Link to="/about" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">Contact</Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-5">
            <button 
              onClick={toggleSearch}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link to="/wishlist" className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors relative hidden sm:block">
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <Link to={user ? "/profile" : "/login"} className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors hidden sm:block">
              <User className="w-5 h-5" />
            </Link>
            <Link to="/cart" className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-primary-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                  {cartCount}
                </span>
              )}
            </Link>
            <button 
              onClick={toggleMenu}
              className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

      {/* Search Bar (Expandable) */}
      <div className={`overflow-hidden transition-all duration-300 bg-gray-50 ${isSearchOpen ? 'max-h-20 border-b border-gray-100' : 'max-h-0'}`}>
        <div className="container mx-auto px-4 py-4">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search for organic products, medicines, or health tips..." 
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus={isSearchOpen}
            />
          </form>
        </div>
      </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-4">
            <Link to="/" onClick={toggleMenu} className="text-gray-600 hover:text-primary-600 font-medium py-2">Home</Link>
            
            {/* Mobile Products Dropdown */}
            <div className="flex flex-col">
              <button 
                onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                className="flex items-center justify-between text-gray-600 hover:text-primary-600 font-medium py-2 w-full text-left"
              >
                Products
                <ChevronDown className={`w-5 h-5 transition-transform ${isMobileProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${isMobileProductsOpen ? 'max-h-[1000px] mt-2' : 'max-h-0'}`}>
                <div className="pl-4 space-y-6 border-l-2 border-primary-50">
                  {Object.entries(categoryProducts).map(([category, products]) => (
                    <div key={category} className="space-y-3">
                      <Link 
                        to={`/shop?category=${encodeURIComponent(category)}`}
                        onClick={toggleMenu}
                        className="text-[10px] font-black text-gray-400 uppercase tracking-widest hover:text-primary-600 transition-colors block"
                      >
                        {category}
                      </Link>
                      <div className="flex flex-col space-y-2">
                        {products.map((product) => (
                          <Link 
                            key={product}
                            to={`/shop?search=${encodeURIComponent(product)}`}
                            onClick={toggleMenu}
                            className="text-sm text-gray-500 hover:text-primary-600 font-medium"
                          >
                            {product}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/appointment" onClick={toggleMenu} className="text-gray-600 hover:text-primary-600 font-medium py-2">Book Appointment</Link>
            <Link to="/my-appointments" onClick={toggleMenu} className="text-gray-600 hover:text-primary-600 font-medium py-2">My Appointments</Link>
            <Link to="/about" onClick={toggleMenu} className="text-gray-600 hover:text-primary-600 font-medium py-2">About Us</Link>
            <Link to="/contact" onClick={toggleMenu} className="text-gray-600 hover:text-primary-600 font-medium py-2">Contact</Link>
            <Link to="/profile" onClick={toggleMenu} className="text-gray-600 hover:text-primary-600 font-medium py-2">My Profile</Link>
            <Link to="/my-orders" onClick={toggleMenu} className="text-gray-600 hover:text-primary-600 font-medium py-2">My Orders</Link>
            <Link to="/wishlist" onClick={toggleMenu} className="text-gray-600 hover:text-primary-600 font-medium py-2">Wishlist</Link>
            {user ? (
              <button onClick={handleLogout} className="text-left text-red-600 font-bold py-2 border-t mt-2 flex items-center gap-2">
                <LogOut className="w-5 h-5" /> Logout
              </button>
            ) : (
              <Link to="/login" onClick={toggleMenu} className="text-gray-600 hover:text-primary-600 font-medium py-2 border-t mt-2">Login / Register</Link>
            )}
            {isAdmin && (
              <div className="border-t border-gray-100 pt-4 mt-2">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Admin Panels</p>
                <Link to="/doctor-dashboard" onClick={toggleMenu} className="block text-primary-600 font-bold py-1">Doctor Panel</Link>
                <Link to="/admin/orders" onClick={toggleMenu} className="block text-primary-600 font-bold py-1">Manage Orders</Link>
                <Link to="/admin/products" onClick={toggleMenu} className="block text-primary-600 font-bold py-1">Manage Products</Link>
                <Link to="/admin/users" onClick={toggleMenu} className="block text-primary-600 font-bold py-1">Manage Users</Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
