import React from "react";

import Question from "./Question.jsx";
import questions from "../../../SampleData/surveys.js";

const QuestionsHolder = props => {
  return (
    <form id="survey">
      {questions.surveys.life.questions.map(data => {
        return (
          <Question
            data={data}
            store={props.store}
            dispatcher={props.dispatcher}
          />
        );
      })}
    </form>
  );
};

export default QuestionsHolder;
