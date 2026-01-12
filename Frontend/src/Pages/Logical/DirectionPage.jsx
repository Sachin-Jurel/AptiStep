import React from "react";
import SubTest from "../../Components/SubTest.jsx";
import TestTopics from "../../AdditionalData/logicalTopic.json"

const Direction = () => {
  
  return(
    <SubTest topic={TestTopics[4]} />
  );
};

export default Direction;
