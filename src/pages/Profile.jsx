import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  useEffect(() => {
    async function getProfile() {
      const token = window.localStorage.getItem("jwt_token");

      const profileInfo = await axios.get(
        "http://localhost:4040/api/auth/profile",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      console.log(profileInfo);
    }
    getProfile();
  }, []);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Your Profile
      </h2>

      <div className="space-y-4">
        <div>
          <p className="text-sm font-medium text-gray-600">Name:</p>
          <p className="text-lg text-gray-800">John Doe</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-600">Balance:</p>
          <p className="text-lg text-gray-800">johndoe@example.com</p>
        </div>
      </div>

      <button
        onClick={handleLogout}
        className="mt-6 w-full bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition"
      >
        Log Out
      </button>
    </div>
  );
}

export default Profile;
