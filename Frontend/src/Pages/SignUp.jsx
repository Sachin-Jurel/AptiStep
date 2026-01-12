import React, { useState , useContext} from "react";
import image from "../assets/image.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/userContext.jsx";


const SignUp = () => {
  const [UserData, setUserData] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const {setUser} = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_Backend_url}/signup`, {
        username: UserData.name,
        email: UserData.email,
        password: UserData.password,
      },
      {
        withCredentials: true, 
      });
      setUser(response.data.user);
localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/user");
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-200 py-0">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 rounded-2xl shadow-xl bg-white overflow-hidden">
        <div className="hidden md:flex items-center justify-center  p-8">
          <img
            src={image}
            alt="Create account"
            className="w-250 h-120 object-contain"
          />
        </div>

        <div className="p-8 sm:p-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-blue-900">
            Create your AptiStep account
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Join to practice aptitude, track progress, and improve faster.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label className="block text-m font-bold text-blue-900">
                Full name
              </label>
              <input
                type="text"
                required
                value={UserData.name}
                onChange={(e) =>
                  setUserData({ ...UserData, name: e.target.value })
                }
                placeholder="John Doe"
                className="mt-2 w-full text-emerald-800 font-bold font-mono text-1xl rounded-lg border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-m font-bold text-blue-900">
                Email
              </label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={UserData.email}
                onChange={(e) =>
                  setUserData({ ...UserData, email: e.target.value })
                }
                className="mt-2 text-emerald-800 font-bold font-mono text-1xl w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-m font-bold text-blue-900">
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={UserData.password}
                  onChange={(e) =>
                    setUserData({ ...UserData, password: e.target.value })
                  }
                  placeholder="••••••••"
                  className="mt-2 w-full text-emerald-800 font-bold font-mono text-1xl rounded-lg border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-m font-bold text-blue-900">
                  Confirm password
                </label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="mt-2 text-emerald-800 font-bold font-mono text-1xl w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex items-start gap-3">
              <input
                id="terms"
                type="checkbox"
                className="mt-1 h-4 w-4"
                required
              />
              <label htmlFor="terms" className="text-sm text-gray-700">
                I agree to the Terms of Service and Privacy Policy
              </label>
            </div>

              <button
                type="submit"
                className="w-full bg-emerald-500 mb-5 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
              >
                Create account
              </button>

            <div className="text-sm text-gray-600 text-center">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-emerald-700 font-semibold cursor-pointer"
              >
                Log in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
