const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, index: { unique: true } },
    email: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true },
    imageUrl: {type: String, default: 'https://res.cloudinary.com/patriagani/image/upload/v1581170038/oz0ufe6c92dkhkqnergw.jpg'}
})

const User = mongoose.model('User', userSchema)

module.exports = User