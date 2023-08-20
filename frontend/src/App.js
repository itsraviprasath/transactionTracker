import "./App.scss";
import {
  Login,
  Register,
  Dashboard,
  Profile,
  AllLoans,
  YourLoans,
} from "./routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const data = localStorage.getItem("Data")
  console.log(data)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/all-loans" element={<AllLoans />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/your-loans" element={<YourLoans />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
