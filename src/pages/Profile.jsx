import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null); // Initialize as null to handle loading state

  const handleLogout = () => {
    // Clear token on logout (optional)
    window.localStorage.removeItem("jwt_token");
    navigate("/login");
  };

  useEffect(() => {
    async function getProfile() {
      try {
        const token = window.localStorage.getItem("jwt_token");

        const profileInfo = await axios.get(
          "http://localhost:4040/api/auth/profile",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setProfile(profileInfo.data.profile[0]);
      } catch (error) {
        console.error("Error fetching profile:", error.message);
      }
    }
    getProfile();
  }, []);

  if (!profile) {
    return (
      <div className="text-center mt-20">
        <p className="text-lg text-gray-600">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Your Profile
      </h2>

      <div className="space-y-4">
        <div>
          <p className="text-sm font-medium text-gray-600">Name:</p>
          <p className="text-lg text-gray-800">{profile.username}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-600">Balance:</p>
          <p className="text-lg text-gray-800">${profile.balance}</p>
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
