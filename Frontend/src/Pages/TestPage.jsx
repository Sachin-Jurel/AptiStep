import React from "react";
import { useContext,useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import {UserContext} from "../context/userContext";
import axios from "axios";
import TestTopics from "../AdditionalData/TestTopics.json"
import Test from "../Components/Test";
import data from "../AdditionalData/MainTestData.json";

const MainTest = () => {

  return (
    <Test topic={data[0]} Subtopic={TestTopics} path="/test"/>
  );
};

export default MainTest;


