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
    const saved = localStorage.getItem('products');
    if (saved) {
      try {
        const parsedProducts = JSON.parse(saved);
        if (!Array.isArray(parsedProducts)) return initialProducts;
        
        // Merge initialProducts with saved products
        const initialIds = initialProducts.map(p => p.id);
        
        // Filter saved products: Keep if manually added (ID > 100) or still in initialProducts
        const filteredSaved = parsedProducts.filter(p => {
          if (!p || typeof p.id === 'undefined') return false;
          if (initialIds.includes(p.id)) return true;
          if (p.id > 100) return true; // Adjusted manually added ID threshold
          return false;
        });

        const finalProducts = [...filteredSaved];
        
        initialProducts.forEach(initialProduct => {
          const index = finalProducts.findIndex(p => p && p.id === initialProduct.id);
          if (index !== -1) {
            finalProducts[index] = { ...finalProducts[index], ...initialProduct };
          } else {
            finalProducts.push(initialProduct);
          }
        });
        
        return finalProducts.length > 0 ? finalProducts : initialProducts;
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
