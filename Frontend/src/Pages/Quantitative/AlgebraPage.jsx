import React from "react";
import SubTest from "../../Components/SubTest.jsx";
import TestTopics from "../../AdditionalData/QuantTopic.json"

const Algebra = () => {
  
  return(
    <SubTest topic={TestTopics[1]} />
  );
};

export default Algebra;
