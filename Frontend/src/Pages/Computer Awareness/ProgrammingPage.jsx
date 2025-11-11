import React from "react";
import SubTest from "../../Components/subTest";
import TestTopics from "../../AdditionalData/computerTopic.json"

const Programming = () => {
  
  return(
    <SubTest topic={TestTopics[3]} />
  );
};

export default Programming;
