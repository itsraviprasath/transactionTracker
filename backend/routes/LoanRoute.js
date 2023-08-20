const router = require("express").Router()
const {allLoan,addLoan} = require("../controllers/LoanController")


router.get("/",allLoan)

router.post("/:id",addLoan)


module.exports = router
