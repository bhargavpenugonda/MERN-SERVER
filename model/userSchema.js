//MongoDB user Schema
//capable of storing data in my mongodb
const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    // _id:{
    //     type:String,
    //     required:true,
    // },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
        
})//convert this into mongoose schema
module.exports=mongoose.model('User',userSchema)