import React from 'react';
import { Box, Container, Typography, Link as MuiLink, IconButton, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { GitHub, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        mt: 4,
        py: 3,
        backgroundColor: 'rgba(255,255,255,0.02)',
        borderTop: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center">
          {/* Brand Section */}
          <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h6" sx={{ color: '#ff7200', fontWeight: 'bold', mb: 1 }}>
              StudyNest
            </Typography>
            <Typography variant="body2" color="text.secondary">
              © {year} StudyNest. All rights reserved.
            </Typography>
          </Grid>

          {/* Navigation Links */}
          <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'center' } }}>
            <Box sx={{ display: 'flex', gap: { xs: 3, md: 2 }, justifyContent: { xs: 'center', md: 'center' }, flexWrap: 'wrap' }}>
              <MuiLink 
                component={RouterLink} 
                to="/about" 
                color="inherit" 
                underline="hover"
                sx={{ 
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  '&:hover': { color: '#ff7200' }
                }}
              >
                About
              </MuiLink>
              <MuiLink 
                component={RouterLink} 
                to="/services" 
                color="inherit" 
                underline="hover"
                sx={{ 
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  '&:hover': { color: '#ff7200' }
                }}
              >
                Services
              </MuiLink>
              <MuiLink 
                component={RouterLink} 
                to="/contact" 
                color="inherit" 
                underline="hover"
                sx={{ 
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  '&:hover': { color: '#ff7200' }
                }}
              >
                Contact
              </MuiLink>
            </Box>
          </Grid>

          {/* Social Links */}
          <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-end' }, gap: 1 }}>
              <IconButton
                component="a"
                href="https://github.com/Pasindu115530/Study-Nest"
                target="_blank"
                rel="noopener noreferrer"
                size="medium"
                color="inherit"
                aria-label="github"
                sx={{ 
                  '&:hover': { 
                    backgroundColor: 'rgba(255, 114, 0, 0.1)',
                    color: '#ff7200'
                  }
                }}
              >
                <GitHub />
              </IconButton>
              <IconButton 
                component="a" 
                href="#" 
                size="medium" 
                color="inherit" 
                aria-label="twitter"
                sx={{ 
                  '&:hover': { 
                    backgroundColor: 'rgba(255, 114, 0, 0.1)',
                    color: '#ff7200'
                  }
                }}
              >
                <Twitter />
              </IconButton>
              <IconButton 
                component="a" 
                href="#" 
                size="medium" 
                color="inherit" 
                aria-label="instagram"
                sx={{ 
                  '&:hover': { 
                    backgroundColor: 'rgba(255, 114, 0, 0.1)',
                    color: '#ff7200'
                  }
                }}
              >
                <Instagram />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
