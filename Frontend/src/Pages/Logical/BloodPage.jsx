import React from "react";
import SubTest from "../../Components/subTest";
import TestTopics from "../../AdditionalData/logicalTopic.json"

const Blood = () => {
  
  return(
    <SubTest topic={TestTopics[3]} />
  );
};

export default Blood;
