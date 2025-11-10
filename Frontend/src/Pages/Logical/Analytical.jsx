import React from "react";
import SubTest from "../../Components/subTest";
import TestTopics from "../../AdditionalData/logicalTopic.json"

const Analytical = () => {
  
  return(
    <SubTest topic={TestTopics[1]} />
  );
};

export default Analytical;
