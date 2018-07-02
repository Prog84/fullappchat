const mongoose = require('mongoose');

const groupsSchema = mongoose.Schema({
    name: {type: String,  default: ''},
    country: {type: String, default: ''}, 
    image: {type: String, default: 'default.png'},
    gUser: [{
        username: {type: String,  default: ''},
        email: {type: String, default: ''}

    }]
});

module.exports =  mongoose.model('Group',groupsSchema);