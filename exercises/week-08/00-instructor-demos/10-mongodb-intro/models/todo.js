const mongoose = require ('mongoose')
const Schema = mongoose.Schema

// Schema defines what the data should look like (enfoces)
const todoSchema = new Schema({
    title: {
        type: String,
        required: true
        // unique: true,
        // lowercase: true
    },
    description: String,
    isCompleted: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

// arg1 a string representation of what the collection will be called for each item
// arg2 which schema should this collection be tied to
module.exports = mongoose.model("Todo", todoSchema)