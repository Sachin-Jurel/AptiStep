import React from "react";
import SubTest from "../../Components/subTest";
import TestTopics from "../../AdditionalData/verbalTopic.json"

const Synonyms = () => {
  
  return(
    <SubTest topic={TestTopics[3]} />
  );
};

export default Synonyms;
