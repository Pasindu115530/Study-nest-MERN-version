import React from 'react';
import { Box, Container, Typography, Link as MuiLink, IconButton } from '@mui/material';
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
      <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2, flexWrap: 'wrap' }}>
        <Box>
          <Typography variant="h6" sx={{ color: '#ff7200', fontWeight: 'bold' }}>
            StudyNest
          </Typography>
          <Typography variant="body2" color="text.secondary">
            © {year} StudyNest. All rights reserved.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <MuiLink component={RouterLink} to="/about" color="inherit" underline="hover">
            About
          </MuiLink>
          <MuiLink component={RouterLink} to="/services" color="inherit" underline="hover">
            Services
          </MuiLink>
          <MuiLink component={RouterLink} to="/contact" color="inherit" underline="hover">
            Contact
          </MuiLink>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton
            component="a"
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            size="large"
            color='#ff7200'
            aria-label="github"
          >
            <GitHub />
          </IconButton>
          <IconButton component="a" href="#" size="large" color='#ff7200' aria-label="twitter">
            <Twitter />
          </IconButton>
          <IconButton component="a" href="#" size="large" color='#ff7200' aria-label="instagram">
            <Instagram />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
