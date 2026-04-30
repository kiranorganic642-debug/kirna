import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, User, Heart, ChevronDown, LogOut } from 'lucide-react';
import Logo from './Logo';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistProvider';
import { useAuth } from '../context/AuthProvider';
import { categoryProducts } from '../utils/products';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cartCount } = useCart();
  const { wishlist } = useWishlist();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 py-5 font-sans">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <Logo />
        </Link>

        {/* Center Navigation Links */}
        <div className="hidden lg:flex items-center space-x-10">
          <Link to="/" className="text-[#4a5568] hover:text-[#2d6a4f] font-semibold text-[15px] transition-all">Home</Link>
          
          <div className="relative group">
            <Link to="/shop" className="text-[#4a5568] hover:text-[#2d6a4f] font-semibold text-[15px] transition-all flex items-center gap-1">
              Products <ChevronDown className="w-4 h-4 text-gray-400 group-hover:rotate-180 transition-transform" />
            </Link>
            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 p-4 border border-gray-50 mt-2">
              <Link to="/shop?search=Herbal" className="block text-[#4a5568] hover:text-[#2d6a4f] font-medium text-sm py-2 px-3 rounded-lg hover:bg-gray-50 transition-all">Herbal Products</Link>
              <Link to="/shop?search=Immunity" className="block text-[#4a5568] hover:text-[#2d6a4f] font-medium text-sm py-2 px-3 rounded-lg hover:bg-gray-50 transition-all">Immunity Boosters</Link>
              <Link to="/shop?search=Skin" className="block text-[#4a5568] hover:text-[#2d6a4f] font-medium text-sm py-2 px-3 rounded-lg hover:bg-gray-50 transition-all">Skin Care</Link>
            </div>
          </div>

          <Link to="/appointment" className="text-[#4a5568] hover:text-[#2d6a4f] font-semibold text-[15px] transition-all">Appointment</Link>
          <Link to="/about" className="text-[#4a5568] hover:text-[#2d6a4f] font-semibold text-[15px] transition-all">About</Link>
          <Link to="/contact" className="text-[#4a5568] hover:text-[#2d6a4f] font-semibold text-[15px] transition-all">Contact</Link>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-6">
          <button className="text-[#4a5568] hover:text-[#2d6a4f] transition-all p-1">
            <Search className="w-5 h-5 stroke-[2.5]" />
          </button>
          
          <Link to="/wishlist" className="relative text-[#4a5568] hover:text-[#2d6a4f] transition-all p-1">
            <Heart className="w-5 h-5 stroke-[2.5]" />
            {wishlist && wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {wishlist.length}
              </span>
            )}
          </Link>

          <Link to={user ? "/profile" : "/login"} className="text-[#4a5568] hover:text-[#2d6a4f] transition-all p-1">
            <User className="w-5 h-5 stroke-[2.5]" />
          </Link>
          
          <Link to="/cart" className="relative text-[#4a5568] hover:text-[#2d6a4f] transition-all p-1">
            <ShoppingCart className="w-5 h-5 stroke-[2.5]" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#2d6a4f] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Mobile Menu Toggle */}
          <button onClick={toggleMenu} className="lg:hidden text-[#4a5568] p-1">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 py-6 px-4 absolute top-full left-0 w-full shadow-xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-5">
            <Link to="/" onClick={toggleMenu} className="text-[#4a5568] font-bold text-lg">Home</Link>
            
            <div className="flex flex-col">
              <button 
                onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                className="flex items-center justify-between text-[#4a5568] font-bold text-lg w-full text-left"
              >
                Products
                <ChevronDown className={`w-5 h-5 transition-transform ${isMobileProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${isMobileProductsOpen ? 'max-h-[500px] mt-4 ml-4' : 'max-h-0'}`}>
                <div className="flex flex-col space-y-3 border-l-2 border-gray-100 pl-4">
                  {Object.keys(categoryProducts).map((category) => (
                    <Link 
                      key={category}
                      to={`/shop?category=${encodeURIComponent(category)}`}
                      onClick={toggleMenu}
                      className="text-gray-500 font-medium"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/appointment" onClick={toggleMenu} className="text-[#4a5568] font-bold text-lg">Appointment</Link>
            <Link to="/about" onClick={toggleMenu} className="text-[#4a5568] font-bold text-lg">About</Link>
            <Link to="/contact" onClick={toggleMenu} className="text-[#4a5568] font-bold text-lg">Contact</Link>
            
            <div className="border-t border-gray-100 pt-5 mt-2 flex flex-col space-y-4">
              <Link to="/profile" onClick={toggleMenu} className="text-[#4a5568] font-medium flex items-center gap-3">
                <User className="w-5 h-5" /> My Profile
              </Link>
              <Link to="/wishlist" onClick={toggleMenu} className="text-[#4a5568] font-medium flex items-center gap-3">
                <Heart className="w-5 h-5" /> Wishlist
              </Link>
              {user ? (
                <button onClick={handleLogout} className="text-red-600 font-bold flex items-center gap-3">
                  <LogOut className="w-5 h-5" /> Logout
                </button>
              ) : (
                <Link to="/login" onClick={toggleMenu} className="text-[#2d6a4f] font-bold">Login / Register</Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
