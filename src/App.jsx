import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Expense from "./pages/Expense";
import NavBar from "./components/NavBar";
import DashBoard from "./pages/DashBoard";
import ProtectedRoute, { isAuthenticated } from "./routes/ProtectedRoute";

function App() {
  const isAuth = isAuthenticated();
  const location = useLocation();

  const showNavBar = isAuth && location.pathname !== "/login";
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Navigate to={isAuth ? "/dashboard" : "/login"} />}
        />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/expensecal" element={<Expense />} />
          <Route path="/dashboard" element={<DashBoard />} />
        </Route>
      </Routes>
      {showNavBar && <NavBar />}
    </>
  );
}

export default App;
