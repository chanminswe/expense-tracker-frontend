import React from "react";

function Expense() {
  return (
    <div className="flex justify-center items-center w-full h-[100vh] bg-orange-200">
      <form className="w-[90%] max-w-md border border-gray-300 shadow-md rounded-lg p-5 bg-orange-100">
        <p className="text-orange-800 text-lg font-semibold mb-4">
          Balance: <span className="text-green-700">$22</span>
        </p>

        <div className="flex flex-wrap gap-4">
          <div className="w-[45%]">
            <label className="block text-orange-500 font-bold mb-1">
              Expense
            </label>
            <input
              type="text"
              placeholder="+/-{amount}"
              className="w-full px-3 py-2 border border-gray-400 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
          </div>
          <div className="w-[45%]">
            <label className="block text-orange-500 font-bold mb-1">
              Reason
            </label>
            <input
              type="text"
              placeholder="zara bag"
              className="w-full px-3 py-2 border border-gray-400 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
          </div>
          <div className="w-full px-1">
            <label className="block text-orange-500 font-bold mb-1">
              Category
            </label>
            <select
              className="w-full px-2 py-2 border border-gray-400 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-orange-500 text-base"
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

            <div className="flex h-[40%] justify-around items-center mt-4">
              <button
                onClick={() => navigate("expensecal")}
                className="border w-42 px-5 py-2 rounded-md bg-orange-600 text-orange-200 hover:scale-105 "
              >
                Add Expense
              </button>
              <button className="border w-42 px-5 py-2 rounded-md bg-orange-600 text-orange-200 hover:scale-105">
                View History
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Expense;
