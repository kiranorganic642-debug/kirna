import React, { createContext, useContext, useState, useEffect } from 'react';

const OrderContext = createContext();

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
};

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem('orders');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  const addOrder = (orderData) => {
    const newOrder = {
      ...orderData,
      id: `KH-${Math.floor(Math.random() * 90000) + 10000}`,
      status: 'Processing',
      createdAt: new Date().toISOString(),
    };
    setOrders(prev => [newOrder, ...prev]);
    
    // Notify Owner
    notifyOwnerOfNewOrder(newOrder);
    
    return newOrder;
  };

  const notifyOwnerOfNewOrder = (order) => {
    const ownerPhone = '919830000000'; // Replace with actual owner phone
    const itemsList = order.items.map(item => `- ${item.name} (Qty: ${item.quantity})`).join('%0A');
    const message = `*New Order Received!*%0A%0A*Order ID:* ${order.id}%0A*Customer:* ${order.customer.fullName}%0A*Phone:* ${order.customer.phone}%0A*Total:* ₹${order.total.toFixed(2)}%0A%0A*Items:*%0A${itemsList}%0A%0A*Address:* ${order.customer.address}, ${order.customer.city}`;
    
    // Simulate sending WhatsApp (In real production, use an API like Twilio or WhatsApp Business API)
    console.log(`[OWNER NOTIFICATION] WhatsApp sent to ${ownerPhone}: ${message}`);
    // Optional: window.open(`https://wa.me/${ownerPhone}?text=${message}`, '_blank');
    
    // Simulate sending Email to owner
    console.log(`[OWNER NOTIFICATION] Email sent to hello@kiranhealth.plus: New Order #${order.id} from ${order.customer.fullName}`);
  };

  const updateOrderStatus = (id, newStatus) => {
    setOrders(prev => prev.map(order => 
      order.id === id ? { ...order, status: newStatus } : order
    ));
  };

  const cancelOrder = (id) => {
    setOrders(prev => prev.map(order => 
      order.id === id ? { ...order, status: 'Cancelled' } : order
    ));
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder, updateOrderStatus, cancelOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
