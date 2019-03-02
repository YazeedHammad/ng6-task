const mongoose = require('mongoose')

const Schema = mognoose.Schema
const userSchema = new Schema({
    firstName: String,
    lastName : String,
    email: String,
    jobTitle: String,
    adress: String,
    userName: String,
    password: String
})
module.exports = mongoos.model('user', userSchema, 'users')