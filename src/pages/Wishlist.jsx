import React from 'react';
import { useWishlist } from '../context/WishlistProvider';
import { useCart } from '../context/CartContext';
import { Heart, ShoppingBag, X, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const { wishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (wishlist.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 bg-gray-50">
        <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-gray-100 text-center max-w-md w-full">
          <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner shadow-red-100">
            <Heart className="w-12 h-12 text-red-300" />
          </div>
          <h2 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">Wishlist is Empty</h2>
          <p className="text-gray-500 mb-10 text-lg leading-relaxed">Save items you love to find them easily later and build your wellness routine.</p>
          <Link 
            to="/shop"
            className="inline-block w-full py-5 bg-primary-600 text-white rounded-2xl font-bold hover:bg-primary-700 transition-all shadow-xl shadow-primary-200"
          >
            Explore Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="text-4xl font-black text-gray-900 tracking-tight">My Wishlist</h1>
            <p className="text-gray-600 mt-2">Saved products for your health and wellness journey</p>
          </div>
          <div className="px-4 py-2 bg-primary-50 rounded-xl font-bold text-primary-600 border border-primary-100">
            {wishlist.length} Items Saved
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {wishlist.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-500 relative flex flex-col h-full shadow-sm"
            >
              {/* Image Section */}
              <div className="relative aspect-square bg-gray-50 flex items-center justify-center p-6 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                />
                <button 
                  onClick={() => toggleWishlist(product)}
                  className="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur shadow-sm border border-gray-100 rounded-full text-red-500 hover:bg-red-500 hover:text-white transition-all z-10"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-[10px] text-primary-600 font-black uppercase tracking-widest mb-2">{product.category}</div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2 min-h-[3rem]">
                  <Link to={`/product/${product.id}`}>{product.name}</Link>
                </h3>
                
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                    ))}
                  </div>
                  <span className="text-[10px] text-gray-400 font-bold">({product.reviews})</span>
                </div>

                <div className="mt-auto">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-xl font-black text-gray-900">₹{product.price}</span>
                    <span className="text-xs text-gray-400 line-through font-medium">₹{product.originalPrice}</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <button 
                      onClick={() => addToCart(product)}
                      className="flex-grow flex items-center justify-center gap-2 py-3.5 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition-all shadow-lg shadow-primary-200"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      Add to Cart
                    </button>
                    <Link 
                      to={`/product/${product.id}`}
                      className="p-3.5 bg-gray-50 text-gray-400 rounded-xl hover:bg-gray-100 hover:text-primary-600 transition-all border border-gray-100"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
