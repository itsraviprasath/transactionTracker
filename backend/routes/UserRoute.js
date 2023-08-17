const router = require("express").Router();
const registeruser = require("../controllers/UserController");

router.post("/register", registeruser);
