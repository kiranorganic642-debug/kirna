import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingBag, Plus, Minus, ArrowLeft, ShieldCheck, Truck, RefreshCw, CheckCircle2, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistProvider';
import { useProducts } from '../context/ProductProvider';

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useProducts();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [selectedSize, setSelectedCategory] = useState('500g');
  const [isZoomed, setIsZoomed] = useState(false);

  const product = useMemo(() => {
    return products.find(p => p.id === parseInt(id)) || products[0];
  }, [id, products]);

  const sizes = ['250g', '500g', '1kg'];

  const handleAddToCart = () => {
    const productWithVariant = { ...product, name: `${product.name} (${selectedSize})` };
    for (let i = 0; i < quantity; i++) {
      addToCart(productWithVariant);
    }
    setQuantity(1);
  };

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="container">
        <Link to="/shop" className="text-primary-600 font-bold flex items-center gap-2 mb-8 hover:gap-3 transition-all">
          <ArrowLeft className="w-5 h-5" /> Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Product Image with Zoom */}
          <div className="relative">
            <div 
              className="aspect-square rounded-[3rem] overflow-hidden border border-gray-100 bg-gray-50 flex items-center justify-center p-12 cursor-zoom-in group"
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className={`w-full h-full object-contain transition-transform duration-500 ${isZoomed ? 'scale-150' : 'scale-100'}`}
              />
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                Hover to Zoom
              </div>
            </div>
            {product.originalPrice > product.price && (
              <div className="absolute top-8 left-8 bg-primary-600 text-white px-5 py-2 rounded-2xl text-sm font-black shadow-xl shadow-primary-100">
                SAVE {Math.round((1 - product.price / product.originalPrice) * 100)}%
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-10">
              <div className="text-primary-600 font-black uppercase tracking-[0.2em] text-xs mb-4">{product.category}</div>
              <h1 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight tracking-tight">{product.name}</h1>
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                    ))}
                  </div>
                  <span className="text-gray-900 font-black text-lg">{product.rating}</span>
                </div>
                <div className="w-px h-6 bg-gray-200" />
                <span className="text-gray-500 font-bold text-sm uppercase tracking-widest">{product.reviews} Reviews</span>
              </div>
            </div>

            <div className="mb-10">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-5xl font-black text-primary-600 tracking-tighter">₹{product.price}</span>
                <span className="text-2xl text-gray-300 line-through font-bold">₹{product.originalPrice}</span>
              </div>
              <p className="text-green-600 font-black text-xs uppercase tracking-widest flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                In Stock & Ready to Ship
              </p>
            </div>

            {/* Variant Selection */}
            <div className="mb-10">
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Select Packaging</p>
              <div className="flex gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedCategory(size)}
                    className={`px-6 py-3 rounded-xl font-black text-sm transition-all border-2 ${selectedSize === size ? 'border-primary-600 bg-primary-50 text-primary-600 shadow-lg shadow-primary-50' : 'border-gray-100 text-gray-500 hover:border-gray-200'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <p className="text-gray-500 text-lg leading-relaxed mb-12 font-medium">
              {product.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <div className="flex items-center gap-4 bg-gray-50 rounded-[1.5rem] p-2 border border-gray-100 w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-14 h-14 flex items-center justify-center bg-white rounded-2xl shadow-sm hover:text-primary-600 transition-all active:scale-90"
                >
                  <Minus className="w-6 h-6" />
                </button>
                <span className="w-12 text-center text-2xl font-black text-gray-900">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-14 h-14 flex items-center justify-center bg-white rounded-2xl shadow-sm hover:text-primary-600 transition-all active:scale-90"
                >
                  <Plus className="w-6 h-6" />
                </button>
              </div>
              <button 
                onClick={handleAddToCart}
                className="btn-primary flex-grow py-5 text-xl flex items-center justify-center gap-4 shadow-2xl shadow-primary-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <ShoppingBag className="w-6 h-6" /> Add to Cart
              </button>
              <button 
                onClick={() => toggleWishlist(product)}
                className={`p-5 rounded-[1.5rem] border-2 transition-all ${
                  isInWishlist(product.id)
                    ? 'bg-red-50 border-red-100 text-red-500 shadow-xl shadow-red-50'
                    : 'bg-white border-gray-100 text-gray-400 hover:border-red-100 hover:text-red-500'
                }`}
              >
                <Heart className={`w-8 h-8 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Truck className="text-primary-600 w-5 h-5" />
                <span>Fast Free Delivery</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <ShieldCheck className="text-primary-600 w-5 h-5" />
                <span>100% Organic</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <RefreshCw className="text-primary-600 w-5 h-5" />
                <span>Easy Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="border-t border-gray-100 pt-16">
          <div className="flex items-center justify-center gap-8 mb-12">
            {['description', 'additional', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-lg font-bold pb-2 transition-all capitalize ${
                  activeTab === tab 
                    ? 'text-primary-600 border-b-2 border-primary-600' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {tab === 'additional' ? 'Additional Info' : tab}
              </button>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            {activeTab === 'description' && (
              <div className="animate-in fade-in duration-500">
                <p className="text-gray-600 leading-loose mb-6">
                  Experience the exceptional quality of our {product.name}. Every batch is carefully tested for purity and quality to ensure you receive only the best. Our organic products are grown without synthetic pesticides or fertilizers, preserving the natural nutrients and flavor.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    '100% Certified Organic',
                    'Ethically Sourced',
                    'No Artificial Preservatives',
                    'Gluten Free & Vegan',
                    'Non-GMO Project Verified',
                    'Farm to Table Freshness'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {activeTab === 'additional' && (
              <div className="animate-in fade-in duration-500 bg-gray-50 rounded-2xl p-8">
                <table className="w-full text-left">
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <th className="py-4 font-bold text-gray-900 w-1/3">Weight</th>
                      <td className="py-4 text-gray-600">500g / 1kg</td>
                    </tr>
                    <tr>
                      <th className="py-4 font-bold text-gray-900">Shelf Life</th>
                      <td className="py-4 text-gray-600">6 Months from date of packaging</td>
                    </tr>
                    <tr>
                      <th className="py-4 font-bold text-gray-900">Origin</th>
                      <td className="py-4 text-gray-600">Himachal Pradesh, India</td>
                    </tr>
                    <tr>
                      <th className="py-4 font-bold text-gray-900">Storage</th>
                      <td className="py-4 text-gray-600">Store in a cool, dry place away from sunlight</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            {activeTab === 'reviews' && (
              <div className="animate-in fade-in duration-500 space-y-8">
                {[1, 2].map((r) => (
                  <div key={r} className="border-b border-gray-100 pb-8 last:border-0">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center font-bold text-primary-600">
                          {r === 1 ? 'PS' : 'RV'}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">{r === 1 ? 'Priya Sharma' : 'Rahul Verma'}</div>
                          <div className="text-xs text-gray-500">2 months ago</div>
                        </div>
                      </div>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 italic">
                      {r === 1 
                        ? "Absolutely love this! The quality is top-notch and it arrived perfectly packaged. Highly recommend."
                        : "Great value for money. You can really taste the difference between this and store-bought versions."
                      }
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
