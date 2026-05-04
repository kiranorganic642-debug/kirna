import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartProvider';
import { AppointmentProvider } from './context/AppointmentProvider';
import { OrderProvider } from './context/OrderProvider';
import { WishlistProvider } from './context/WishlistProvider';
import { ProductProvider } from './context/ProductProvider';
import { AuthProvider, useAuth } from './context/AuthProvider';
import Layout from './components/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import MyOrders from './pages/MyOrders';
import Wishlist from './pages/Wishlist';
import Profile from './pages/Profile';
import AdminOrders from './pages/AdminOrders';
import AdminProducts from './pages/AdminProducts';
import AdminUsers from './pages/AdminUsers';
import About from './pages/About';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';
import MyAppointments from './pages/MyAppointments';
import DoctorDashboard from './pages/DoctorDashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, requireAdmin = false }) => {
  const { user, isAdmin, adminExists } = useAuth();
  if (!user) {
    return <Navigate to={adminExists ? "/login" : "/register"} />;
  }
  if (requireAdmin && !isAdmin) return <Navigate to="/" />;
  return children;
};

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <OrderProvider>
            <WishlistProvider>
              <AppointmentProvider>
                <Router>
                  <Routes>
                    <Route path="/" element={<Layout />}>
                      <Route index element={<Home />} />
                      <Route path="shop" element={<Shop />} />
                      <Route path="product/:id" element={<ProductDetail />} />
                      <Route path="cart" element={<Cart />} />
                      
                      {/* User Protected Routes */}
                      <Route path="checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
                      <Route path="my-orders" element={<ProtectedRoute><MyOrders /></ProtectedRoute>} />
                      <Route path="wishlist" element={<ProtectedRoute><Wishlist /></ProtectedRoute>} />
                      <Route path="profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                      <Route path="my-appointments" element={<ProtectedRoute><MyAppointments /></ProtectedRoute>} />
                      
                      {/* Admin/Doctor Protected Routes */}
                      <Route path="admin/orders" element={<ProtectedRoute requireAdmin={true}><AdminOrders /></ProtectedRoute>} />
                      <Route path="admin/products" element={<ProtectedRoute requireAdmin={true}><AdminProducts /></ProtectedRoute>} />
                      <Route path="admin/users" element={<ProtectedRoute requireAdmin={true}><AdminUsers /></ProtectedRoute>} />
                      <Route path="doctor-dashboard" element={<ProtectedRoute requireAdmin={true}><DoctorDashboard /></ProtectedRoute>} />
                      
                      <Route path="about" element={<About />} />
                      <Route path="contact" element={<Contact />} />
                      <Route path="appointment" element={<Appointment />} />
                      <Route path="login" element={<Login />} />
                      <Route path="register" element={<Register />} />
                      <Route path="forgot-password" element={<ForgotPassword />} />
                    </Route>
                  </Routes>
                </Router>
              </AppointmentProvider>
            </WishlistProvider>
          </OrderProvider>
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
