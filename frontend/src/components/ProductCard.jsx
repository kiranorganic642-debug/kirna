import React, { useState } from 'react';
import { Star, ShoppingBag, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistProvider';

const ProductCard = ({ product, viewMode = 'grid' }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  
  // Initialize state based on variants
  const [selectedSize, setSelectedSize] = useState(() => {
    if (product.variants && product.variants.length > 0) {
      // Prefer 500gm as default if available
      const defaultVariant = product.variants.find(v => v.size === '500gm') || product.variants[0];
      return defaultVariant.size;
    }
    return null;
  });

  // Get current price based on selected size
  const currentPrice = (() => {
    if (product.variants && product.variants.length > 0) {
      const variant = product.variants.find(v => v.size === selectedSize);
      return variant ? variant.price : product.price;
    }
    return product.price;
  })();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({ 
      ...product, 
      price: currentPrice, 
      selectedSize: selectedSize 
    });
  };

  const isSelectedSize = (size) => selectedSize === size;

  return (
    <div 
      className={`bg-white rounded-[2.5rem] border border-gray-50 overflow-hidden group hover:shadow-2xl transition-all duration-500 relative flex flex-col h-full ${
        viewMode === 'list' ? 'flex-row p-6 gap-8' : ''
      }`}
    >
      <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-64 h-64 shrink-0 rounded-[2rem]' : 'aspect-[4/5] bg-beige/30 flex items-center justify-center p-8'}`}>
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
        />
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product);
          }}
          className={`absolute top-5 left-5 p-3 rounded-2xl shadow-lg transition-all z-10 ${
            isInWishlist(product.id) 
              ? 'bg-red-500 text-white' 
              : 'bg-white/90 text-gray-400 hover:text-red-500'
          }`}
        >
          <Heart className={`w-5 h-5 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
        </button>
        {product.originalPrice > currentPrice && (
          <div className="absolute top-5 right-5 z-10 bg-primary-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
            Sale
          </div>
        )}
        {product.isComingSoon && (
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] z-20 flex items-center justify-center p-4 text-center">
            <span className="bg-primary-700 text-white px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest shadow-xl">Coming Soon</span>
          </div>
        )}
      </div>

      <div className={`p-8 flex flex-col flex-grow ${viewMode === 'list' ? 'py-4' : ''}`}>
        <div className="text-[10px] text-primary-500 font-bold uppercase tracking-[0.2em] mb-3">{product.category}</div>
        <h3 className="font-bold text-xl text-primary-700 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        
        <div className="flex items-center gap-2 mb-4">
          <div className="flex text-primary-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
            ))}
          </div>
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">({product.reviews} Reviews)</span>
        </div>

        {/* Variant Selector */}
        {product.variants && product.variants.length > 0 && (
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {product.variants.map((v) => (
                <button
                  key={v.size}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setSelectedSize(v.size);
                  }}
                  className={`px-4 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all border ${
                    isSelectedSize(v.size)
                      ? 'bg-primary-600 border-primary-600 text-white shadow-lg shadow-primary-100'
                      : 'bg-white border-gray-100 text-gray-400 hover:border-primary-200 hover:text-primary-600'
                  }`}
                >
                  {v.size}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="mt-auto pt-6 flex items-center justify-between border-t border-gray-50">
          <div className="flex flex-col">
            {product.originalPrice > currentPrice && (
              <span className="text-xs text-gray-400 line-through">₹{product.originalPrice}</span>
            )}
            <span className="text-2xl font-bold text-primary-600">₹{currentPrice}</span>
          </div>
          {!product.isComingSoon && (
            <button 
              onClick={handleAddToCart}
              className="w-14 h-14 bg-primary-600 text-white rounded-2xl hover:bg-primary-700 transition-all duration-300 shadow-xl shadow-primary-50 flex items-center justify-center active:scale-95"
            >
              <ShoppingBag className="w-6 h-6" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
