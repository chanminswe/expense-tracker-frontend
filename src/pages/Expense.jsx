import React, { useState } from "react";

function Expense() {
  const [toggleCal, setToggleCal] = useState(false);

  const handleToggle = (event) => {
    event.preventDefault();
    setToggleCal(!toggleCal);
  };

  return (
    <div className="flex justify-center items-center w-full h-[100vh] bg-orange-200">
      <form className="relative w-[90%] max-w-md border border-gray-300 shadow-md rounded-lg p-5 bg-orange-100">
        <p className="text-orange-800 text-lg font-semibold mb-4">
          Balance: <span className="text-green-700">$22</span>
        </p>

        <button
          onClick={handleToggle}
          className="absolute top-5 right-0 border rounded-md mr-5 px-2 py-2 border-orange bg-orange-300"
        >
          {toggleCal ? "Add Expense" : "Add Income"}
        </button>

        {/* Pass "expense" or "income" based on toggle state */}
        <Transaction type={toggleCal ? "expense" : "income"} />
      </form>
    </div>
  );
}

function Transaction({ type }) {
  const categories =
    type === "expense"
      ? ["Food", "Transport", "Entertainment", "Bills", "Saving", "Other"]
      : ["Salary", "Freelance", "Investment", "Gift", "Other"];

  return (
    <div className="flex flex-wrap">
      <div className="w-[50%] px-1">
        <label className="block text-orange-500 font-bold mb-1">
          {type === "expense" ? "Expense" : "Income"}
        </label>
        <input
          type="text"
          placeholder={`+/-{amount}`}
          className="w-full px-3 py-2 border border-gray-400 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
        />
      </div>
      <div className="w-[50%] px-1">
        <label className="block text-orange-500 font-bold mb-1">Reason</label>
        <input
          type="text"
          placeholder={
            type === "expense" ? "e.g. Zara bag" : "e.g. Freelance work"
          }
          className="w-full px-3 py-2 border border-gray-400 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
        />
      </div>
      <div className="w-full px-1">
        <label className="block text-orange-500 font-bold mb-1">Category</label>
        <select
          className="w-full px-2 py-2 border border-gray-400 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-orange-500 text-base"
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

        <div className="flex h-[40%] justify-around items-center mt-4">
          <button
            // Add appropriate navigate function for your routing logic
            onClick={() => navigate("expensecal")}
            className="border w-42 px-5 py-2 rounded-md bg-orange-600 text-orange-200 hover:scale-105"
          >
            Add {type === "expense" ? "Expense" : "Income"}
          </button>
          <button className="border w-42 px-5 py-2 rounded-md bg-orange-600 text-orange-200 hover:scale-105">
            View History
          </button>
        </div>
      </div>
    </div>
  );
}

export default Expense;
