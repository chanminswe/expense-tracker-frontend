import React, { useEffect, useState } from "react";
import axios from "axios";

function Expense() {
  const [toggleCal, setToggleCal] = useState(false);
  const [amount, setAmount] = useState("");
  const [subAmount, setSubAmount] = useState("");
  const [description, setDescription] = useState("");
  const [ourCategory, setOurCategory] = useState("");
  const [balance, setBalance] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function getBalance() {
      const token = window.localStorage.getItem("jwt_token");
      try {
        const req = await axios.get(
          "http://localhost:4040/api/auth/getBalance",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(req);
        setBalance(req.data.balance);
        setSubAmount("");
        setDescription("");
      } catch (error) {
        console.error("Error Occuring trying to get balance");
      }
    }
    getBalance();
  }, [count]);

  const handleToggle = (event) => {
    event.preventDefault();
    setToggleCal(!toggleCal);
  };

  const expenseHandler = async () => {
    if (!subAmount || isNaN(subAmount) || Number(subAmount) <= 0) {
      console.error("Please enter a valid amount greater than 0.");
      return;
    }
    try {
      const amount = Number(subAmount);
      const token = localStorage.getItem("jwt_token");
      const response = await axios.post(
        "http://localhost:4040/api/transactions/costs",
        {
          amount,
          description,
          category: ourCategory,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCount(count + 1);
      console.log("Expense Added:", response.data);
    } catch (error) {
      console.error("Error occurred at expenseHandler function", error);
    }
  };

  const incomeHandler = async () => {
    if (!subAmount || isNaN(subAmount) || Number(subAmount) <= 0) {
      console.error("Please enter a valid amount greater than 0.");
      return;
    }
    try {
      const amount = Number(subAmount);
      const token = localStorage.getItem("jwt_token");
      const response = await axios.post(
        "http://localhost:4040/api/transactions/incomes",
        {
          amount,
          description,
          category: ourCategory,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCount(count + 1);
      console.log("Income Added:", response.data);
    } catch (error) {
      console.error("Error occurred at incomeHandler function", error);
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-[100vh] bg-gray-100">
      <form className="relative w-[90%] max-w-md border border-gray-200 shadow-lg rounded-lg p-6 bg-white">
        <p className="text-teal-700 text-xl font-semibold mb-5">
          Balance: <span className="text-green-700">${balance}</span>
        </p>

        <button
          onClick={handleToggle}
          className="absolute top-5 right-5 border rounded-md px-3 py-2 bg-yellow-500 text-white text-sm hover:bg-yellow-400 transition duration-300"
        >
          {toggleCal ? "Income Page" : "Expense Page"}
        </button>

        <Transaction
          type={toggleCal ? "expense" : "income"}
          amount={amount}
          setAmount={setAmount}
          description={description}
          setDescription={setDescription}
          ourCategory={ourCategory}
          setOurCategory={setOurCategory}
          expenseHandler={expenseHandler}
          incomeHandler={incomeHandler}
          subAmount={subAmount}
          setSubAmount={setSubAmount}
        />
      </form>
    </div>
  );
}

function Transaction({
  type,
  subAmount,
  setSubAmount,
  description,
  setDescription,
  ourCategory,
  setOurCategory,
  expenseHandler,
  incomeHandler,
}) {
  const categories =
    type === "expense"
      ? ["Food", "Transport", "Entertainment", "Bills", "Other"]
      : ["Salary", "Freelance", "Investment", "Gift", "Other"];

  return (
    <div className="flex flex-wrap mt-4">
      <div className="w-[50%] px-2 mb-4">
        <label className="block text-teal-600 font-bold mb-1">
          {type === "expense" ? "Expense Amount" : "Income Amount"}
        </label>
        <input
          value={subAmount}
          onChange={(e) => setSubAmount(e.target.value)}
          type="number"
          placeholder={`Enter amount`}
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>

      <div className="w-[50%] px-2 mb-4">
        <label className="block text-teal-600 font-bold mb-1">Reason</label>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder={
            type === "expense" ? "e.g. Zara bag" : "e.g. Freelance work"
          }
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>

      <div className="w-full px-2 mb-4">
        <label className="block text-teal-600 font-bold mb-1">Category</label>
        <select
          value={ourCategory}
          onChange={(e) => setOurCategory(e.target.value)}
          className="w-full px-3 py-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
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
          onClick={(e) => {
            e.preventDefault();
            type === "expense" ? expenseHandler() : incomeHandler();
          }}
          className="w-[48%] px-3 py-2 rounded-md bg-teal-600 text-white text-sm hover:bg-teal-500 transition duration-300"
        >
          Add {type === "expense" ? "Expense" : "Income"}
        </button>
        <button className="w-[48%] px-3 py-2 rounded-md bg-gray-300 text-gray-700 text-sm hover:bg-gray-200 transition duration-300">
          View History
        </button>
      </div>
    </div>
  );
}

export default Expense;
