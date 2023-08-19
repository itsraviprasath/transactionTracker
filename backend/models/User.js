const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  password: { type: String, required: true },
  dob:{ type: Date,required:true},
  aadhar:{type:String,required:true},
  address:{type:String,required:true}
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: "3d",
  });
  return token;
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
  const schema = joi.object({
    name: joi.string().required.label("name"),
    email: joi.string().required.label("email"),
    phoneNumber: joi.string().email().required.label("phoneNumber"),
    password: passwordComplexity.required().label("password"),
  });
  return schema.validate(data);
};

module.exports = { User, validate };
