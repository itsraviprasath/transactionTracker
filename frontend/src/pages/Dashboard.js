import React from "react";
import { Navbar, Card } from "../routes";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <main className="dashboard">
        <h2>Hi Raviprasath, Welcome back!</h2>
        <div className="grid-container">
          <Card title="Bending Amount" value="7000" />
          <Card title="Paid Amount" value="3000" />
          <Card title="Total Amount" value="10000" />
        </div>

        <div className="grid-container">
          <Card title="Active Loans" value="1" />
          <Card title="Closed Loans" value="0" />
          <Card title="All Loans" value="1" />
        </div>

        <div className="grid-container">
          <div className="grid-item">
            <h3>Loan Tracker</h3>
          </div>
          <div className="grid-item">
            <h3>Upcoming Payments</h3>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
