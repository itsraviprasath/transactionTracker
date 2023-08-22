const { User, validate } = require("../models/User");
const bcrypt = require("bcrypt");

const registeruser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      res.status(409).send({ message: "user with given email already exists" });
    } else {
      const salt = await bcrypt.genSalt(Number(process.env.SALT));
      const hashPassword = await bcrypt.hash(req.body.password, salt);
      const user = await new User({
        ...req.body,
        password: hashPassword,
      }).save();
      res.status(201).send(user);
    }
  } catch (err) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const upload = (req, res) => {
  User.create({ uploadedDocument: req.file.filename })
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
  console.log(req.file);
};

const viewImage = (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
};

module.exports = { registeruser, upload, viewImage };
