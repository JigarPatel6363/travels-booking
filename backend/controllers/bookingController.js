const asyncHandler = require('express-async-handler');
const Booking = require('../models/bookingModel');

const getMyBookings = asyncHandler(async (req, res) => {
    const bookings = await Booking.find({ user: req.user.id })
        .populate('flight')
        .populate('hotel');
    res.status(200).json(bookings);
});

const createBooking = asyncHandler(async (req, res) => {
    const { flight, hotel, checkIn, checkOut, totalPrice } = req.body;

    const booking = await Booking.create({
        user: req.user.id,
        flight,
        hotel,
        checkIn,
        checkOut,
        totalPrice,
        status: 'confirmed'
    });

    res.status(201).json(booking);
});

module.exports = {
    getMyBookings,
    createBooking
};