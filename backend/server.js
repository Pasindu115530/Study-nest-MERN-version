const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config({ path: './config.env' });

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/subjects', require('./routes/subjects'));
app.use('/api/lecture-notes', require('./routes/lectureNotes'));

// Database connection & server startup
const { MONGODB_URI, JWT_SECRET } = process.env;

if (!JWT_SECRET) {
  console.error('FATAL: JWT_SECRET is not set. Define it in config.env');
  process.exit(1);
}

const start = async () => {
  try {
    if (!MONGODB_URI) {
      console.error('FATAL: MONGODB_URI is not set. Define it in config.env');
      process.exit(1);
    }

    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB connected successfully');

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('Startup error:', err);
    process.exit(1);
  }
};
start();

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 5000;
