const { productSchema } = require('./schemas')
const { reviewSchema } = require('./schemas')

// vaildating the product on serverside using below middle ware 
module.exports.validateProduct = (req, res, next) => {
    const { name, img, price, desc } = req.body
    const { error } = productSchema.validate({ name, img, price, desc })
    if (error) {
        const msg = error.details.map((err) => err.message).join(',')

        
        return res.render('error', { error: msg });
    }
    next()
}


// vaildating the review on serverside using below middle ware
module.exports.validateReview = (req, res, next) => { 
    const { rating, comment } = req.body
    const { error } = reviewSchema.validate({ rating, comment })
    if (error) {
        const msg = error.details.map((err) => err.message).join(',')

        return res.render('error', { error: msg })
    }
    next()

}