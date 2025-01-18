import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center w-full h-[100vh] ">
      <form className="w-[90%] h-72 border border-gray-500 shadow-black shadow-sm rounded-md p-5 bg-orange-100 sm:w-[50%] md:w-[40%] lg:w-[30%]">
        <fieldset className="w-full h-full ">
          <label className="text-orange-500 font-bold my-2">Username</label>
          <input className="w-full px-2 py-1 border border-black rounded-md my-2" />
          <label className="text-orange-500 font-bold my-2">Password</label>
          <input className="w-full px-2 py-1 border border-black rounded-md my-2" />
          <div className="flex h-[40%] justify-around items-center">
            <button
              onClick={() => navigate("expensecal")}
              className="border w-24 px-5 py-2 rounded-md bg-orange-600 text-orange-200 hover:scale-105 "
            >
              Login
            </button>
            <button className="border w-24 px-5 py-2 rounded-md bg-orange-600 text-orange-200 hover:scale-105">
              Register
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default Login;
