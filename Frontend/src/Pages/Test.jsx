import React from "react";
import { useContext,useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import {UserContext} from "../context/userContext";
import axios from "axios";
import TestTopics from "../AdditionalData/TestTopics.json"
import TestCards from "../Components/TestCards";

const Test = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:8080/user/test",
          {},
          { withCredentials: true } 
        );
        setUser(res.data.updatedUser);
      } catch (error) {
        console.error("Error:", error);
        alert("Error fetching test");
      }
    };

    fetchTest();
  }, [setUser]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <div className="flex-1">
              <h1 className="text-5xl font-bold text-gray-800 mb-4">
                Test Your Aptitude Skills
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Choose from various topics and track your progress!
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Interactive Tests
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Instant Results
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Progress Tracking
                </span>
              </div>
              <button onClick={() => navigate(`/test/${user._id}`)} className={`w-50 m-5 bg-gradient-to-r bg-blue-950 hover:opacity-90 text-white py-3 rounded-lg font-semibold transition-all duration-300`}>
                Start Test
              </button>
            </div>
          </div>
        </div>

        <TestCards topics={TestTopics} />

        {/* Quick Stats Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Your Test Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">0</div>
              <div className="text-sm text-gray-600">Tests Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">0%</div>
              <div className="text-sm text-gray-600">Average Score</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">0</div>
              <div className="text-sm text-gray-600">Total Questions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">0</div>
              <div className="text-sm text-gray-600">Time Spent</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-lg opacity-90 mb-6">
              Take comprehensive tests and improve your aptitude skills step by step
            </p>
            <button
              onClick={() => {
                // Navigate to first test or show all tests
                alert("Let's start with Quantitative Aptitude!");
              }}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
            >
              Begin Testing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;


