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
      const parsedProducts = JSON.parse(saved);
      // Merge newly added products from initialProducts that aren't in localStorage yet
      const existingIds = new Set(parsedProducts.map(p => p.id));
      const newProductsToAdd = initialProducts.filter(p => !existingIds.has(p.id));
      // Prepend new products to ensure visibility for existing users
      return [...newProductsToAdd, ...parsedProducts];
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
