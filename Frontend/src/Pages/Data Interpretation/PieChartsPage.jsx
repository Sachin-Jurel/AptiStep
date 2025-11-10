import React from "react";
import SubTest from "../../Components/subTest";
import TestTopics from "../../AdditionalData/DataTopic.json"

const PieCharts = () => {
  
  return(
    <SubTest topic={TestTopics[3]} />
  );
};

export default PieCharts;
