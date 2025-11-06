import React from "react";
import TestTopics from "../../AdditionalData/TestTopics.json";
import Test from "../../Components/Test";
import SubtopicData from "../../AdditionalData/QuantTopic.json";

const Quant = () => {
  
  return(
    <Test topic={TestTopics[0]} Subtopic={SubtopicData} path="/test/Quantitative"/>
  );
};

export default Quant;
