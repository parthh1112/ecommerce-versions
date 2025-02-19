const mongoose = require('mongoose')
const Review = require('./review')
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    img: {
        type: String,
        trim: true, 
        default: '/images/product.jpg'
    },
    price: {
        type: Number,
        min: 0, 
        default: 0
    },
    desc: {
        type: String,
        trim: true, 
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
})


// productSchema.pre('findOneAndDelete',async (data)=>{ // middelware function 
//     console.log("pre middleware")
//     console.log(data)
// })


productSchema.post('findOneAndDelete', async (product) => { // middelware function = // when we delet the product so the data associate with it should also delete from database(in our case when we delete the product so the review of the product should also deleted form our database) so in this we are deleteing the reviews


    if (product.reviews.length > 0) {
        await Review.deleteMany({ _id: { $in: product.reviews } })
    }



})


const Product = mongoose.model('Product', productSchema)
module.exports = Product