const mongoose = require('mongoose');

const hotelSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    pricePerNight: {
        type: Number,
        required: true
    },
    roomsAvailable: {
        type: Number,
        required: true
    },
    amenities: [{
        type: String
    }],
    rating: {
        type: Number,
        min: 1,
        max: 5
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Hotel', hotelSchema);