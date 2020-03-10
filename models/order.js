var mongoose=require("mongoose")
var Schema=mongoose.Schema
orderSchema=new Schema(
    {
        userId:{
            type:Schema.Types.ObjectId,
            ref:"user"
        },
        product:{
            type:Schema.Types.ObjectId,
            ref:"product"
        },
        image:{
            type:String,
            required:true
        },
        price:{
            type:String,
            required:true
            
        },
        name:{
            type:String,
            required:true
        }

    }
)
var Order= mongoose.model("order", orderSchema);
module.exports = Order