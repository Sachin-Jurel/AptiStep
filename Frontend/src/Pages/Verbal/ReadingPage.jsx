import React from "react";
import SubTest from "../../Components/subTest";
import TestTopics from "../../AdditionalData/verbalTopic.json"

const Reading = () => {
  
  return(
    <SubTest topic={TestTopics[2]} />
  );
};

export default Reading;
