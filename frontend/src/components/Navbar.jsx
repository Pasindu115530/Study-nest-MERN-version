import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  TextField,
  InputAdornment,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme
} from '@mui/material';
import {
  Search as SearchIcon,
  AccountCircle,
  Dashboard,
  Upload,
  ViewList,
  Logout,
  Menu as MenuIcon,
  Home,
  Info,
  Business,
  ContactMail,
  School
} from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { user, logout, isAuthenticated, isAdmin } = useAuth();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const goToProfile = () => {
    handleMenuClose();
    setMobileMenuOpen(false);
    navigate('/profile');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    handleMenuClose();
    setMobileMenuOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/view-notes?search=${encodeURIComponent(searchQuery.trim())}`);
      setMobileMenuOpen(false);
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(10px)' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMobileMenuToggle}
            sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 0,
              color: '#ff7200',
              textDecoration: 'none',
              fontWeight: 'bold',
              mr: 4,
              fontSize: { xs: '1.1rem', md: '1.25rem' }
            }}
          >
            StudyNest
          </Typography>

          {/* Desktop Navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 2, ml: 4 }}>
            <Button color="inherit" component={Link} to="/">
              HOME
            </Button>
            <Button color="inherit" component={Link} to="/about">
              ABOUT
            </Button>
            <Button color="inherit" component={Link} to="/services">
              SERVICES
            </Button>
            <Button color="inherit" component={Link} to="/contact">
              CONTACT
            </Button>
            <Button color="inherit" component={Link} to="/lecture-details">
              LECTURE DETAILS
            </Button>
          </Box>

          {/* Desktop Search */}
          <Box 
            component="form" 
            onSubmit={handleSearch} 
            sx={{ 
              display: { xs: 'none', md: 'flex' }, 
              alignItems: 'center', 
              mr: 2,
              minWidth: '200px'
            }}
          >
            <TextField
              size="small"
              placeholder="Search notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              sx={{
                width: '100%',
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#ff7200',
                  },
                },
              }}
            />
          </Box>

          {/* Desktop User Actions */}
          {isAuthenticated ? (
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
              {isAdmin && (
                <Button
                  color="inherit"
                  startIcon={<Upload />}
                  component={Link}
                  to="/upload-notes"
                >
                  Upload
                </Button>
              )}
              <Button
                color="inherit"
                startIcon={<ViewList />}
                component={Link}
                to="/view-notes"
              >
                View Notes
              </Button>
              <Button
                color="inherit"
                startIcon={<Dashboard />}
                component={Link}
                to="/dashboard"
              >
                Dashboard
              </Button>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenuOpen}
                color="inherit"
              >
                <Avatar sx={{ width: 32, height: 32, bgcolor: '#ff7200' }}>
                  {user?.fname?.charAt(0)}
                </Avatar>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={goToProfile}>
                  <AccountCircle sx={{ mr: 1 }} />
                  Profile
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <Logout sx={{ mr: 1 }} />
                  Logout
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              <Button color="inherit" component={Link} to="/login">
                LOGIN
              </Button>
              <Button
                variant="contained"
                sx={{ backgroundColor: '#ff7200', '&:hover': { backgroundColor: '#e65a00' } }}
                component={Link}
                to="/signup"
              >
                SIGN UP
              </Button>
            </Box>
          )}

          {/* Mobile User Avatar */}
          {isAuthenticated && (
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              onClick={handleMenuOpen}
              color="inherit"
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              <Avatar sx={{ width: 32, height: 32, bgcolor: '#ff7200' }}>
                {user?.fname?.charAt(0)}
              </Avatar>
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={handleMobileMenuToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
            backgroundColor: 'rgba(11, 11, 11, 0.95)',
            backdropFilter: 'blur(10px)',
            borderRight: '1px solid rgba(255, 255, 255, 0.1)',
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography
            variant="h6"
            sx={{
              color: '#ff7200',
              fontWeight: 'bold',
              mb: 3,
              textAlign: 'center'
            }}
          >
            StudyNest
          </Typography>

          {/* Mobile Search */}
          <Box component="form" onSubmit={handleSearch} sx={{ mb: 3 }}>
            <TextField
              fullWidth
              size="small"
              placeholder="Search notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#ff7200',
                  },
                },
              }}
            />
          </Box>

          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleNavigation('/')}>
                <ListItemIcon>
                  <Home sx={{ color: '#ff7200' }} />
                </ListItemIcon>
                <ListItemText primary="Home" sx={{ color: 'white' }} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleNavigation('/about')}>
                <ListItemIcon>
                  <Info sx={{ color: '#ff7200' }} />
                </ListItemIcon>
                <ListItemText primary="About" sx={{ color: 'white' }} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleNavigation('/services')}>
                <ListItemIcon>
                  <Business sx={{ color: '#ff7200' }} />
                </ListItemIcon>
                <ListItemText primary="Services" sx={{ color: 'white' }} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleNavigation('/contact')}>
                <ListItemIcon>
                  <ContactMail sx={{ color: '#ff7200' }} />
                </ListItemIcon>
                <ListItemText primary="Contact" sx={{ color: 'white' }} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleNavigation('/lecture-details')}>
                <ListItemIcon>
                  <School sx={{ color: '#ff7200' }} />
                </ListItemIcon>
                <ListItemText primary="Lecture Details" sx={{ color: 'white' }} />
              </ListItemButton>
            </ListItem>
            
            {isAuthenticated && (
              <>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => handleNavigation('/dashboard')}>
                    <ListItemIcon>
                      <Dashboard sx={{ color: '#ff7200' }} />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" sx={{ color: 'white' }} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => handleNavigation('/view-notes')}>
                    <ListItemIcon>
                      <ViewList sx={{ color: '#ff7200' }} />
                    </ListItemIcon>
                    <ListItemText primary="View Notes" sx={{ color: 'white' }} />
                  </ListItemButton>
                </ListItem>
                {isAdmin && (
                  <ListItem disablePadding>
                    <ListItemButton onClick={() => handleNavigation('/upload-notes')}>
                      <ListItemIcon>
                        <Upload sx={{ color: '#ff7200' }} />
                      </ListItemIcon>
                      <ListItemText primary="Upload Notes" sx={{ color: 'white' }} />
                    </ListItemButton>
                  </ListItem>
                )}
                <ListItem disablePadding>
                  <ListItemButton onClick={goToProfile}>
                    <ListItemIcon>
                      <AccountCircle sx={{ color: '#ff7200' }} />
                    </ListItemIcon>
                    <ListItemText primary="Profile" sx={{ color: 'white' }} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={handleLogout}>
                    <ListItemIcon>
                      <Logout sx={{ color: '#ff7200' }} />
                    </ListItemIcon>
                    <ListItemText primary="Logout" sx={{ color: 'white' }} />
                  </ListItemButton>
                </ListItem>
              </>
            )}

            {!isAuthenticated && (
              <>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => handleNavigation('/login')}>
                    <ListItemIcon>
                      <AccountCircle sx={{ color: '#ff7200' }} />
                    </ListItemIcon>
                    <ListItemText primary="Login" sx={{ color: 'white' }} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => handleNavigation('/signup')}>
                    <ListItemIcon>
                      <AccountCircle sx={{ color: '#ff7200' }} />
                    </ListItemIcon>
                    <ListItemText primary="Sign Up" sx={{ color: 'white' }} />
                  </ListItemButton>
                </ListItem>
              </>
            )}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
