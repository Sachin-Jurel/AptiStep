import React from "react";
import SubTest from "../../Components/subTest";
import TestTopics from "../../AdditionalData/computerTopic.json"

const Software = () => {
  
  return(
    <SubTest topic={TestTopics[1]} />
  );
};

export default Software;
