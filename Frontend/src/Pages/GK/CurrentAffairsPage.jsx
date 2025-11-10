import React from "react";
import SubTest from "../../Components/subTest";
import TestTopics from "../../AdditionalData/GKTopic.json"

const CurrentAffairs = () => {
  
  return(
    <SubTest topic={TestTopics[0]} />
  );
};

export default CurrentAffairs;
