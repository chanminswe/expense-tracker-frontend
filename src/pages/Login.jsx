import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4040/api/auth/register",
        {
          username,
          password,
        }
      );
      const jwt_Token = response.data.jwt_token;
      console.log("Register successful:", response.data);
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      alert("Login failed. Please check your credentials.");
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4040/api/auth/login",
        {
          username,
          password,
        }
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
    <div className="flex justify-center items-center w-full h-[100vh] bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500">
      <form className="w-[90%] h-72 border border-gray-200 shadow-md rounded-md p-5 bg-white sm:w-[50%] md:w-[40%] lg:w-[30%]">
        <fieldset className="w-full h-full">
          <label className="text-cyan-700 font-bold my-2">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-2 py-1 border border-cyan-700 bg-gray-200 rounded-md my-2 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          />
          <label className="text-cyan-700 font-bold my-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-2 py-1 border border-cyan-700 bg-gray-200 rounded-md my-2 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          />
          <div className="flex h-[40%] justify-around items-center">
            <button
              onClick={handleLogin}
              className="border w-24 px-5 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:scale-105 hover:from-cyan-600 hover:to-blue-600"
            >
              Login
            </button>
            <button
              onClick={handleRegister}
              className="border w-24 px-5 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:scale-105 hover:from-cyan-600 hover:to-blue-600"
            >
              Register
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default Login;
