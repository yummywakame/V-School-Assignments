const mongoose = require ('mongoose')
const Schema = mongoose.Schema

// Schema defines what the data should look like (enfoces)
const bountySchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    isLiving: {
        type: Boolean,
        default: true
    },
    bountyAmount: {
        type: Number,
        default: 0
    },
    bountyType: {
        type: String,
        enum: ["jedi", "sith"],
        required: true
    }
})

// arg1 a string representation of what the collection will be called for each item
// arg2 which schema should this collection be tied to
module.exports = mongoose.model("Bounty", bountySchema)