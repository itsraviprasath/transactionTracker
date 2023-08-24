import React from "react";
import "../assests/css/LoanCard.scss";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Paybutton from "./Paybutton";

const LoanCard = (props) => {
  return (
    <div className="loan-card">
      <h1 className="loan-name">
        ₹ {props.amount} <span className="loan-type">Premium</span>
        <Popup
          trigger={<BsFillArrowRightCircleFill className="arrow-icon" />}
          modal
          nested
        >
          {(close) => (
            <div className="popup">
              <div>
                <h1>
                  ₹ {props.amount} <span className="loan-type">Premium</span>
                </h1>
                <div>
                  <p>Tenure: {props.tenure}</p>
                  <p>Interest: {props.rateOfInterest} %</p>
                  <p>EMI / month: ₹ {props.emi}</p>
                  <p>Dummy: demo</p>
                  <p>Dummy: demo</p>
                  {/* <Paybutton   /> */}
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
        <p>Tenure:{props.tenure}</p>
        <p>Rate of Interest:{props.rateOfInterest}</p>
        <p>EMI :{props.emi}</p>
      </div>
      <div className="second-div">
        {/* <p>Dummy: demo</p>
        <p>Dummy: demo</p>
        <p>Dummy: demo</p> */}
      </div>
    </div>
  );
};

export default LoanCard;
