import React from 'react';
import { Box, Container, Paper, Typography, Avatar, Grid, Button } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <Box sx={{ minHeight: '100vh', py: 6, background: 'linear-gradient(135deg, #0b0b0b 0%, #1a1a1a 100%)' }}>
      <Container maxWidth="sm">
        <Paper elevation={24} sx={{ p: 4, borderRadius: 3, backgroundColor: 'rgba(255,255,255,0.04)' }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item>
              <Avatar sx={{ width: 96, height: 96, bgcolor: '#ff7200', fontSize: 36 }}>
                {user?.fname?.charAt(0) || user?.email?.charAt(0) || 'U'}
              </Avatar>
            </Grid>
            <Grid item xs>
              <Typography variant="h4" sx={{ color: 'white', fontWeight: 'bold' }}>
                {user?.fname} {user?.lname}
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                {user?.email}
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mt: 1 }}>
                {user?.department} • {user?.year}
              </Typography>
              <Typography variant="caption" sx={{ display: 'block', color: 'rgba(255,255,255,0.6)', mt: 0.5 }}>
                Role: {user?.role}
              </Typography>
            </Grid>
          </Grid>

          <Box sx={{ display: 'flex', gap: 2, mt: 4, justifyContent: 'flex-end' }}>
            <Button variant="contained" color="primary" onClick={() => navigate('/dashboard')}>
              Dashboard
            </Button>
            <Button variant="outlined" color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Profile;
