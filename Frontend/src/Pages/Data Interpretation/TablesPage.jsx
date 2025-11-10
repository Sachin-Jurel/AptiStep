import React from "react";
import SubTest from "../../Components/subTest";
import TestTopics from "../../AdditionalData/DataTopic.json"

const Tables = () => {
  
  return(
    <SubTest topic={TestTopics[2]} />
  );
};

export default Tables;
