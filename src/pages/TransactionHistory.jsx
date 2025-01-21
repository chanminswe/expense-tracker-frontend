import axios from "axios";
import React, { useEffect, useState } from "react";

function TransactionHistory() {
  const [recentTransactions, setRecentTransactions] = useState([]);

  useEffect(() => {
    async function getHistory() {
      const token = window.localStorage.getItem("jwt_token");
      const req = await axios.get(
        "http://localhost:4040/api/transactions/expenseHistory",
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setRecentTransactions(req.data.findHistory);
      console.log(req);
    }

    getHistory();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Transaction History
      </h2>

      {recentTransactions.length === 0 ? (
        <p className="text-gray-500 text-sm text-center">
          No transactions found.
        </p>
      ) : (
        <div className="divide-y divide-gray-200">
          {recentTransactions.map((transaction, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-4 hover:bg-gray-50 transition duration-200"
            >
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  {transaction.date}
                </p>
                <p className="text-sm text-gray-500">
                  {transaction.description}
                </p>
              </div>
              <div className="text-right">
                <p className="text-base font-semibold text-teal-700">
                  ${transaction.amount}
                </p>
                <p className="text-sm text-gray-500">{transaction.category}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TransactionHistory;
