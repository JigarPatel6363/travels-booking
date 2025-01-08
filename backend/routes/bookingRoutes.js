const express = require('express');
const router = express.Router();
const { getMyBookings, createBooking } = require('../controllers/bookingController');
const { protect } = require('../middleware/authMiddleware');

router.route('/')
    .get(protect, getMyBookings)
    .post(protect, createBooking);

module.exports = router;