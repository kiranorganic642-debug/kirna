import React, { createContext, useContext, useState, useEffect } from 'react';
import { allProducts as initialProducts } from '../utils/products';

const ProductContext = createContext();

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(() => {
    // Force reset if count is not 32 to ensure only assets products are shown
    const saved = localStorage.getItem('products');
    if (saved) {
      try {
        const parsedProducts = JSON.parse(saved);
        
        // If the number of products in storage is different from initial, or if we want to ensure sync
        // we filter to keep ONLY products that exist in initialProducts
        const validProducts = parsedProducts.filter(savedProduct => 
          initialProducts.some(p => p.id === savedProduct.id)
        );

        // Refresh image URLs and data from initialProducts
        const refreshedProducts = validProducts.map(savedProduct => {
          const freshProduct = initialProducts.find(p => p.id === savedProduct.id);
          return {
            ...savedProduct,
            image: freshProduct.image,
            name: freshProduct.name,
            category: freshProduct.category,
            price: freshProduct.price,
            originalPrice: freshProduct.originalPrice
          };
        });

        // Ensure we have exactly all initial products
        const existingIds = new Set(refreshedProducts.map(p => p.id));
        const missingProducts = initialProducts.filter(p => !existingIds.has(p.id));
        
        const finalProducts = [...missingProducts, ...refreshedProducts];
        
        // If after sync the count is still wrong (too many), just return initial
        if (finalProducts.length !== initialProducts.length) {
          return initialProducts;
        }
        
        return finalProducts;
      } catch (e) {
        return initialProducts;
      }
    }
    return initialProducts;
  });

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const addProduct = (productData) => {
    const newProduct = {
      ...productData,
      id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
      rating: 0,
      reviews: 0,
    };
    setProducts(prev => [newProduct, ...prev]);
    return newProduct;
  };

  const updateProduct = (id, updatedData) => {
    setProducts(prev => prev.map(p => p.id === id ? { ...p, ...updatedData } : p));
  };

  const deleteProduct = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
