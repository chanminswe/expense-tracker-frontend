import React from "react";
import { Chart } from "react-google-charts";

function DashBoard() {
  const data = [
    ["Category", "Amount"],
    ["Food", 1],
    ["Bills", 1],
    ["Entertainment", 1],
    ["Transport", 1],
    ["Other", 1],
  ];

  const transactions = [
    { date: "2025-01-01", amount: 50, category: "Food", description: "Lunch" },
    {
      date: "2025-01-02",
      amount: 30,
      category: "Transport",
      description: "Taxi",
    },
  ];

  const options = {
    title: "Your Expenses",
    pieHole: 0.3,
    backgroundColor: "",
    legend: { position: "bottom" },
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <IconBox title="Current Balance" price={2000} />
        <IconBox title="Total Spent" price={200} />
        <IconBox title="Most Spent Category" price={2000} />
        <IconBox title="Most Spent Item" price={2000} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-1 lg:col-span-1 bg-white border border-gray-300 rounded-lg p-5 shadow-md">
          <p className="text-lg font-semibold text-teal-700 mb-4">
            Last Spent Items
          </p>
          <div className="divide-y divide-gray-200">
            {transactions.map((transaction, index) => (
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
            data={data}
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
      <p className="text-2xl font-bold text-teal-700 mt-2">${price}</p>
    </div>
  );
}

export default DashBoard;
