import React from "react";
import SubTest from "../../Components/subTest";
import TestTopics from "../../AdditionalData/verbalTopic.json"

const Vocabulary = () => {
  
  return(
    <SubTest topic={TestTopics[1]} />
  );
};

export default Vocabulary;
