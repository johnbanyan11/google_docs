const express = require('express');
const { registerUser, loginUser, getMe } = require('../controllers/userController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/signup', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getMe); // optional protected route

module.exports = router;
