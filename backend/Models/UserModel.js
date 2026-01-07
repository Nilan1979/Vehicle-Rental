const  mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String,//data type
        required:true,//validation
    },
    email:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
})




module.exports = mongoose.model(
    "UserModel",
    userSchema
)