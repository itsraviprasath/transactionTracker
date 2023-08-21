import React from "react";
import Navbar from "../components/Navbar";
import LoansNav from "../components/LoansNav";
import LoanCard from "../components/LoanCard";

const YourLoans = () => {
  return (
    <>
      <Navbar />
      <main>
        <LoansNav />
        <LoanCard />
        <LoanCard />
        <LoanCard />
        <LoanCard />
        <LoanCard />
        <LoanCard />
      </main>
    </>
  );
};

export default YourLoans;
