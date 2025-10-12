import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ProfileImage from "../../assets/Profile-image.png";

const EditProfile = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    userBio: "",
    college_name: "",
    profilePic: ""
  });

  useEffect(() => {
    if (user) {
      setFormData({
        username: user.username || "",
        userBio: user.userBio || "",
        college_name: user.college_name || "",
        profilePic: user.profilePic || ""
      });
      setImagePreview(user.profilePic || ProfileImage);
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Update image preview when profilePic URL changes
    if (name === 'profilePic') {
      setImagePreview(value || ProfileImage);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select a valid image file');
        return;
      }
      
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB');
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        const imageDataUrl = event.target.result;
        setImagePreview(imageDataUrl);
        setFormData(prev => ({
          ...prev,
          profilePic: imageDataUrl
        }));
        
        // Store in localStorage
        localStorage.setItem('profileImage', imageDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImagePreview(ProfileImage);
    setFormData(prev => ({
      ...prev,
      profilePic: ""
    }));
    localStorage.removeItem('profileImage');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.put(
        "http://localhost:8080/user/update",
        formData,
        { withCredentials: true }
      );

      if (response.data) {
        setUser(response.data);
        navigate("/profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate("/profile");
  };

  if (!user) {
    navigate("/");
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-emerald-50 py-8">
      <div className="w-full flex justify-center">
        <div className="max-w-4xl w-full mx-4">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-blue-950 mb-2 font-sans">
              Edit Profile
            </h1>
            <p className="text-gray-600 font-sans">
              Update your personal information and preferences
            </p>
          </div>

          {/* Main Form Card */}
          <div className="bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl overflow-hidden border border-white/20">
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Profile Picture Section */}
                <div className="text-center">
                  <div className="relative inline-block mb-6">
                    <img
                      src={imagePreview}
                      alt="Profile"
                      className="w-32 h-32 rounded-full shadow-xl border-4 border-white/30 object-cover mx-auto"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-emerald-500 w-8 h-8 rounded-full border-3 border-white flex items-center justify-center shadow-lg">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>

                  {/* Image Upload Options */}
                  <div className="space-y-4">
                    {/* Upload from Device */}
                    <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-4 border border-blue-100">
                      <label className="block text-sm font-semibold text-blue-950 mb-2 font-sans">
                        Upload from Device
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent font-sans file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
                      />
                      <p className="text-xs text-gray-500 mt-2 font-sans">
                        Supported formats: JPG, PNG, GIF (Max 5MB)
                      </p>
                    </div>


                    {/* Remove Image Button */}
                    {imagePreview !== ProfileImage && (
                      <button
                        type="button"
                        onClick={removeImage}
                        className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-2 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-sans"
                      >
                        🗑️ Remove Image
                      </button>
                    )}
                  </div>
                </div>

                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-4 border border-blue-100">
                    <label className="block text-sm font-semibold text-blue-950 mb-2 font-sans">
                      Username *
                    </label>
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent font-sans"
                    />
                  </div>

                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-4 border border-emerald-100">
                    <label className="block text-sm font-semibold text-emerald-950 mb-2 font-sans">
                      College Name *
                    </label>
                    <input
                      type="text"
                      name="college_name"
                      value={formData.college_name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent font-sans"
                    />
                  </div>
                </div>


                {/* Bio Section */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-4 border border-purple-100">
                  <label className="block text-sm font-semibold text-purple-950 mb-2 font-sans">
                    Bio
                  </label>
                  <textarea
                    name="userBio"
                    value={formData.userBio}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Tell us about yourself..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent font-sans resize-none"
                  />
                </div>


                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-gradient-to-r from-blue-950 to-teal-600 hover:from-blue-900 hover:to-teal-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed font-sans"
                  >
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Updating...
                      </div>
                    ) : (
                      "💾 Save Changes"
                    )}
                  </button>
                  
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-sans"
                  >
                    ❌ Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
