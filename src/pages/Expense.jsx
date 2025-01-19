import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Expense() {
  const [toggleCal, setToggleCal] = useState(false);
  const navigate = useNavigate();

  const handleToggle = (event) => {
    event.preventDefault();
    setToggleCal(!toggleCal);
  };

  return (
    <div className="flex justify-center items-center w-full h-[100vh]">
      <form className="relative w-[90%] max-w-md border border-gray-300 shadow-lg rounded-lg p-6 bg-orange-100">
        <p className="text-orange-800 text-lg font-semibold mb-5">
          Balance: <span className="text-green-700">$22</span>
        </p>

        <button
          onClick={handleToggle}
          className="absolute top-5 right-5 border rounded-md px-1 py-2 bg-red-500 text-white text-sm hover:bg-red-400 transition duration-300"
        >
          {toggleCal ? "Income Page" : "Expense Page"}
        </button>

        <Transaction type={toggleCal ? "expense" : "income"} />
      </form>
    </div>
  );
}

function Transaction({ type }) {
  const categories =
    type === "expense"
      ? ["Food", "Transport", "Entertainment", "Bills", "Other"]
      : ["Salary", "Freelance", "Investment", "Gift", "Other"];

  return (
    <div className="flex flex-wrap mt-4">
      <div className="w-[50%] px-2 mb-4">
        <label className="block text-orange-500 font-bold mb-1">
          {type === "expense" ? "Expense Amount" : "Income Amount"}
        </label>
        <input
          type="number"
          placeholder={`Enter amount`}
          className="w-full px-3 py-2 border border-gray-400 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
        />
      </div>

      <div className="w-[50%] px-2 mb-4">
        <label className="block text-orange-500 font-bold mb-1">Reason</label>
        <input
          type="text"
          placeholder={
            type === "expense" ? "e.g. Zara bag" : "e.g. Freelance work"
          }
          className="w-full px-3 py-2 border border-gray-400 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
        />
      </div>

      <div className="w-full px-2 mb-4">
        <label className="block text-orange-500 font-bold mb-1">Category</label>
        <select
          className="w-full px-3 py-3 border border-gray-400 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-orange-500 text-md"
          defaultValue=""
        >
          <option value="" disabled>
            Select a category
          </option>
          {categories.map((category) => (
            <option key={category} value={category.toLowerCase()}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full flex justify-between items-center">
        <button
          onClick={() => navigate("expensecal")}
          className="w-[40%] px-1 py-2 rounded-md bg-orange-600 text-white text-sm hover:scale-105 transition duration-300"
        >
          Add {type === "expense" ? "Expense" : "Income"}
        </button>
        <button className="w-[40%] px-1 py-2 rounded-md bg-orange-600 text-white text-sm hover:scale-105 transition duration-300">
          View History
        </button>
      </div>
    </div>
  );
}

export default Expense;
