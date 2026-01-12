import React from "react";
import SubTest from "../../Components/SubTest.jsx";
import TestTopics from "../../AdditionalData/GKTopic.json"

const History = () => {
  
  return(
    <SubTest topic={TestTopics[1]} />
  );
};

export default History;
