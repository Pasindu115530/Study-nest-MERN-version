import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Chip, Link as MuiLink } from '@mui/material';

const lecturers = [
  {
    name: 'Prof. Prasad M. Jayaweera',
    title: 'Dean / Professor of Information Systems Engineering and Informatics',
    email: 'pja@sjp.ac.lk',
    tel: '+94 11 275 8909',
    img: '/study nest/Assets/img/DSC_2539_v03 (1).png',
    links: [{ label: 'LinkedIn', icon: 'bxl-linkedin-square', href: '#' }, { label: 'Website', icon: 'bxl-wordpress', href: '#' }]
  },
  {
    name: 'Dr. Dhammika Pieris',
    title: 'Senior Lecturer',
    email: 'dhammikapieris@sjp.ac.lk',
    tel: '+94 11 275 8909',
    img: '/study nest/Assets/img/image-7.png',
    links: [{ label: 'LinkedIn', icon: 'bxl-linkedin-square', href: '#' }, { label: 'Website', icon: 'bxl-wordpress', href: '#' }]
  },
  {
    name: 'Ms T.D.G. Geethika',
    title: 'Head – Department of Information Systems Engineering and Informatics / Senior Lecturer',
    email: 'gilmini@sjp.ac.lk',
    tel: '+94 71 9410222',
    img: '/study nest/Assets/img/790.jpg',
    links: [{ label: 'LinkedIn', icon: 'bxl-linkedin-square', href: '#' }, { label: 'Website', icon: 'bxl-wordpress', href: '#' }]
  },
  {
    name: 'Dr. Budditha Hettige',
    title: 'Senior Lecturer',
    email: 'budditha@sjp.ac.lk',
    tel: '+94 76 6229829',
    img: '/study nest/Assets/img/budditha-HB.jpg',
    links: [{ label: 'LinkedIn', icon: 'bxl-linkedin-square', href: '#' }, { label: 'Website', icon: 'bxl-wordpress', href: '#' }]
  },
  {
    name: 'Dr. D.G.N.D. Jayarathna',
    title: 'Head – Department of Scientific Computing / Senior Lecturer',
    email: 'nuwan@sjp.ac.lk',
    tel: '+94 71 6253592',
    img: '/study nest/Assets/img/Dr.-Nuwan-291x300.jpg',
    links: [{ label: 'LinkedIn', icon: 'bxl-linkedin-square', href: '#' }, { label: 'Website', icon: 'bxl-wordpress', href: '#' }]
  },
  {
    name: 'Dr. M.D.S. Seneviratne',
    title: 'Head – Knowledge Engineering and Communication / Senior Lecturer',
    email: 'deepikas@sjp.ac.lk',
    tel: '+94 768093690',
    img: '/study nest/Assets/img/Deepika2_edited.jpg',
    links: [{ label: 'LinkedIn', icon: 'bxl-linkedin-square', href: '#' }, { label: 'Website', icon: 'bxl-wordpress', href: '#' }]
  },
  {
    name: 'Dr. S. Majuran',
    title: 'Senior Lecturer',
    email: 'shajini@sjp.ac.lk',
    tel: '',
    img: '/study nest/Assets/img/20230721_002637_edited-271x300.jpg',
    links: [{ label: 'LinkedIn', icon: 'bxl-linkedin-square', href: '#' }, { label: 'Website', icon: 'bxl-wordpress', href: '#' }]
  },
  {
    name: 'Mr. L D P S Jayasekara',
    title: 'Lecturer',
    email: 'pubudu@sjp.ac.lk',
    tel: '+94 711612267',
    img: 'Assets/img/profile-gradient-logo-design-template-icon-vector.jpg',
    links: [{ label: 'LinkedIn', icon: 'bxl-linkedin-square', href: '#' }, { label: 'Website', icon: 'bxl-wordpress', href: '#' }]
  },
  {
    name: 'Ms. M. M. V. Senanayake',
    title: 'Lecturer',
    email: 'vindya@sjp.ac.lk',
    tel: '',
    img: '/study nest/Assets/img/M-M-V-Senanayake-233x300.jpg',
    links: [{ label: 'LinkedIn', icon: 'bxl-linkedin-square', href: '#' }, { label: 'Website', icon: 'bxl-wordpress', href: '#' }]
  },
  {
    name: 'Ms. R.J.P.K. Rajakaruna',
    title: 'Lecturer(Probationary)',
    email: 'jayaniprabhashini@sjp.ac.lk',
    tel: '',
    img: '/study nest/Assets/img/Jayani-Rajakaruna_edited-276x300.jpg',
    links: [{ label: 'LinkedIn', icon: 'bxl-linkedin-square', href: '#' }, { label: 'Website', icon: 'bxl-wordpress', href: '#' }]
  },
  {
    name: 'Mr. K. A. T. S. Jayathilaka',
    title: 'Lecturer',
    email: 'thilinasj@sjp.ac.lk',
    tel: '',
    img: '/study nest/Assets/img/me-squared-300x300.jpg',
    links: [{ label: 'LinkedIn', icon: 'bxl-linkedin-square', href: '#' }, { label: 'Website', icon: 'bxl-wordpress', href: '#' }]
  },
  {
    name: 'Mr. K. D. T. Rangana',
    title: 'Instructor – Computer Technology',
    email: 'kdtrangana@sjp.ac.lk',
    tel: '',
    img: '/study nest/Assets/img/KDTRangana-PP-v02.png',
    links: [{ label: 'LinkedIn', icon: 'bxl-linkedin-square', href: '#' }, { label: 'Website', icon: 'bxl-wordpress', href: '#' }]
  }
];

const LectureDetails = () => {
  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0b0b0b 0%, #1a1a1a 100%)', py: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" sx={{ color: 'white', mb: 4, fontWeight: 'bold' }}>
          Lecture Details
        </Typography>

        <Grid container spacing={3}>
          {lecturers.map((lec, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card sx={{ backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '20px', height: '100%' }}>
                {lec.img && (
                  <CardMedia component="img" height="220" image={lec.img} alt={lec.name} sx={{ objectFit: 'cover' }} />
                )}
                <CardContent>
                  <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', mb: 1 }}>
                    {lec.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mb: 1.5 }}>
                    {lec.title}
                  </Typography>
                  <Grid container spacing={1} sx={{ mb: 1.5 }}>
                    <Grid item>
                      <Chip size="small" label={`Email: ${lec.email}`} sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }} />
                    </Grid>
                    <Grid item>
                      <Chip size="small" label={`Tel: ${lec.tel}`} sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }} />
                    </Grid>
                  </Grid>
                  <Grid container spacing={1}>
                    {lec.links?.map((link, i) => (
                      <Grid item key={i}>
                        <MuiLink href={link.href} target="_blank" rel="noopener" sx={{ color: '#ff7200', textDecoration: 'none', fontSize: 14 }}>
                          {link.label}
                        </MuiLink>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default LectureDetails;


