import React from "react";
import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";

export const isAuthenticated = () => {
  const token = localStorage.getItem("jwtToken");

  try {
    const { exp } = jwtDecode(token);

    if (exp * 1000 < Date.now()) {
      localStorage.removeItem("jwtToken");
      return false;
    }
    return true;
  } catch (error) {
    return false;
  }
};

function ProtectedRoute({ children }) {
  return isAuthenticated() ? children : <Navigate to='/login' />
}

export default ProtectedRoute;
