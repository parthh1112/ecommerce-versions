const express = require('express')
const app = express() 
const path = require('path')
const ejsMate = require('ejs-mate')
const methordOverrider = require('method-override')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.engine('ejs',ejsMate);
app.use(methordOverrider('_method'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(4000, () => {
    console.log(`server started at 4000`)
})
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/shopping-app')
    .then(() => {
        console.log(`database connected`)
    })
    .catch((e) => {
        console.log(e)
    })

const productRoutes = require('./routes/product')
app.use(productRoutes)

const reviewRoutes = require('./routes/review')
app.use(reviewRoutes)
 
app.get('/', (req, res) => {
    res.send("home page")
})