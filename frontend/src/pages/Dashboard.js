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
          <LoanTracker />
          <UpcomingPayments />
        </div>
      </main>
    </>
  );
};

export default Dashboard;
