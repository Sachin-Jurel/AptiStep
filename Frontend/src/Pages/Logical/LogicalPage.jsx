import React from "react";
import TestTopics from "../../AdditionalData/TestTopics.json";
import Test from "../../Components/Test";
import SubtopicData from "../../AdditionalData/logicalTopic.json";

const Logical = () => {
  
  return(
    <Test topic={TestTopics[1]} Subtopic={SubtopicData}/>
  );
};

export default Logical;
