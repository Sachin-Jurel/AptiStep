import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import axios from "axios";
import questions from "../Data/Easy/temp.json"

const TestAttempt = () => {
  const { id } = useParams(); // get test id from URL
  const navigate = useNavigate();
  const {user, setUser}= useContext(UserContext)
  
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
  }, []);

  const [answers, setAnswers] = useState({});

  // handle selecting an answer
  const handleSelect = (qId, option) => {
    setAnswers({ ...answers, [qId]: option });
  };

  // handle submit
  const handleSubmit = () => {
    // for now, just log answers
    console.log("Submitted answers:", answers);

    // navigate to result page
    navigate(`/test/result/${id}`, { state: { answers } });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <h1 className="text-2xl font-bold text-blue-700 mb-6">
        Attempting Test #{id}
      </h1>

      <div className="max-w-2xl w-full space-y-6">
        {questions.map((q) => (
          <div key={q.id} className="p-6 bg-white shadow-md rounded-xl">
            <h2 className="text-lg font-semibold mb-4">{q.question}</h2>
            <div className="space-y-2">
              {q.options.map((opt) => (
                <label
                  key={opt}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name={`question-${q.id}`}
                    value={opt}
                    checked={answers[q.id] === opt}
                    onChange={() => handleSelect(q.id, opt)}
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition"
      >
        Submit Test
      </button>
    </div>
  );
};

export default TestAttempt;
