const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    summary: String,
    imgUrl: {
        type: String,
        default: 'https://previews.123rf.com/images/katekit/katekit1806/katekit180600157/102433428-cute-radish-cartoon-character-doing-exercises-with-dumbbells-eating-healthy-and-fitness-flat-retro-s.jpg'
    },
    votes: {
        type: Number,
        default: 0
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    thread: {
        type: String,
        enum: ["recipes", "entertainment", "news", "sports", "culture", "science", "arts", "celebrity", "awhcute", "hobbies", "politics", "music", "john mayer", "humor"],
        required: true
    },
    comments: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        comment: {
            type: String,
            required: true
        },
        timeStamp: {
            type: Date,
            default: Date.now
        }
    }],
    timeStamp: {
        type: Date,
        default: Date.now
    },
    tags: [{
        type: String,
        default: []
    }]
})

module.exports = mongoose.model('Post', postSchema)