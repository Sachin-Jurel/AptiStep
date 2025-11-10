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
import QuantTest from "./Pages/Quantitative/QuantTest.jsx";
import Features from "./Pages/Features.jsx";
import Arithmetic from "./Pages/Quantitative/ArithmaticPage.jsx";
import Algebra from "./Pages/Quantitative/AlgebraPage.jsx";
import Geometry from "./Pages/Quantitative/GeometryPage.jsx";
import Statistics from "./Pages/Quantitative/StatisticsPage.jsx";
import Probability from "./Pages/Quantitative/ProbabilityPage.jsx";
import Pattern from "./Pages/Logical/PatternPage.jsx";
import Analytical from "./Pages/Logical/Analytical.jsx";
import Syllogism from "./Pages/Logical/syllogismPage.jsx";
import Blood from "./Pages/Logical/BloodPage.jsx";
import Direction from "./Pages/Logical/DirectionPage.jsx";
import Grammar from "./Pages/Verbal/GrammarPage.jsx";
import Reading from "./Pages/Verbal/ReadingPage.jsx";
import Vocabulary from "./Pages/Verbal/VocabularyPage.jsx";
import Synonyms from "./Pages/Verbal/SynonymsPage.jsx";
import Antonyms from "./Pages/Verbal/AntonymsPage.jsx";
import Charts from "./Pages/Data Interpretation/ChartsPage.jsx";
import Graphs from "./Pages/Data Interpretation/GraphsPage.jsx";
import Tables from "./Pages/Data Interpretation/TablesPage.jsx";
import PieCharts from "./Pages/Data Interpretation/PieChartsPage.jsx";
import BarGraphs from "./Pages/Data Interpretation/BarGraphsPage.jsx";
import CurrentAffairs from "./Pages/GK/CurrentAffairsPage.jsx";
import History from "./Pages/GK/HistoryPage.jsx";
import Geography from "./Pages/GK/GeographyPage.jsx";
import Science from "./Pages/GK/SciencePage.jsx";
import Sports from "./Pages/GK/SportsPage.jsx";

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
            <Route path="/test/Quantitative/:id" element={<QuantTest />} />
            <Route path="/features" element={<Features />} />


            <Route path="/test/Quantitative/arithmetic" element={<Arithmetic />} />
            <Route path="/test/Quantitative/algebra" element={<Algebra />} />           
            <Route path="/test/Quantitative/geometry" element={<Geometry />} />  
            <Route path="/test/Quantitative/statistics" element={<Statistics />} />
            <Route path="/test/Quantitative/probability" element={<Probability />} />

            <Route path="/test/logicalReasoning/pattern" element={<Pattern/>}/>
            <Route path="/test/logicalReasoning/analytical" element={<Analytical/>}/>
            <Route path="/test/logicalReasoning/syllogism" element={<Syllogism/>}/>
            <Route path="/test/logicalReasoning/bloodRelations" element={<Blood/>}/>
            <Route path="/test/logicalReasoning/directionSense" element={<Direction/>}/>

            <Route path="/test/verbalAbility/grammar" element={<Grammar/>}/>
            <Route path="/test/verbalAbility/vocabulary" element={<Vocabulary/>}/>
            <Route path="/test/verbalAbility/reading" element={<Reading/>}/>
            <Route path="/test/verbalAbility/synonyms" element={<Synonyms/>}/>
            <Route path="/test/verbalAbility/antonyms" element={<Antonyms/>}/>
            
            <Route path="/test/dataInterpretation/charts" element={<Charts/>} />
            <Route path="/test/dataInterpretation/graphs" element={<Graphs />} />
            <Route path="/test/dataInterpretation/tables" element={<Tables />} />
            <Route path="/test/dataInterpretation/pieCharts" element={<PieCharts />} />
            <Route path="/test/dataInterpretation/bargraphs" element={<BarGraphs />} />

            <Route path="/test/GeneralKnowledge/currentAffairs" element={<CurrentAffairs/>} />
            <Route path="/test/GeneralKnowledge/history" element={<History/>} />
            <Route path="/test/GeneralKnowledge/geography" element={<Geography/>} />
            <Route path="/test/GeneralKnowledge/science" element={<Science/>} />
            <Route path="/test/GeneralKnowledge/sports" element={<Sports/>} />

            
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
