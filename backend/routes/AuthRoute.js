const router = require("express").Router();
const authUser = require("../controllers/AuthController");

router.post('/',authUser);
