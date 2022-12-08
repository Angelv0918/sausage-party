const mongoose = require('mongoose')

const characterSchema = mongoose.Schema ({
    name: String,
    gender: String,
    item: String,
    image: String,
    eaten: Boolean,
})

const Characters = mongoose.model('Character', characterSchema)

module.exports = Characters