const mongoose = require('mongoose')
const Schema = mongoose.Schema

const linkSchema = new Schema({
    user : { type: Schema.Types.ObjectId, ref: 'User' },
    username : { type: String, required: true},
    name: { type: String, required: true },
    link: { type: String, required: true}
})

const Link = mongoose.model('Link', linkSchema)

module.exports = Link