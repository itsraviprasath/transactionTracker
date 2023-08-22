const router = require("express").Router();
const uploadImage = require("../middlewares/uploadImage");
const {
  registeruser,
  upload,
  viewImage,
} = require("../controllers/UserController");

router.post("/", registeruser);
router.post("/upload", uploadImage.single("file"), upload);
router.get("/getImage", viewImage);

module.exports = router;
