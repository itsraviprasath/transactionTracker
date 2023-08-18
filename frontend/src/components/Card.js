import React from "react";
import "../assests/css/Card.css";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <div className="grid-item hover">
          <p>
            {props?.title}: <span> ₹ {props?.value}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
