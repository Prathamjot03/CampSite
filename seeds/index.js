const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/campSite');

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 25; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            //YOUR USER ID
            // author: '692eb61975fd7a694c32b5bd',  //for maptiler
            author: '6932ccd80d933944317f20c0',  //for campSite
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: '',
            price,
            geometry: {
                type: "Point",
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude,
                ]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/dbqyfc76r/image/upload/v1767459011/alfred-boivin-XoM0eYSXWMs-unsplash_bppppr.jpg',
                    filename: 'alfred-boivin-XoM0eYSXWMs-unsplash_bppppr'
                },
                {
                    url: 'https://res.cloudinary.com/dbqyfc76r/image/upload/v1767459008/tegan-mierle-fDostElVhN8-unsplash_zgqzda.jpg',
                    filename: 'tegan-mierle-fDostElVhN8-unsplash_zgqzda'
                },
                {
                    url: 'https://res.cloudinary.com/dbqyfc76r/image/upload/v1767459011/kevin-ianeselli-ebnlHkqfUHY-unsplash_eg9sq0.jpg',
                    filename: 'kevin-ianeselli-ebnlHkqfUHY-unsplash_eg9sq0'
                },
                {
                    url: 'https://res.cloudinary.com/dbqyfc76r/image/upload/v1767459011/dominik-jirovsky-re2LZOB2XvY-unsplash_nem8nl.jpg',
                    filename: 'dominik-jirovsky-re2LZOB2XvY-unsplash_nem8nl'
                },
                {
                    url: 'https://res.cloudinary.com/dbqyfc76r/image/upload/v1767459012/everett-mcintire-BPCsppbNRMI-unsplash_ftce9h.jpg',
                    filename: 'everett-mcintire-BPCsppbNRMI-unsplash_ftce9h'
                },
                {
                    url: 'https://res.cloudinary.com/dbqyfc76r/image/upload/v1767459013/chris-cordes-U4uYhPtgRIs-unsplash_q8gu8i.jpg',
                    filename: 'chris-cordes-U4uYhPtgRIs-unsplash_q8gu8i'
                },
                {
                    url: 'https://res.cloudinary.com/dbqyfc76r/image/upload/v1767459014/lance-anderson-JKmjElTIG5I-unsplash_eajdr1.jpg',
                    filename: 'lance-anderson-JKmjElTIG5I-unsplash_eajdr1'
                },
                {
                    url: 'https://res.cloudinary.com/dbqyfc76r/image/upload/v1767459015/scott-goodwill-y8Ngwq34_Ak-unsplash_u8euwo.jpg',
                    filename: 'scott-goodwill-y8Ngwq34_Ak-unsplash_u8euwo'
                },
                {
                    url: 'https://res.cloudinary.com/dbqyfc76r/image/upload/v1767459016/lesly-derksen-F4fH5dAfZnE-unsplash_mw6ia2.jpg',
                    filename: 'lesly-derksen-F4fH5dAfZnE-unsplash_mw6ia2'
                },
                {
                    url: 'https://res.cloudinary.com/dbqyfc76r/image/upload/v1767459017/matt-whitacre-F4GGnyJ8aiI-unsplash_nds6n1.jpg',
                    filename: 'matt-whitacre-F4GGnyJ8aiI-unsplash_nds6n1'
                },
                {
                    url: 'https://res.cloudinary.com/dbqyfc76r/image/upload/v1767459021/dino-reichmuth-5Rhl-kSRydQ-unsplash_bghvcx.jpg',
                    filename: 'dino-reichmuth-5Rhl-kSRydQ-unsplash_bghvcx'
                },
                {
                    url: 'https://res.cloudinary.com/dbqyfc76r/image/upload/v1767459022/dave-hoefler-a3e7yEtQxJs-unsplash_ikcjug.jpg',
                    filename: 'dave-hoefler-a3e7yEtQxJs-unsplash_ikcjug'
                }
            ]
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})
