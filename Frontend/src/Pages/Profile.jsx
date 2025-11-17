import React, { useContext } from "react";
import "../index.css";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate, Link } from "react-router-dom";
import ProfileImage from "../assets/default.png";

const Profile = () => {
  const [user, setuser] = useState();
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:8080/user", {
          withCredentials: true,
        });
        if (!res.data) {
          navigate("/");
          return;
        }
        
        
        setUser(res.data);
        setuser(res.data);
      } catch (err) {
        navigate("/")
      }
    };

    fetchUser();
  }, [navigate, setUser]);

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:8080/logout",
        {},
        { withCredentials: true }
      );
      localStorage.removeItem("user");
      setUser(null);
      navigate("/");
    } catch (err) {
      navigate("/")
    }
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-emerald-50 py-8">
      <div className="w-full flex justify-center">
        <div className="max-w-6xl w-full mx-4">
          {/* Main Profile Card */}
          <div className="bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl overflow-hidden border border-white/20">
            <div className="flex flex-col lg:flex-row">
              {/* Profile Image Section */}
              <div className="lg:w-1/3 bg-gradient-to-br from-blue-950 via-teal-600 to-emerald-500 px-8 flex flex-col items-center justify-center relative">
                <div className="relative z-10 text-center">
                  {/* Profile Image */}
                  <div className="relative animate-fade-in mb-6">
                    <img
                      src={user?.profilePic || ProfileImage}
                    alt="Profile"
                      className="w-50 h-50 rounded-full shadow-xl border-4 border-white/30 object-cover mx-auto"
                    />
                  </div>

                  {/* User Info */}
                  <div className="space-y-4">
                    <div className="relative">
                      <h1 className="text-3xl font-bold text-white mb-1 drop-shadow-lg font-sans tracking-tight">
                        {user?.username || "Username"}
                      </h1>
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-emerald-300 to-transparent"></div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-2xl px-4 py-3 border border-emerald-200/30 shadow-lg">
                      <div className="flex items-center justify-center mb-2">
                        <svg className="w-4 h-4 text-emerald-200 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span className="text-xs font-semibold text-emerald-100 uppercase tracking-wider font-sans">About</span>
                      </div>
                      <p className="text-white text-sm leading-relaxed text-center font-sans font-medium">
                        {user?.bio || "Passionate learner and problem solver"}
                      </p>
                    </div>
                  </div>
                  
                  
                </div>
              </div>

              {/* Profile Details Section */}
              <div className="lg:w-2/3 p-8">
                <div className="mb-8">
                  {/* College Information */}
                  <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-6 border border-blue-100 shadow-lg mb-6">
                    <div className="flex items-center">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          <h2 className="text-2xl font-bold text-blue-950 font-sans">
                            {user?.college || "College name"}
                  </h2>
                        </div>
                        <div className="flex items-center">
                          <div className="bg-gradient-to-r from-emerald-100 to-teal-100 px-3 py-1 rounded-full">
                            <span className="text-sm font-semibold text-emerald-700 font-sans">🎓 Student</span>
                          </div>
                          <div className="ml-4 bg-gradient-to-r from-blue-100 to-teal-100 px-3 py-1 rounded-full">
                            <span className="text-sm font-semibold text-blue-700 font-sans">📚 Academic</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Status and Join Date */}
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="bg-gradient-to-r from-emerald-400 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                      ✨ Active Member
                    </span>
                    <span className="text-gray-600 text-sm bg-gray-100 px-3 py-1 rounded-full">
                      📅 Joined: {user?.createdAt ? new Date(user.createdAt).toLocaleDateString("en-US") : "Loading..."}
                    </span>
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-3xl font-bold text-blue-950 mb-1">
                      {user?.score || "0"}
                        </div>
                        <div className="text-sm text-blue-900 font-medium">Total Score</div>
                      </div>
                      <div className="w-12 h-12 bg-blue-950 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-2xl border border-teal-200 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-3xl font-bold text-teal-700 mb-1">
                      {user?.testsCompleted || "0"}
                        </div>
                        <div className="text-sm text-teal-600 font-medium">Tests Completed</div>
                      </div>
                      <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-2xl border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-3xl font-bold text-emerald-700 mb-1">
                      {user?.rank || "N/A"}
                        </div>
                        <div className="text-sm text-emerald-600 font-medium">Current Rank</div>
                      </div>
                      <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/user/edit"
                    className="bg-gradient-to-r from-blue-950 to-teal-600 hover:from-blue-900 hover:to-teal-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
                  >
                    ✏️ Edit Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    🚪 Log out
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Cards Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            {/* Recent Activity Card */}
            <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-3xl p-8 border border-white/20">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-950 to-teal-600 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                Recent Activity
              </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-2xl border border-emerald-200 hover:shadow-lg transition-all duration-300">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full mr-4"></div>
                  <div className="flex-1">
                    <span className="text-sm font-medium text-gray-800">
                      🎯 Completed Aptitude Test #1
                  </span>
                    <div className="text-xs text-gray-600 mt-1">Scored 85% in Quantitative Aptitude</div>
                  </div>
                  <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded-full">
                    2h ago
                  </span>
                </div>
                <div className="flex items-center p-4 bg-gradient-to-r from-teal-50 to-teal-100 rounded-2xl border border-teal-200 hover:shadow-lg transition-all duration-300">
                  <div className="w-3 h-3 bg-teal-600 rounded-full mr-4"></div>
                  <div className="flex-1">
                    <span className="text-sm font-medium text-gray-800">
                      📝 Updated Profile Information
                  </span>
                    <div className="text-xs text-gray-600 mt-1">Added new skills and achievements</div>
                  </div>
                  <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded-full">
                    1d ago
                  </span>
                </div>
                <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300">
                  <div className="w-3 h-3 bg-blue-950 rounded-full mr-4"></div>
                  <div className="flex-1">
                    <span className="text-sm font-medium text-gray-800">
                      🚀 Started Practice Session
                  </span>
                    <div className="text-xs text-gray-600 mt-1">Logical Reasoning practice</div>
                  </div>
                  <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded-full">
                    3d ago
                  </span>
                </div>
              </div>
            </div>

            {/* Performance Overview Card */}
            <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-3xl p-8 border border-white/20">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                Performance Overview
              </h3>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-semibold text-gray-700">📊 Quantitative Aptitude</span>
                    <span className="text-lg font-bold text-emerald-600">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
                    <div
                      className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-3 rounded-full shadow-lg"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-semibold text-gray-700">🧠 Logical Reasoning</span>
                    <span className="text-lg font-bold text-teal-600">72%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
                    <div
                      className="bg-gradient-to-r from-teal-500 to-teal-600 h-3 rounded-full shadow-lg"
                      style={{ width: "72%" }}
                    ></div>
                  </div>
                </div>
          <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-semibold text-gray-700">📚 Verbal Ability</span>
                    <span className="text-lg font-bold text-blue-950">68%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
                    <div
                      className="bg-gradient-to-r from-blue-950 to-blue-800 h-3 rounded-full shadow-lg"
                      style={{ width: "68%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

