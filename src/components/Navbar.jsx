import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, User, Heart, ChevronDown, LogOut, Leaf } from 'lucide-react';
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

  const productLinks = [
    { name: "Green juice", link: "/shop?category=Green%20juice" },
    { name: "Colestro veda", link: "/shop?category=Colestro%20veda" },
    { name: "Pcos pcod care juice", link: "/shop?category=Pcos%20pcod%20care%20juice" },
    { name: "Sea buckthon jouce man stamina booster j", link: "/shop?category=Sea%20buckthon%20jouce%20man%20stamina%20booster%20j" },
    { name: "Sea buckthon ABC malt", link: "/shop?category=Sea%20buckthon%20ABC%20malt" },
    { name: "Liver detox", link: "/shop?category=Liver%20detox" },
    { name: "Kidney detox", link: "/shop?category=Kidney%20detox" },
    { name: "Pcos pcod care tea", link: "/shop?category=Pcos%20pcod%20care%20tea" },
    { name: "Bremi memory booster t", link: "/shop?category=Bremi%20memory%20booster%20t" },
    { name: "Dibo care tea", link: "/shop?category=Dibo%20care%20tea" },
    { name: "Slim tea", link: "/shop?category=Slim%20tea" },
    { name: "Morning permenent tea", link: "/shop?category=Morning%20permenent%20tea" },
    { name: "Moringa soup", link: "/shop?category=Moringa%20soup" },
    { name: "Dibo care atta flour", link: "/shop?category=Dibo%20care%20atta%20flour" },
    { name: "Moringa flour", link: "/shop?category=Moringa%20flour" },
    { name: "Little cheam flour", link: "/shop?category=Little%20cheam%20flour" },
    { name: "oil", link: "/shop?category=oil" }
  ];

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
            <button className="text-[#4a5568] hover:text-[#2d6a4f] font-semibold text-[15px] transition-all flex items-center gap-1 py-2">
              Products <ChevronDown className="w-4 h-4 text-gray-400 group-hover:rotate-180 transition-transform" />
            </button>
            
            {/* Mega Dropdown Menu (Single Column Scrollable List) */}
            <div className="absolute top-full left-0 w-[350px] bg-white rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 p-0 border border-gray-100 mt-2 overflow-hidden">
              <div className="bg-gray-50/50 px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Select Category</span>
                <span className="text-[10px] font-bold text-primary-600 uppercase tracking-widest animate-pulse">Scroll ↓</span>
              </div>
              <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
                <div className="flex flex-col divide-y divide-gray-50">
                  {productLinks.map((item, index) => (
                    <Link 
                      key={index}
                      to={item.link}
                      className="flex items-center gap-4 px-6 py-4 text-[#4a5568] hover:text-[#2d6a4f] hover:bg-gray-50/50 transition-all group/item"
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center group-hover/item:bg-primary-600 transition-colors shrink-0">
                        <Leaf className="w-5 h-5 text-primary-600 group-hover/item:text-white transition-colors" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-sm tracking-tight">{item.name}</span>
                        <span className="text-[10px] text-gray-400 font-medium">Explore Products</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="bg-primary-600 px-6 py-4 flex justify-between items-center">
                <Link to="/shop" className="text-white text-[10px] font-black uppercase tracking-widest hover:underline w-full text-center">View All Products</Link>
              </div>
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
              
              <div className={`overflow-hidden transition-all duration-300 ${isMobileProductsOpen ? 'max-h-[800px] mt-4 ml-4' : 'max-h-0'}`}>
                <div className="flex flex-col space-y-3 border-l-2 border-gray-100 pl-4">
                  {productLinks.map((item, index) => (
                    <Link 
                      key={index}
                      to={item.link}
                      onClick={toggleMenu}
                      className="flex items-center gap-3 py-3 border-b border-gray-50 last:border-0"
                    >
                      <Leaf className="w-3 h-3 text-primary-600" />
                      <span className="text-gray-600 font-bold text-sm">{item.name}</span>
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
                <button handleLogout className="text-red-600 font-bold flex items-center gap-3">
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
