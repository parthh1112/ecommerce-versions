const express = require('express')
const router = express.Router()
const Product = require('../models/product')
const Review = require('../models/review')

router.post('/products/:id/review', async (req, res) => {

    const { id } = req.params
    const { rating, comment } = req.body
    let product = await Product.findById(id)

    // const review = new Review(...req.body)
    const review = new Review({ rating, comment })

    product.reviews.push(review)
    await review.save()
    await product.save() 


    res.redirect(`/products/${id}/`)

})


module.exports = router