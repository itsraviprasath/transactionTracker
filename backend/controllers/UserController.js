const { User, validate } = require("../models/User");
const bcrypt = require("bcrypt");

const registeruser = async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(409).send({ message: error.details[0].message });
    const user = await User.findOne({ email: req.body.email });
    if (user)
      return res
        .status(409)
        .send({ message: "user with given email already exists" });
    else {
      const salt = await bcrypt.genSalt(Number(process.env.SALT));
      const hashPassword = await bcrypt.hash(req.body.password, salt);
      await new User({ ...req.body, password: hashPassword }).save();
      res.status(201).send({ message: "user Created succesfully" });
    }
  } catch (err) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};
module.exports = registeruser;
