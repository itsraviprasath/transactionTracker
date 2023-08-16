import "./App.css";
import { Login, Register } from "./routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element="" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
