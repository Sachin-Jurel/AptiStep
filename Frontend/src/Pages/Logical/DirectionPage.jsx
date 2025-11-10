import React from "react";
import SubTest from "../../Components/subTest";
import TestTopics from "../../AdditionalData/logicalTopic.json"

const Direction = () => {
  
  return(
    <SubTest topic={TestTopics[4]} />
  );
};

export default Direction;
