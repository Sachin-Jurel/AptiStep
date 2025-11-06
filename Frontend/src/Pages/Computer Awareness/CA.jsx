import React from "react";
import TestTopics from "../../AdditionalData/TestTopics.json";
import Test from "../../Components/Test";
import SubtopicData from "../../AdditionalData/computerTopic.json";

const CA = () => {
  
  return(
    <Test topic={TestTopics[5]} Subtopic={SubtopicData}/>
  );
};

export default CA;