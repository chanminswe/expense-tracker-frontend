import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Expense from "./pages/Expense";
import NavBar from "./components/NavBar";
import DashBoard from "./pages/DashBoard";
import ProtectedRoute, { isAuthenticated } from "./routes/ProtectedRoute";
import TransactionHistory from "./pages/TransactionHistory";
import Profile from "./pages/Profile";

function App() {
  const isAuth = isAuthenticated();
  const location = useLocation();

  const showNavBar = isAuth && location.pathname !== "/";
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Navigate to={isAuth ? "/dashboard" : "/"} />}
        />
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/expensecal" element={<Expense />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/transactions" element={<TransactionHistory />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
      {showNavBar && <NavBar />}
    </>
  );
}

export default App;
