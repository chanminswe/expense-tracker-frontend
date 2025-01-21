import axios from "axios";
import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

function DashBoard() {
  const [mostSpentCategory, setMostSpentCategory] = useState("");
  const [mostSpentReason, setMostSpentReason] = useState("");
  const [recentTransactions, setRecentTransactions] = useState([]);
  const [totalSpent, setTotalSpent] = useState(0);
  const [categoryBreakdown, setCategoryBreakdown] = useState([]);
  const [balance, setBalance] = useState(0);

  const defaultData = [["Category", "Amount"], ["Food", 1], ["Bills", 1]];

  const options = {
    title: "Your Expenses by Category",
    pieHole: 0.3,
    backgroundColor: "",
    legend: { position: "bottom" },
  };

  useEffect(() => {
    async function getDashBoard() {
      const token = window.localStorage.getItem("jwt_token");
      const dashboard_data = await axios.get(
        "http://localhost:4040/api/auth/dashboard",
        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log(dashboard_data.data);

      setMostSpentReason(dashboard_data.data.mostSpentItem);
      setMostSpentCategory(dashboard_data.data.mostSpentCategory);
      setBalance(dashboard_data.data.balance);
      setTotalSpent(dashboard_data.data.totalSpent);
      setRecentTransactions(dashboard_data.data.recentTransactions);
      setCategoryBreakdown(dashboard_data.data.categoryBreakdown);
    }

    getDashBoard();
  }, []);

  const chartData = [
    ["Category", "Amount"],
    ...categoryBreakdown.map((item) => [item._id, item.total]),
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <IconBox title="Current Balance" price={balance} />
        <IconBox title="Total Spent" price={totalSpent} />
        <IconBox title="Most Spent Category" price={mostSpentCategory} />
        <IconBox title="Most Spent Reason" price={mostSpentReason} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-1 lg:col-span-1 bg-white border border-gray-300 rounded-lg p-5 shadow-md">
          <p className="text-lg font-semibold text-teal-700 mb-4">
            Last Spent Items
          </p>
          <div className="divide-y divide-gray-200">
            {recentTransactions.map((transaction, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-3"
              >
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {transaction.date}
                  </p>
                  <p className="text-xs text-gray-500">
                    {transaction.description}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-800">
                    ${transaction.amount}
                  </p>
                  <p className="text-xs text-gray-500">
                    {transaction.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-1 lg:col-span-2 bg-white border border-gray-300 rounded-lg p-5 shadow-md">
          <Chart
            chartType="PieChart"
            data={chartData.length > 1 ? chartData : defaultData} 
            options={options}
            width="100%"
            height="400px"
          />
        </div>
      </div>

      <div className="mt-6 bg-white border border-gray-300 rounded-lg p-5 shadow-md">
        <Chart
          chartType="LineChart"
          data={[
            ["Date", "Amount"],
            ["2025-01-01", 50],
            ["2025-01-02", 30],
          ]}
          options={{
            title: "Expenses Over January",
            pieHole: 0.3,
            backgroundColor: "",
            legend: { position: "bottom" },
          }}
          width="100%"
          height="400px"
        />
      </div>
    </div>
  );
}

function IconBox({ title, price }) {
  return (
    <div className="bg-white border border-gray-300 rounded-lg p-4 shadow-md flex flex-col items-start justify-between">
      <p className="text-sm font-medium text-gray-600">{title}</p>
      <p className="text-2xl font-bold text-teal-700 mt-2">{price}</p>
    </div>
  );
}

export default DashBoard;
