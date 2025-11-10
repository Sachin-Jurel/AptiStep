import React from "react";
import SubTest from "../../Components/subTest";
import TestTopics from "../../AdditionalData/GKTopic.json"

const Science = () => {
  
  return(
    <SubTest topic={TestTopics[3]} />
  );
};

export default Science;
