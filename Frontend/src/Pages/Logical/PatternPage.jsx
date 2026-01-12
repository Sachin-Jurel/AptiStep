import React from "react";
import SubTest from "../../Components/SubTest.jsx";
import TestTopics from "../../AdditionalData/logicalTopic.json"

const Pattern = () => {
  
  return(
    <SubTest topic={TestTopics[0]} />
  );
};

export default Pattern;
