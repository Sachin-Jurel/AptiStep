import React from "react";
import TestTopics from "../../AdditionalData/TestTopics.json";
import Test from "../../Components/Test";
import SubtopicData from "../../AdditionalData/verbalTopic.json";

const Verbal = () => {
  
  return(
    <Test topic={TestTopics[2]} Subtopic={SubtopicData}/>
  );
};

export default Verbal;
