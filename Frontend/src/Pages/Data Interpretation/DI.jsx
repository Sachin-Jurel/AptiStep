import React from "react";
import TestTopics from "../../AdditionalData/TestTopics.json";
import Test from "../../Components/Test";
import SubtopicData from "../../AdditionalData/DataTopic.json";

const DI = () => {
  
  return(
    <Test topic={TestTopics[3]} Subtopic={SubtopicData}/>
  );
};

export default DI;
