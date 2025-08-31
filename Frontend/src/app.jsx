import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/Home/Navbar";
import MainSection from "./Components/Home/MainPage";
import Footer from "./Components/Home/Footer";
import SignUp from "./Components/Navbarpages/SignUp";
import "./index.css";
import Login from "./Components/Navbarpages/Login";

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
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
