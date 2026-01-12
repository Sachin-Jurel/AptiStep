import React from "react";
import SubTest from "../../Components/SubTest.jsx";
import TestTopics from "../../AdditionalData/GKTopic.json"

const Science = () => {
  
  return(
    <SubTest topic={TestTopics[3]} />
  );
};

export default Science;
