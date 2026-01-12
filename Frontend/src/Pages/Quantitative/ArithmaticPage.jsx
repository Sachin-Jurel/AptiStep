import React from "react";

import SubTest from "../../Components/SubTest.jsx";
import TestTopics from "../../AdditionalData/QuantTopic.json"

const Arithmetic = () => {
  
  return(
    <SubTest topic={TestTopics[0]} />
  );
};

export default Arithmetic;
