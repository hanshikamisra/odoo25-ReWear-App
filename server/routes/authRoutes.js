const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');
// POST /api/auth/signup - User signup (placeholder)
router.post('/signup', (req, res) => {
  res.json({ message: 'User signup (DB integration pending)' });
});

// POST /api/auth/login - User login (placeholder)
router.post('/login', (req, res) => {
  res.json({ message: 'User login (DB integration pending)' });
});

// POST /api/auth/logout - User logout (placeholder)
router.post('/logout', (req, res) => {
  res.json({ message: 'User logout (DB integration pending)' });
});

router.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: `Hello, ${req.user.email}. You accessed a protected route!` });
});
module.exports = router;
