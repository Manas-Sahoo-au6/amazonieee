var mongoose = require("mongoose");
var Schema = mongoose.Schema;
productSchema = new Schema({
  category: {
    type: String,
    required: true
  },
  image_url: {
    type: String,
    required: true
  },

  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }

});
var product = mongoose.model("product", productSchema);
module.exports = product;
