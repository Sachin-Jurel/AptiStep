import React from "react";
import SubTest from "../../Components/subTest";
import TestTopics from "../../AdditionalData/logicalTopic.json"

const Syllogism = () => {
  
  return(
    <SubTest topic={TestTopics[2]} />
  );
};

export default Syllogism;
