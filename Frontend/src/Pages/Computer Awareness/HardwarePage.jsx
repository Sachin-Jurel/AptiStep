import React from "react";
import SubTest from "../../Components/SubTest.jsx";
import TestTopics from "../../AdditionalData/computerTopic.json"

const Hardware = () => {
  
  return(
    <SubTest topic={TestTopics[0]} />
  );
};

export default Hardware;
