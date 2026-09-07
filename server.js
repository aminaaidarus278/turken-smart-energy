// server.js
const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

// Path Configuration for Frontend
const frontendPath = path.join(__dirname, 'frontend');

// Set View Engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(frontendPath, 'views'));

// Static Files Setup (public folder for CSS, images, JS)
app.use(express.static(path.join(frontendPath, 'public')));

// Body Parser Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes Setup (Importing from backend/routes folder)
const pageRoutes = require('./backend/routes/pages');
app.use('/', pageRoutes);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});