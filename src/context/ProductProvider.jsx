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
    // If initialProducts is empty, we want to clear everything to fulfill user request
    if (initialProducts.length === 0) {
      localStorage.removeItem('products');
      return [];
    }
    
    const saved = localStorage.getItem('products');
    if (saved) {
      try {
        const parsedProducts = JSON.parse(saved);
        
        // Refresh image URLs from initialProducts for products that exist in both
        // This prevents broken images when build hashes change
        const refreshedProducts = parsedProducts.map(savedProduct => {
          const freshProduct = initialProducts.find(p => p.id === savedProduct.id);
          if (freshProduct) {
            return {
              ...savedProduct,
              image: freshProduct.image, // Always use the fresh image URL from the current build
              name: freshProduct.name,   // Also refresh name and category in case they changed
              category: freshProduct.category
            };
          }
          return savedProduct;
        });

        // Merge newly added products from initialProducts that aren't in localStorage yet
        const existingIds = new Set(refreshedProducts.map(p => p.id));
        const newProductsToAdd = initialProducts.filter(p => !existingIds.has(p.id));
        
        return [...newProductsToAdd, ...refreshedProducts];
      } catch (e) {
        console.error("Error loading products from localStorage:", e);
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
