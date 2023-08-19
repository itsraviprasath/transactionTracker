import React from "react";
import Navbar from "../components/Navbar";
import LoanCard from "../components/LoanCard";
import { Link } from "react-router-dom";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const AllLoans = () => {
  return (
    <>
      <Navbar />

      <main>
        <h2>
          Available Loans{" "}
          <Popup
            trigger={
              <Link className="create-btn" to="#">
                Create
              </Link>
            }
            modal
            nested
          >
            {(close) => (
              <div className="popup">
                <h2 style={{ marginTop: 0 }}>Create your loan offer</h2>
                <div>
                  <from>
                    <label className="label" htmlFor="loanAmount">
                      Loan Amount
                    </label>
                    <input
                      type="text"
                      className="input"
                      name="loanAmount"
                      id="loanAmount"
                      required
                      placeholder="Enter Loan Amount"
                    />

                    <label className="label" htmlFor="loanType">
                      Loan Type
                    </label>
                    <input
                      type="text"
                      className="input"
                      name="loanType"
                      id="loanType"
                      required
                      placeholder="Enter Loan Type"
                    />

                    <label className="label" htmlFor="loanTenure">
                      Tenure
                    </label>
                    <input
                      type="text"
                      className="input"
                      name="loanTenure"
                      id="loanTenure"
                      required
                      placeholder="Enter Loan Tenure"
                    />

                    <label className="label" htmlFor="interestRate">
                      Interest Rate
                    </label>
                    <input
                      type="text"
                      className="input"
                      name="interestRate"
                      id="interestRate"
                      required
                      placeholder="Enter Interest Rate"
                    />

                    <label className="label" htmlFor="loanDescription">
                      Loan Description
                    </label>
                    <input
                      type="text"
                      className="input"
                      name="loanDescription"
                      id="loanDescription"
                      required
                      placeholder="Enter Loan Description"
                    />

                    <button className="button" type="submit">
                      Create
                    </button>
                    <button
                      style={{ backgroundColor: "aliceblue", color: "#012970" }}
                      className="button"
                      onClick={() => close()}
                    >
                      Cancel
                    </button>
                  </from>
                </div>
              </div>
            )}
          </Popup>
        </h2>

        <LoanCard />
        <LoanCard />
        <LoanCard />
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

export default AllLoans;
