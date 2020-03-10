var productApicontroller=require("../controllers/productApicontroller")
var authenticate=require("../middleware/authenticate")
var express=require("express")
var router=express.Router()
router.post("/shoes/men/:shoeId",authenticate,productApicontroller.addreview)
router.post("/shoes/women/:shoeId",authenticate,productApicontroller.addreview)
router.post("/shoes/kids/:shoeId",authenticate,productApicontroller.addreview)
module.exports=router