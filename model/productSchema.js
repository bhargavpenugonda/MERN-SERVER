//capable of storing data in my mongodb
const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    // _id:{
    //     type:String,
    //     required:true,
    // },
    imageURL:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
        
})//convert this into mongoose schema
module.exports=mongoose.model('Product',productSchema);