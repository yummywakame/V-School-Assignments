const mongoose = require('mongoose')
const Schema = mongoose.Schema // Blueprint

const locationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        street: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        }
    },
    drinkImgUrl: {
        type: String,
        required: true
    },
    startTime: String,
    endTime: String,
    drinks: [String],
    isDiveBar: Boolean
})

module.exports = mongoose.model("Location", locationSchema)