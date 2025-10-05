import React from 'react';
import { Box, Container, Paper, Typography, Avatar, Button, Divider } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const initials = user ? `${user.fname?.charAt(0) || ''}${user.lname?.charAt(0) || ''}` : '';

  return (
    <Box sx={{ minHeight: '80vh', py: 6, background: 'linear-gradient(135deg, #0b0b0b 0%, #1a1a1a 100%)' }}>
      <Container maxWidth="md">
        <Paper sx={{ p: 4, borderRadius: 3, backgroundColor: 'rgba(255,255,255,0.04)' }} elevation={12}>
          <Box sx={{ display: 'flex', gap: 3, alignItems: 'center', mb: 2 }}>
            <Avatar sx={{ width: 92, height: 92, bgcolor: '#ff7200', fontSize: 32 }}>{initials}</Avatar>
            <Box>
              <Typography variant="h4" sx={{ color: 'white', fontWeight: 'bold' }}>
                {user?.fname} {user?.lname}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                {user?.email}
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                {user?.department} • {user?.year} • {user?.role === 'admin' ? 'Administrator' : 'Student'}
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ bgcolor: 'rgba(255,255,255,0.06)', mb: 2 }} />

          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button variant="contained" sx={{ backgroundColor: '#ff7200', '&:hover': { backgroundColor: '#e65a00' } }}>
              Edit Profile
            </Button>
            <Button variant="outlined" color="inherit" onClick={() => navigate('/view-notes')}>
              My Notes
            </Button>
            <Button variant="outlined" color="inherit" onClick={() => navigate('/dashboard')}>
              Dashboard
            </Button>
            <Box sx={{ flex: 1 }} />
            <Button variant="contained" color="secondary" onClick={handleLogout}>
              Logout
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Profile;
