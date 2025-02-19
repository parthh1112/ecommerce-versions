const mongoose = require('mongoose')
const reviewSchema = mongoose.Schema({
    rating: {
        type: Number,
        min: 0,
        max: 5,
        required: true
    },
    comment: {
        type: String,
        trim: true,
        max: 500
    },

}, { timestamps: true })

const Review = mongoose.model('Review', reviewSchema)
module.exports = Review