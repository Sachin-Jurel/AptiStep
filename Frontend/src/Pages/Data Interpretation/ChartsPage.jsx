import React from "react";
import SubTest from "../../Components/SubTest.jsx";
import TestTopics from "../../AdditionalData/DataTopic.json"

const Charts = () => {
  
  return(
    <SubTest topic={TestTopics[0]} />
  );
};

export default Charts;
