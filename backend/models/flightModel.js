const mongoose = require('mongoose');

const flightSchema = mongoose.Schema({
    flightNumber: {
        type: String,
        required: true,
        unique: true
    },
    departure: {
        city: { type: String, required: true },
        date: { type: Date, required: true }
    },
    arrival: {
        city: { type: String, required: true },
        date: { type: Date, required: true }
    },
    price: {
        type: Number,
        required: true
    },
    seats: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);