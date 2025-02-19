const express = require('express')
const router = express.Router()
const Product = require('../models/product')
const Review = require('../models/review')
const { validateReview } = require('../middleware')// vaildating the review on serverside using below middle ware

router.post('/products/:id/review', validateReview, async (req, res) => {
    try {

        const { id } = req.params
        const { rating, comment } = req.body
        let product = await Product.findById(id)

        // const review = new Review(...req.body)
        const review = new Review({ rating, comment })

        product.reviews.push(review)
        await review.save()
        await product.save()


        res.redirect(`/products/${id}/`)

    } catch (error) {
        res.render('error', { error })
    }

})


module.exports = router