import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Card, CardContent, Grid, Paper, Chip, CircularProgress } from '@mui/material';
import { Upload, ViewList, Person, School } from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import api from '../services/api';

const Dashboard = () => {
  const { user, isAdmin } = useAuth();

  const [recentNotes, setRecentNotes] = useState([]);
  const [recentLoading, setRecentLoading] = useState(true);
  const [recentError, setRecentError] = useState('');

  useEffect(() => {
    const fetchRecent = async () => {
      try {
        setRecentLoading(true);
        const params = new URLSearchParams();
        if (user?.department) params.append('department', user.department);
        const response = await api.get(`/api/lecture-notes?${params.toString()}`);
        setRecentNotes((response.data || []).slice(0, 5));
        setRecentError('');
      } catch (e) {
        setRecentError('Failed to load recent activity');
      } finally {
        setRecentLoading(false);
      }
    };

    fetchRecent();
  }, [user?.department]);

  const cardSx = {
    position: 'relative',
    background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    borderRadius: '16px',
    height: '80%',
    minHeight: 90,
    overflow: 'hidden',
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease, background-color 220ms ease',
    boxShadow: 'none',
    '&:hover': {
      transform: 'translateY(-6px)',
      boxShadow: '0 10px 24px rgba(0,0,0,0.45)',
      borderColor: 'rgba(255, 255, 255, 0.28)'
    },
    '&:focus-visible': {
      outline: '2px solid #ff7200',
      outlineOffset: 2
    },
    '& .MuiCardContent-root': {
      padding: { xs: 5, md: 5 }
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0b0b0b 0%, #1a1a1a 100%)', py: 4 }}>
      <Container maxWidth="lg">
        <Paper elevation={24} sx={{ p: 4, backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '20px', mb: 4 }}>
          <Typography variant="h3" component="h1" sx={{ color: 'white', mb: 2, fontWeight: 'bold' }}>
            Welcome back, {user?.fname}!
          </Typography>
          <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            {user?.department} • {user?.year} • {user?.role === 'admin' ? 'Administrator' : 'Student'}
          </Typography>
        </Paper>

        <Typography variant="h4" component="h2" sx={{ color: 'white', mb: 3, fontWeight: 'bold' }}>
          Quick Actions
        </Typography>

        <Grid container spacing={2} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Card component={Link} to="/view-notes" sx={cardSx}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 0.5, textAlign: 'center' }}>
                <ViewList sx={{ fontSize: { xs: 40, md: 48 }, color: '#ff7200', mb: 1.5 }} />
                <Typography variant="h6" sx={{ color: 'white', mb: 1, fontWeight: 700 }}>
                  View Notes
                </Typography>
                <Typography variant="subtitle2" sx={{ color: 'rgba(255,255,255,0.75)', maxWidth: 220 }}>
                  Browse lecture notes
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {isAdmin && (
            <Grid item xs={12} sm={6} md={3}>
              <Card component={Link} to="/upload-notes" sx={cardSx}>
                  <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 0.5, textAlign: 'center' }}>
                    <Upload sx={{ fontSize: { xs: 40, md: 48 }, color: '#ff7200', mb: 1.5 }} />
                    <Typography variant="h6" sx={{ color: 'white', mb: 1, fontWeight: 700 }}>
                      Upload Notes
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: 'rgba(255,255,255,0.75)', maxWidth: 220 }}>
                      Upload new lecture materials
                    </Typography>
                  </CardContent>
              </Card>
            </Grid>
          )}

          <Grid item xs={12} sm={6} md={3}>
            <Card component={Link} to="/profile" sx={cardSx}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 0.5, textAlign: 'center' }}>
                  <Person sx={{ fontSize: { xs: 40, md: 48 }, color: '#ff7200', mb: 1.5 }} />
                  <Typography variant="h6" sx={{ color: 'white', mb: 1, fontWeight: 700 }}>
                    Profile
                  </Typography>
                  <Typography variant="subtitle2" sx={{ color: 'rgba(255,255,255,0.75)', maxWidth: 220 }}>
                    Manage your account
                  </Typography>
                </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card component={Link} to={`/view-notes?department=${encodeURIComponent(user?.department || '')}`} sx={cardSx}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 0.5, textAlign: 'center' }}>
                  <School sx={{ fontSize: { xs: 40, md: 48 }, color: '#ff7200', mb: 1.5 }} />
                  <Typography variant="h6" sx={{ color: 'white', mb: 1, fontWeight: 700 }}>
                    Subjects
                  </Typography>
                  <Typography variant="subtitle2" sx={{ color: 'rgba(255,255,255,0.75)', maxWidth: 220 }}>
                    Relevant to {user?.department || 'your department'}
                  </Typography>
                </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Paper elevation={24} sx={{ p: 4, backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '20px' }}>
          <Typography variant="h4" component="h2" sx={{ color: 'white', mb: 3, fontWeight: 'bold' }}>
            Recent Activity
          </Typography>
          {recentLoading ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, py: 2 }}>
              <CircularProgress size={24} sx={{ color: '#ff7200' }} />
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                Loading recent uploads...
              </Typography>
            </Box>
          ) : recentError ? (
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)' }}>
              {recentError}
            </Typography>
          ) : recentNotes.length === 0 ? (
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)' }}>
              No recent uploads for {user?.department || 'your department'}.
            </Typography>
          ) : (
            <Grid container spacing={2}>
              {recentNotes.map((note) => (
                <Grid item xs={12} key={note._id}>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 1.5, p: 2, borderRadius: 2, backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
                    <Box sx={{ minWidth: 200 }}>
                      <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 700, mb: 0.5, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {note.module}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                        Uploaded by {note.uploadedBy?.fname} {note.uploadedBy?.lname} • {new Date(note.upload_date).toLocaleDateString()}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                      <Chip label={note.department} size="small" sx={{ backgroundColor: '#ff7200', color: 'white' }} />
                      <Chip label={`Year ${note.year}`} size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }} />
                      <Chip label={`Sem ${note.semester}`} size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }} />
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          )}
        </Paper>
      </Container>
    </Box>
  );
};

export default Dashboard;
