import React from "react";

function Expense() {
  return (
    <div className="flex justify-center items-center w-full h-[100vh] bg-gray-50">
      <form className="w-[90%] max-w-md border border-gray-300 shadow-md rounded-lg p-5 bg-orange-100">
        {/* Balance Display */}
        <p className="text-orange-800 text-lg font-semibold mb-4">
          Balance: <span className="text-green-700">$22</span>
        </p>

        {/* Form Fields */}
        <div className="flex flex-wrap gap-4">
          {/* Expense Input */}
          <div className="w-[45%]">
            <label className="block text-orange-500 font-bold mb-1">Expense</label>
            <input
              type="text"
              placeholder="+/-{amount}"
              className="w-full px-3 py-2 border border-gray-400 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
          </div>

          {/* Reason Input */}
          <div className="w-[45%]">
            <label className="block text-orange-500 font-bold mb-1">Reason</label>
            <input
              type="text"
              placeholder="zara bag"
              className="w-full px-3 py-2 border border-gray-400 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
          </div>

          {/* Category Dropdown */}
          <div className="w-full">
            <label className="block text-orange-500 font-bold mb-1">Category</label>
            <select
              className="w-full px-3 py-2 border border-gray-400 rounded-md text-sm bg-white focus:outline-none focus:ring-1 focus:ring-orange-500"
              defaultValue=""
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="food">Food</option>
              <option value="transport">Transport</option>
              <option value="entertainment">Entertainment</option>
              <option value="bills">Bills</option>
              <option value="saving">Saving</option>
              <option value="income">Income</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Expense;
