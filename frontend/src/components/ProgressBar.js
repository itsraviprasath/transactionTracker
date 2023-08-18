import "../assests/css/ProgressBar.css";

const ProgressBar = (props) => {
  return (
    <>
      <div className="progress-bar-container">
        <p>{props?.loanType}</p>
        <div className="progress-bar"></div>
        <span>{props?.loanPercent + "%"} </span>
      </div>
    </>
  );
};

export default ProgressBar;
