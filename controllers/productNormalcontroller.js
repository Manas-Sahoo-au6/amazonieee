var products = require("../models/product");
var review = require("../models/review");
var orders = require("../models/order")
var User = require("../models/user")

module.exports = {
    renderMenshoespage: function (req, res) {
        if (req.query.page == 1) {
            pagenumber = 1
            products.find({ category: "men" }).limit(10).then(function (products) {
                res.render("productspage", {
                    title: "products page",
                    product: products,
                    path: req.path,
                    pagenumber: pagenumber
                })
            })
        } if (req.query.page == 2) {
            products.find({ category: "men" }).skip(10).limit(10).then(function (products) {
                res.render("productspage", {
                    title: "products page",
                    product: products,
                    path: req.path
                })
            })
        }
    },

    renderwomenshoespage: function (req, res) {
        if (req.query.page == 1) {
            pagenumber = 1
            products.find({ category: "women" }).limit(10).then(function (products) {
                res.render("productspage", {
                    title: "products page",
                    product: products,
                    path: req.path,
                    pagenumber: pagenumber
                })
            })
        } if (req.query.page == 2) {
            products.find({ category: "women" }).skip(10).limit(10).then(function (products) {
                res.render("productspage", {
                    title: "products page",
                    product: products,
                    path: req.path
                })
            })
        }
    },
    renderkidshoespage: function (req, res) {
        if (req.query.page == 1) {
            pagenumber = 1
            products.find({ category: "kids" }).limit(10).then(function (products) {
                res.render("productspage", {
                    title: "products page",
                    product: products,
                    path: req.path,
                    pagenumber: pagenumber
                })
            })
        } if (req.query.page == 2) {
            products.find({ category: "kids" }).skip(10).limit(10).then(function (products) {
                res.render("productspage", {
                    title: "products page",
                    product: products,
                    path: req.path
                })
            })
        }
    },
    exitpage: function (req, res) {
        res.render("exitpage", {
            title: "success"
        });
    },
    productdetails: function (req, res) {
        id = req.params.shoeId
            products.find({ _id: id }).then(function (product) {
                products
                    .find({ category: product[0].category })
                    .then(function (allproduct) {
                        review.find().then(function (reviews) {
                            res.render("productdetails", {
                                p: product[0],
                                other: allproduct[0],
                                other1: allproduct[1],
                                other2: allproduct[3],
                                other3: allproduct[5],
                                other4: allproduct[6],
                                review: reviews
                            });
                        });
                    });
            });
    },
    addtocart: function (req, res) {
        var user = req.user
        var productId = req.params.shoeId
        products.find({_id:productId}).then(function(product){
    //  console.log(product)
        var cart = new orders()
            cart.userId=req.session.userId
            cart.product=product[0]._id
            cart.price=product[0].price
            cart.name=product[0].name
            cart.image=product[0].image_url
            cart.save().then(function () {
            })
        user.save().then(function () {
            console.log("USER has successfully addedd the new product in cart")
            res.redirect(`/cart`)
        }).catch(function (err) {
            console.log(err)
            if (err.name === "ValidationError")
                return res.status(400).send(`Validation Error: ${err.message}`);
            return res.status(500).send("Server Error");
        })
            
    })

    },
    cart: function (req, res) {
        var user = req.user._id
        User.findOne({_id:user}).then(function(){
        orders.findOne({ userId: user }).then(function(prod){
            
            // console.log(prod)
            res.render("cartpage", {
                title: "cart page",
                order: prod
            })
        })})

    }
};
