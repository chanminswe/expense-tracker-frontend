import React from "react";
import { jwtDecode } from "jwt-decode";
import { Navigate, Outlet } from "react-router-dom";


export const isAuthenticated = () => {
  const token = window.localStorage.getItem("jwt_token");
  console.log("Token from localStorage:", token);

  try {
    const { exp } = jwtDecode(token);
    console.log("Token exp time : ", exp);

    if (exp * 1000 < Date.now()) {
      localStorage.removeItem("jwt_token");
      return false;
    }
    return true;
  } catch (error) {
    return false;
  }
};

function ProtectedRoute() {
  const isAuth = isAuthenticated();
  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
