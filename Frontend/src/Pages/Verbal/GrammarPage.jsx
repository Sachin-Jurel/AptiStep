import React from "react";
import SubTest from "../../Components/SubTest.jsx";
import TestTopics from "../../AdditionalData/verbalTopic.json"

const Grammar = () => {
  
  return(
    <SubTest topic={TestTopics[0]} />
  );
};

export default Grammar;
