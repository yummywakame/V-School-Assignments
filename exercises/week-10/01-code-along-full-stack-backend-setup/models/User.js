const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowerCase: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: true
    },
    userImg: String,
    birthday: {
        type: Date
    },
    firstName: String,
    lastName: String,
    email: String,
    likedPosts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post',
        default: []
    }],
    votedFor: [{
        type: Schema.Types.ObjectId,
        ref: 'Post',
        default: []
    }]
})

// User Auth methods
// Pre-save hook for password encryption
// Sign up and password change only
userSchema.pre('save', function(next) {
    const user = this
    if (!user.isModified("password")) return next()
    bcrypt.hash(user.password, 10, (err, hash) => {
        if(err) return next(err)
        user.password = hash
        next()
    })
})

// CheckPassword method (higher order function)
userSchema.methods.checkPassword = function(passwordAttempt, callback) {
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if (err) return callback(err)
        callback(null, isMatch)
    })
}

// Strip the password out of the object once the user is signed in or signed up
// withoutPassword method
userSchema.methods.withoutPassword = function() {
    const user = this.toObject()
    delete user.password
    return user
}

module.exports = mongoose.model('User', userSchema)