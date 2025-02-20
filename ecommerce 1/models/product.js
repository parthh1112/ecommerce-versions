const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    img: {
        type: String,
        trim: true,
        required: true,
        default: '/images/product.jpg'
    },
    price: {
        type: Number,
        min: 0,
        required: true,
        default: 0
    },
    desc: {
        type: String,
        trim: true,
        required: true
    }
})

const Product = mongoose.model('Product', productSchema)
module.exports = Product