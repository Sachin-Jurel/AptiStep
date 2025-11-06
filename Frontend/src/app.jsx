import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/Navbar";
import MainSection from "./Pages/Home.jsx";
import Footer from "./Components/Footer";
import SignUp from "./Pages/SignUp.jsx";
import "./index.css";
import Login from "./Pages/Login.jsx";
import Profile from "./Pages/Profile.jsx";
import EditProfile from "./Pages/EditProfile.jsx";
import TestAttempt from "./Pages/StartTest.jsx";
import Quant from "./Pages/Quantitative/QuantPage.jsx";
import Logical from "./Pages/Logical/LogicalPage.jsx";
import Verbal from "./Pages/Verbal/VerbalPage.jsx";
import DI from "./Pages/Data Interpretation/DI.jsx";
import GK from "./Pages/GK/GK.jsx";
import CA from "./Pages/Computer Awareness/CA.jsx";
import MainTest from "./Pages/TestPage.jsx";

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
            <Route path="/test" element={<MainTest />} />
            <Route path="/test/:id" element={<TestAttempt />} />
            <Route path="/test/Quantitative" element={<Quant />} />
            <Route path="/test/logicalReasoning" element={<Logical />} />
            <Route path="/test/verbalAbility" element={<Verbal />} />
            <Route path="/test/dataInterpretation" element={<DI />} />
            <Route path="/test/GeneralKnowledge" element={<GK />} />
            <Route path="/test/computerAwareness" element={<CA />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
