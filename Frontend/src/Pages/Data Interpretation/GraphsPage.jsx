import React from "react";
import SubTest from "../../Components/subTest";
import TestTopics from "../../AdditionalData/DataTopic.json"

const Graphs = () => {
  
  return(
    <SubTest topic={TestTopics[1]} />
  );
};

export default Graphs;
