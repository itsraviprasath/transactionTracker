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
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={localStorage.getItem("Data") ? <Dashboard /> : <Login />}
          />

          <Route
            path="/login"
            element={localStorage.getItem("Data") ? <Dashboard /> : <Login />}
          />
          <Route
            path="/register"
            element={
              localStorage.getItem("Data") ? <Dashboard /> : <Register />
            }
          />
          <Route
            path="/dashboard"
            element={localStorage.getItem("Data") ? <Dashboard /> : <Login />}
          />
          <Route
            path="/all-loans"
            element={localStorage.getItem("Data") ? <AllLoans /> : <Login />}
          />
          <Route
            path="/your-loans"
            element={localStorage.getItem("Data") ? <YourLoans /> : <Login />}
          />
          <Route
            path="/profile"
            element={localStorage.getItem("Data") ? <Profile /> : <Login />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
