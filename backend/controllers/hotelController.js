const asyncHandler = require('express-async-handler');
const Hotel = require('../models/hotelModel');


const getHotels = asyncHandler(async (req, res) => {
    const hotels = await Hotel.find({});
    res.status(200).json(hotels);
});

const createHotel = asyncHandler(async (req, res) => {
    const { name, location, pricePerNight, roomsAvailable, amenities, rating } = req.body;

    const hotel = await Hotel.create({
        name,
        location,
        pricePerNight,
        roomsAvailable,
        amenities,
        rating
    });

    res.status(201).json(hotel);
});

module.exports = {
    getHotels,
    createHotel
};
