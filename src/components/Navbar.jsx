import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, User, Heart, LogOut, Settings, Shield } from 'lucide-react';
import Logo from './Logo';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistProvider';
import { useAuth } from '../context/AuthProvider';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
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
            <Link to="/shop" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">Shop</Link>
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
            <Link to="/shop" onClick={toggleMenu} className="text-gray-600 hover:text-primary-600 font-medium py-2">Shop</Link>
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
