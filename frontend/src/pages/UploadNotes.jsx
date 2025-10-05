import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  CircularProgress,
  Chip,
  Grid
} from '@mui/material';
import { useAuth } from '../contexts/AuthContext';
import api from '../services/api';

// Import or define the subjects data
const subjects = {
  cs: {
    "1-1": ["Professional English", "Principles of Management", "Introductory Statistics", "Discrete Mathematics", "Computer System Organization", "Fundamentals of Programming", "Introduction to Software Engineering", "Leadership & Human Skills Development"],
    "1-2": ["Web Development", "Mathematics II", "Object Oriented Programming", "Database Management Systems", "Data Structures and Algorithms", "Object Oriented Analysis and Design", "Computer System Architecture", "Rapid Application Development", "Algebra for Computing"],
    "2-1": ["Group Project Part 1", "Data Communication and Networks", "Operating Systems", "Web Technologies", "Statistical Distribution and Inferences", "Mathematics for Computer Science", "Artificial Intelligence"],
    "2-2": ["Group Project Part 2", "Computer Graphics", "High Performance Computing", "Human Computer Interactions", "Differential Equations", "Service Oriented Web Applications", "Industrial Internship", "Software Architecture and Design Patterns 1", "Software Architecture and Design Patterns 2", "Software Architecture and Design Patterns 3", "Software Architecture and Design Patterns 4"],
    "3-1": ["Data Analytics", "Social and Professional Issues in Information Technology", "Knowledge Representation", "Theory of Computation", "Advanced Data Structures and Algorithms", "Computer Security", "Introduction to Machine Learning", "Emerging Trends in Computing", "Visual Computing", "IT Project Management"],
    "3-2": ["Digital Image Processing", "Software Quality Assurance", "Advanced Machine Learning", "Theory of Programming Languages", "Multimedia Systems", "Nature Inspired Algorithms", "Embedded Systems and Internet of Things", "Game Development", "Middleware Architecture", "Mathematical Optimization"],
    "4-1": ["Research Project Part I", "Computational Biology", "Independent Literature Review", "Computer Vision", "Cloud Computing", "Big Data Technologies", "Robotics", "Natural Language Processing", "Advanced Database Systems", "Mobile Computing"],
    "4-2": ["Industrial Training", "Research Project Part II"]
  },
  se: {
    "1-1": ["Professional English", "Principles of Management", "Introductory Statistics", "Discrete Mathematics", "Computer System Organization", "Fundamentals of Programming", "Introduction to Software Engineering", "Leadership & Human Skills Development"],
    "1-2": ["Object Oriented Programming", "Database Management Systems", "Data Structures and Algorithms", "Object Oriented Analysis and Design", "Operating Systems", "Rapid Application Development", "Advanced Mathematics"],
    "2-1": ["Group Project Part 1", "Essentials in Computer Networking", "Formal Methods in Software Development", "Web Technologies", "Software Design and Architecture", "Mathematics for Computing", "Artificial Intelligence", "Essentials of Computer Law"],
    "2-2": ["Group Project Part 2", "Fundamentals of Software Security", "Software Testing and Validation", "Human Computer Interaction", "Software Project Management", "Software Configuration Management", "Industrial Inspection", "Management Information Systems"],
    "3-1": ["Software Safety and Reliability", "Social and Professional Issues in Information Technology", "Software Process Management", "Group Project in Hardware", "Software Evolution", "Enterprise Information Systems", "Human Resource Management", "Visual Computing", "Introduction to Business Intelligence", "High Performance Computing"],
    "3-2": ["System Development Project", "Introduction to Distributed Computing", "Software Quality Assurance", "Advanced Database Management Systems", "Software Design Patterns", "Mobile Computing", "Machine Learning", "Game Designing and Development", "Middleware Architecture", "Social Computing", "Semantic Web"],
    "4-1": ["Research Project Part I", "Research Methodologies and Scientific Communication", "Service Oriented Architecture", "Software Engineering Economics", "Cloud Computing", "Big Data Technologies", "Robotics", "Selected Topics in Software Engineering", "Natural Language Processing", "Refactoring and Design", "Emerging Trends in Computing"],
    "4-2": ["Industrial Training", "Research Project Part II"]
  },
  is: {
    "1-1": ["Introductory Mathematics", "Fundamentals of Programming", "Principles of Management", "Introductory Statistics", "Fundamentals of Information Systems", "Introduction to Software Engineering", "Leadership & Human Skills Development", "Professional English"],
    "1-2": ["Object Oriented Programming", "Database Management System", "Data Structures and Algorithms", "Advanced Software Engineering", "Economics & Accounting", "Rapid Application Development", "Business Communication"],
    "2-1": ["Business Process Management", "Operations Management", "Marketing Management", "Information Systems Security", "Organizational Behaviour and Society", "System Administration and Maintenance", "Statistical Distribution and Inferences"],
    "2-2": ["Enterprise Applications", "Information System Risk Management", "Introduction to Entrepreneurship and SMEs", "Business Intelligence", "Operating System Concepts", "Advanced Database Systems", "Industrial Inspection", "Personal Productivity with IS Technology"],
    "3-1": ["Group Project Part 1", "Social and Professional Issues in Information Technology", "Agile Software Development", "Software Quality Assurance", "Design Patterns and Applications", "Research Methodologies", "Data Communication and Networks", "Software Engineering Economics", "Game Designing and Development", "Artificial Intelligence"],
    "3-2": ["IT Procurement Management", "Group Project Part 2", "Digital Business", "Web-based Application Development", "E-Learning and Instructional Design", "Mobile Computing", "Machine Learning and Neural Computing", "Blockchain and Technologies", "Human Computer Interactions", "Middleware Architecture"],
    "4-1": ["Research Project Part I", "Introduction to Distributed Systems", "Ethical Issues and Legal Aspects of Information Technology", "Human Resource Management", "Cloud Computing", "Data Mining and Applications", "Data Analytics", "Natural Language Processing", "Refactoring and Design", "High Performance Computing"],
    "4-2": ["Industrial Training", "Research Project Part II"]
  }
};

