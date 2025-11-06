import React from "react";
import TestTopics from "../../AdditionalData/TestTopics.json";
import Test from "../../Components/Test";
import SubtopicData from "../../AdditionalData/GKTopic.json";

const GK = () => {
  
  return(
    <Test topic={TestTopics[4]} Subtopic={SubtopicData}/>
  );
};

export default GK;