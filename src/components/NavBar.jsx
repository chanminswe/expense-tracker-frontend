import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  return (
    <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-gray-100 border border-gray-300 rounded-full bottom-4 left-1/2 shadow-md">
      <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
        <button
          onClick={() => navigate("/dashboard")}
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-300 group"
        >
          <svg
            className="w-6 h-6 mb-1 text-orange-700 group-hover:text-orange-900"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
          </svg>
          <span className="sr-only">Home</span>
        </button>
        <button
          onClick={() => navigate("/expensecal")}
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-300 group"
        >
          <svg
            className="w-6 h-6 mb-1 text-orange-700 group-hover:text-orange-900"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z" />
            <path d="M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z" />
          </svg>
          <span className="sr-only">Wallet</span>
        </button>
        <div className="flex items-center justify-center">
          <button
            type="button"
            className="inline-flex items-center justify-center w-12 h-12 font-medium bg-gray-500 rounded-full shadow-lg hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
            <span className="sr-only">New item</span>
          </button>
        </div>
        <button
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-300 group"
        >
          <svg
            className="w-6 h-6 mb-1 text-orange-700 group-hover:text-orange-900"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
            />
          </svg>
          <span className="sr-only">Settings</span>
        </button>
        <button
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-300 group"
        >
          <svg
            className="w-6 h-6 mb-1 text-orange-700 group-hover:text-orange-900"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0Zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8Zm0-8a3.5 3.5 0 1 0-3.5-3.5A3.5 3.5 0 0 0 10 10ZM4 15a6 6 0 0 1 12 0Z" />
          </svg>
          <span className="sr-only">Profile</span>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
