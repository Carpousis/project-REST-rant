const mongoose = require('mongoose')
const placeSchema = new mongoose.Schema({
    name: {type: String, required:true},
    pic: String,
    cuisine: {type: String, required:true},
    city: {type: String, required:true},
    state: {type: String, required:true},
    founded: Number 
})

module.exports = mongoose.model('Place', placeSchema)