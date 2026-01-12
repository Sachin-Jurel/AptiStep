import React from "react";
import SubTest from "../../Components/SubTest.jsx";
import TestTopics from "../../AdditionalData/computerTopic.json"

const Software = () => {
  
  return(
    <SubTest topic={TestTopics[1]} />
  );
};

export default Software;
