import React, { useState } from "react";
import ProfileImage from "../../assets/Profile-image.png";

const EditProfile = () => {
  const [preview, setPreview] = useState(ProfileImage);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-teal-50 to-emerald-100 py-10 flex justify-center items-center">
      <div className="max-w-3xl w-full bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl p-10 border border-white/40">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-blue-900 font-sans">
            Edit Profile
          </h1>
          <p className="text-gray-600 mt-2 font-sans">
            Update your personal information & keep your profile up to date ✨
          </p>
        </div>

        {/* Profile Image */}
        <div className="flex flex-col items-center mb-10">
          <div className="relative">
            <img
              src={preview}
              alt="Profile Preview"
              className="w-32 h-32 rounded-full shadow-lg border-4 border-white object-cover"
            />
            <label className="absolute -bottom-2 -right-2 bg-blue-600 hover:bg-blue-700 transition-colors w-9 h-9 rounded-full flex items-center justify-center cursor-pointer shadow-lg">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M12 4v16m8-8H4" />
              </svg>
              <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
            </label>
          </div>
          <p className="text-xs text-gray-500 mt-3 font-sans">
            Click + icon to upload a new profile picture
          </p>
        </div>

        {/* Form */}
        <div className="space-y-6">
          {/* Username */}
          <div>
            <label className="block text-sm font-semibold text-blue-950 mb-2">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent font-sans shadow-sm"
            />
          </div>

          {/* College Name */}
          <div>
            <label className="block text-sm font-semibold text-emerald-950 mb-2">
              College Name
            </label>
            <input
              type="text"
              placeholder="Enter college name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent font-sans shadow-sm"
            />
          </div>

          {/* Bio */}
          <div>
            <label className="block text-sm font-semibold text-purple-950 mb-2">
              Bio
            </label>
            <textarea
              rows={4}
              placeholder="Tell us about yourself..."
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent font-sans resize-none shadow-sm"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-10">
          <button className="bg-gradient-to-r from-gray-400 to-gray-600 hover:from-gray-500 hover:to-gray-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300">
            ❌ Cancel
          </button>
          <button className="bg-gradient-to-r from-blue-700 to-teal-500 hover:from-blue-800 hover:to-teal-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300">
            💾 Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
