import React from "react";

import Question from "./Question.jsx";
import questions from "../../../SampleData/questions.json";

class QuestionsHolder extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {questions.questions.map(data => {
          return <Question data={data} key={data.key} />;
        })}
      </div>
    );
  }
}
export default QuestionsHolder;
