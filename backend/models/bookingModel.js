const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    flight: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Flight'
    },
    hotel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hotel'
    },
    checkIn: Date,
    checkOut: Date,
    totalPrice: Number,
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'cancelled'],
        default: 'pending'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Booking', bookingSchema);