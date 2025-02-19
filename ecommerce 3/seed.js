const mongoose = require('mongoose')
const Product = require('./models/product')
mongoose.connect('mongodb://localhost:27017/shopping-app')
    .then(() => {
        console.log(`database connected`)
    })
    .catch((e) => {
        console.log(e)
    })

const products = [
    {
        name: 'Iphone',
        img: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lfGVufDB8fDB8fHww',
        desc: 'With iPhone Mirroring, you can view your iPhone screen on your Mac and control it without picking up your phone. Continuity features also let you answer calls or messages right from your Mac. You can even copy images, video or text from your iPhone and paste it all into a different app on your Mac. And with iCloud, you can access your files from either device.',

        price: 79999
    },
    {
        name: 'Macbook',
        img: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D',
        desc: 'Sketch on your iPad and have it appear instantly on your Mac. Or use your iPad as a second display, so you can work on one screen while you reference the other. You can even start a Final Cut Pro project on your iPad and continue it on your Mac.',

        price: 89999
    },
    {
        name: 'Watch ultra',
        img: 'https://images.unsplash.com/photo-1724749330676-400f875ecdb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8V2F0Y2glMjB1bHRyYXxlbnwwfHwwfHx8MA%3D%3D',
        desc: 'Combining Apple Watch and iPhone opens up a world of features that make each device better. You can do things like create a custom route with Maps on your iPhone, then download it to your watch to use any time. Or start a cycling workout on your watch and see your metrics automatically appear as a Live Activity on your iPhone.',

        price: 95999
    },
    {
        name: 'Ipad',
        img: 'https://plus.unsplash.com/premium_photo-1681139760927-4c510ce6d8f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aXBhZHxlbnwwfHwwfHx8MA%3D%3D',
        desc: 'iPad is perfect for taking the content you capture on iPhone and bringing it to life on an immersive canvas. You can shoot videos and photos on your iPhone and use the large display of your iPad to edit, add animations and more. You can also pick up wherever you left off with Handoff.',
        price: 65999
    }
]



Product.insertMany(products)
    .then((product) => console.log(product))
    .catch((error) => console.log(error))
