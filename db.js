var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/dxgames');

var userSchema = new mongoose.Schema({
    username: String,
    email: String,
    senha: String,
    confirmarsenha: String
}, { collection: 'dxgames' }
);
 
module.exports = { Mongoose: mongoose, UserSchema: userSchema }




