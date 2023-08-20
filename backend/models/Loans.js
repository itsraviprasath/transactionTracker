const mongoose = require("mongoose");

const LoanSchema = mongoose.Schema({
  amount: {
    type: String,
    required: true,
  },
  rateOfInterest: {
    type: String,
    required: true,
  },
  tenure: {
    type: String,
    required: true,
  },
  emi: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Loans = mongoose.model("Loan", LoanSchema);

module.exports = Loans;
