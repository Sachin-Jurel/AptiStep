import React, { useState, useEffect, useContext } from "react";
import ProfileImage from "./../assets/default.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
import {
  UserCircleIcon,
  CameraIcon,
  AcademicCapIcon,
  PencilSquareIcon,
  ArrowLeftCircleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";

const EditProfile = () => {
  const [UserData, setUserData] = useState({
    username: "",
    college: "",
    bio: "",
    profilePic: "",
  });
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);
  const [file, setFile] = useState(null);

  useEffect(() => {
    const ensureUser = async () => {
      if (!user) {
        try {
          const { data } = await axios.get(`${import.meta.env.VITE_Backend_url}/user`, {
            withCredentials: true,
          });
          setUser && setUser(data);
        } catch (err) {}
      }
    };
    ensureUser();
  }, []);

  useEffect(() => {
    if (user) {
      setUserData({
        username: user.username || "",
        college: user.college || "",
        bio: user.bio || "",
        profilePic: user.profilePic || "",
      });
    }
  }, [user]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", UserData.username);
    formData.append("college", UserData.college);
    formData.append("bio", UserData.bio);
    if (file) {
      formData.append("avatar", file);
    }

    try {
      const res = await axios.put("http://localhost:8080/user/edit", formData, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.data.updatedUser) {
        setUser(res.data.updatedUser);
      }

      navigate("/user");
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center relative"
      style={{
        fontFamily: "Montserrat, Roboto, sans-serif",
        background: "linear-gradient(135deg, #e0e7ff 0%, #d1fae5 100%)",
        overflow: "hidden",
      }}
    >
      <div className="max-w-2xl w-full bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl mb-10 p-10 border border-white/40 z-10">
        <div className="text-center mb-8">
          <h1
            className="text-4xl font-extrabold text-blue-900 flex items-center justify-center gap-2"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            <UserCircleIcon className="w-10 h-10 text-blue-700" />
            Edit Profile
          </h1>
          <p
            className="text-gray-600 font-semibold mt-2 flex items-center justify-center gap-2"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            <PencilSquareIcon className="w-5 h-5 text-teal-500" />
            Update your personal information & keep your profile up to date ✨
          </p>
        </div>

        <div className="flex flex-col items-center mb-10">
          <div className="relative group">
            {/* Decorative gradient ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-400 to-blue-500 opacity-60 blur-md group-hover:opacity-80 transition duration-300"></div>

            {/* Profile Image */}
            <img
              src={UserData.profilePic || ProfileImage}
              alt="Profile Preview"
              className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full object-cover shadow-xl border-4 border-white transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>

        <form className="space-y-6" onSubmit={handleOnSubmit}>
          <div>
            <label
              className="block text-m font-bold text-blue-900 mb-2 flex items-center gap-2"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              <CameraIcon className="w-5 h-5 text-blue-700" />
              Profile Image
            </label>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full px-4 py-3 border border-gray-300 text-blue-900 font-semibold font-sans text-lg rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
              style={{
                fontFamily: "Montserrat, sans-serif",
                background: "#F3F4F6",
              }}
            />
            <p className="text-xs text-gray-500 mt-2 font-sans">
              PNG, JPG up to 5MB
            </p>
          </div>
          <div>
            <label
              className="block text-m font-bold text-blue-950 mb-2 flex items-center gap-2"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              <UserCircleIcon className="w-5 h-5 text-blue-700" />
              Username
            </label>
            <input
              type="text"
              placeholder="Enter username"
              required
              value={UserData.username}
              onChange={(e) =>
                setUserData({ ...UserData, username: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm text-gray-700 font-semibold text-lg"
              style={{
                fontFamily: "Montserrat, sans-serif",
                background: "#F3F4F6",
              }}
            />
          </div>

          <div>
            <label
              className="block text-m font-bold text-emerald-950 mb-2 flex items-center gap-2"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              <AcademicCapIcon className="w-5 h-5 text-emerald-700" />
              College Name
            </label>
            <input
              type="text"
              placeholder="Enter college name"
              value={UserData.college}
              onChange={(e) =>
                setUserData({ ...UserData, college: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 text-gray-700 font-semibold text-lg focus:border-transparent shadow-sm"
              style={{
                fontFamily: "Montserrat, sans-serif",
                background: "#F3F4F6",
              }}
            />
          </div>

          <div>
            <label
              className="block text-m font-bold text-purple-950 mb-2 flex items-center gap-2"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              <PencilSquareIcon className="w-5 h-5 text-purple-700" />
              Bio
            </label>
            <textarea
              rows={4}
              placeholder="Tell us about yourself..."
              value={UserData.bio}
              onChange={(e) =>
                setUserData({ ...UserData, bio: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none shadow-sm text-gray-700 font-semibold text-lg"
              style={{
                fontFamily: "Montserrat, sans-serif",
                background: "#F3F4F6",
              }}
            />
          </div>

          <div className="flex justify-end gap-4 pt-6">
            <button
              type="button"
              className="flex items-center gap-2 bg-gradient-to-r from-gray-400 to-gray-600 hover:from-gray-500 hover:to-gray-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300"
              onClick={() => navigate("/user")}
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              <ArrowLeftCircleIcon className="w-6 h-6" />
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 bg-gradient-to-r from-blue-700 to-teal-500 hover:from-blue-800 hover:to-teal-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              <CheckCircleIcon className="w-6 h-6" />
              Save
            </button>
          </div>
        </form>
      </div>
      {/* Google Fonts link */}
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;400&display=swap"
        rel="stylesheet"
      />
    </div>
  );
};

export default EditProfile;
