import React from "react";

import SubTest from "../../Components/subTest";
import TestTopics from "../../AdditionalData/QuantTopic.json"

const Statistics = () => {
  
  return(
    <SubTest topic={TestTopics[3]} />
  );
};

export default Statistics;
