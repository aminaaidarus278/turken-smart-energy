const express = require('express');
const router = express.Router();

// Homepage Route
router.get('/', (req, res) => {
  res.render('index', { 
    pageTitle: 'Home',
    successMessage: null 
  });
});

// Contact / Inquiry Submission Route
router.post('/contact', (req, res) => {
  const { name, email, phone, product, quantity, destination, message } = req.body;
  
  console.log('New Inquiry Received:', { 
    name, email, phone, product, quantity, destination, message 
  });

  res.render('index', { 
    pageTitle: 'Home', 
    successMessage: 'Thank you! Your inquiry has been submitted successfully.' 
  });
});

module.exports = router;