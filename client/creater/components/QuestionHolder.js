import React, { useCallback, useState } from "react";
import { Button, Divider } from "@material-ui/core/";
import Question from "./Question.js";

const QuestionHolder = () => {
  const [questions, addQuestion] = useState([
    { id: 0, isShown: true, question: "" },
    { id: 1, isShown: true, question: "" }
  ]);
  const onAddQuestion = useCallback(() => {
    questions.push({
      id: questions[questions.length - 1].id + 1,
      isShown: true,
      question: ""
    });
    addQuestion([...questions]);
  });

  const removeQuestion = id => {
    questions[id].isShown = false;
    addQuestion([...questions]);
  };

  const editQuestion = (content, id) => {
    questions[id].question = content;
  };

  return (
    <div>
      <Button variant="outlined" onClick={onAddQuestion}>
        Add Question
      </Button>
      <div id="questionHolder">
        {questions.map(a => {
          if (a.isShown) {
            return (
              <div>
                <Question id={a.id} removeQuestion={removeQuestion} />
                <Divider />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default QuestionHolder;
