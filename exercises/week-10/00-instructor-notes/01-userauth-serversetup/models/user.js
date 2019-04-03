const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})
// PASSWORD ENCRYPTION FUNCTION ON /auth /signup
// right before 'update', run the following function
// use function keyword so you have access to 'this'.
userSchema.pre("save", function(next) {
    const user = this
    
    if(!user.isModified("password")) return next()
    bcrypt.hash(user.password, 10, (err, hash) => {
        if(err) return next(err)
        user.password = hash
        next()
    })
}) // after changing this, your password checking wont match,
// so delete your DB and create it again

// Check user's encrypted password on Login
userSchema.methods.checkPassword = function(passwordAttempt, callback) {
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if(err) return callback(err)
        // fire the callback function without the error passed into it
        callback(null, isMatch)
    })
}

module.exports = mongoose.model("User", userSchema)