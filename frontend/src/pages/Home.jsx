import React from 'react';
import { Link } from 'react-router-dom';
import homepageimage from '../assets/bgRemoved.png';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Paper
} from '@mui/material';
import {
  School,
  Book,
  Group,
  Security
} from '@mui/icons-material';

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0b0b0b 0%, #1a1a1a 100%)',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Background Elements */}
        <Box
          sx={{
            position: 'absolute',
            width: '600px',
            height: '500px',
            background: 'linear-gradient(to right, #ff7200 50%, #f3a05d 80%, #ff7200 100%)',
            borderRadius: '50%',
            bottom: '282px',
            left: '-70px',
            filter: 'blur(25px)',
            opacity: 0.3
          }}
        />
        <Box
          sx={{
            width: '150px',
            height: '150px',
            background: 'linear-gradient(to right, #ff7200 50%, #f5b641 100%)',
            borderRadius: '50%',
            position: 'absolute',
            right: '100px',
            top: '430px',
            filter: 'blur(25px)',
            opacity: 0.3
          }}
        />

        <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
          <Grid container spacing={{ xs: 3, md: 4 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '4rem' },
                  fontWeight: 'bold',
                  color: 'white',
                  mb: 2,
                  lineHeight: 1.2,
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                Welcome to <br />
                <Box component="span" sx={{ color: '#ff7200' }}>
                  Study Nest
                </Box>
              </Typography>
              
              <Typography
                variant="h4"
                sx={{
                  color: '#f3a05d',
                  mb: 3,
                  fontWeight: 300,
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2.125rem' },
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                Find | Learn | Grow
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  mb: 4,
                  lineHeight: 1.6,
                  maxWidth: '500px',
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                  textAlign: { xs: 'center', md: 'left' },
                  mx: { xs: 'auto', md: 0 }
                }}
              >
                At StudyNest, we believe every learner deserves a sanctuary of knowledge. 
                Dive into our carefully curated collection of textbooks, study guides, 
                and expert resources.
              </Typography>

              <Box sx={{ 
                display: 'flex', 
                gap: 2, 
                flexWrap: 'wrap',
                justifyContent: { xs: 'center', md: 'flex-start' }
              }}>
                <Button
                  variant="contained"
                  size="large"
                  component={Link}
                  to="/login"
                  sx={{
                    backgroundColor: '#ff7200',
                    '&:hover': { backgroundColor: '#e65a00' },
                    px: { xs: 3, md: 4 },
                    py: 1.5,
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    minWidth: { xs: '120px', md: 'auto' }
                  }}
                >
                  LOG IN
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  component={Link}
                  to="/signup"
                  sx={{
                    borderColor: '#ff7200',
                    color: '#ff7200',
                    '&:hover': {
                      borderColor: '#e65a00',
                      backgroundColor: 'rgba(255, 114, 0, 0.1)'
                    },
                    px: { xs: 3, md: 4 },
                    py: 1.5,
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    minWidth: { xs: '120px', md: 'auto' }
                  }}
                >
                  SIGN UP
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mt: { xs: 2, md: 0 }
                }}
              >
                <img
                  src={homepageimage}
                  alt="Study Nest"
                  style={{
                    width: '100%',
                    maxWidth: '600px',
                    height: 'auto',
                    borderRadius: '20px'
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#0b0b0b' }}>
        <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
          <Typography
            variant="h3"
            component="h2"
            textAlign="center"
            sx={{
              color: 'white',
              mb: { xs: 4, md: 6 },
              fontWeight: 'bold',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
            }}
          >
            Why Choose StudyNest?
          </Typography>

          <Grid container spacing={{ xs: 3, md: 4 }}>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  height: '100%',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    transition: 'transform 0.3s ease'
                  }
                }}
              >
                <CardContent sx={{ textAlign: 'center', p: { xs: 2, md: 3 } }}>
                  <School sx={{ fontSize: { xs: 50, md: 60 }, color: '#ff7200', mb: 2 }} />
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      color: 'white', 
                      mb: 2, 
                      fontWeight: 'bold',
                      fontSize: { xs: '1.25rem', md: '1.5rem' }
                    }}
                  >
                    Centralized Resources
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: { xs: '0.9rem', md: '1rem' }
                    }}
                  >
                    All your study materials in one place, organized by department and semester.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  height: '100%',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    transition: 'transform 0.3s ease'
                  }
                }}
              >
                <CardContent sx={{ textAlign: 'center', p: { xs: 2, md: 3 } }}>
                  <Book sx={{ fontSize: { xs: 50, md: 60 }, color: '#ff7200', mb: 2 }} />
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      color: 'white', 
                      mb: 2, 
                      fontWeight: 'bold',
                      fontSize: { xs: '1.25rem', md: '1.5rem' }
                    }}
                  >
                    Easy Access
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: { xs: '0.9rem', md: '1rem' }
                    }}
                  >
                    Quick search and download of lecture notes, past papers, and presentations.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  height: '100%',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    transition: 'transform 0.3s ease'
                  }
                }}
              >
                <CardContent sx={{ textAlign: 'center', p: { xs: 2, md: 3 } }}>
                  <Group sx={{ fontSize: { xs: 50, md: 60 }, color: '#ff7200', mb: 2 }} />
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      color: 'white', 
                      mb: 2, 
                      fontWeight: 'bold',
                      fontSize: { xs: '1.25rem', md: '1.5rem' }
                    }}
                  >
                    Community Driven
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: { xs: '0.9rem', md: '1rem' }
                    }}
                  >
                    Share and discover resources with fellow students and educators.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  height: '100%',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    transition: 'transform 0.3s ease'
                  }
                }}
              >
                <CardContent sx={{ textAlign: 'center', p: { xs: 2, md: 3 } }}>
                  <Security sx={{ fontSize: { xs: 50, md: 60 }, color: '#ff7200', mb: 2 }} />
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      color: 'white', 
                      mb: 2, 
                      fontWeight: 'bold',
                      fontSize: { xs: '1.25rem', md: '1.5rem' }
                    }}
                  >
                    Secure Platform
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: { xs: '0.9rem', md: '1rem' }
                    }}
                  >
                    Your data is safe with our secure authentication and file management.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
