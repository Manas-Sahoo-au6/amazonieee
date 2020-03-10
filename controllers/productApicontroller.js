var products=require("../models/product")
var reviews=require("../models/review")
var orders=require("../models/order")
module.exports={
    addreview: function (req, res) {
        var user = req.user
        var review = new reviews({ ...req.body })

        console.log(req.path)
        review.save().then(function (blogObj) {
            console.log("Saved successfully");
            return res.redirect(`${req.path}`);
        })
            .catch(function (err) {
                console.log(err.messsage);
                return res.status(500).redirect("/login");
            })
    },
    // pproductdetailsCart:function(req,res){
    //     var id=req.params.shoeId
    //     products.findOne({_id:id}).then(function(product){
    //         console.log(product)
            
    //     })
    // }
    // addcart:function(req,res){
    //     var user=req.user
    //     var productId=req.name
    //     order=user.orders
    //     console.log(productId)
    //     products.findOne({_id:shoeId}).then(function(product){
    //         console.log(product)
    //     })
        

    // }
}
