const router = require("express").Router();
const registeruser = require("../controllers/UserController");

router.post("/", registeruser);

module.exports = router;
