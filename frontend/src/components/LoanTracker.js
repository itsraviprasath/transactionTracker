import React from "react";
import "../assests/css/LoanTracker.scss";
import ProgressBar from "../components/ProgressBar";

const LoanTracker = () => {
  return (
    <>
      <div className="grid-item block-div">
        <h3>Loan Tracker</h3>
        <ProgressBar loanType="Education Loan" loanPercent="100" />
        <ProgressBar loanType="Car Loan" loanPercent="70" />
        <ProgressBar loanType="Bike Loan" loanPercent="0" />
        <ProgressBar loanType="Home Loan" loanPercent="10" />
        <ProgressBar loanType="Personal Loan" loanPercent="50" />
        <ProgressBar loanType="Gold Loan" loanPercent="0" />
      </div>
    </>
  );
};

export default LoanTracker;
