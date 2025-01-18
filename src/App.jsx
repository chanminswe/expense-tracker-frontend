import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Expense from "./pages/Expense";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/expensecal" element={<Expense />} />
      </Routes>
      <NavBar />
    </>
  );
}

export default App;
