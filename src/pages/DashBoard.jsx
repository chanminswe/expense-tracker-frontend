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
  };

  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 w-full p-5"
      style={{ gridAutoFlow: "dense" }}
    >
      <IconBox title={"Current amount"} price={2000} />
      <IconBox title={"Total Spent"} price={200} />
      <IconBox title={"Category"} price={2000} />
      <IconBox title={"Revenue"} price={2000} />

      <div className="col-span-2 sm:col-span-1 lg:col-span-1 h-auto w-full border border-black rounded-md p-3">
        <p className="text-xl font-semibold mb-3">Last Spent Items</p>
        <div className="w-full">
          {transactions.map((transaction, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-2 border-b border-black"
            >
              <div className="flex flex-col">
                <p className="text-sm font-medium">{transaction.date}</p>
                <p className="text-xs text-gray-600">
                  {transaction.description}
                </p>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-sm font-medium">${transaction.amount}</p>
                <p className="text-xs text-gray-600">{transaction.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-2 sm:col-span-2 lg:col-span-2 h-auto w-full border border-black rounded-md">
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"400px"}
        />
      </div>
      <div className="col-span-2 sm:col-span-1 lg:col-span-1 h-auto w-full border border-black rounded-md">
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
          }}
          width={"100%"}
          height={"400px"}
        />
      </div>
    </div>
  );
}

function IconBox({ title, price }) {
  return (
    <div className="flex flex-col h-32 w-full border border-black rounded-md p-2">
      <p className="text-start">{title}</p>
      <div className="flex justify-center items-center flex-grow">
        <p className="text-center text-lg font-semibold">${price}</p>
      </div>
    </div>
  );
}

export default DashBoard;