const UploadNotes = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    module: '',
    year: '',
    semester: '',
    department: user?.department || ''
  });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [availableSubjects, setAvailableSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Reset selected subject when department, year, or semester changes
    if (name === 'department' || name === 'year' || name === 'semester') {
      setSelectedSubject('');
    }
  };

  const handleSubjectSelect = (subject) => {
    setSelectedSubject(subject);
    setFormData(prev => ({
      ...prev,
      module: subject
    }));
  };

  // Update available subjects when department, year, or semester changes
  useEffect(() => {
    if (formData.department && formData.year && formData.semester) {
      const deptKey = formData.department === 'Computer Science' ? 'cs' : 
                     formData.department === 'Software Engineering' ? 'se' : 'is';
      const semesterKey = `${formData.year}-${formData.semester}`;
      
      const subjectsList = subjects[deptKey]?.[semesterKey] || [];
      setAvailableSubjects(subjectsList);
      
      // Clear selected subject if it's not in the new list
      if (selectedSubject && !subjectsList.includes(selectedSubject)) {
        setSelectedSubject('');
        setFormData(prev => ({ ...prev, module: '' }));
      }
    } else {
      setAvailableSubjects([]);
    }
  }, [formData.department, formData.year, formData.semester, selectedSubject]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    if (!file) {
      setMessage('Please select a file');
      setLoading(false);
      return;
    }

    if (!formData.module) {
      setMessage('Please select a subject');
      setLoading(false);
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append('file', file);
    formDataToSend.append('module', formData.module);
    formDataToSend.append('year', formData.year);
    formDataToSend.append('semester', formData.semester);
    formDataToSend.append('department', formData.department);

    try {
      const response = await api.post('/api/lecture-notes', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setMessage('Lecture note uploaded successfully!');
      setFormData({
        module: '',
        year: '',
        semester: '',
        department: user?.department || ''
      });
      setFile(null);
      setSelectedSubject('');
      setAvailableSubjects([]);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Upload failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0b0b0b 0%, #1a1a1a 100%)',
        py: 4
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={24}
          sx={{
            p: 4,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '20px'
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{
              color: 'white',
              mb: 4,
              fontWeight: 'bold',
              textAlign: 'center'
            }}
          >
            Upload Lecture Notes
          </Typography>

          {message && (
            <Alert 
              severity={message.includes('successfully') ? 'success' : 'error'} 
              sx={{ mb: 3 }}
            >
              {message}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit}>
            <FormControl
              fullWidth
              required
              sx={{
                mb: 3,
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
                '& .MuiInputLabel-root': {
                  color: 'rgba(255, 255, 255, 0.7)',
                  '&.Mui-focused': {
                    color: '#ff7200',
                  },
                },
                '& .MuiSelect-icon': {
                  color: 'rgba(255, 255, 255, 0.7)',
                },
              }}
            >
              <InputLabel>Department</InputLabel>
              <Select
                name="department"
                value={formData.department}
                onChange={handleChange}
                label="Department"
              >
                <MenuItem value="Computer Science">Computer Science</MenuItem>
                <MenuItem value="Software Engineering">Software Engineering</MenuItem>
                <MenuItem value="Information Systems">Information Systems</MenuItem>
              </Select>
            </FormControl>

            <FormControl
              fullWidth
              required
              sx={{
                mb: 3,
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
                '& .MuiInputLabel-root': {
                  color: 'rgba(255, 255, 255, 0.7)',
                  '&.Mui-focused': {
                    color: '#ff7200',
                  },
                },
                '& .MuiSelect-icon': {
                  color: 'rgba(255, 255, 255, 0.7)',
                },
              }}
            >
              <InputLabel>Year</InputLabel>
              <Select
                name="year"
                value={formData.year}
                onChange={handleChange}
                label="Year"
              >
                <MenuItem value="1">1st Year</MenuItem>
                <MenuItem value="2">2nd Year</MenuItem>
                <MenuItem value="3">3rd Year</MenuItem>
                <MenuItem value="4">4th Year</MenuItem>
              </Select>
            </FormControl>

            <FormControl
              fullWidth
              required
              sx={{
                mb: 3,
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
                '& .MuiInputLabel-root': {
                  color: 'rgba(255, 255, 255, 0.7)',
                  '&.Mui-focused': {
                    color: '#ff7200',
                  },
                },
                '& .MuiSelect-icon': {
                  color: 'rgba(255, 255, 255, 0.7)',
                },
              }}
            >
              <InputLabel>Semester</InputLabel>
              <Select
                name="semester"
                value={formData.semester}
                onChange={handleChange}
                label="Semester"
              >
                <MenuItem value="1">Semester 1</MenuItem>
                <MenuItem value="2">Semester 2</MenuItem>
              </Select>
            </FormControl>

            {/* Subject Selection Section */}
            {availableSubjects.length > 0 && (
              <Box sx={{ mb: 3 }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: 'white', 
                    mb: 2,
                    fontWeight: 'bold'
                  }}
                >
                  Select Subject:
                </Typography>
                <Grid container spacing={1}>
                  {availableSubjects.map((subject, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Chip
                        label={subject}
                        onClick={() => handleSubjectSelect(subject)}
                        color={selectedSubject === subject ? "primary" : "default"}
                        sx={{
                          width: '100%',
                          justifyContent: 'flex-start',
                          height: 'auto',
                          py: 1,
                          backgroundColor: selectedSubject === subject ? '#ff7200' : 'rgba(255, 255, 255, 0.1)',
                          color: 'white',
                          border: selectedSubject === subject ? '1px solid #ff7200' : '1px solid rgba(255, 255, 255, 0.3)',
                          '&:hover': {
                            backgroundColor: selectedSubject === subject ? '#e65a00' : 'rgba(255, 255, 255, 0.2)',
                          }
                        }}
                      />
                    </Grid>
                  ))}
                </Grid>
                {selectedSubject && (
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: '#ff7200', 
                      mt: 1,
                      fontStyle: 'italic'
                    }}
                  >
                    Selected: {selectedSubject}
                  </Typography>
                )}
              </Box>
            )}

            {/* Manual Module Input (fallback) */}
            <TextField
              fullWidth
              label="Module/Subject Name"
              name="module"
              value={formData.module}
              onChange={handleChange}
              required
              sx={{
                mb: 3,
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
                '& .MuiInputLabel-root': {
                  color: 'rgba(255, 255, 255, 0.7)',
                  '&.Mui-focused': {
                    color: '#ff7200',
                  },
                },
              }}
              placeholder={availableSubjects.length > 0 ? "Or type manually..." : ""}
            />

            <Button
              variant="outlined"
              component="label"
              fullWidth
              sx={{
                borderColor: 'rgba(255, 255, 255, 0.3)',
                color: 'white',
                mb: 3,
                py: 2,
                '&:hover': {
                  borderColor: '#ff7200',
                  backgroundColor: 'rgba(255, 114, 0, 0.1)'
                }
              }}
            >
              {file ? file.name : 'Choose PDF File'}
              <input
                type="file"
                hidden
                accept=".pdf"
                onChange={handleFileChange}
              />
            </Button>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
              sx={{
                backgroundColor: '#ff7200',
                '&:hover': { backgroundColor: '#e65a00' },
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 'bold'
              }}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Upload Notes'}
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default UploadNotes;