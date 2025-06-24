import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../components/Contexts/AuthContext";
import { Link } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";

const ProfilePage = () => {
  const { user, setName, setPhoto } = useContext(AuthContext);
  const [name, setNameInput] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");

  useEffect(() => {
    const savedName = localStorage.getItem("userName");
    const savedPhoto = localStorage.getItem("userPhoto");

    setNameInput(savedName || user?.displayName || "Buddy");
    setPhotoUrl(
      savedPhoto ||
        user?.photoURL ||
        "https://i.postimg.cc/QM6LPFwV/icons8-avatar.gif"
    );
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setName(name);
    setPhoto(photoUrl);

    localStorage.setItem("userName", name);
    localStorage.setItem("userPhoto", photoUrl);

    toast("Profile updated successfully!");
  };

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 bg-white rounded-md shadow-md">
       <Helmet><title>Bill's Buddy | Profile Page</title></Helmet>
      <h2 className="text-2xl font-semibold text-orange-600 text-center mb-6">
        Edit Profile
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col items-center">
          <img
            src={photoUrl}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border"
          />
        </div>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div>
          <label className="block mb-1 font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setNameInput(e.target.value)}
            className="w-full border px-3 py-2 rounded focus:ring-orange-500 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="url"
            value={photoUrl}
            onChange={(e) => setPhotoUrl(e.target.value)}
            placeholder="https://i.postimg.cc/QM6LPFwV/icons8-avatar.gif"
            className="w-full border px-3 py-2 rounded focus:ring-orange-500 focus:outline-none"
            required
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition"
          >
            Save Profile
          </button>
        </div>
      </form>
      <div className="text-center mt-5">
        <Link
          to="/home"
          type=""
          className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default ProfilePage;
