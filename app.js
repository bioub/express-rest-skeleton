const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const contactRoutes = require('./routes/contact');
const userRoutes = require('./routes/user');

const app = express();

// Log Middleware
app.use(morgan('dev'));

// CORS Middleware (cross-domain requests)
app.use(cors());

// Routes
app.use('/api/contacts', contactRoutes);
app.use('/api/users', userRoutes);

// eslint-disable-next-line no-unused-vars
app.use('/api', (req, res, next) => {
  res.statusCode = 404;
  res.json({
    msg: req.notFoundReason || 'Not Found',
  });
});

// eslint-disable-next-line no-unused-vars
app.use('/api', (err, req, res, next) => {
  res.statusCode = 500;
  res.json({
    msg: err.message,
  });
});

module.exports = app;
