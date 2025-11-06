import React from "react";
import { useContext,useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import {UserContext} from "../context/userContext";
import axios from "axios";
import TestTopics from "../AdditionalData/TestTopics.json"
import Test from "../Components/Test";
import data from "../AdditionalData/MainTestData.json";

const MainTest = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

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
  }, [setUser]);

  useEffect(() => {
  if (user === null) {
    navigate("/login");
  }
}, [user, navigate]);

  return (
    <Test topic={data[0]} Subtopic={TestTopics} path="/test"/>
  );
};

export default MainTest;


