const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    img: String,
    title: String
})

const Book = mongoose.model('Book', bookSchema)


module.exports = Book