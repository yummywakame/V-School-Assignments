const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    genre: {
        type: String,
        enum: ["action", "drama", "horror", "fantasy", "comedy", "documentary", "sci-fi", "musical"],
        required: true
    },
    comments: {
        type: [String],
        default: []
    }
})


module.exports = mongoose.model('Movie', movieSchema)