const mongoose = require('mongoose');
const Userschema = mongoose.Schema({
nombre : {
    type : String,
    required : true,
    trim : true
},
email : {
    type : String,
    required : true,
    unique : true,
},
password : {
    type : String,
    required : true,
    trim : true
},
creado : {
    type : Date,
    default : Date.now()
}





});
module.exports = mongoose.model('Usuario', Userschema);