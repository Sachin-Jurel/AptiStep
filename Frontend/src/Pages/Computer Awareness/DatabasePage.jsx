import React from "react";
import SubTest from "../../Components/SubTest.jsx";
import TestTopics from "../../AdditionalData/computerTopic.json"

const Database = () => {
  
  return(
    <SubTest topic={TestTopics[4]} />
  );
};

export default Database;
