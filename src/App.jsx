import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Expense from "./pages/Expense";
import NavBar from "./components/NavBar";
import DashBoard from "./pages/DashBoard";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<Expense />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
      <NavBar />
    </>
  );
}

export default App;
