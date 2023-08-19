import React from "react";
import "../assests/css/LoanCard.scss";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const LoanCard = () => {
  return (
    <div className="loan-card">
      <h1 className="loan-name">
        ₹ 10000 <span className="loan-type">Premium</span>
        <Popup
          trigger={<BsFillArrowRightCircleFill className="arrow-icon" />}
          modal
          nested
        >
          {(close) => (
            <div className="popup">
              <div>
                <h1>
                  ₹ 10000 <span className="loan-type">Premium</span>
                </h1>
                <div>
                  <p>Tenure: 20 Months</p>
                  <p>Interest: 10 %</p>
                  <p>EMI / month: ₹ 1000</p>
                  <p>Dummy: demo</p>
                  <p>Dummy: demo</p>
                  <p>Dummy: demo</p>
                </div>
                <button className="cancel-btn" onClick={() => close()}>
                  Close
                </button>
              </div>
            </div>
          )}
        </Popup>
      </h1>
      <div className="first-div">
        <p>Tenure: 20 Months</p>
        <p>Interest: 10 %</p>
        <p>EMI / month: ₹ 1000</p>
      </div>
      <div className="second-div">
        <p>Dummy: demo</p>
        <p>Dummy: demo</p>
        <p>Dummy: demo</p>
      </div>
    </div>
  );
};

export default LoanCard;
