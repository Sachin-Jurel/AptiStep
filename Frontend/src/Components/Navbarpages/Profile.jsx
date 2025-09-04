import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#3BA97F]/10 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-xl border border-[#3BA97F]/20 p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#0A0F48] to-[#3BA97F] flex items-center justify-center text-white text-3xl font-bold">
              AS
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold text-[#0A0F48] mb-2">
                AptiStep User
              </h1>
              <p className="text-gray-600 text-lg mb-4">user@example.com</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <button className="px-6 py-3 bg-[#3BA97F] text-white font-semibold rounded-lg hover:bg-[#3BA97F]/80 transition-colors duration-200">
                  Edit Profile
                </button>
                <button className="px-6 py-3 border border-[#0A0F48] text-[#0A0F48] font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg border border-[#3BA97F]/20 p-6 text-center">
            <div className="text-3xl font-bold text-[#0A0F48] mb-2">12</div>
            <div className="text-gray-600">Total Quizzes</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg border border-[#3BA97F]/20 p-6 text-center">
            <div className="text-3xl font-bold text-[#0A0F48] mb-2">82%</div>
            <div className="text-gray-600">Average Score</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg border border-[#3BA97F]/20 p-6 text-center">
            <div className="text-3xl font-bold text-[#0A0F48] mb-2">156</div>
            <div className="text-gray-600">Questions Solved</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg border border-[#3BA97F]/20 p-6 text-center">
            <div className="text-3xl font-bold text-[#0A0F48] mb-2">8</div>
            <div className="text-gray-600">Study Hours</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Personal Information */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg border border-[#3BA97F]/20 p-8">
            <h2 className="text-2xl font-bold text-[#0A0F48] mb-6">
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#0A0F48] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue="AptiStep User"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#3BA97F] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0A0F48] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue="user@example.com"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#3BA97F] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0A0F48] mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  defaultValue="+1 234 567 8900"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#3BA97F] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0A0F48] mb-2">
                  Location
                </label>
                <input
                  type="text"
                  defaultValue="New York, USA"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#3BA97F] focus:border-transparent"
                />
              </div>
            </div>
            <button className="mt-6 px-6 py-3 bg-[#3BA97F] text-white font-semibold rounded-lg hover:bg-[#3BA97F]/80 transition-colors duration-200">
              Save Changes
            </button>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-2xl shadow-lg border border-[#3BA97F]/20 p-8">
            <h2 className="text-2xl font-bold text-[#0A0F48] mb-6">
              Performance
            </h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Logical Reasoning</span>
                  <span className="font-semibold text-[#0A0F48]">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-[#3BA97F] h-2 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Quantitative</span>
                  <span className="font-semibold text-[#0A0F48]">78%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-[#3BA97F] h-2 rounded-full"
                    style={{ width: "78%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Verbal Ability</span>
                  <span className="font-semibold text-[#0A0F48]">92%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-[#3BA97F] h-2 rounded-full"
                    style={{ width: "92%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg border border-[#3BA97F]/20 p-8">
          <h2 className="text-2xl font-bold text-[#0A0F48] mb-6">
            Recent Activity
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-50">
              <div className="w-3 h-3 bg-[#3BA97F] rounded-full"></div>
              <div className="flex-1">
                <div className="font-semibold text-[#0A0F48]">
                  Completed Logical Reasoning Quiz
                </div>
                <div className="text-gray-600 text-sm">
                  Score: 85% • 2 hours ago
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-50">
              <div className="w-3 h-3 bg-[#3BA97F] rounded-full"></div>
              <div className="flex-1">
                <div className="font-semibold text-[#0A0F48]">
                  Started Quantitative Practice
                </div>
                <div className="text-gray-600 text-sm">
                  Progress: 60% • 1 day ago
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-50">
              <div className="w-3 h-3 bg-[#3BA97F] rounded-full"></div>
              <div className="flex-1">
                <div className="font-semibold text-[#0A0F48]">
                  Achieved New Badge
                </div>
                <div className="text-gray-600 text-sm">
                  Speed Demon • 3 days ago
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
