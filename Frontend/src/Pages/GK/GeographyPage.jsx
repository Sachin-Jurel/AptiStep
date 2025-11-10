import React from "react";
import SubTest from "../../Components/subTest";
import TestTopics from "../../AdditionalData/GKTopic.json"

const Geography = () => {
  
  return(
    <SubTest topic={TestTopics[2]} />
  );
};

export default Geography;
