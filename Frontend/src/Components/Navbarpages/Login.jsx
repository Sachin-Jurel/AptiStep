import React from "react";
import loginImage from "../../assets/loginImage.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [UserData, setUserData] = React.useState({
    email: "",
    password: ""
  })
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/login",{
        email: UserData.email,
        password: UserData.password,
      },{
        withCredentials: true, 
      })
      navigate("/profile");
    } catch (err) {
      console.error('Error registering user:', err);
    }
  }
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-200  py-0">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 rounded-2xl shadow-xl bg-white overflow-hidden">
        <div className="p-8 sm:p-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-blue-900">
            Ready to practice? Log in
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Join to practice aptitude, track progress, and improve faster.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">

            <div>
              <label className="block text-sm font-semibold text-blue-900">
                Email
              </label>
              <input
                type="email"
                required
                value={UserData.email}
                onChange={(e)=> setUserData({...UserData, email: e.target.value})}
                placeholder="you@example.com"
                className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-blue-900">
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={UserData.password}
                  onChange={(e)=> setUserData({...UserData, password: e.target.value})}
                  placeholder="••••••••"
                  className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
            >
              Let’s Go!
            </button>

            <div className="text-sm text-gray-600 text-center">
              Don't have an account?{" "}
              <Link to="/signup" className="text-[#3BA97F] font-semibold cursor-pointer hover:text-[#3BA97F]/80">
                Sign up
              </Link>
            </div>
          </form>
        </div>

        <div className="hidden md:flex items-center justify-center  p-8">
          <img
            src={loginImage}
            alt="Create account"
            className="w-250 h-120 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
