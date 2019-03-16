const mongoose = require('mongoose')
const Schema = mongoose.Schema

const wizardSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    isGood: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model("Wizard", wizardSchema)