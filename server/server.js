const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet({
  contentSecurityPolicy: false // Allow inline styles for demo
}));
app.use(cors());
app.use(compression());

// Parse JSON bodies
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, '..', 'public')));

// API routes placeholder for future email functionality
app.post('/api/contact', (req, res) => {
  // TODO: Implement email sending functionality
  console.log('Contact form submission:', req.body);
  res.json({ 
    success: true, 
    message: 'Email functionality will be implemented here' 
  });
});

app.post('/api/subscribe', (req, res) => {
  // TODO: Implement email subscription functionality
  console.log('Subscription request:', req.body);
  res.json({ 
    success: true, 
    message: 'Subscription functionality will be implemented here' 
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ 
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log('🚀 Gisteck web hosting server is ready!');
});