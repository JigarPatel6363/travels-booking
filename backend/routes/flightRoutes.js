const express = require('express');
const router = express.Router();
const { getFlights, createFlight } = require('../controllers/flightController');
const { protect } = require('../middleware/authMiddleware');

router.route('/')
    .get(protect, getFlights)
    .post(protect, createFlight);

module.exports = router;