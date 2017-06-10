const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Esquema de la db.
//Estructura de un usuario
var userSchema = new Schema({
    name: String,
    email: { type:String , unique: true },
    password: String
});

var User = mongoose.model('User', userSchema);
module.exports = User;
