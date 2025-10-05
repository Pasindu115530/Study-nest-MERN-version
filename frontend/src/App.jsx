import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import UploadNotes from './pages/UploadNotes';
import ViewNotes from './pages/ViewNotes';
import LectureDetails from './pages/LectureDetails';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './pages/Profile';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff7200',
    },
    secondary: {
      main: '#f3a05d',
    },
    background: {
      default: '#0b0b0b',
      paper: 'rgba(255, 255, 255, 0.1)',
    },
  },
  typography: {
    fontFamily: '"Lato", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Router>
          <div className="App" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <div style={{ flex: 1 }}>
              <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/lecture-details" element={<LectureDetails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route 
                path="/dashboard" 
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route 
                path="/upload-notes" 
                element={
                  <ProtectedRoute adminOnly>
                    <UploadNotes />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/view-notes" 
                element={
                  <ProtectedRoute>
                    <ViewNotes />
                  </ProtectedRoute>
                } 
              />
              {/* <Route 
                path="/lecture-details" 
                element={
                  <ProtectedRoute>
                    <LectureDetails />
                  </ProtectedRoute>
                } 
              /> */}
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
