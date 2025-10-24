import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/Navbar";
import MainSection from "./Pages/Home.jsx";
import Footer from "./Components/Footer";
import SignUp from "./Pages/SignUp.jsx";
import "./index.css";
import Login from "./Pages/Login.jsx";
import Profile from "./Pages/Profile.jsx";
import EditProfile from "./Pages/EditProfile.jsx";
import Test from "./Pages/Test.jsx";
import TestAttempt from "./TestConfig/Test.jsx";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<MainSection />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user" element={<Profile />} />
            <Route path="/user/edit" element={<EditProfile />} />
            <Route path="/test" element={<Test />} />
            <Route path="/test/:id" element={<TestAttempt />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
