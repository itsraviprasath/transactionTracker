import React from "react";
import "../assests/css/LoansNav.css";

const LoansNav = () => {
  return (
    <div className="loans-nav">
      <div className="active-loans">Active Loans</div>
      <div className="pending-loans">Pending Loans</div>
    </div>
  );
};

export default LoansNav;
