import React from "react";
import { Navbar, Card } from "../routes";
import LoanTracker from "../components/LoanTracker";
import UpcomingPayments from "../components/UpcomingPayments";
const Dashboard = () => {
  const datas = JSON.parse(localStorage.getItem('Data'))
    console.log(datas)
  return (
    <>
      <Navbar />
      <main className="dashboard">
        <h2>Hi <span>{datas.name}</span>, Welcome back!</h2>
        <div className="grid-container">
          <Card title="Bending Amount" value="7000" isAmount={true} />
          <Card title="Paid Amount" value="3000" isAmount={true} />
          <Card title="Total Amount" value="10000" isAmount={true} />
        </div>

        <div className="grid-container">
          <Card title="Active Loans" value="1" isAmount={false} />
          <Card title="Closed Loans" value="0" isAmount={false} />
          <Card title="All Loans" value="1" isAmount={false} />
        </div>

        <div className="grid-container">
          <LoanTracker />
          <UpcomingPayments />
        </div>
      </main>
    </>
  );
};

export default Dashboard;
