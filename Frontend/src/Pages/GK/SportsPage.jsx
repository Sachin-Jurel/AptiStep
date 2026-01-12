import React from "react";
import SubTest from "../../Components/SubTest.jsx";
import TestTopics from "../../AdditionalData/GKTopic.json"

const Sports = () => {
  
  return(
    <SubTest topic={TestTopics[4]} />
  );
};

export default Sports;
