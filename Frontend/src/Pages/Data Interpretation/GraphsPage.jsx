import React from "react";
import SubTest from "../../Components/SubTest.jsx";
import TestTopics from "../../AdditionalData/DataTopic.json"

const Graphs = () => {
  
  return(
    <SubTest topic={TestTopics[1]} />
  );
};

export default Graphs;
