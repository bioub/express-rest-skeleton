import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import todoRoutes from './routes/todo.js';
import userRoutes from './routes/user.js';

const app = express();

// Log Middleware
app.use(morgan('dev'));

// CORS Middleware (cross-domain requests)
app.use(cors());

// Routes
app.use('/api/todos', todoRoutes);
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

export default app;
