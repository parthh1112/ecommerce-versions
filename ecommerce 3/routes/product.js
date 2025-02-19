const express = require('express')
const router = express.Router()
const Product = require('../models/product')
const Review = require('../models/review')
const Joi = require('joi') // for server side validation
const { validateProduct } = require('../middleware') // vaildating the product on serverside using below middle ware 

router.get('/products', async (req, res) => {
    try {


        const products = await Product.find()
        res.render('products/index', { products })


    } catch (error) {
        res.render('error', { error })
    }

})

router.get('/products/new', (req, res) => {
    try {
        res.render('products/new')

    } catch (error) {
        res.render('error', { error })
    }

})

router.post('/products', validateProduct, async (req, res) => {
    try {
        const { name, img, price, desc } = req.body



        await Product.insertOne({ name, img, price, desc })

        res.redirect('/products')

    } catch (error) {
        res.render('error', { error })
    }


})

router.get('/products/:id', async (req, res) => {
    try {
        let { id } = req.params;
        let product = await Product.findById(id).populate('reviews')

        res.render('products/show', { product })

    } catch (error) {
        res.render('error', { error })
    }


})

router.get('/products/:id/edit', async (req, res) => {
    try {
        const { id } = req.params
        let product = await Product.findById(id);
        res.render('products/edit', { product })
    } catch (error) {
        res.render('error', { error })
    }

})


router.patch('/products/:id', validateProduct, async (req, res) => {
    try {
        const { id } = req.params
        const { name, price, img, desc } = req.body
        await Product.findByIdAndUpdate(id, { name, price, img, desc })
        res.redirect(`/products/${id}`);
    } catch (error) {
        res.render('error', { error })
    }

})


router.delete('/products/:id', async (req, res) => {
    try {
        const { id } = req.params
        // when we delet the product so the data associate with it should also delete from database(in our case when we delete the product so the review of the product should also deleted form our database)
        // const product = await Product.findById(id);
        // for (let reviewId of product.reviews) {
        //     await Review.findByIdAndDelete(reviewId)
        // }
        await Product.findByIdAndDelete(id)
        res.redirect('/products')

    } catch (error) {
        res.render('error', { error })
    }

})

module.exports = router