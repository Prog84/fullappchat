const mongoose = require('mongoose');

const userShema = mongoose.Shema({
    username: {type: String, unique: true},
    fullname: {type: String, unique: true, default: ''},
    email: {type: String, unique: true},
    password: {type: String, default: ''},
    userImage: {type: String, default: 'default.png'},
    facebook: {type: String, default: ''},
    fbTokens:Array,
    google: {type: String, default: ''},
    googleTokens:Array

})
module.exports =  mongoose.model('User',userShema);