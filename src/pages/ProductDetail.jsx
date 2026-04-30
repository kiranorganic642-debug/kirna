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
    <div className="bg-cream min-h-screen py-12 font-sans">
      <div className="container">
        <Link to="/shop" className="text-primary-600 font-black text-[10px] uppercase tracking-widest flex items-center gap-2 mb-12 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Wellness Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24">
          {/* Product Image with Zoom */}
          <div className="relative">
            <div 
              className="aspect-square rounded-[4rem] overflow-hidden border border-white bg-white flex items-center justify-center p-16 cursor-zoom-in group shadow-2xl shadow-primary-50"
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className={`w-full h-full object-contain transition-transform duration-700 ${isZoomed ? 'scale-150' : 'scale-100'}`}
              />
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-primary-600/10 backdrop-blur px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity">
                Hover to Magnify
              </div>
            </div>
            {product.originalPrice > product.price && (
              <div className="absolute top-10 left-10 bg-accent-600 text-white px-6 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-2xl">
                {Math.round((1 - product.price / product.originalPrice) * 100)}% Savings
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-12">
              <div className="text-accent-600 font-black uppercase tracking-[0.2em] text-[10px] mb-4">{product.category}</div>
              <h1 className="text-5xl lg:text-7xl font-serif font-black text-primary-600 mb-8 leading-[1.1]">{product.name}</h1>
              <div className="flex items-center gap-10">
                <div className="flex items-center gap-3">
                  <div className="flex text-accent-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                    ))}
                  </div>
                  <span className="text-primary-600 font-black text-xl">{product.rating}</span>
                </div>
                <div className="w-px h-8 bg-gray-200" />
                <span className="text-gray-400 font-bold text-[10px] uppercase tracking-widest">{product.reviews} Global Reviews</span>
              </div>
            </div>

            <div className="mb-12 p-8 bg-white rounded-[2.5rem] border border-gray-50 shadow-sm inline-block w-fit">
              <div className="flex items-baseline gap-4 mb-3">
                <span className="text-5xl font-black text-primary-600 tracking-tighter">₹{product.price}</span>
                <span className="text-2xl text-gray-200 line-through font-bold">₹{product.originalPrice}</span>
              </div>
              <p className="text-primary-600 font-black text-[10px] uppercase tracking-widest flex items-center gap-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full animate-pulse" />
                Authentic & In Stock
              </p>
            </div>

            {/* Variant Selection */}
            <div className="mb-12">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6">Traditional Packaging Size</p>
              <div className="flex gap-4">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedCategory(size)}
                    className={`px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all border-2 ${selectedSize === size ? 'border-primary-600 bg-primary-50 text-primary-600 shadow-xl shadow-primary-50' : 'border-white bg-white text-gray-400 hover:border-primary-100 hover:text-primary-600 shadow-sm'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <p className="text-gray-500 text-lg leading-relaxed mb-16 font-medium italic">
              "{product.description}"
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <div className="flex items-center gap-6 bg-white rounded-[2rem] p-3 border border-gray-50 shadow-sm w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-14 h-14 flex items-center justify-center bg-cream rounded-2xl hover:bg-primary-600 hover:text-white transition-all active:scale-90"
                >
                  <Minus className="w-6 h-6" />
                </button>
                <span className="w-12 text-center text-2xl font-black text-primary-600">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-14 h-14 flex items-center justify-center bg-cream rounded-2xl hover:bg-primary-600 hover:text-white transition-all active:scale-90"
                >
                  <Plus className="w-6 h-6" />
                </button>
              </div>
              <button 
                onClick={handleAddToCart}
                className="flex-grow px-12 py-5 bg-primary-600 text-white rounded-full font-black text-sm uppercase tracking-widest flex items-center justify-center gap-4 shadow-2xl shadow-primary-100 hover:bg-primary-700 active:scale-[0.98] transition-all"
              >
                <ShoppingBag className="w-6 h-6" /> Add to Wellness Bag
              </button>
              <button 
                onClick={() => toggleWishlist(product)}
                className={`p-5 rounded-[2rem] border-2 transition-all shadow-sm ${
                  isInWishlist(product.id)
                    ? 'bg-red-50 border-red-100 text-red-500'
                    : 'bg-white border-white text-gray-300 hover:text-red-500 hover:shadow-xl'
                }`}
              >
                <Heart className={`w-8 h-8 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-10 border-t border-gray-100">
              <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-gray-400">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary-600 shadow-sm">
                  <Truck className="w-5 h-5" />
                </div>
                <span>Fast Free Delivery</span>
              </div>
              <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-gray-400">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary-600 shadow-sm">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span>100% Organic</span>
              </div>
              <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-gray-400">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary-600 shadow-sm">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <span>Easy Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="border-t border-gray-100 pt-20">
          <div className="flex items-center justify-center gap-12 mb-16">
            {['description', 'additional', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-xs font-black uppercase tracking-[0.2em] pb-4 transition-all ${
                  activeTab === tab 
                    ? 'text-primary-600 border-b-4 border-primary-600' 
                    : 'text-gray-300 hover:text-gray-500'
                }`}
              >
                {tab === 'additional' ? 'Wellness Specs' : tab}
              </button>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            {activeTab === 'description' && (
              <div className="animate-in fade-in duration-700">
                <p className="text-gray-600 leading-loose mb-10 text-lg font-medium italic text-center">
                  Experience the exceptional quality of our {product.name}. Every batch is carefully tested for purity and quality to ensure you receive only the best. Our organic products are grown without synthetic pesticides or fertilizers, preserving the natural nutrients and flavor.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    '100% Certified Organic Heritage',
                    'Ethically Sourced Ingredients',
                    'Zero Artificial Preservatives',
                    'Gluten Free & Plant Based',
                    'Ancient Vedic Formulations',
                    'Farm to Table Transparency'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-50 shadow-sm">
                      <div className="w-3 h-3 bg-primary-600 rounded-full" />
                      <span className="text-sm font-bold text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === 'additional' && (
              <div className="animate-in fade-in duration-700 bg-white rounded-[3rem] p-12 border border-gray-50 shadow-sm">
                <table className="w-full text-left">
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <th className="py-6 text-[10px] font-black uppercase tracking-widest text-gray-400 w-1/3">Standard Weight</th>
                      <td className="py-6 text-primary-600 font-bold">500g / 1kg Variants</td>
                    </tr>
                    <tr>
                      <th className="py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Natural Shelf Life</th>
                      <td className="py-6 text-primary-600 font-bold">6 Months from Ayurvedic Packaging</td>
                    </tr>
                    <tr>
                      <th className="py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Sourcing Origin</th>
                      <td className="py-6 text-primary-600 font-bold">Himalayan Valleys & Rural India</td>
                    </tr>
                    <tr>
                      <th className="py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Optimal Storage</th>
                      <td className="py-6 text-primary-600 font-bold">Store in a cool, dark place away from heat</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            {activeTab === 'reviews' && (
              <div className="animate-in fade-in duration-700 space-y-10">
                {[1, 2].map((r) => (
                  <div key={r} className="bg-white p-10 rounded-[2.5rem] border border-gray-50 shadow-sm">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-5">
                        <div className="w-14 h-14 bg-primary-600 rounded-2xl flex items-center justify-center font-black text-white shadow-lg">
                          {r === 1 ? 'PS' : 'RV'}
                        </div>
                        <div>
                          <div className="font-black text-primary-600 text-sm uppercase tracking-tight">{r === 1 ? 'Priya Sharma' : 'Rahul Verma'}</div>
                          <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Verified Wellness User</div>
                        </div>
                      </div>
                      <div className="flex text-accent-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 italic text-lg leading-relaxed">
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
