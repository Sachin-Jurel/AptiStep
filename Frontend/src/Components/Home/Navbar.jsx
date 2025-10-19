import { useContext } from "react";
import { Link } from "react-router-dom";
import addUserIcon from "../../assets/add-user.png";
import loginIcon from "../../assets/login.png";
import logoIcon from "../../assets/logo.png";
import ProfileImage from "../../assets/default.png"; 
import { UserContext } from "../../context/userContext"; 

const NavBar = () => {
  const { user } = useContext(UserContext); 
  const isLoggedIn = !!user;

  return (
    <>
      <nav className="fixed top-0 w-full py-5 px-6 flex items-center justify-between h-16 text-xl font-semibold shadow-lg bg-white z-50">
        {/* Logo */}
        <Link to="/" className="flex items-center cursor-pointer px-10 hover:scale-105 transition-transform duration-300">
          <img src={logoIcon} alt="Logo" className="mx-1 w-10 h-13" />
          <h2 className="text-blue-950 font-bold text-3xl">Apti</h2>
          <h2 className="text-emerald-500 font-bold text-3xl">Step</h2>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center text-2xl font-semibold text-blue-900 gap-10">
          <Link to="/test" className="px-3 py-1 rounded-lg cursor-pointer hover:bg-teal-50 hover:text-teal-600 hover:scale-105 transition-all duration-200">
            Tests
          </Link>
          <div className="px-3 py-1 rounded-lg cursor-pointer hover:bg-teal-50 hover:text-teal-600 hover:scale-105 transition-all duration-200">
            Features
          </div>

          {/* ✅ Conditional Rendering */}
          {isLoggedIn ? (
            <Link to="/user" className="flex items-center gap-2 cursor-pointer">
              <img
                src={user.profilePic || ProfileImage} 
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-teal-500 object-cover"
              />
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                className="px-3 py-1 rounded-lg cursor-pointer flex items-center gap-2 hover:bg-teal-50 hover:text-teal-600 hover:scale-105 transition-all duration-200"
              >
                <img src={loginIcon} alt="Log In" className="w-6 h-6" />
                <h4>Log In</h4>
              </Link>
              <Link
                to="/signup"
                className="px-3 py-1 rounded-lg cursor-pointer flex items-center gap-2 hover:bg-teal-50 hover:text-teal-600 hover:scale-105 transition-all duration-200"
              >
                <img src={addUserIcon} alt="Sign Up" className="w-6 h-6" />
                <h4>Sign Up</h4>
              </Link>
            </>
          )}
        </div>
      </nav>
      <div className="mb-30"></div>
    </>
  );
};

export default NavBar;
