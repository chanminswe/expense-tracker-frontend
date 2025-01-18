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
    pieHole: 0.4,
    backgroundColor: "",
    border: "1px solid black",
    borderRadius: "15px",
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 w-full p-5">
      <IconBox title={"Current amount"} price={2000} />
      <IconBox title={"Total Spent"} price={200} />
      <IconBox title={"Category"} price={2000} />
      <IconBox title={"Revenue"} price={2000} />
      <div className="col-span-2 sm:col-span-2 lg:col-span-2 h-auto w-full border border-black rounded-md">
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"400px"}
        />
      </div>
      <div className="col-span-2 sm:col-span-2 lg:col-span-1 h-auto w-full border border-black rounded-md">
        <p className="p-3">Last spent items</p>
        <div className="flex flex-wrap justify-center w-full">
          {transactions.map((transaction, index) => (
            <div className="w-full">
              <p>
                {transaction.date} {transaction.amount}
              </p>
            </div>
          ))}
        </div>
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
