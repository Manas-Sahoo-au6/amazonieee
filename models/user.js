var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
var Schema = mongoose.Schema;
var userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      unique: true,
      type: String,
      required: true,
      trim: true
    },
    password: {
      type: String,
      required: true,
      trim: true
    },
    orders: [
      {
        type: Object
      }
    ]
  },
  { timestamps: true }
);

userSchema.statics.findByEmailAndPassword = function (email, password) {
  var userObj = null;
  return new Promise(function (resolve, reject) {
    User.findOne({ email: email })
      .then(function (user) {
        if (!user) reject("Incorrect credentials");
        userObj = user;
        return bcrypt.compare(password, user.password);
      })
      .then(function (isMatched) {
        if (!isMatched) reject("Incorrect credentials");
        resolve(userObj);
      })
      .catch(function (err) {
        reject(err);
      });
  });
};
userSchema.pre("save", function (next) {
  var user = this;
  if (user.isModified("password")) {
    bcrypt.hash(user.password, 10).then(function (hashedpassword) {
      user.password = hashedpassword
      next()
    }).catch(function (err) {
      next(err);
    });
  }
  else next()
})

var User = mongoose.model("user", userSchema);
module.exports = User