const Loans = require("../models/Loans");
const {User} = require("../models/User")
const allLoan = async (req, res) => {
  try {
    const users = await Loans.find()
      // .populate("user")
      .then((result) => res.send(result))
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }
};

const addLoan = async (req, res) => {
  try {
    const user = await User.findOne({_id:req.params.id})
    if(user){
    const Loan = new Loans({
      ...req.body,
      user: req.params.id,
    });
    const result = await Loan.save();
    res.send("Successfully Created");
    console.log("Successfully Created");
  }
  else{
    res.send("User not found")
    console.log("User not found")
  }
} catch (err) {
    res.send(err);
    console.log(err);
  }
  
};

module.exports = { allLoan, addLoan };
