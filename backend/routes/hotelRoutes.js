const express = require('express');
const router = express.Router();
const { getHotels, createHotel } = require('../controllers/hotelController');
const { protect } = require('../middleware/authMiddleware');

router.route('/')
    .get(protect, getHotels)
    .post(protect, createHotel);

module.exports = router;