import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import addUserIcon from "../assets/add-user.png";
import loginIcon from "../assets/login.png";
import logoIcon from "../assets/logo.png";
import ProfileImage from "../assets/default.png"; 
import { UserContext } from "../context/userContext"; 

const NavBar = () => {
  const { user } = useContext(UserContext); 
  const isLoggedIn = !!user;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 w-full py-5 px-4 md:px-6 flex items-center justify-between h-16 text-xl font-semibold shadow-lg bg-white z-50">
        {/* Logo */}
        <Link to="/" className="flex items-center cursor-pointer px-4 md:px-10 hover:scale-105 transition-transform duration-300" onClick={closeMobileMenu}>
          <img src={logoIcon} alt="Logo" className="mx-1 w-8 h-10 md:w-10 md:h-13" />
          <h2 className="text-blue-950 font-bold text-2xl md:text-3xl">Apti</h2>
          <h2 className="text-emerald-500 font-bold text-2xl md:text-3xl">Step</h2>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center text-2xl font-semibold text-blue-900 gap-10">
          <Link to="/test" className="px-3 py-1 rounded-lg cursor-pointer hover:bg-teal-50 hover:text-teal-600 hover:scale-105 transition-all duration-200">
            Tests
          </Link>
          <Link to="/features" className="px-3 py-1 rounded-lg cursor-pointer hover:bg-teal-50 hover:text-teal-600 hover:scale-105 transition-all duration-200">
            Features
          </Link>

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

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-blue-900 transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-blue-900 transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-blue-900 transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMobileMenu}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 right-0 w-64 h-[calc(100vh-4rem)] bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col py-6 px-4 space-y-4">
          <Link
            to="/test"
            onClick={closeMobileMenu}
            className="px-4 py-3 rounded-lg text-lg font-semibold text-blue-900 hover:bg-teal-50 hover:text-teal-600 transition-all duration-200"
          >
            Tests
          </Link>
          <Link
            to="/features"
            onClick={closeMobileMenu}
            className="px-4 py-3 rounded-lg text-lg font-semibold text-blue-900 hover:bg-teal-50 hover:text-teal-600 transition-all duration-200"
          >
            Features
          </Link>

          {/* Mobile Conditional Rendering */}
          {isLoggedIn ? (
            <Link
              to="/user"
              onClick={closeMobileMenu}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-teal-50 transition-all duration-200"
            >
              <img
                src={user.profilePic || ProfileImage}
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-teal-500 object-cover"
              />
              <span className="text-lg font-semibold text-blue-900">Profile</span>
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                onClick={closeMobileMenu}
                className="px-4 py-3 rounded-lg text-lg font-semibold text-blue-900 hover:bg-teal-50 hover:text-teal-600 transition-all duration-200 flex items-center gap-3"
              >
                <img src={loginIcon} alt="Log In" className="w-6 h-6" />
                <span>Log In</span>
              </Link>
              <Link
                to="/signup"
                onClick={closeMobileMenu}
                className="px-4 py-3 rounded-lg text-lg font-semibold text-blue-900 hover:bg-teal-50 hover:text-teal-600 transition-all duration-200 flex items-center gap-3"
              >
                <img src={addUserIcon} alt="Sign Up" className="w-6 h-6" />
                <span>Sign Up</span>
              </Link>
            </>
          )}
        </div>
      </div>

      <div className="mb-30"></div>
    </>
  );
};

export default NavBar;
