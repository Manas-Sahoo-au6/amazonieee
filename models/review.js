var mongoose = require("mongoose");
var Schema=mongoose.Schema
viewSchema= new Schema(
    {
        name:{
            type:String,
            required:true
        },
        review:{
            type:String,
            required:true
        }
    }
)


var review=mongoose.model("review",viewSchema)


module.exports=review