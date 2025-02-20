const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');





mongoose.connect('mongodb://localhost:27017/shopping-app')
    .then(() => console.log('DB Connected'))
    .catch((err) => console.log(err));

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));






const session = require('express-session')
const flash = require('connect-flash')



const sessionConfig = {
    secret: 'parthh1112',
    resave: false,
    saveUninitialized: true,
}

app.use(session(sessionConfig))
app.use(flash())


app.use((req, res, next) => { // adding success and error globally now available to req and res & this success and error are automaticallly availablr to all the templates and we can use it like this - <%= success %> or  <%= error %> 

    res.locals.success = req.flash('success')
    res.locals.error = req.flash('error')
    next();
})
// Routes
const productRoutes = require('./routes/product');
const reviewRoutes = require('./routes/review');




app.use(productRoutes);
app.use(reviewRoutes);


const port = 4000;

app.listen(port, () => {
    console.log(`server running at port ${port}`);
});