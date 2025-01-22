import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://expense-tracker-api-juxw.onrender.com/api/auth/register",
        { username, password }
      );
      console.log("Register successful:", response.data);
      setUsername('');
      setPassword('');
      toast.success("Registered Successfully!")
    } catch (error) {
      console.error("Register failed:", error.response?.data || error.message);
      alert("Register failed. Please try again.");
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://expense-tracker-api-juxw.onrender.com/api/auth/login",
        { username, password }
      );
      const jwt_Token = response.data.jwt_Token;
      window.localStorage.setItem("jwt_token", jwt_Token);
      console.log("Token saved successfully:", jwt_Token);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-[100vh] bg-gray-100">
      <ToastContainer />
      <form className="w-[90%] max-w-md border border-gray-300 shadow-lg rounded-lg p-6 bg-white sm:w-[75%] md:w-[60%] lg:w-[40%]">
        <h1 className="text-2xl font-bold text-gray-700 text-center mb-6">
          Expense Tracker
        </h1>
        <fieldset>
          <label className="block text-gray-600 font-medium mb-2">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 bg-gray-50 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your username"
          />
          <label className="block text-gray-600 font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 bg-gray-50 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
          <div className="flex justify-between items-center">
            <button
              onClick={handleLogin}
              className="w-32 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 shadow-md transition-all duration-300"
            >
              Login
            </button>
            <button
              onClick={handleRegister}
              className="w-32 px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 shadow-md transition-all duration-300"
            >
              Register
            </button>
          </div>
        </fieldset>
        <p className="text-sm text-center text-orange-500 mt-6">
          Please Note that your first request will takes{" "}
          <span className="text-red-500 font-bold"> 40 seconds </span> since my
          api server only starts when a request is made!
        </p>
      </form>
    </div>
  );
}

export default Login;
