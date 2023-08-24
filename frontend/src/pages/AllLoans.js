import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import LoanCard from "../components/LoanCard";
import { Link } from "react-router-dom";
import axios from "axios";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const AllLoans = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [loanType, setLoanType] = useState("");
  const [tenure, setTenure] = useState("");
  const [interestRete, setInterestRate] = useState("");
  const [emi, setEmi] = useState("");
  var [alldata, setalldata] = useState([]);

  const LS = JSON.parse(localStorage.getItem("Data"));
  const id = LS._id;

  const getdata = async () => {
    axios
      .get("http://localhost:2000/api/loans")
      .then((res) => {
        setalldata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAddLoan = (e) => {
    console.log("Hello");
    axios
      .post(`http://localhost:2000/api/loans/${id}`, {
        amount: loanAmount,
        tenure: tenure,
        rateOfInterest: interestRete,
        emi: emi,
        user: id,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    setLoanAmount("");
    setLoanType("");
    setTenure("");
    setInterestRate("");
    setEmi("");
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <Navbar />

      <main className="all-loans">
        <h2 className="page-heading">
          Available Loans{" "}
          <Popup
            className="create-popup"
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
                  <from method="" action="" onSubmit={() => close()}>
                    <label className="label" htmlFor="loanAmount">
                      Loan Amount
                    </label>
                    <input
                      type="text"
                      className="input"
                      name="loanAmount"
                      id="loanAmount"
                      value={loanAmount}
                      // required
                      placeholder="Enter Loan Amount"
                      onChange={(e) => setLoanAmount(e.target.value)}
                    />

                    <label className="label" htmlFor="loanType">
                      Loan Type
                    </label>
                    <input
                      type="text"
                      className="input"
                      name="loanType"
                      id="loanType"
                      value={loanType}
                      // required
                      placeholder="Enter Loan Type"
                      onChange={(e) => setLoanType(e.target.value)}
                    />

                    <label className="label" htmlFor="tenure">
                      Tenure
                    </label>
                    <input
                      type="text"
                      className="input"
                      name="tenure"
                      id="tenure"
                      value={tenure}
                      // required
                      placeholder="Enter Loan Tenure"
                      onChange={(e) => setTenure(e.target.value)}
                    />

                    <label className="label" htmlFor="interestRate">
                      Interest Rate
                    </label>
                    <input
                      type="text"
                      className="input"
                      name="interestRate"
                      id="interestRate"
                      value={interestRete}
                      // required
                      placeholder="Enter Interest Rate"
                      onChange={(e) => setInterestRate(e.target.value)}
                    />

                    <label className="label" htmlFor="emi">
                      EMI
                    </label>
                    <input
                      type="text"
                      className="input"
                      name="emi"
                      id="emi"
                      value={emi}
                      // required
                      placeholder="Enter EMI"
                      onChange={(e) => setEmi(e.target.value)}
                    />

                    <button
                      className="button"
                      type="submit"
                      onClick={() => handleAddLoan()}
                    >
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

        {alldata.map((item) => (
          <LoanCard
            amount={item.amount}
            rateOfInterest={item.rateOfInterest}
            tenure={item.tenure}
            emi={item.emi}
          />
        ))}
      </main>
    </>
  );
};

export default AllLoans;
