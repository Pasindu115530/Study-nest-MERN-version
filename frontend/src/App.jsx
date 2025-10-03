import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import './App.css';

// Protected Route Component
const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (adminOnly && user.role !== 'admin') {
    return <Navigate to="/user-dashboard" />;
  }

  return children;
};

// Public Route Component (no navbar for auth pages)
const PublicRoute = ({ children, noNavbar = false }) => {
  return (
    <>
      {!noNavbar && <Navbar />}
      {children}
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Public routes with navbar */}
            <Route path="/" element={
              <PublicRoute>
                <Homepage />
              </PublicRoute>
            } />
            <Route path="/contact-us" element={
              <PublicRoute>
                <ContactUs />
              </PublicRoute>
            } />
            <Route path="/about-us" element={
              <PublicRoute>
                <AboutUs />
              </PublicRoute>
            } />
            <Route path="/services" element={
              <PublicRoute>
                <Services />
              </PublicRoute>
            } />

            {/* Auth routes without navbar */}
            <Route path="/login" element={
              <PublicRoute noNavbar={true}>
                <Login />
              </PublicRoute>
            } />
            <Route path="/signup" element={
              <PublicRoute noNavbar={true}>
                <Signup />
              </PublicRoute>
            } />

            {/* Protected routes */}
            <Route path="/admin-dashboard" element={
              <ProtectedRoute adminOnly={true}>
                <AdminDashboard />
              </ProtectedRoute>
            } />
            <Route path="/user-dashboard" element={
              <ProtectedRoute>
                <UserDashboard />
              </ProtectedRoute>
            } />

            {/* Redirect unknown routes to homepage */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;