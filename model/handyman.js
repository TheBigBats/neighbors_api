let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let HandyManSchema = Schema({
    id: Number,
    name: String,
    avatarUrl: String,
    aboutMe: String,
    phoneNumber: String,
    address: String,
    favorite: Boolean,
    webSite: String,
    photoUrl: String,
    bio: String,
    likes: Number,
});

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('HandyMan', HandyManSchema);
