var mongooose=require("mongoose")
mongooose.connect(process.env.MONGODB_URI.replace('<password>', process.env.MONGODB_PASSWORD),{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}).then(function(){
    console.log("Database connected successfully")
}).catch(function(err){
    console.log(err.message)
})