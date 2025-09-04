import { useState } from "react";
import { Link } from "react-router-dom";
import addUserIcon from "../../assets/add-user.png";
import loginIcon from "../../assets/login.png";
import logoIcon from "../../assets/logo.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Mock authentication state - replace with your actual auth logic
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full py-5 px-6 flex items-center justify-between h-16 text-xl font-semibold shadow-lg bg-white z-50">
        {/* Logo */}
        <div className="flex items-center cursor-pointer px-10 hover:scale-105 transition-transform duration-300">
          <img src={logoIcon} alt="Logo" className="mx-1 w-10 h-13" />
          <h2 className="text-blue-950 font-bold text-3xl">Apti</h2>
          <h2 className="text-emerald-500 font-bold text-3xl">Step</h2>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center text-2xl font-semibold text-blue-900 gap-10">
          <div className="px-3 py-1 rounded-lg cursor-pointer hover:bg-teal-50 hover:text-teal-600 hover:scale-105 transition-all duration-200">
            Tests
          </div>
          <div className="px-3 py-1 rounded-lg cursor-pointer hover:bg-teal-50 hover:text-teal-600 hover:scale-105 transition-all duration-200">
            Features
          </div>
          {isLoggedIn ? (
            <Link to="/profile" className="px-3 py-1 rounded-lg cursor-pointer hover:bg-teal-50 hover:text-teal-600 hover:scale-105 transition-all duration-200">
              <h4>Profile</h4>
            </Link>
          ) : (
            <Link to="/login" className="px-3 py-1 rounded-lg cursor-pointer flex items-center gap-2 hover:bg-teal-50 hover:text-teal-600 hover:scale-105 transition-all duration-200">
              <img src={loginIcon} alt="Log In" className="w-6 h-6" />
              <h4>Log In</h4>
            </Link>
          )}
          {!isLoggedIn && (
            <Link to="/signup" className="px-3 py-1 rounded-lg cursor-pointer flex items-center gap-2 hover:bg-teal-50 hover:text-teal-600 hover:scale-105 transition-all duration-200">
              <img src={addUserIcon} alt="Sign Up" className="w-6 h-6" />
              <h4>Sign Up</h4>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer text-blue-900 p-2 font-semibold rounded-md hover:bg-teal-50 transition-colors"
          >
            {/* Hamburger icon */}
            <svg
              className={`${isOpen ? 'hidden' : 'block'} h-7 w-7`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            {/* Close icon */}
            <svg
              className={`${isOpen ? 'block' : 'hidden'} h-7 w-7`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 text-2xl font-semibold text-blue-900 md:hidden z-50">
            <div className="px-3 py-1 rounded-lg cursor-pointer hover:bg-teal-50 hover:text-teal-600 transition-all duration-200">
              Tests
            </div>
            <div className="px-3 py-1 rounded-lg cursor-pointer hover:bg-teal-50 hover:text-teal-600 transition-all duration-200">
              Features
            </div>
            {isLoggedIn ? (
              <Link to="/profile" className="px-3 py-1 rounded-lg cursor-pointer hover:bg-teal-50 hover:text-teal-600 transition-all duration-200">
                <h4>Profile</h4>
              </Link>
            ) : (
              <Link to="/login" className="px-3 py-1 rounded-lg cursor-pointer flex items-center gap-2 hover:bg-teal-50 hover:text-teal-600 transition-all duration-200">
                <img src={loginIcon} alt="Log In" className="w-6 h-6" />
                <h4>Log In</h4>
              </Link>
            )}
            {!isLoggedIn && (
              <Link to="/signup" className="px-3 py-1 rounded-lg cursor-pointer flex items-center gap-2 hover:bg-teal-50 hover:text-teal-600 transition-all duration-200">
                <img src={addUserIcon} alt="Sign Up" className="w-6 h-6" />
                <h4>Sign Up</h4>
              </Link>
            )}
          </div>
        )}
      </nav>
      <div className="mb-30"></div>
    </>
  );
};

export default NavBar;
