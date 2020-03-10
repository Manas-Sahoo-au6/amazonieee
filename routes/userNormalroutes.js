var express=require("express")
var router= express.Router()
var usernormalcontroller=require("../controllers/userNormalcontroller")
router.get("/",usernormalcontroller.homepage)
router.get("/register",usernormalcontroller.renderRegisterPage)
router.get("/login",usernormalcontroller.renderLoginPage)
router.get("/shoes/men?page={pagenumber}",)
router.get("/shoes/women?page={pagenumber}",)
router.get("/shoes/kids?page={pagenumber}",)
router.get("/shoes/men||women||kids/:shoeId",)
// router.get("/cart",)
// router.get("/success",)
module.exports=router




