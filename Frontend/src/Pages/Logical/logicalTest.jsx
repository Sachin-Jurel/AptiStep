import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../context/userContext.jsx";
import TestComponent from "../../Components/TestComponent.jsx";

const LogicalTest = () => {
  const { user, setUser } = useContext(UserContext);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchTest = async () => {
      const res = await axios.post("http://localhost:8080/test/logical", {}, { withCredentials: true });
      setUser(res.data.updatedUser);
      setQuestions(res.data.questions);
    };
    fetchTest();
  }, []);

  return <TestComponent questions={questions} onSubmit={(count) => console.log("Score:", count)} />;
};

export default LogicalTest;
