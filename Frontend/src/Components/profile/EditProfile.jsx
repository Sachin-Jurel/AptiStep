import React, { useState, useEffect, useContext } from "react";
import ProfileImage from "../../assets/default.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";

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
          const { data } = await axios.get("http://localhost:8080/user", {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-teal-50 to-emerald-100 py-5 flex justify-center items-center">
      <div className="max-w-3xl w-full bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl p-10 border border-white/40">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-blue-900 font-sans">
            Edit Profile
          </h1>
          <p className="text-gray-600 mt-2 font-bold font-sans">
            Update your personal information & keep your profile up to date ✨
          </p>
        </div>

        <div className="flex flex-col items-center mb-10">
          <div className="relative">
            <img
              src={UserData.profilePic || ProfileImage}
              alt="Profile Preview"
              className="w-32 h-32 rounded-full shadow-lg border-4 border-white object-cover"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-m font-bold text-blue-900 mb-2">
              Image
            </label>
            <form
              className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-4 border border-blue-100"
            >
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <input
                    type="file"
                    required
                    onChange={handleFileChange}
                    className="w-full px-4 py-3 border border-gray-300 text-blue-900 font-bold font-sans text-1xl rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                  />
                  <p className="text-xs text-gray-500 mt-2 font-sans">
                    PNG, JPG up to 5MB
                  </p>
                </div>
              </div>
            </form>
          </div>
          <div>
            <label className="block text-m font-bold text-blue-950 mb-2">
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
              className="w-full px-4 text-emerald-800 font-bold font-mono text-1xl py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
            />
          </div>

          <div>
            <label className="block text-m font-bold text-emerald-950 mb-2">
              College Name
            </label>
            <input
              type="text"
              placeholder="Enter college name"
              value={UserData.college}
              onChange={(e) =>
                setUserData({ ...UserData, college: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500  text-emerald-800 font-bold font-mono text-1xl focus:border-transparent shadow-sm"
            />
          </div>

          <div>
            <label className="block text-m font-bold text-purple-950 mb-2">
              Bio
            </label>
            <textarea
              rows={4}
              placeholder="Tell us about yourself..."
              value={UserData.bio}
              onChange={(e) =>
                setUserData({ ...UserData, bio: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-300 text-emerald-800 font-bold font-mono text-1xl rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none shadow-sm"
            />
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-10">
          <button className="bg-gradient-to-r from-gray-400 to-gray-600 hover:from-gray-500 hover:to-gray-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300">
            ❌ Cancel
          </button>
          <button
            onClick={handleOnSubmit}
            className="bg-gradient-to-r from-blue-700 to-teal-500 hover:from-blue-800 hover:to-teal-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300"
          >
            💾 Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
